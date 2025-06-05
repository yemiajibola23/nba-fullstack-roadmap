const express = require("express");
const cors = require("cors");
const session = require("express-session");
const SQLiteStore = require("connect-sqlite3")(session);

const app = express();

// 👇 Use test DB if in test mode
const isTest = process.env.NODE_ENV === "test";
const db = isTest ? require("./db/test") : require("./db");

// Routes
const playerRoutes = require("./routes/players");
const authRoutes = require("./routes/auth");
const teamRoutes = require("./routes/teams");
const profileRoutes = require("./routes/profile");
const clusterRoutes = require("./routes/cluster");

const nbaPlayerRoutes = require("./routes/nbaPlayers")(db);

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

// 👇 Only initialize session in non-test environments
if (!isTest) {
  app.use(
    session({
      store: SQLiteStore({ db: "session.sqlite" }),
      secret: "supersecret-key",
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 86400000,
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      },
    })
  );
}

// 👇 Mount routes
app.use("/api/players", playerRoutes);
app.use("/api", authRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/cluster", clusterRoutes);
app.use("/api/nba_players", nbaPlayerRoutes); 

// Utilities
app.get("/api/test-session", (req, res) => {
  if (!req.session.views) req.session.views = 0;
  req.session.views++;
  res.json({ views: req.session.views });
});

app.get("/api/fake-login", (req, res) => {
  req.session.user = { id: 1, username: "yemi1" };
  res.json({ message: "Session set!" });
});

module.exports = app;

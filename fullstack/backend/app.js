const express = require("express");
const cors = require("cors");
const db = require("./db");
const session = require("express-session");
const SQLiteStore = require("connect-sqlite3")(session);

const app = express();

const playerRoutes = require("./routes/players");
const authRoutes = require("./routes/auth");

app.use(cors());
app.use(express.json());

app.use(
  session({
    store: SQLiteStore({ db: "session.sqlite" }),
    secret: "supersecret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
      secure: false,
    },
  })
);


// Mount your routes
app.use("/api/players", playerRoutes);
app.use("/api", authRoutes);

app.get("/api/test-session", (req, res) => {
  if (!req.session.views) req.session.views = 0;
  req.session.views++;
  res.json({ views: req.session.views });
});

module.exports = app;

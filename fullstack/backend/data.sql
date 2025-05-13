-- Drop table if it already exists
DROP TABLE IF EXISTS players;

-- Create players table
CREATE TABLE players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    points INTEGER Not NULL
);

-- Seed sample data
INSERT INTO players (name, points) VALUES
('LeBron James', 2432),
('Luka Doncic', 2264),
('Stephen Curry', 2198),
('Giannis Antetokounmpo', 2112),
('Jayson Tatum', 2045);
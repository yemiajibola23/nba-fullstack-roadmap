const teamsModel = require("../models/teamsModel");

const getTeams = (req, res) => {
  const teams = teamsModel.getAllTeams();

  res.json(teams);
};

module.exports = { getTeams };

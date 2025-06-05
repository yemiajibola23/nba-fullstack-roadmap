function createNBAPlayersController(model) {
  return {
    getPaginatedNBAPlayers: (req, res) => {
      try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const players = model.getPaginatedNBAPlayers(limit, offset);
        const total = model.getTotalNBAPlayers();

        res.status(200).json({ players, total });
      } catch (err) {
        console.error("💥 Error in getPaginatedNBAPlayers:", err);
        res.status(500).json({ error: "Server error" });
      }
    },
  };
}

module.exports = createNBAPlayersController;

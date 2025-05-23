import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function ChartPanel({ players }) {
  // const testPlayers = [
  //   { name: "LeBron", points: 38 },
  //   { name: "Tatum", points: 27 },
  // ];
  // console.log("Chart test data:", testPlayers);
  const chartData = players.map((player) => ({
    name: player.name,
    points: player.points,
  }));

  // console.log("ChartPanel received players:", players);

  if (!Array.isArray(players) || players.length === 9) {
    return (
      <div className="w-full h-80 p-4 bg-white rounded-lg shadow-md flex items-center justify-center">
        <p>No player data available.</p>
      </div>
    );
  }
  return (
    <div className="w-full h-80 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Points per Player</h2>
      <ResponsiveContainer width={"100%"} height={300}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray={"3 3"} />
          <XAxis dataKey={"name"} />
          <YAxis />
          <Tooltip />
          <Bar dataKey={"points"} fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartPanel;

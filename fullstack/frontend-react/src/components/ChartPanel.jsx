import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function ChartPanel() {
  const { players } = useContext(PlayerContext);

  const chartData = players.map((player) => ({
    name: player.name,
    points: player.points,
  }));

  return (
    <div className="w-full h-80 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Points per Player</h2>
      <ResponsiveContainer width={"100%"} height={"100%"}>
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

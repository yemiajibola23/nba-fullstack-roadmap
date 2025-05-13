const players = [
  { name: 'LeBron James', points: 2432 },
  { name: 'Luka Doncic', points: 2264 },
  { name: 'Stephen Curry', points: 2198 },
  { name: 'Giannis Antetokounmpo', points: 2112 },
  { name: 'Jayson Tatum', points: 2045 },
];

const leaderboard = document.getElementById('leaderboard');

function renderLeaderboard(data) {
  leaderboard.innerHTML = '';
  data.forEach((player, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${player.name} - ${player.points} pts`;
    leaderboard.appendChild(li);
  });
}

function shufflePlayers() {
  const shuffled = [...players].sort(() => Math.random() - 0.5);
  renderLeaderboard(shuffled);
}

document.getElementById('shuffleBtn').addEventListener('click', shufflePlayers);

// Initial Render
renderLeaderboard(players);

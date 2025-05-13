async function fetchPlayers() {
  try {
    const response = await fetch('https://localhost:3000/players');
    const data = await response.json();
    renderLeaderboard(data);
  } catch (error) {
    console.error('Failed to fetch player data:', error);
  }
}

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
fetchPlayers();

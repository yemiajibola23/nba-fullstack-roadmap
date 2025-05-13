let currentPlayers = [];

function renderLeaderboard(data) {
  const leaderboard = document.getElementById('leaderboard');
  leaderboard.innerHTML = '';
  data.forEach((player, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${player.name} - ${player.points} pts`;
    leaderboard.appendChild(li);
  });
}

async function fetchPlayers() {
  try {
    const response = await fetch('http://localhost:3000/api/players');
    const data = await response.json();
    currentPlayers = data;
    renderLeaderboard(currentPlayers);
  } catch (error) {
    console.error('Failed to fetch player data:', error);
  }
}

function shufflePlayers() {
  const shuffled = [...currentPlayers].sort(() => Math.random() - 0.5);
  renderLeaderboard(shuffled);
}

document.getElementById('shuffleBtn').addEventListener('click', shufflePlayers);

// Initial load
fetchPlayers();

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
    console.log('Response:', response);
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

const form = document.getElementById('playerForm');
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const nameInput = document.getElementById('name');
  const pointsInput = document.getElementById('points');

  const name = nameInput.value.trim();
  const points = parseInt(pointsInput.value, 10);

  if (!name || Number.isNaN(points) || points < 0) {
    // eslint-disable-next-line no-alert
    alert('Please enter a name and non-negative number of points.');

    // eslint-disable-next-line no-useless-return
    return;
  }

  try {
    const response = await fetch('http://localhost:3000/api/players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, points }),
    });

    if (!response.ok) {
      throw new Error('Failed to add player.');
    }

    nameInput.value = '';
    pointsInput.value = '';

    const updatedPlayersResponse = fetch('http://localhost:3000/api/players');
    if (!updatedPlayersResponse.ok) {
      const text = (await updatedPlayersResponse).text();
      console.warn(
        '⚠️ Warning: fetch worked but something is off:',
        (await updatedPlayersResponse).status,
        text
      );
    }

    const updatedPlayers = await updatedPlayersResponse.json();
    renderLeaderboard(updatedPlayers);
  } catch (error) {
    console.log(error);
  }
});

document.getElementById('shuffleBtn').addEventListener('click', shufflePlayers);

// Initial load
fetchPlayers();

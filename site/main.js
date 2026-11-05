// App Logic: Fetch JSON database and render to DOM

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

async function initApp() {
  try {
    // 1. Fetch the data - This is our "scalable database"
    const response = await fetch('/data/retreats.json');
    const retreats = await response.json();
    
    // 2. Render the retreats
    renderRetreats(retreats);
  } catch (error) {
    console.error("Error loading retreats:", error);
    document.getElementById('grid').innerHTML = `<p style="color: red; padding: 2rem;">Error loading retreat data. Please ensure the JSON file exists.</p>`;
  }
}

function renderRetreats(retreats) {
  const grid = document.getElementById('grid');
  grid.innerHTML = ''; // Clear loading message

  retreats.forEach(retreat => {
    // Determine badge class and text based on trust tier
    let badgeClass = 'recommended';
    let badgeText = 'Recommended';
    
    if (retreat.trustTier === 'top-pick') {
      badgeClass = 'top-pick';
      badgeText = '🐺 Top Pick';
    } else if (retreat.trustTier === 'red-flag') {
      badgeClass = 'red-flag';
      badgeText = '⚠️ Red Flag';
    }

    // Build tags HTML
    const tagsHtml = retreat.type.map(type => `<span class="tag">${type}</span>`).join('');

    // Create the card element
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="card-header">
        <div>
          <h4 class="card-title">${retreat.name}</h4>
          <span class="card-location">📍 ${retreat.location.city}, ${retreat.location.country}</span>
        </div>
        <span class="badge ${badgeClass}">${badgeText}</span>
      </div>
      <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>Tradition:</strong> ${retreat.tradition}</p>
      <div class="wolf-quote">
        "${retreat.wolfSays}"
      </div>
      <div class="tags">
        ${tagsHtml}
        ${retreat.beginnerFriendly ? '<span class="tag" style="background: #e6f4ea; color: #1e8e3e;">Beginner Friendly</span>' : ''}
      </div>
    `;

    grid.appendChild(card);
  });
}

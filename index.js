/ Function to fetch and display competitions
async function fetchCompetitions() {
    try {
      const proxyUrl = 'http://localhost:8080/';
      const apiUrl = 'http://api.football-data.org/v4/competitions/';
      const response = await fetch(proxyUrl + apiUrl);
      const data = await response.json();
      displayCompetitions(data.competitions);
    } catch (error) {
      console.error('Error fetching competitions:', error);
    }
  }
  
  
  function displayCompetitions(competitions) {
    const competitionsList = document.getElementById('competitions-list');
    competitionsList.innerHTML = '';
  
    competitions.forEach(competition => {
      const competitionElement = document.createElement('div');
      competitionElement.innerHTML = `
        <h2>${competition.name}</h2>
        <p><strong>Area:</strong> ${competition.area.name}</p>
        <p><strong>ID:</strong> ${competition.id}</p>
        <p><strong>Code:</strong> ${competition.code}</p>
        <p><strong>Type:</strong> ${competition.type}</p>
        <p><strong>Plan:</strong> ${competition.plan}</p>
        <p><strong>Last Updated:</strong> ${competition.lastUpdated}</p>
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
  
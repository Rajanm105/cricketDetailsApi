async function getFixtures(){
    const res = await fetch("https://cricket-live-data.p.rapidapi.com/match/2432999", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "cricket-live-data.p.rapidapi.com",
            "x-rapidapi-key": "XXX"
        }
    })
    .then(response => response.json())
    .then(data => {
        let playername = `<tr></tr>` 
        data.results.live_details.teamsheets.home.forEach(function(name){
            playername += `<tr><td>${name.player_name}</td><td>${name.position}</td></tr>`
        })

        document.getElementById("myTable").innerHTML = playername
        
        let playerinfo = `<tr></tr>` 
        data.results.live_details.teamsheets.away.forEach(function(name){
            playerinfo += `<tr><td>${name.player_name}</td><td>${name.position}</td></tr>`
        })
      
        document.getElementById("newTable").innerHTML = playerinfo
        

        let homeTeam = data.results.fixture.home.name;
        document.getElementById("homeTeam").innerHTML = homeTeam;

        let awayTeam = data.results.fixture.away.name;
        document.getElementById("awayTeam").innerHTML = awayTeam;
    })
    .catch(err => {
        console.error(err);
    });
}


getFixtures();

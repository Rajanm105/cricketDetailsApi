async function getScores(){
    const res = await fetch("https://cricket-live-data.p.rapidapi.com/match/2432999", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "cricket-live-data.p.rapidapi.com",
            "x-rapidapi-key": "XXX"
        }
    })
    .then(response => response.json())
    .then(data => {
        let scorecard = `<tr></tr>`
        data.results.live_details.scorecard[0].batting.forEach(function(score){
            scorecard += `<tr><td>${score.player_name}</td><td>${score.runs}</td><td>${score.balls}</td></tr>`
        })

        let bowlingcard = `<tr></tr>`
        data.results.live_details.scorecard[1].bowling.forEach(function(score){
            bowlingcard += `<tr><td>${score.player_name}</td><td>${score.overs}</td><td>${score.dot_balls}</td><td>${score.wickets}</td><td>${score.runs_conceded}</td></tr>`
        })

        let newbattingcard = `<tr></tr>`
        data.results.live_details.scorecard[1].batting.forEach(function(score){
            newbattingcard += `<tr><td>${score.player_name}</td><td>${score.runs}</td><td>${score.balls}</td></tr>`
        })

        let newbowlingcard = `<tr></tr>`
        data.results.live_details.scorecard[0].bowling.forEach(function(score){
            newbowlingcard += `<tr><td>${score.player_name}</td><td>${score.overs}</td><td>${score.dot_balls}</td><td>${score.wickets}</td><td>${score.runs_conceded}</td></tr>`
        })

        
        let status = data.results.live_details.match_summary.status
        document.getElementById("status").innerHTML = status

        let toss = data.results.live_details.match_summary.toss
        document.getElementById("toss").innerHTML = toss

        let match_title = data.results.fixture.match_title
        document.getElementById("title").innerHTML = match_title

        let firstTeamScore = data.results.live_details.match_summary.home_scores
        let firstTeam = data.results.live_details.scorecard[0].title;
        document.getElementById("battingfirstTeam").innerHTML = firstTeam + ` ` + firstTeamScore
        document.getElementById("newbowlingsecondTeam").innerHTML = firstTeam

        let secondTeamScore = data.results.live_details.match_summary.away_scores
        let secondTeam = data.results.live_details.scorecard[1].title;
        document.getElementById("bowlingsecondTeam").innerHTML = secondTeam
        document.getElementById("newbattingfirstTeam").innerHTML = secondTeam + ` ` + secondTeamScore

        document.getElementById("myTable").innerHTML = scorecard
        document.getElementById("newTable").innerHTML = bowlingcard
        document.getElementById("battingTable").innerHTML =  newbattingcard
        document.getElementById("bowlingTable").innerHTML = newbowlingcard
    })
    .catch(err => {
        console.error(err);
    });
}


getScores();

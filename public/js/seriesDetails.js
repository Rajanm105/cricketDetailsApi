async function getScores(){
    const res = await fetch("https://cricket-live-data.p.rapidapi.com/series", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "cricket-live-data.p.rapidapi.com",
            "x-rapidapi-key": "XXX"
        }
    })
    .then(response => response.json())
    .then(data => {
        let seriesname = `<tr></tr>`
        data.results[0].series.forEach(function(name){
            seriesname += `<tr><td>${name.series_name}</td><td>${name.status}</td><td>${name.season}</td></tr>`
        })
    
        document.getElementById("myTable").innerHTML = seriesname
        
    })
    .catch(err => {
        console.error(err);
    });
}


getScores();

async function getScores(){
    const res = await fetch("https://cricket-live-data.p.rapidapi.com/series", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "cricket-live-data.p.rapidapi.com",
            "x-rapidapi-key": "c1be5ed55dmshb5582f32c6d5b54p121d90jsnb2c34e7c9835"
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
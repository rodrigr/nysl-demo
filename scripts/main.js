var schedule = {
    september: [
        {
            date: "9/01",
            team1: "U1",
            team2: "U4",
            location: "AJ Katzenmaier ",
            time: "9:30 a.m."
        },
        {
            date: "9/01",
            team1: "U3",
            team2: "U2",
            location: "Greenbay ",
            time: "1:00 p.m."
        },
        {
            date: "9/08",
            team1: "U1",
            team2: "U4",
            location: "AJ Katzenmaier ",
            time: "9:30 a.m."
        },
        {
            date: "9/08",
            team1: "U3",
            team2: "U2",
            location: "Greenbay ",
            time: "1:00 p.m."
        }
    ],
    october: []
}

var table = document.getElementById("schedule-data")
var html_code = ""

var test = document.getElementById("test")

test.innerHTML = "<h1>Hola</h1>"

for(var i = 0; i < schedule.september.length; i++){
    html_code += "<tr>" 
                    + "<td>" + schedule.september[i].date + "</td>" 
                    + "<td>" + schedule.september[i].team1 + " and " + schedule.september[i].team2 + "</td>" 
                    + "<td>" + schedule.september[i].location + "</td>" 
                    + "<td>" + schedule.september[i].time + "</td>" 
                + "</tr>"
}

table.innerHTML = html_code
fetch('https://disease.sh/v3/covid-19/all')
    .then((response1) => {
        return response1.json();
    })
    .then((data1) => {
        console.log(data1);
        document.getElementById('active1').innerHTML = data1.active;
        document.getElementById('cases1').innerHTML = data1.cases;
        document.getElementById('critical1').innerHTML = data1.critical;
        document.getElementById('death1').innerHTML = data1.deaths;
        document.getElementById('recovered1').innerHTML = data1.recovered;
        document.getElementById('tests1').innerHTML = data1.tests;
    });

fetch('https://corona.lmao.ninja/v2/countries/Bangladesh')
    .then((response2) => {
        return response2.json();
    })
    .then((data2) => {
        console.log(data2);
        document.getElementById('active2').innerHTML = data2.active;
        document.getElementById('cases2').innerHTML = data2.cases;
        document.getElementById('critical2').innerHTML = data2.critical;
        document.getElementById('death2').innerHTML = data2.deaths;
        document.getElementById('recovered2').innerHTML = data2.recovered;
        document.getElementById('tests2').innerHTML = data2.tests;
    });

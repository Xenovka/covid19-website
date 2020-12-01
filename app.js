window.onload = function() {
    getCovidStats();
    getGlobalStats();
}

function getCovidStats() {
	fetch('https://covid19.mathdro.id/api/countries/indonesia')
	.then(function(resp) { return resp.json() })
	.then(function(data) {
		let update = data.lastUpdate;
        let confirmedCases = data.confirmed.value;
        let recovered = data.recovered.value;
		let deaths = data.deaths.value;

		document.getElementById('update').innerHTML = update.substr(0, 10);
		document.getElementById('cases').innerHTML = confirmedCases.toLocaleString('en');
		document.getElementById('recovered').innerHTML = recovered.toLocaleString('en');
		document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');


	})
	.catch(function() {
		console.log("error");
	})
	setTimeout(getCovidStats, 43200000) // update every 12 hours
}

function getGlobalStats() {
    fetch('https://covid19.mathdro.id/api')
    .then(function(resp) {return resp.json() })
    .then(function(data) {
        let globalCases = data.confirmed.value;

        document.getElementById('global-cases').innerHTML = globalCases.toLocaleString('en');

    })
    .catch(function() {
        console.log('error');
    })
    setTimeout(getCovidStats, 43200000) // update every 12 hours
}
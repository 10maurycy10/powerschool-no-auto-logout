(()=>{
	console.log("AntiLogout: Loaded")
	// Reset the last action timer on the server.
	function reset_timeout() {
		var result = fetch("https://summitps.powerschool.com/guardian/myschedule.html");
		result.then((r) => console.log("AntiLogout: Reset countdown", r.status));
	}
	// Call reset_timeout every 30 seconds
	setInterval(reset_timeout, 30 * 1000);
})()

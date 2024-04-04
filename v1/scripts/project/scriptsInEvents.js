


const scriptsInEvents = {

	async Game_Event9_Act1(runtime, localVars)
	{
		const today = new Date();
		const yyyy = today.getFullYear();
		let mm = today.getMonth() + 1; // Months start at 0!
		let dd = today.getDate();
		
		if (dd < 10) dd = '0' + dd;
		if (mm < 10) mm = '0' + mm;
		
		const formattedToday = yyyy + '-' + mm + '-' + dd;
		//console.log(formattedToday)
		runtime.globalVars.complition_date=formattedToday
		
	},

	async Game_Event24_Act3(runtime, localVars)
	{
		 function onLevelComplete() {
		  //var queryParams = getQueryParams();
		  const data = {
		    "userId": runtime.globalVars.user_id,
		    "challengeId": runtime.globalVars.challange_id,
		    "challengeCompleted": runtime.globalVars.current_level,
		    "completedDate": runtime.globalVars.complition_date, // (Current Date in yyyy-mm-dd format)
		    "starsGiven":runtime.globalVars.StarsReward, // (Total Stars The User Won)
		    "mudraRewarded": runtime.globalVars.game_score, // [(completionReward/3) * stars)]
		  };
		  fetch('https://stage.mindwars.co.in/apis/mwAPI1/api/v1/dailyChallenge/levelCompleteAPI/swq?access_token=' + runtime.globalVars.auth_tocken, {
		    method: 'POST',
		    headers: {
		      'Content-Type': 'application/json'
		    },
		    body: JSON.stringify(data)
		  })
		    .then(response => {
		      if (!response.ok) {
		        throw new Error(`HTTP error! status: ${response.status}`);
		      }
		      return response.json();
		    })
		    .then(data => {
		      console.log(data);
		    })
		    .catch(error => {
		      console.error('Error:', error);
		    });
		
		}
		onLevelComplete();
	},

	async Game_Event45_Act1(runtime, localVars)
	{
		function iosCheck()
		{
			var ios = localStorage.getItem("ios");
			if (ios === "0") 
			{
		    	JSBridge.showMessageInNative("landScape:0");
		 	} 
			else 
			{
		 		window.webkit.messageHandlers.dataHandler.postMessage("landScape:0");
			}
		}
		iosCheck();
	},

	async Game_Event47_Act1(runtime, localVars)
	{
		function iosCheck()
		{
			var ios = localStorage.getItem("ios");
			if (ios === "0") 
			{
		    	JSBridge.showMessageInNative("landScape:0");
		 	} 
			else 
			{
		 		window.webkit.messageHandlers.dataHandler.postMessage("landScape:0");
			}
		}
		iosCheck();
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;


axios.get('https://graph.facebook.com/utc2hcmc/posts?access_token=EAAAAZAw4FxQIBAO2xWZBmwelN57tJJkrZBwajRcFon9xBjhSPVZClDDiagvVgbnXEDWJCwiCUIrTKw9gDkP2L3nJzlxQrjeTbsvLSdbNJsnuvLSrLlErZAjJr8ctUudftxdHAfHhTxvKeFlsZCHuZBoe7ljrmtaGPkrZAq62fKEjk2c9GPrb1wFm')
        .then(response => {
            var output = "";
            output += response.data.data[0].message + "<br><br>" + response.data.data[1].message + "<br><br>" + response.data.data[2].message;
            document.getElementById('output').innerHTML = output;
        })
        .catch(error => console.error(error))
const reportsURI = 'https://journeyreport.herokuapp.com/api/journeyReports';

// Set parametrs to get journey Reports from Heroku API
function parametersToGetAllJourneyReports(){
    let options = {
        method: 'GET',
        url: reportsURI,
        headers: { 
                    'content-type': 'application/json',
                }
    }
    return options;
}

export default parametersToGetAllJourneyReports;
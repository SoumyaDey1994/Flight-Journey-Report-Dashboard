const URI = 'https://journeyreport.herokuapp.com/api/journeyReports/'
//Set parametrs to get journey Report from Heroku API
function parametersToGetSelectedReportDetails(reportId){
    let options = {
        method: 'GET',
        url: URI + reportId,
        headers: { 
                    'content-type': 'application/json',
                },
             }
    
    return options;
}

export default parametersToGetSelectedReportDetails;
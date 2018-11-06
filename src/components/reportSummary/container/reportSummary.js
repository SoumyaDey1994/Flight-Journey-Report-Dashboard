import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as rp from 'request-promise';
import './loader.css';
import parametersToGetAllJourneyReports from '../../../service/allReportsService';
import Summary from '../view/completeReportSummary';


global.selectedReportId = null;

class ReportSummary extends Component{
    //Set The initial state
    constructor(){
        super();
        this.state={
            allReports: [],
            loading: true
        };
    }
//Function to get All reports from Service
    getReports(){
        let requestParam = parametersToGetAllJourneyReports(); // GET API Parameters to fetch all reports
        setInterval(async ()=> {
            try{
                let allReports= JSON.parse(await rp(requestParam)); //wait for response
                //Set the state
                this.setState(() => {
                    return {
                        allReports: allReports,
                        loading: false
                    }
                })
            }catch(err){
                console.log(`Error in getting reports: ${err}`)
            }
        }, 2000);
    }
// Render first and then check for changes
    componentDidMount(){
        this.getReports();   
    }
    getReportDetailsById(reportId){
        global.selectedReportId = reportId;
        //navigate to details page
        let path = '/report/VR'+reportId.slice(19, 24).toUpperCase();
        this.props.history.push(path);
    }
//Render the components to Webpage
    render(){
        let {allReports, loading } = this.state;
        return(
            <div>
                {
                    loading ? <div className="loader">
                                <i className="fa fa-plane fa-2x" style={{color: '#5c0931'}}></i>
                              </div> : false
                }
                {
                    allReports && (!loading) && allReports.map(item => <Summary key={item._id.slice(10, 24)} item={item} getReportDetailsById={()=>this.getReportDetailsById(item._id)}/>)   
                    // End of Rendering Report
                }
            </div>
        ) // End of return statement
    } //End of Render function
}

export default withRouter(ReportSummary);

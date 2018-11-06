import React, { Component } from 'react';
import ReactTable from "react-table";

import "react-table/react-table.css";
import './reportDetails.css';
import * as rp from 'request-promise';

import parametersToGetSelectedReportDetails from '../../../service/reportDetailsService';

class JourneyReport extends Component{
//Set The initial state
    constructor(){
        super();
        this.state={
            reportObject: {},
            data: [],
            loading: true
        };
    }
//Async function to call API and fetch report by Id
    async getReport(){
        let requestParam= parametersToGetSelectedReportDetails(global.selectedReportId);
        try{
            let reportDetails= JSON.parse(await rp(requestParam));
                this.setState( () => {
                    return {
                        reportObject: reportDetails,
                        data: reportDetails.report,
                        loading: false
                    }
                })
        }catch(err){
            console.log("Error in Getting Report Details: "+err);
        }
    }

//Render once and then check for changes
    componentDidMount= ()=>{
      this.getReport();
    }
//Render table to Webpage
    render(){
        const {data, loading, reportObject} = this.state;
        const columns = [{
            Header: <strong>Statement</strong>,
            id: 'statement', // String-based value accessors!
            accessor: d=> <p className="aligntext">{d.statement}</p>,
            maxWidth: 350
          }, 
          {
            Header: <strong>Category</strong>,
            id: 'intent',
            accessor: d=> <p className="aligntext">{d.intent.split('')[0].toUpperCase()+d.intent.slice(1)}</p>,
            maxWidth: 160
          }, 
          {
            Header: <strong>Property</strong>,
            id: "entities",
            columns: [
                {
                    Header: <strong>Attributes</strong>,
                    id: 'property',
                    accessor: data=> data.entities.map(item => <p style={{font: '18px Bold', textAlign: 'center'}}>{item.property.split('')[0].toUpperCase()+item.property.slice(1)}</p>),
                    maxWidth: 220
                },
                {
                    Header: <strong>Values</strong>,
                    id: 'value',
                    accessor: data=> data.entities.map(item=> <p style={{textAlign: 'center'}}>{item.value.split('')[0].toUpperCase()+item.value.slice(1)}</p>),
                    width: 250
                }
              ],
              maxWidth: 450
           },
           {
                Header: <strong>Sentiment</strong>,
                id: 'sentimentScore',
                accessor: 'sentimentScore',
                Cell: row => (
                    <div
                      style={{
                        width: '180px',
                        height: '20px',
                        margin: '30px auto',
                        backgroundColor: '#CCD1D1  ',
                        borderRadius: '3px'
                      }}
                    >
                      <div
                        style={{
                          width: `${row.value*100}%`,
                          height: '100%',
                          backgroundColor: row.value > 0.70 ? '#2ECC71'
                            : row.value > 0.54 ? '#BBDE3B'
                            : row.value > 0.24 ? '#FAC407'
                            : row.value > 0.14 ? '#FF5733'
                            : '#B91604',
                          borderRadius: '3px',
                          transition: 'all .2s ease-out'
                        }}
                      />
                    </div>
                  ),
            maxWidth: 200
          },
          {
            Header: <strong>Status</strong>,
            accessor: 'sentimentScore',
            Cell: row => (
              <span>
                <span style={{
                  color: row.value > 0.70 ? '#2ECC71'
                  : row.value > 0.54 ? '#BBDE3B'
                  : row.value > 0.24 ? '#FAC407'
                  : row.value > 0.14 ? '#FF5733'
                  : '#B91604',
                  transition: 'all .3s ease',
                  fontSize: '20px'
                }}>
                  &#x25cf;
               </span> {
                  row.value > 0.70 ? <span>Strongly Positive</span>
                 : row.value > 0.54 ? <span>Positive</span>
                 : row.value > 0.24 ? <span>Neutral</span>
                 : row.value > 0.14 ? <span>Negative</span>
                 : <span>Strongly Negative</span>
                }
              </span>
            ),
            maxWidth: 160
          }
    ]

        return(
            <div style={{width : '90%', margin: '0px auto'}}>
                {
                            reportObject && reportObject.flightNo &&
                                <h2 key={reportObject.flightNo} className="aligntext">Journey Report of Flight {reportObject.flightNo.toUpperCase()}</h2>
                }
                <ReactTable className="tableborder -striped -highlight"
                            columns={columns}
                            data={data}
                            loading={loading}
                            showPaginationBottom={ false}
                            minRows={3} 
                            noDataText="No Data Available Yet"
                />
            </div>
        );
    }
}

JourneyReport.defaultProps = {

}
export default JourneyReport;
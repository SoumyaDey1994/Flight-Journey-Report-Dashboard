import React from 'react';
import Highlighter from "react-highlight-words";

import '../view/reportSummary.css';
import '../view/materialBtn.css';
import './reportSnapshot.css';

const Snapshot = ({item}) => {
    return(
        <div className="column right" style={{backgroundColor:"#white"}}>
            <h4 className="reportHeader">Report</h4>
            <ul style={{listStylePosition: "outside", fontSize: "15px", fontFamily:"Jotia,Verdana,Geneva,sans-serif"}}>
                {
                    item.report.map((i, index) => 
                                        <li className="customLi" key={index}
                                            style={(i.sentiment==="Neutral")?{color: "#FFC107"}:(i.sentiment==="Positive"? {color: "#2ECC71"}:{color: "#E74C3C"})}>
                                            <p style={{color:"#333"}}>
                                                <Highlighter
                                                    highlightClassName="highlight"
                                                    textToHighlight={i.statement.split("")[0].toUpperCase()+i.statement.replace(/\./gim, " . ").replace(/:/gim, " : ").replace(/,/gim, " , ").slice(1)+'.'}
                                                    searchWords={i.entities.map(en=> en.value)}
                                                    caseSensitive={false}
                                                    autoEscape={true}
                                                />
                                            </p>
                                        </li>
                                    )
                }   
            </ul>   
        </div>
    )
}

export default Snapshot;
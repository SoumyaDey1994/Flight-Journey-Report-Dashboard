import React from 'react';

import '../view/reportSummary.css';
import '../view/materialBtn.css';
import './reportAttribute.css';

const Attribute = ({item, getReportDetailsById}) => {
    return (
        <div className="column left" style={{backgroundColor:"#F2F3F4"}}>
            <ul className="reportAttributes">
                <li>
                    <p>Report Id : <span style={{fontWeight: "normal"}}>VR{item._id.slice(19, 24).toUpperCase()}</span></p>
                </li>
               <li>
                    <p>Flight No : <span style={{fontWeight: "normal"}}>{item.flightNo.toUpperCase()}</span></p>
                </li>
                <li>
                    <p>Created On : <span style={{fontWeight: "normal"}}>{new Date(item.dateOfCreation).toString()}</span></p>
                </li>
                <button className="btn Material" onClick={getReportDetailsById}>View Details</button>
             </ul>
        </div>
    )
}

export default Attribute;
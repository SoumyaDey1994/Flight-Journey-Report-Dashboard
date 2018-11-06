import React from 'react';

import '../view/reportSummary.css';


import Snapshot from './reportSnapshot';
import Attribute from './reportAttribute';

const Summary = ({item, getReportDetailsById}) => {
    return(
        <div className="flex-container" style={{width:"65%", border:"2px solid #E5E8E8", margin: "0px auto"}}>
            <Attribute key={item._id.slice(20, 24)} item={item} getReportDetailsById={getReportDetailsById}/>
            <Snapshot key={item._id.slice(15, 24)} item={item} />
        </div>
    )
}

export default Summary;
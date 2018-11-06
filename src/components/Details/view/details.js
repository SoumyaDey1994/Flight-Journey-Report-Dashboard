import React from 'react';
//import all components
import Nav from '../../navbar/view/nav';
import ReportDetailHeader from '../../reportDetailHeader/view/reportDetailHeader';
import Footer from '../../footer/view/footer';
import JourneyReport from '../../reportDetails/view/reportDetails';

const Details = () => {
    return(
        <React.Fragment>
            <Nav />
            <ReportDetailHeader />
            <JourneyReport />
            <Footer />
      </React.Fragment>
    )
}

export default Details;;
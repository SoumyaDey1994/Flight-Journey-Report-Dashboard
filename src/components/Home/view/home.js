import React from 'react';
//import all components
import Nav from '../../navbar/view/nav';
import Header from '../../header/view/header';
import Footer from '../../footer/view/footer';
import ReportSummary from '../../reportSummary/container/reportSummary';

const Home = () => {
        return(
            <React.Fragment>
                <Nav/>
                <Header />
                <ReportSummary />
                <Footer />
          </React.Fragment>
        )
}
export default Home;
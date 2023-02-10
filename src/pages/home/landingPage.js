import Main from "../../main";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
    };
}

const mapDispatchToProps = {
};

const LandingPage=()=>{
    return(
        <>
        <Header/>
        <Main/>
        <Footer/>
        </>
    )
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingPage);
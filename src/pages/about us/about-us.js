import Header from "./header"
import Footer from "./footer"
import About from "../../about"
import Whatsapp from "../../whatsapp"
import { connect } from 'react-redux';

const AboutUs=()=>{
    return(
        <div>
            <Header/>
            <About/>
            <Whatsapp/>
            <Footer/>
        </div>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AboutUs);
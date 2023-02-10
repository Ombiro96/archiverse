import NavbarHeader from "../../components/navbar";
import Footer from "../../components/footer";
import { connect } from 'react-redux';

const Projects= () => {
    return(
        <div className="projects">
            <NavbarHeader/>
            <Footer/>
        </div>
    )
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Projects);
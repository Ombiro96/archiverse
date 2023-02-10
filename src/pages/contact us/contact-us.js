import NavbarHeader from "../../components/navbar";
import Footer from "../../components/footer";
import ContactForm from "../../forms/contactForm";
import { connect } from 'react-redux';
import "/Users/Clifford/Desktop/MetaCom/src/css/index.css"

const mapStateToProps = state => {
    return {
    };
}

const mapDispatchToProps = {
};

const Contacts = ()=>{
    return(
        <div className="contacts">
            <NavbarHeader/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Contacts);
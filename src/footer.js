import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';

export default function Footer(){
    return(
        <footer className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4 className=" mb-4">Contact Us</h4>
            <p className="text-white mb-1"><FontAwesomeIcon icon={faFacebook} className="mr-2" />123 Main Street, Anytown USA</p>
            <p className="text-white mb-1"><FontAwesomeIcon icon={faTwitter} className="mr-2" />(123) 456-7890</p>
            <p className="text-white"><FontAwesomeIcon icon={faInstagram} className="mr-2" />info@example.com</p>
          </div>
          <div className="col-md-4">
            <h4 className=" mb-4">Follow Us</h4>
            <a href="#" className="text-white mr-4"><FontAwesomeIcon icon={faFacebook} className="mr-2" />Facebook</a>
            <a href="#" className="text-white mr-4"><FontAwesomeIcon icon={faTwitter} className="mr-2" />Twitter</a>
            <a href="#" className="text-white"><FontAwesomeIcon icon={faInstagram} className="mr-2" />Instagram</a>
          </div>
          <div className="col-md-4">
            <h4 className=" mb-4">About Us</h4>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at aliquam nisl. In hac habitasse platea dictumst.</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p className="text-white mb-0">Copyright 2022</p>
          </div>
        </div>
      </div>
    </footer>
    )
}
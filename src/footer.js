import 'bootstrap/dist/css/bootstrap.css';

export default function Footer(){
  const date=new Date();
    return(
        <footer className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4 className=" mb-4">Contact Us</h4>
            <p className="text-white mb-1">Nairobi, Kenya</p>
            <p className="text-white mb-1">(254) 703234252</p>
            <p className="text-white">info@example.com</p>
          </div>
          <div className="col-md-4">
            <h4 className=" mb-4">Follow Us</h4>
            <a href="#" className="text-white mr-4"><i className="fab fa-facebook-square facebook-container"></i>Facebook</a>
            <a href="#" className="text-white mr-4"><i className="fab fa-instagram instagram-container"></i>Twitter</a>
            <a href="#" className="text-white"><i className="fab fa-twitter-square twitter-container"></i>Instagram</a>
          </div>
          <div className="col-md-4">
            <h4 className=" mb-4">About Us</h4>
            <p className="text-white">Team aimed at enhancing user experience using virtual reality</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col text-center">
            <p className="text-white mb-0">@ Copyright {date.getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
    )
}
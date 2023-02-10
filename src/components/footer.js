export default function Footer(){
  const date=new Date();
    return(
        <footer>
          <div className='footer-container'>
          <div className='footer-about-us'>
              <h1>About us</h1>
              <p>A competition involved in creating vr projects <br /> by various universities</p>
            </div>
            <div className='footer-page-links'>
              <h5>NAVIGATION</h5>
              <a href="/" target="_self" rel="noopener noreferrer">Home</a>
              <a href="/about" target="_self" rel="noopener noreferrer">About us</a>
              <a href="/projects" target="_self" rel="noopener noreferrer">Projects</a>
              <a href="/projects" target="_self" rel="noopener noreferrer">Blog</a>
              <a href="/contacts" target="_self" rel="noopener noreferrer">Contact us</a>
            </div>
            <div className='footer-social-links'>
              <ul>
                <li><h5>SOCIAL MEDIA</h5></li>
                <li><a href="https://www.facebook.com/Yelbridges" target="_blank" className='facebook-container'><i className="fab fa-facebook-square facebook-container"></i> Facebook</a></li>
                <li><a href="https://www.instagram.com/yelbridges/" target="_blank" className='instagram-container'><i className="fab fa-instagram instagram-container"></i> Instagram</a></li>
                <li><a href="https://twitter.com/yelbridges" target="_blank" className='twitter-container'><i className="fab fa-twitter-square twitter-container"></i> Twitter</a></li>
                <li><a href="https://www.linkedin.com/company/yelbridges-ltd/" target="_blank" className='linkedin-container'><i className="fab fa-linkedin fa-linkedin-square linkedin-container"></i> LinkedIn</a></li>
              </ul>
            </div>
            <a href="/" target="_self" rel="noopener noreferrer"><img src="./7.png" alt="logo" /></a>
          </div>
      <p>@ Copyright {date.getFullYear()}</p>
    </footer>
    )
}
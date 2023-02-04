export default function NavbarHeader() {
  return (
    <header>
      {/* social icons */}
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous"></link>
      <div className="social-icons">
      <ul>
        <li><a href="https://www.facebook.com/" target="_blank"><i className="fab fa-facebook-square facebook-container"></i></a></li>
        <li><a href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram instagram-container"></i></a></li>
        <li><a href="https://twitter.com/" target="_blank"><i className="fab fa-twitter-square twitter-container"></i></a></li>
        </ul>
      </div>
      {/* menu */}
      <ul className="menu">
        <li><a href="#" target="_self" className="selected">Home</a></li>
        <li><a href="#" target="_self" rel="noopener noreferrer">About</a></li>
        <li className="project"><a href="#" target="_self" rel="noopener noreferrer">Projects</a>
            <ul className="dropdown-menu">
                <li><a href="#" target="_self">Fitness</a></li>
                <li><a href="#" target="_self">Real Estate</a></li>
                <li><a href="#" target="_self">Fashion</a></li>
                <li><a href="#" target="_self">Virtual Chemistry Lab</a></li>
                <li><a href="#" target="_self">Museum</a></li>
                <li><a href="#" target="_self">Infrastructure and Construction</a></li>
                <li><a href="#" target="_self">Safety Trainor</a></li>
                <li><a href="#" target="_self">Virtual Anatomy Laboratory</a></li>
                <li><a href="#" target="_self">Navigation</a></li>
                <li><a href="#"target="_self">Tourism</a></li>
            </ul>
        </li>
        <li><a href="#" target="_self" rel="noopener noreferrer">Services</a></li>
        <li><a href="#" target="_self" rel="noopener noreferrer">Contact us</a></li>
      </ul>
      {/* hero */}
      <div className="hero">
            <a href="#" target="_self"><img className="hero-image" src="./7.png" alt="logo"/></a>
      </div>
    </header>
  );
}

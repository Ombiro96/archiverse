import Slider from "../slider";

function Hero(){
    return(
        <div className="hero-container">
            <div className="hero-image-container">
                {/* <Slider/> */}
                <img src="./hero.png" alt="hero"/>
            </div>
            <div className="hero-content-container">
                <h1>MetaCom: <br /> Virtual Reality <br /> Projects in Vr
                </h1>
                <h6>Discover a sense of vr</h6>
                <button>Explore now <i className="fas fa-arrow-right"></i></button>
                {/* todo add a tag */}
            </div>
        </div>
    )
}

export default Hero;
import Slider from "./slider"

export default function About(){
    return(
        <div className="about">
            <div style={{width: 40 + "%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <h1 style={{textAlign: "center"}}>About MetaCom</h1>
                <p>Metacom- starts for Meta Competition. 
                    This is a project of Yelbridges in partnership with five universities in kenya namely: </p>
                <p> in collaboration with different industries namely Kenya Institute of Curiculum Development, Tembea Kenya, Alpha Movers Kenya, Curlture Fitness Kenya, Odaomo, Caustic Visuals and developers Erick and Collins Hirrary.</p>
                <button>See more<i className="fas fa-arrow-right"></i></button>
                </div>
            <Slider/>
        </div>
    )
}
import Universities from "./universities"
import Mentors from "./mentors"
import About from "./about"

export default function Main(){
    return(
        <div className="main-content">
            <About/>
            <Universities/>
            <Mentors/>
        </div>
    )
} 
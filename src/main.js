import Universities from "./universities"
import Mentors from "./mentors"
import About from "./about"
import Whatsapp from "./whatsapp"
import Timeline from "./timeline"
import ProjectTestimonials from "./projects-testimonials"

export default function Main(){
    return(
        <div className="main-content">
            <About/>
            <Timeline/>
            {/* <ProjectTestimonials/> */}
            <Universities/>
            <Mentors/>
            <Whatsapp/>
        </div>
    )
} 
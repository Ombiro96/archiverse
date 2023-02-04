import NavbarHeader from "./navbar"
import Hero from "./hero"
import './header.css'

export default function Header(){
    return(
        <div className="header">
            <NavbarHeader/>
            <Hero/>
        </div>
    )
}
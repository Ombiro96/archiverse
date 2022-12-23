export default function About(props){
    return(
        <div className="about">
            <img src={props.blog.image} alt="about_us" />
            <div>
            <h1>Title: {props.blog.services}</h1>
            <p>Text: {props.blog.textContent}</p>
            </div>
        </div>
    )
}
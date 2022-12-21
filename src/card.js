export default function Card(props){
    return(
        <div className="card">
            <img src={props.image} alt="logo" />
            <p>Name: <span className="bold">{props.name}</span></p>
            <p>Email: <span className="bold">{props.email}</span></p>
            <p>Contact : <span className="bold">{props.contact}</span></p>
        </div>
    )
}
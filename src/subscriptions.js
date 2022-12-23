export default function Card(props){
    return(
        <div className="card">
            <img src={props.image} alt="logo" />
            <p>id is {props.id}</p>
            <p>*{props.rating}/5</p>
            <p>No. of Reviews: {props.reviewCount}</p>
            <p>Subscripiton package: <span className="bold">{props.subscription}</span></p>
            <p>Email: <span className="bold">{props.email}</span></p>
            <p>Contact : <span className="bold">{props.contact}</span></p>
            <p>Ttile : <span className="bold">{props.title}</span></p>
            <p>Country : <span className="bold">{props.company}</span></p>
            <button>Try now</button>
        </div>
    )
}
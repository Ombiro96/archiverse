export default function Joke(props){
    return(
        <div className="jokes">
            {props.setup && <h3>Setup: <span className="bold">{props.setup}</span></h3>}
            <h3>Punchline: <span className="bold">{props.punchline}</span></h3>
            <h3>Likes: {props.upVote}</h3>
            <h3>Dislikes: {props.downVote}</h3>
            <h3>...{props.isPun}</h3>
        </div>
    )
}
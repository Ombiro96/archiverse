import Joke from "./jokes";
import './index.css';
import JokesData from "./JokesData";

export default function App(){
    const jokeElements=JokesData.map(function(jokeElements){
        return <Joke
        setup={jokeElements.setup}
        punchline={jokeElements.punchline}
        />
    })
    return(
    <>
    {jokeElements}
    </>
)
}

{/* jokes components commented out */}
{/* <Joke
    setup="setup a"
    punchline="punchline a"
    isPun={true}
    upVote={0}
    downVote={0}
    array={[0,1,2,3,4]}
    />
    <Joke
    setup="setup b"
    punchline="punchline b"
    />
    <Joke
    setup="setup c"
    punchline="punchline c"
    />
    <Joke
    setup="setup d"
    punchline="punchline d"
    />
    <Joke
    punchline="solo punchline"
    />
    </> */}


    // practice code
    // const colors=["Red","Orange","Yellow","Green","Blue","Indigo","Violet"]
    // const newColors=colors.map(function(name){
    //     return (
    //         <h3> {name}</h3>
    //     )
    // })
    // <div>
    //     {newColors}{/*<h3>Red</h3>*/}
    // </div>
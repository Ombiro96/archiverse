import Card from "./card";
export default function Main(){
    return(
        <div className="main-content">
            <Card
            image="./kakashi.png"
            name="Kakashi"
            email="hatake@gmail.com"
            contact="070423803"
            />
            <Card
            image="./naruto.png"
            name="Naruto"
            email="ramen@gmail.com"
            contact="0724524238"
            />
            <Card
            image="./sasuke.png"
            name="Sasuke"
            email="sasuke@gmail.com"
            contact="072556633"
            />
            <Card
            image="./sakura.png"
            name="Sakura"
            email="sakura@gmail.com"
            contact="0726246203"
            />
        </div>
    )
}
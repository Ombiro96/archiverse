import Card from "./subscriptions";
import data from './data'
export default function Main(){
    const testimonials=data.map(function(testimonials){
        return <Card 
        key= {testimonials.id}
        testimonials={testimonials}
        />
    })
    return(
        <div className="main-content">
            {testimonials}
        </div>
    )
} 
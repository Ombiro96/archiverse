import Card from "./subscriptions";
import data from './data'
export default function Main(){
    const testimonials=data.map(function(testimonials){
        return <Card 
        image={testimonials.src}
        id= {testimonials.id}
        rating= {testimonials.stats.ratings}
        reviewCount= {testimonials.stats.review}
        subscription={testimonials.subscription}
        email={testimonials.email}
        contact={testimonials.contact}
        title={testimonials.title}
        company={testimonials.company}
        />
    })
    return(
        <div className="main-content">
            {testimonials}
        </div>
    )
}
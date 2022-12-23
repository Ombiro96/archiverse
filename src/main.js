import Card from "./subscriptions";
import About from "./about us";
import subscription_data from './subscription_data'
import about_data from './about_data'

export default function Main(){
    const blog=about_data.map(function(blog){
        return(
            <About
            key={blog.id}
            blog={blog} />
        )
    })
    const testimonials=subscription_data.map(function(testimonials){
        return <Card 
        key= {testimonials.id}
        testimonials={testimonials}
        />
    })
    return(
        <div className="main-content">
            {blog}
            {testimonials}
        </div>
    )
} 
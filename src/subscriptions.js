export default function Card(props) {
  return (
    <div className="card">
        {props.testimonials.price<29000 && <div className="badge">DISCOUNT 5%</div>}
      <img src={props.testimonials.src} alt="logo" />
      <p>Ratings: {props.testimonials.stats.ratings}/5</p>
      <p>No. of Reviews: {props.testimonials.stats.reviews}</p>
      <p>
        Subscripiton package: <span className="bold">{props.testimonials.subscription}</span>
      </p>
      <p>
        Email: <span className="bold">{props.testimonials.email}</span>
      </p>
      <p>
        Contact : <span className="bold">{props.testimonials.contact}</span>
      </p>
      <p>
        Title : <span className="bold">{props.testimonials.title}</span>
      </p>
      <p>
        Company : <span className="bold">{props.testimonials.company}</span>
      </p>
      <p>
        Price : <span className="bold">{props.testimonials.price}</span>
      </p>
      <button>Try now</button>
    </div>
  );
}

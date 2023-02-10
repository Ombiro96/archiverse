const mentors = [
    {
      mentors: "caustic-visuals",
      height: 200,
      width: 200,
      src: "./caustic-visuals.logo.png"
    },
    {
      mentors: "Tembea Kenya",
      height: 200,
      width: 200,
      src: "./tembea-kenya.png"
    },
    {
      mentors: "Alpha movers Kenya",
      height: 200,
      width: 200,
      src: "./alpha-movers.png"
    },
    {
      mentors: "Culture; wellness and fitness",
      height: 200,
      width: 200,
      src: "./culture-fitness.png"
    }
  ];
  
  const Mentors = () => {
    return (
      <div className="mentors-container" style={{width: "100%"}}>
        <h1 style={{textAlign: "start", padding: "0.5em", color: "#000"}}>Mentors</h1>
      <div className="mentors" style={{justifyContent: "space-between"}}>
        {mentors.map((mentors, index) => (
          <div key={index}>
              <img src={mentors.src} alt={mentors.mentors} 
              style={{height: mentors.height + "px", width: mentors.width + "px"}}/>
            <h3>{mentors.mentors}</h3>
          </div>
        ))}
      </div>
      </div>
    );
  };
  
  export default Mentors;
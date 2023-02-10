const universities = [
  {
    university: "Jomo Kenyatta University of Agriculture and Technology",
    height: 200,
    width: 200,
    src: "./jkuat.png"
  },
  {
    university: "Meru University of Science and Technology.",
    height: 200,
    width: 200,
    src: "./meru-university.png"
  },
  {
    university: "Machakos University.",
    height: 200,
    width: 200,
    src: "./Machakos_University_Logo.png"
  },
  {
    university: "Dedan Kimathi University of Science and Technology.",
    height: 200,
    width: 200,
    src: "./Dedan-Kimathi-University.png"
  },
  {
    university: "United States International University Africa.",
    height: 200,
    width: 200,
    src: "./USIU_Africa_Logo.png"
  },
];

const Universities = () => {
  return (
    <div style={{backgroundImage: "linear-gradient(to right, rgba(28,61,115,1.0), rgba(81,138,101,1.0))"}}>
      <h1 style={{textAlign: "start", color: "rgba(187,224,80, 1.0)", padding: "0.5em"}}>Participants</h1>
      <div className="universities">
      {universities.map((university, index) => (
        <div key={index}>
            <img src={university.src} alt={university.university}
            style={{height: university.height + "px", width: university.width + "px"}}/>
          <h5>{university.university}</h5>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Universities;
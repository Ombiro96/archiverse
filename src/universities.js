const universities = [
  {
    name: "John Doe",
    university: "Jomo Kenyatta University of Agriculture and Technology",
    src: "./jkuat.png"
  },
  {
    name: "Jane Doe",
    university: "I have never seen anything like this before. It's truly revolutionary.",
    src: "./jkuat.png"
  },
  {
    name: "Bob Smith",
    university: "This is the best investment I have ever made. I highly recommend it.",
    src: "./jkuat.png"
  },
  {
    name: "Alice Johnson",
    university: "I am so impressed with the results. I never thought it would be possible.",
    src: "./jkuat.png"
  },
  {
    name: "Charlie Brown",
    university: "This product has exceeded all of my expectations. I am blown away.",
    src: "./jkuat.png"
  },
];

const Universities = () => {
  return (
    <div className="universities">
      {universities.map((university, index) => (
        <div key={index}>
            <img src={university.src} alt="" />
          <h3>{university.name}</h3>
          <p>{university.university}</p>
        </div>
      ))}
    </div>
  );
};

export default Universities;
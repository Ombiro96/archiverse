export default function Timeline() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(28,61,115,1.0), rgba(187,224,80, 1.0))",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <h1
        style={{
          textAlign: "start",
          color: "rgba(187,224,80, 1.0)",
          padding: "0.5em 0 0 0.5em",
        }}
      >
        METACOM STAGES
      </h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          padding: "2em",
          justifyContent: "space-around",
          backgroundImage:
            "linear-gradient(to right, rgba(28,61,115,1.0), rgba(187,224,80, 1.0))",
        }}
      >
        <div
          className="stages-sub-container"
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <i className="fas fa-volume-up" style={{ fontSize: "4em" }}></i>
          <h3 >Interversity</h3>
          <p className="italics">
            Various teams in each university pitch their ideas to determine which will be approved to be represented by the school.
          </p>
        </div>
        <div
          className="stages-sub-container"
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <i className="fas fa-volume-up" style={{ fontSize: "4em" }}></i>
          <h3 >Interaction</h3>
          <p className="italics">
            Various teams in each university pitch their ideas to determine which will be approved to be represented by the school.
          </p>
        </div>
        <div
          className="stages-sub-container"
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <i className="fas fa-volume-up" style={{ fontSize: "4em" }}></i>
          <h3 >Meet and Pitch</h3>
          <p className="italics">
            Various teams in each university pitch their ideas to determine which will be approved to be represented by the school.
          </p>
        </div>
        <div
          className="stages-sub-container"
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <i className="fas fa-volume-up" style={{ fontSize: "4em" }}></i>
          <h3 >Interversity</h3>
          <p className="italics">
            Various teams in each university pitch their ideas to determine which will be approved to be represented by the school.
          </p>
        </div>
        <div
          className="stages-sub-container"
          style={{
            width: "20%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <i className="fas fa-volume-up" style={{ fontSize: "4em" }}></i>
          <h3 >Final</h3>
          <p className="italics">
            Various teams in each university pitch their ideas to determine which will be approved to be represented by the school.
          </p>
        </div>
      </div>
    </div>
  );
}

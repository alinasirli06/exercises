const teamData = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    img: "/w3images/team2.jpg",
  },
  {
    name: "Jane Doe",
    role: "Architect",
    img: "/w3images/team1.jpg",
  },
  {
    name: "Mike Ross",
    role: "Architect",
    img: "/w3images/team3.jpg",
  },
  {
    name: "Dan Star",
    role: "Architect",
    img: "/w3images/team4.jpg",
  },
];

const Team = () => {
  return (
    <div className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>
      <div className="w3-row-padding w3-grayscale">
        {teamData.map((member, index) => (
          <div key={index} className="w3-col l3 m6 w3-margin-bottom">
            <img
              src={member.img}
              alt={member.name}
              style={{ width: "100%" }}
            />

            <h3>{member.name}</h3>
            <p className="w3-opacity">{member.role}</p>

            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.
            </p>

            <p>
              <button className="w3-button w3-light-grey w3-block">
                Contact
              </button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
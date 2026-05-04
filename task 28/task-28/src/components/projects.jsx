const projects = [
  { title: "Summer House", img: "/w3images/house5.jpg" },
  { title: "Brick House", img: "/w3images/house2.jpg" },
  { title: "Renovated", img: "/w3images/house3.jpg" },
  { title: "Barn House", img: "/w3images/house4.jpg" },
];

const Projects = () => {
  return (
    <div className="w3-content w3-padding" style={{ maxWidth: "1564px" }}>
      <div className="w3-container w3-padding-32" id="projects">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
          Projects
        </h3>
      </div>

      <div className="w3-row-padding">
        {projects.map((item, index) => (
          <div key={index} className="w3-col l3 m6 w3-margin-bottom">
            <div className="w3-display-container">
              <div className="w3-display-topleft w3-black w3-padding">
                {item.title}
              </div>
              <img src={item.img} alt="House" style={{ width: "100%" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
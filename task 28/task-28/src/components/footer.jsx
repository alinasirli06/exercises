const Footer = () => {
  return (
    <footer className="w3-center w3-black w3-padding-16">
      <div className="w3-container">
      <img
        src="/w3images/map.jpg"
        className="w3-image"
        style={{ width: "100%" }}
        alt="map"
        />
      </div>
      <p>
        Powered by{" "}
        <a href="https://www.w3schools.com/w3css/" target="_blank">
          w3.css
        </a>
      </p>
    </footer>
  );
};

export default Footer;
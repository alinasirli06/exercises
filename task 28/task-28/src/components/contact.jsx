const Contact = () => {
  return (
    <div className="w3-container w3-padding-32" id="contact">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
        Contact
      </h3>

      <p>Lets get in touch and talk about your next project.</p>

      <form>
        <input className="w3-input w3-border" placeholder="Name" required />
        <input className="w3-input w3-section w3-border" placeholder="Email" required />
        <input className="w3-input w3-section w3-border" placeholder="Subject" required />
        <input className="w3-input w3-section w3-border" placeholder="Comment" required />

        <button className="w3-button w3-black w3-section">
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Contact;
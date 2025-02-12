import "./button.scss";

export default function YesButton() {

  const contact = {
    portfolio: "https://coreysumma.github.io/portfolioweb/",
    emailAddress: "CoreySumma@gmail.com",
    emailMessage: "Hello Corey! I would like to hire you!",
  };

  const handleClick = () => {
    window.open(contact.portfolio, "_blank");
    setTimeout(() => {
    window.location.href =
      `mailto:${contact.emailAddress}?subject=${contact.emailMessage}`;
    }, 1000);
  };

  return (
    <>
      <div id="yes-button" />
      <label htmlFor="yes-button">
        <div className="yes_button" onClick={handleClick}>
          <span className="yes_text">Yes</span>
          <i className="yes_tick">✓</i>
          {[...Array(52)].map((_, i) => (
            <div key={i} className="yes_spots"></div>
          ))}
        </div>
      </label>
    </>
  );
}

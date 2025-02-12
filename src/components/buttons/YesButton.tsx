import "./button.scss";


export default function YesButton() {
  const portfolio = "https://coreysumma.github.io/portfolioweb/";
  const handleClick = () => {
    window.open(portfolio, "_blank");
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

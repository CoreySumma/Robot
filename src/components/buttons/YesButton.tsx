import "./button.css";

export default function YesButton() {
  return (
    <>
      <input type="checkbox" id="yes-button" />
      <label htmlFor="yes-button">
        <div className="yes_button">
          <span className="yes_text">Yes</span>
          <i className="yes_tick">✓</i>
          {[...Array(20)].map((_, i) => (
            <div key={i} className="yes_spots"></div>
          ))}
        </div>
      </label>
    </>
  );
}

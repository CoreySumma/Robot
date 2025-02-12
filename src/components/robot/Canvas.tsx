import Spline from "@splinetool/react-spline";
import YesButton from "../buttons/YesButton";
import NoButton from "../buttons/NoButton";
import Title from "../Title";

export default function SplineRobot() {
  return (
    <>
      <div className="spline-container">
        <Title />
        <Spline scene="https://prod.spline.design/Y9QozjwtKkYdMO1B/scene.splinecode" />
        <YesButton />
        <NoButton />
      </div>
    </>
  );
}

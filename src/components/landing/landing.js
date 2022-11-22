import "./_landing.scss";
import { Link } from "react-router-dom";
import cupcake from "../../assets/images/cupcake.png";
const Landing = () => {
  return (
    <section className="landing">
      <div className="btn-container">
        <Link to="/first"className="linkbtn">
          <button className="firstBtn comic">
            Level 1
            <img className="btnIcon" src={cupcake} alt="cupcake icon" />
          </button>
        </Link>
        <button className="secondBtn comic">Level 2</button>
        <button className="thirdBtn comic"> Level 3</button>
      </div>
    </section>
  );
};

export default Landing;

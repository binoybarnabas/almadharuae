import "../styles/Rainbow.css";
import electrical from "../assets/electrical.jpg";
import mechanical from "../assets/mechanical.jpg";
import plumbing from "../assets/plumb.jpg";

const MarqueeGallery = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <img src={plumbing} />
        <img src={mechanical} />
        <img src={electrical} />
      </div>
    </div>
  );
};

export default MarqueeGallery;

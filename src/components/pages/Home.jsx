import "./home.css";
import image from "../../Images/lord.png";
export function Home() {
  return (
    <>
      <div className="container-image"></div>
      <div className="big-container">
        <div className="vertical"></div>
        <div className="content">
          <h2>Lord Krishna</h2>
          <blockquote>
            we have the right to perform our actions, we should not be attached
            to the outcome or results. We should focus on doing our best in
            every action without any expectations, which can help us attain a
            sense of detachment and inner peace.
          </blockquote>
        </div>
        <img src={image} className="krishna" alt="krishna"></img>
      </div>
    </>
  );
}

import "./top.css";

const Top = () => {
  return (
    <>
      <div className="top">
        <h1 id="logo"><a href="">Raphiniel</a></h1>
        <div className="bottomTop">
          <p className="welcomeText">Welcome To My Website</p>
          <p className="welcomeText">Still Under Construction</p>
          <div className="buttons">
          <button id="aboutBtn"> <a href="#aboutPage"> About</a></button>
          <button id="emailMeBtn">Receive an Email</button>
          <button id="aboutBtn"> <a href="#go">Go To Bottom</a> </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;

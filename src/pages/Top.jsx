import "./top.css";

const Top = () => {
  return (
    <>
      <div className="top">
        <h1 id="logo">Raphiniel</h1>
        <div className="bottomTop">
          <p className="welcomeText">Welcome To My Website</p>
          <div className="buttons">
          <button id="aboutBtn">About</button>
          <button id="emailMeBtn">Receive an Email</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;

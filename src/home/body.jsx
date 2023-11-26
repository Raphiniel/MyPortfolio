import "./body.css";

const Body = () => {
  return (
    <>
    <div className="blog">
      <h1>Blog</h1>
      <p>l have no idea what to say or give you.Occassionally l think there are <strong> NO LIMITATIONS</strong> in this world.Then l go on to realise there could be limitations only to the extend my mind lets exist.</p>
    </div>
      <div className="container">
        <div className="leftContainer">
            <h1>About</h1>

            {/* <p className="aboutText">
            Hi, I’m Raphiniel, a software developer and an artist. I love creating things that make people happy, whether it’s a website, a game, a painting, or a song. I have a passion for learning new skills and technologies, and I enjoy challenging my mind with puzzles and problems.
            </p> */}
            <p className="aboutText">

            </p>
        </div>
        <div className="rightContainer">
            <img src="./images/pexels-francesco-ungaro-396547.jpg" alt="hello"/>
        </div>
      </div>

      {/* Second Item */}

      <div className="container">
        <div className="leftContainer">
            <h1>More About</h1>

            {/* <p className="aboutText">
            Hi, I’m Raphiniel, a software developer and an artist. I love creating things that make people happy, whether it’s a website, a game, a painting, or a song. I have a passion for learning new skills and technologies, and I enjoy challenging my mind with puzzles and problems.
            </p>
            <p className="aboutText">
            I’m also a fitness enthusiast, and I practice calisthenics regularly. Calisthenics is a form of exercise that uses your own body weight as resistance, and it helps me improve my strength, flexibility, and balance. I like to push myself to the limit and see what I can achieve with my body.            </p> */}
        </div>
        <div className="rightContainer">
            <img src="./images/2817e4a7d3326742b789325af72556e8.jpg" alt="hello"/>
        </div>
      </div>
    </>
  );
};

export default Body;

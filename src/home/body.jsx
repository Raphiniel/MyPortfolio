import "./body.css";

const Body = () => {
  return (
    <>
    <div className="blog">
      <h1>Blog</h1>
      <p>l have no idea what to say .Occassionally l think there are <strong > NO LIMITATIONS</strong> in this world.Then l go on to realise there could be limitations only to the extend my mind lets exist.</p>
      <p>There is an aphorism <i>As a man thinketh so is he.</i> It is definitely as biblical as it is manifested in the physical. l believe James Allen said it, the bible said it.l have said it. That alone should stir up something in you. </p>
      <p>l really wish l had more for you, but for today that is it. Have a lovely day. Stay blessed. Like always my friends, today is going to be a good day.</p>
    </div>
      <div className="container">
        <div className="leftContainer">
            <h1>Podcast</h1>

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
            <h1>Programming and Youtube</h1>

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
      <div className="about" id="aboutPage">
        <h1>About</h1>
        <div className="aboutInside">
        <div className="aboutP">
        <p>The About Page.I will ask, what do you want to know about me?</p>
        <p>Hi, I’m Raphiniel, a freelance web developer and designer with over 12 months of experience in creating stunning websites for small businesses and entrepreneurs</p>
        </div>
        <div className="aboutImg">
        <img src="images\IMG_0739.JPG" alt="" width="400px" height="400px"/>

        </div>
        </div>
      </div>
      <div className="workouts">
        <h1>
          Workouts 
        </h1>
        <video autoPlay muted loop src="images\IMG_1528.MOV"  width="100%" height="600px"></video>
      </div>
    </>
  );
};

export default Body;

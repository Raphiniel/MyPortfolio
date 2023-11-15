import "./body.css";

const Body = () => {
  return (
    <>
      <div className="container">
        <div className="leftContainer">
            <h1>About</h1>

            <p className="aboutText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sint est aperiam placeat ex sequi porro accusamus quasi blanditiis voluptatibus, aut dolores corporis, laudantium, fugiat eaque a aliquid quos quod.
            </p>
            <p className="aboutText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sint est aperiam placeat ex sequi porro accusamus quasi blanditiis voluptatibus, aut dolores corporis, laudantium, fugiat eaque a aliquid quos quod.
            </p>
        </div>
        <div className="rightContainer">
            <img src="./images/pexels-francesco-ungaro-396547.jpg" alt="hello"/>
        </div>
      </div>

      {/* Second Item */}

      <div className="container">
        <div className="leftContainer">
            <h1>About</h1>

            <p className="aboutText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sint est aperiam placeat ex sequi porro accusamus quasi blanditiis voluptatibus, aut dolores corporis, laudantium, fugiat eaque a aliquid quos quod.
            </p>
            <p className="aboutText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sint est aperiam placeat ex sequi porro accusamus quasi blanditiis voluptatibus, aut dolores corporis, laudantium, fugiat eaque a aliquid quos quod.
            </p>
        </div>
        <div className="rightContainer">
            <img src="./images/pexels-francesco-ungaro-396547.jpg" alt="hello"/>
        </div>
      </div>
    </>
  );
};

export default Body;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./footerz.css";

const Footerz = () => {
  return (
    <>
      <div>
        <footer>
          <div className="leftContainer">
            <BrowserRouter>
              <Routes>
                <Route path="/Footer" element={<Footerz />}></Route>
              </Routes>
            </BrowserRouter>
            <hr />
            <marquee behavior="scroll" direction="right">
              <h1>CONTENT COMING SOON!</h1>
            </marquee>
            <hr />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footerz;

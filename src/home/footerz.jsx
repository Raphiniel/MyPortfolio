import {BrowserRouter, Routes,Route} from "react-router-dom";
const Footerz = ()=>{
    return (
        <>
        <div>
            <footer>
                <div className="leftContainer">
                    <BrowserRouter>
                    <Routes>
                        <Route path='/Footer' element={<Footerz/>}></Route>
                    </Routes>
                    </BrowserRouter>
                </div>
            </footer>
        </div>
        </>
    );
};

export default Footerz
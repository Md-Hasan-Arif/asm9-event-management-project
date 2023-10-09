import { Outlet } from "react-router-dom";

import Navbar from "../../Home/Header/Navbar";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
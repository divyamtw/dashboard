import Aside from "./Aside.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {

    return (
        <div className="flex h-screen overflow-hidden">
            <Aside/>
            <div className="flex-1 overflow-auto">
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;

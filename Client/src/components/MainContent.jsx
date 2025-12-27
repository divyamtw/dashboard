import {Outlet} from "react-router-dom";

const MainContent = ({width}) => {

    return (
        <div
            className="relative overflow-hidden"
            style={{width: `${width}px`}}
        >
            <div className="h-full overflow-auto">
                <Outlet/>
            </div>
        </div>
    );
};

export default MainContent;
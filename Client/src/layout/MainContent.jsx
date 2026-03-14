import {Outlet} from "react-router-dom";

const MainContent = () => {
    return (
        <main className="flex-1 min-w-0 h-full overflow-hidden">
            <Outlet/>
        </main>
    );
};

export default MainContent;

import Aside from "./Aside.jsx";
import MainContent from "./MainContent.jsx";
import useResizable from "../Hooks/useResizable.js";

const Layout = () => {
    const {width, startResizing} = useResizable({
        min: 300,
        max: window.innerWidth * 0.50,
        initial: window.innerWidth * 0.20,
    });

    return (
        <div className="relative flex h-screen overflow-hidden bg-zinc-950">
            <Aside width={width}/>

            {/* Resize handle BETWEEN panes */}
            <div
                onMouseDown={startResizing}
                className="  h-full w-2 cursor-col-resize bg-red-500"
            />
            <MainContent width={width}/>
        </div>
    );
};

export default Layout;

import Aside from "./Aside.jsx";
import MainContent from "./MainContent.jsx";
import useResizable from "../hooks/useResizable.js";
import {useEffect} from "react";
import {SIDEBAR_WIDTH_KEY} from "../constants.js";

const getInitialWidth = () => {
    const saved = localStorage.getItem(SIDEBAR_WIDTH_KEY);
    return saved ? Number(saved) : window.innerWidth * 0.2;
};

const Layout = () => {
    const {width, setWidth, startResizing} = useResizable({
        min: 300,
        max: window.innerWidth * 0.50,
        initial: getInitialWidth(),
    });

    useEffect(() => {
        localStorage.setItem(SIDEBAR_WIDTH_KEY, width);
    }, [width]);

    return (
        <div className="relative flex h-screen overflow-hidden bg-amber-950">
            <button
                className="absolute top-3 left-6 z-10 outline-none bg-red-400 text-gray-950 font-mono font-bold text-xl px-8 py-3 capitalize rounded-r-2xl active:scale-95 -translate-x-30 hover:-translate-x-7 transition-transform duration-100"
                onClick={() => setWidth(500)}
            >
                reset
            </button>
            <Aside width={width}/>

            {/* Resize handle */}
            <div
                onMouseDown={startResizing}
                className="  h-full w-2 cursor-col-resize hover:bg-red-500"
            />

            <MainContent/>
        </div>
    );
};

export default Layout;

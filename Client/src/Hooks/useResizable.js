import { useState, useRef, useEffect } from "react";

const useResizable = ({ min, max, initial }) => {
    const [width, setWidth] = useState(initial);
    const isResizing = useRef(false);

    const startResizing = () => {
        isResizing.current = true;
        document.body.style.cursor = "col-resize";
        document.body.style.userSelect = "none";
    };

    const stopResizing = () => {
        isResizing.current = false;
        document.body.style.cursor = "default";
        document.body.style.userSelect = "auto";
    };

    const resize = (e) => {
        if (!isResizing.current) return;
        setWidth(Math.min(max, Math.max(min, e.clientX)));
    };

    useEffect(() => {
        window.addEventListener("mousemove", resize);
        window.addEventListener("mouseup", stopResizing);
        return () => {
            window.removeEventListener("mousemove", resize);
            window.removeEventListener("mouseup", stopResizing);
        };
    }, []);

    return { width, startResizing };
};

export default useResizable;

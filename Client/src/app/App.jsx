import {Route, Routes} from "react-router-dom";
import Layout from "../components/Layout.jsx";

function App() {
    return (
        <div className=''>
            <Routes>
                <Route path="/" element={<Layout/>}/>
            </Routes>
        </div>
    );
}

export default App;

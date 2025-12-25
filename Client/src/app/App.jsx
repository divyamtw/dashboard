import {Route, Routes} from "react-router-dom";
import Layout from "../components/Layout.jsx";
import {Dashboard, GitHub, Music, Pomodoro, Task} from "../features/index.js"

function App() {
    return (
        <div className='bg-zinc-950'>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Dashboard/>}/>
                    <Route path="music" element={<Music/>}/>
                    <Route path="github" element={<GitHub/>}/>
                    <Route path="pomodoro" element={<Pomodoro/>}/>
                    <Route path="task" element={<Task/>}/>
                </Route>

            </Routes>
        </div>
    );
}

export default App;

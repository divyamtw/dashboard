import {Route, Routes} from "react-router-dom";
import Layout from "../components/Layout.jsx";
import {Calendar, Dashboard, GitHub, Music, Pomodoro, Task, Login} from "../features/index.js";
import Profile from "../components/Profile.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="music" element={<Music/>}/>
                <Route path="github" element={<GitHub/>}/>
                <Route path="pomodoro" element={<Pomodoro/>}/>
                <Route path="task" element={<Task/>}/>
                <Route path="calendar" element={<Calendar/>}/>
                <Route path="profile" element={<Profile/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
        </Routes>
    );
}

export default App;

import {Route, Routes} from "react-router-dom";
import Layout from "../components/Layout.jsx";
import Profile from "../components/Profile.jsx";
import {Calendar, Dashboard, GitHub, Music, Pomodoro, Task, Login, Signup} from "../features/index.js";

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
            <Route path='/Signup' element={<Signup/>}/>
        </Routes>
    );
}

export default App;

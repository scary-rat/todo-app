import "./assets/styles/App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Background from "./components/Background";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout></Layout>}>
                    <Route index element={<Home></Home>}></Route>
                    <Route path="/back" element={<Background></Background>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;

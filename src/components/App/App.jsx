import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import MainPage from "../../MainPage.jsx";

function App() {

    return (
        <div className="wrapper">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={ <MainPage /> }/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import useInitialDetail from "../hooks/useInitialCard";
import MyAccount from "../pages/MyAccount";
import Company from "../pages/company";
import "../styles/global.css";



const App = () => {
    const initialStates = useInitialState();
    const initialCard = useInitialDetail();
    return (
        <AppContext.Provider value={{
            initialStates,
            initialCard
        }}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/account" element= {<MyAccount/>}/>
                        <Route exact path="/company" element={<Company/>} />
                        <Route exact path="" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;


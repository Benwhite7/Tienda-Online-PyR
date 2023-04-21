import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/layout";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";
import useInitialDetail from "../hooks/useInitialCard";
import MyAccount from "../pages/MyAccount";
import Company from "../pages/company";
import Women from "../pages/Women";
import Men from "../pages/Men";
import Sports from "../pages/Sports";
import Acc from "../pages/Acc";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Literacer3 from "../Productspage/LiteRacer3";
import Literacer2 from "../Productspage/LiteRacer2";
import VectorRunner from "../Productspage/VectorRunner";
import Energylux3 from "../Productspage/Energylux3";
import LiteRacer22 from "../Productspage/LiteRacer22";
import AdvantageBase from "../Productspage/AdvantageBase";
import Lite3 from "../Productspage/Lite3";
import Lite32 from "../Productspage/Lite32";
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
                        <Route exact path="/men" element={<Men />} />
                        <Route exact path="/women" element={<Women />} />
                        <Route exact path="/sports" element={<Sports />} />
                        <Route exact path="/acc" element={<Acc />} />
                        <Route exact path="/account" element={<MyAccount />} />
                        <Route exact path="/company" element={<Company />} />
                        <Route exact path="/literacer3" element={<Literacer3 />} />
                        <Route exact path="/literacer2" element={<Literacer2 />} />
                        <Route exact path="/vectorrunner" element={<VectorRunner />} />
                        <Route exact path="/energylux3" element={<Energylux3 />} />
                        <Route exact path="/literacer22" element={<LiteRacer22 />} />
                        <Route exact path="/advantagebase" element={<AdvantageBase />} />
                        <Route exact path="/lite3" element={<Lite3 />} />
                        <Route exact path="/lite32" element={<Lite32 />} />
                        <Route exact path="" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;


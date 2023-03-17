import React from "react";
import Secondannouncement from "../components/Secondannouncement";
import Thirdannouncement from "../components/Thirdannouncement";
import "../styles/Start.scss";

const Start = () => {
    return (
        <>
            <div className="Allcontainer">
                <div className="firstannouncement">
                    <img src="https://preview.thenewsmarket.com/Previews/ADID/StillAssets/1920x1080/635883.jpg" alt="" />
                </div>
                <div className="Link">
                    <h1>PREDATOR ACCURACY+ FG</h1>
                    <p>Descubre lo mejor en chimpunes y zapatillas para hacer deporte.</p>
                    <a href="/sports">Comprar</a>
                </div>
            </div>

            <div className="announcement">
                <Secondannouncement />
                <Thirdannouncement />
            </div>
        </>

    )
}

export default Start;
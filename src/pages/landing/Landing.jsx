import "./Landing.css"
import Logoimage from "../../../public/images/logos/gotaLogo.png"

function Landing(){

    return (
        <div className="landing">
            <div className="contenedor1">
                <img src={Logoimage} alt="Logo" className="logo" />
                <hi className= "titulo">ECO VANGUARDIA</hi>
        </div>

            <div className="contenedor2">
                <div className="texto">
                    <p>hdhd</p>
                    <p>hdhd</p>
                    <p>hdhdh</p>
            </div>
            <button className="boton">boton</button>
        </div>
    </div>
    );

}

export default Landing;
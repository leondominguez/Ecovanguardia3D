import CircleHome from "../../components/circleHome/circleHome";
import { Navbar } from "../../components/navbar/Navbar";
import "./Home.css";

function Home() {
  return (
    <>
  <div className="home">
    <video
      src="src/assets/videos/5607745-uhd_3840_2160_30fps.mp4"
      autoPlay
      loop
      muted
      className="background-video"
    ></video>
    <Navbar />
    <div className="CopyHome">
      <div className="title">
        <h1 className="title-eco">ECO</h1>
        <h1 className="title-vanguardia">VANGUARDIA</h1>
      </div>

      <h2 className="eslogan">Pequeños cambios, grandes impactos</h2>
      <h3 className="invitacion">
        Elige un tema y sumérgete en la aventura ecovanguardista
      </h3>
    </div>
    <div className="horizontal-container">
      <CircleHome
        logo="src/assets/icons/sea-life-fish-svgrepo-com.svg"
        slogan="Contaminación <br /> Del agua"
      />
      <CircleHome
        logo="
        src/assets/icons/faucet-svgrepo-com.svg"
        slogan="Escasez <br /> Del agua"
      />
      <CircleHome
        logo="
        
        src/assets/icons/sea-svgrepo-com.svg"
        slogan="Acidificación <br /> de los Océanos"
      />
    </div>
  </div>
</>
  );
}

export default Home;

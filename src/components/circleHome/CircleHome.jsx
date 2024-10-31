import "./CircleHome.css";

function CircleHome({ logo, slogan, onClick }) {
  return (
    <div className="container">
       <button className="circle" onClick={onClick}>
      <div className="litle-circle"></div>
      <div className="circle">
        <div className="content">
          <img src={logo} alt="Icono" className="icon" />
          <p dangerouslySetInnerHTML={{ __html: slogan }}></p>
        </div>
      </div>
      </button>
    </div>
  );
}

export default CircleHome;

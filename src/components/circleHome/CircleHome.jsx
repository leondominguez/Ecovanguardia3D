import "./CircleHome.css";
function CircleHome({ logo, slogan }) {
  return (
    <div className="container">
      <div className="litle-circle"></div>
      <div className="circle">
        <div className="content">
          <img src={logo} alt="Icono" className="icon" />
          <p dangerouslySetInnerHTML={{ __html: slogan }}></p>
        </div>
      </div>
    </div>
  );
}

export default CircleHome;

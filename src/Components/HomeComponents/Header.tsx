import "./HomeContainer.css";

const imgSrc = "./home_media/header_slider_3.jpg";

const Header = () => {
  return (
    <header>
      <img src={imgSrc} alt="" className="header_img" />
    </header>
  );
};

export default Header;

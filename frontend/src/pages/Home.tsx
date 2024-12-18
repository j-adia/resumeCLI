import Title from "../components/Title";
import LinkTab from "../components/LinkTab";
import Menu from "../components/Menu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  
  const handleKeyDown = () => {
    navigate("/resume");
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="home">
      <Title />
      <LinkTab />
      <Menu />
      <div className="blink" id="continue-button">PRESS ANY KEY TO CONTINUE...</div>
    </div>
  );
}

export default Home;

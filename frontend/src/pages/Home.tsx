import Title from "../components/Title";
import LinkTab from "../components/LinkTab";
// import Menu from "../components/Menu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleKeyDown = (event: KeyboardEvent) => {
    event.preventDefault(); // prevents key pressed from appearing on the next page
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
      {/* <Menu /> */}
      <div className="blink" id="continue-button"><p>PRESS ANY KEY TO CONTINUE...</p></div>
    </div>
  );
}

export default Home;

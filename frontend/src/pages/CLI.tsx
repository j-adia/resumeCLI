import CommandLine from "../components/CommandLine";
import NavBar from '../components/NavBar';

function CLI() {  
  const currentDir = "";
  
  return (
    <div className="CLI">
      <NavBar />
      <CommandLine currentDir={currentDir}/>
    </div>
  );
}

export default CLI;

import CommandLine from "../components/CommandLine";
import { useState } from 'react';

function CLI() {  
  const [currentDir, setCurrentDir] = useState("");

  return (
    <div>
      <CommandLine currentDir={currentDir} setCurrentDir={setCurrentDir}/>
    </div>
  );
}

export default CLI;

import { FormEvent } from "react";
import { useState } from "react";
import ActionResponse from "./ActionResponse";
import Directory from "./Directory";

type CommandLineProps = {
  currentDir: string;
}

function CommandLine({ currentDir }: CommandLineProps) {
  const [command, setCommand] = useState("");
  const [error, setError] = useState("");
  const [isDisabled, setDisabled] = useState(false);
  const [doAction, setAction] = useState("");
  const [directory, setDirectory] = useState(currentDir);
  const [nextComponent, setNextComponent] = useState<JSX.Element | null>(null);
  const [isCD, setIsCD] = useState(false);

  function handleCommand(e: FormEvent) {
    e.preventDefault();

    const validDirectories = new Set(["", "projects", "coursework", "skills", ".."]);
    const validCommands = new Set(["cd", "ls", "cat", "h", "about", "p", "e", "s", "clear", "exit", "tree", "neofetch", "open", "theme"]);
    const [userCommand, ...args] = command.split(" ");
    let nextDir = "";

    if (!validCommands.has(userCommand)) {
      setError(`Error: command '${userCommand}' not found (enter '-h' for help)`);
    } 

    else if (args.length > 1){
      setError(`Error: command '${userCommand}' has ${args.length} arguments. only one is required.`);
    }
    else if ((userCommand === "cd" || userCommand === "open") && args.length !== 1){
      setError(`Error: '${userCommand}' command requires exactly one argument`);
    }
    else if (userCommand === "cd" && !validDirectories.has(args[0])){
      setError(`Error: directory '${args[0]}' does not exist (enter 'ls' to view directories/files)`);
    }
    else if (userCommand === "cd"){
      setError("");
      setIsCD(true);

      switch(args[0]){
          case "..":
            nextDir = "";
            break;
          
          default:
            nextDir = args[0];
      }

      setNextComponent(<CommandLine currentDir={nextDir} />);
      setDirectory(nextDir);

      setAction(userCommand);
    }
    else {
      setError("");
      setAction(userCommand);
    }
    setDisabled(true);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCommand(e.target.value);
  }

  return (
    <>
      <div id="command-line">
        <Directory currentDir={currentDir}/>
        <form onSubmit={handleCommand}>
          <input
            type="text"
            id="user-input"
            name="user-input"
            disabled={isDisabled}
            autoFocus={true}
            autoComplete="off"
            autoCorrect="off"
            onChange={handleInputChange}
          />
          <input type="submit" style={{ display: "none" }} />
        </form>
      </div>
      {error && <p className="response">{error}</p>}
      {doAction && (<ActionResponse command={command} currentDir={directory} /> )}
      {isCD && nextComponent}
      {!isCD && error && <CommandLine currentDir={directory} /> || !isCD && doAction && <CommandLine currentDir={directory}/>}  

    </>
  );
}

export default CommandLine;


import { FormEvent } from "react";
import { useState } from "react";
import { useEffect } from "react";
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

  function handleCommand(e: FormEvent) {
    e.preventDefault();

    const validDirectories = new Set(["", "projects", "coursework", "skills"]);
    const validCommands = new Set(["cd", "ls", "cat", "h", "a", "p", "e", "s", "clr", "exit", "tree", "neofetch", "quote", "open", "rice"]);
    const [userCommand, ...args] = command.split(" ");

    if (!validCommands.has(userCommand)) {
      setError(`Error: command '${userCommand}' not found (enter 'h' for help)`);
    } 
    else if (args.length > 1){
      setError(`Error: command '${userCommand}' has ${args.length} arguments. only one is required.`);
    }
    else if (args.length === 1 && !validDirectories.has(args[0])){
      setError(`Error: directory '${args[0]}' does not exist (enter 'ls' to view directories)`);
    }
    else if ((userCommand === "cd" || userCommand === "vi") && args.length !== 1){
      setError(`Error: '${userCommand}' command requires exactly one argument`);
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
      {error && <p id="response">{error}</p>}
      {doAction && (
        <ActionResponse 
          command={command}
          currentDir={currentDir}
        />
      )}
      {error && <CommandLine currentDir={currentDir} /> || doAction && <CommandLine currentDir={currentDir}/>}
    </>
  );
}

export default CommandLine;

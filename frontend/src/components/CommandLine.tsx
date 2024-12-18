import { FormEvent } from "react";
import { useState } from "react";
import DoAction from "./DoAction";

function CommandLine() {
  const [command, setCommand] = useState("");
  const [error, setError] = useState("");
  const [isDisabled, setDisabled] = useState(false);
  const [doAction, setAction] = useState("");

  function handleCommand(e: FormEvent) {
    e.preventDefault();

    const validCommands = new Set(["cd", "ls", "h", "a", "vi", "clr"]);
    const userCommand = command.split(" ")[0];

    if (!validCommands.has(userCommand)) {
      setError(`Error: command '${userCommand}' not found (type 'h' for help)`);
    } 
    else if (command.split(" ").length > 2){
      setError(`Error: command '${userCommand}' has too many arguments`);
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
        <p id="system-tag">user@resume-overview:</p>
        {/* add component for directory */}
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
      {doAction && <DoAction commandType={command}/>}
      {error && <CommandLine/> || doAction && <CommandLine/>}
    </>
  );
}

export default CommandLine;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type CommandType = {
    command: string;
    currentDir: string;
    setCurrentDir: (dir: string) => void;
};

function ActionResponse(props: CommandType){
    const directoryFiles = new Map<string, string[]>([
        ['', ['projects', 'skills', 'coursework']],
        ['projects', ['Movie Review Website', 'Notion Note Converter', 'Morse Code Translator', 'Record Player']],
        ['skills', ['C/C++', 'Python', 'Java', 'Javascript', 'Typescript', 'Git + Github', 'SQL', 'MongoDB', 'Excel', 'Docker', 'React', 'Flask']],
        ['coursework', ['Processes for Object-Oriented Software Development', 'Computer Science II', 'Artificial Intelligence', 'Systems Software', 'Database Management Systems']]
    ]);

    const navigate = useNavigate();

    const [commandType, commandSource] = props.command.split(" ");

    switch(commandType){
        case "h":
            return (
                <p id="response">
                    - ls: list items in the current directory <br/>
                    - cd {'directory-name'}: switch to the specified directory <br/>
                    - clr: clear terminal<br/>
                    - h: get help<br/>
                    - vi {'file-name'}: view file<br/>
                    - a: about {'(view my bio)'}<br/>
                    - exit: return to homepage <br/>
                    - files are in blue, and folders are in cyan
                </p>
            ); 

        case "exit":
            useEffect(() => {
                navigate("/");
            })

            return null;
        
        case "a":
            return (
                <p id="response">
                    welcome! i'm jadia, a computer science student at the University of Central Florida. i'm an aspiring cloud developer/dev-ops engineer.<br/><br/>
                    the purpose of this website is to present my resume with an interactive user interface. so, for those who have used a command line terminal before,
                    I hope you enjoy! and for those who haven't... don't worry, this app is designed to be beginner friendly!<br/><br/>
                    to start, list the sections of my resume with the 'ls' command. these are "folders". to navigate to them, use 'cd {'[directory-name]'}'.

                </p>
            )

        case "clr":
            window.location.reload();
            break;

        case "cd":
            props.setCurrentDir(commandSource);
            break;
        
        case "ls":
            if (!commandSource){
                return <p id="response">{directoryFiles.get(props.currentDir)?.join(' ')}</p>
            }
    }

    // return (
    //     <p id="response">i'm {commandType}-ing something to {commandSource}</p>
    // );
}

export default ActionResponse;
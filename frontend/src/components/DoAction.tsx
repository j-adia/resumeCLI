import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type CommandType = {
    commandType: string;
    commandSource?: string;
};

function DoAction(props: CommandType){
    const navigate = useNavigate();

    let commandType = props.commandType.split(" ")[0];
    let commandSource = props.commandSource;

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
    }

    if (props.commandType.split(" ").length == 2){
        commandSource = props.commandType.split(" ")[1];
    }

    return (
        <p id="response">i'm {commandType}-ing something to {commandSource}</p>
    );
}

export default DoAction;
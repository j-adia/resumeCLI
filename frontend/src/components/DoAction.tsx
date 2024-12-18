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
                    ls: list items in the current directory <br/>
                    cd {'directory-name'}: switch to the specified directory <br/>
                    clr: clear terminal<br/>
                    h: get help<br/>
                    vi {'file-name'}: view file<br/>
                    exit: return to homepage
                </p>
            );

        case "exit":
            useEffect(() => {
                navigate("/");
            })

            return null;
            
    }

    if (props.commandType.split(" ").length == 2){
        commandSource = props.commandType.split(" ")[1];
    }

    return (
        <p id="response">i'm {commandType}-ing something to {commandSource}</p>
    );
}

export default DoAction;
import { useState } from "react";

type CommandType = {
    commandType: string;
    commandSource?: string;
};

function DoAction(props: CommandType){
    let commandType = props.commandType.split(" ")[0];
    let commandSource = props.commandSource;

    if (props.commandType.split(" ").length == 2){
        commandSource = props.commandType.split(" ")[1];
    }

    return (
        <p id="response">i'm {commandType}-ing something to {commandSource}</p>
    );
}

export default DoAction;
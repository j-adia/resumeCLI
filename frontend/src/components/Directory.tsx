import { useState } from "react";
import setError from "../components/CommandLine"

type Directory = {
    currentDir: string;
};

function Directory({ currentDir }: Directory){
    console.log(currentDir);
    // const validDirectories = new Set(["projects", "coursework", "skills"]);
    // 
    // if (!validDirectories.has(props.directory)){
        // setError(`Error: ${directory} does not exist (enter 'ls' to view valid folders)`);
    // }

    return (
        <p id="system-tag">{">"} resume@overview:{currentDir}</p>
    );
}

export default Directory;
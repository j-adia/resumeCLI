type Directory = {
    currentDir: string;
};

function Directory({ currentDir }: Directory){
    console.log(currentDir);

    return (
        <p id="system-tag">{">"} resume@overview:/{currentDir}</p>
    );
}

export default Directory;
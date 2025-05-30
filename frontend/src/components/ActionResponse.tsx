import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type CommandType = {
    command: string;
    currentDir: string;
};

const directoryFiles = new Map<string, string[]>([
    ['projects', ['Contact Manager', 'Notion Note Converter', 'Arduino Morse Code Translator', 'Record Player']],
    ['skills', ['C/C++', 'Python', 'Java', 'Javascript', 'Typescript', 'Git + Github', 'SQL', 'MongoDB', 'Excel', 'Docker', 'React', 'Flask']],
    ['coursework', ['Processes for Object-Oriented Software Development', 'Computer Science II', 'Artificial Intelligence', 'Systems Software', 'Database Management Systems']]
]);

//├── └── │

class TreeNode 
{
    public parent: TreeNode | null;
    public children: TreeNode[] = [];

    constructor(parent: TreeNode | null)
    {
        this.parent = parent;
        if(this.parent) this.parent.children.push(this);
    }
}

class MenuItem extends TreeNode
{
    public label: string = "";
    public parent: MenuItem | null;
    public children: MenuItem[] = [];

    constructor(parent: MenuItem["parent"], label: string)
    {
        super(parent);
        this.parent = parent;
        this.label = label;
    }
}

function buildTree(){
    console.log("building tree...");
    const root = new MenuItem(null, "~");

    for (let [key, value] of directoryFiles)
    {
        const newDir = new MenuItem(root, key);

        for (let i = 0; i < value.length; i++){
            const file = value[i];
            new MenuItem(newDir, file);
        }
    }

    return root;
}

function printTree(root: MenuItem){
    var trees = [];

    trees.push(
        "resume\n",
    );

    const size = root.children.length;
    let count = 0;

    // parent directories
    root.children.forEach(
        (e) => {
            if (count === size - 1){
                trees.push(`└───── ${e.label}\n`);
            }

            else {
                trees.push(`├───── ${e.label}\n`);
            }
            
            let count2 = 0;
            const size2 = e.children.length;

            // sub directories
            e.children.forEach((b) => {

                    if (size2 === 1){
                        trees.push(`└───── ${b.label}`);
                    }
                    
                    else if (count === size-1){
                        if (count2 < size2 - 1){
                            trees.push("\t├");
                        }
                        else {
                            trees.push("\t└");
                        }
                        trees.push(`──── ${b.label}\n`);
                    }

                    else {                
                            if (count2 < size2 - 1){
                                trees.push("│\t├");
                            }
                            else {
                                trees.push("│\t└");
                            }
                            trees.push(`───── ${b.label}\n`);

                    }
                    count2++;
                });
                count++;
        });

    // don't forget join!
    return trees.join("");
}

function ActionResponse(props: CommandType){

    const tree = buildTree();   
    printTree(tree);

    console.log(props.currentDir);
    console.log(props.command);

    const navigate = useNavigate();

    const [commandType, commandSource] = props.command.split(" ");

    switch(commandType){
        case "p":
            return <p className="response">{directoryFiles.get("projects")?.join("\n")}</p>
        
        case "s":
            return <p className="response">{directoryFiles.get("skills")?.join("\n")}</p>

        case "e":
            return <p className="response">{directoryFiles.get("coursework")?.join("\n")}</p>

        case "h":
            return (
                <p className="response">
                    commands <br/>
                    --------- <br/>
                     tree: list everything<br/>
                    cd {'[directory-name]'}: switch directory<br/>
                    ls: list items in the current directory<br/>
                    clear: clear terminal<br/>
                    neofetch: my summary<br/>
                    rice: change terminal theme<br/>
                    {/* ` open {'[url]'}: opens a url in a new tab.<br/> */}
                    open linkedin: navigate to my linkedin<br/>
                    open github: navigate to my github<br/>
                    about: my bio<br/>
                    h: get help<br/>
                    exit: return to title screen<br/>
                </p>
            ); 

        case "cd":
            return;

        case "exit":
            useEffect(() => {
                navigate("/");
            })

            return;
        
        case "about":
            return (
                <p className="response">
                    Hello! i'm Jadia. I'm an aspiring cloud software developer/AI engineer.<br/><br/>
                    I made this website so I could present my resume in a fun, unique way. <br/><br/>
                    if you've never used a command line terminal before, this is your beginner-friendly introduction!<br/><br/>
                    to start, list the sections of my resume with the 'ls' command. these are <i>directories</i>. to navigate to them, use 'cd {'[directory-name]'}'. or, 
                    you can just use the quick navigation commands at the top :)
                </p>
            )

        case "clear":
            window.location.reload();
            break;
        
        case "ls":
            const contents = [];
            if (!commandSource){
                if (props.currentDir === ""){
                    directoryFiles.forEach((value, key) => {
                        contents.push(key + " ");
                        console.log(value)});
                }
                else {
                    contents.push(directoryFiles.get(props.currentDir)?.join(", "));
                }

                return <p className="response">{contents}</p>
            }
            break;
        
        case "open":
            if (commandSource === "linkedin"){
                window.open('https://www.linkedin.com/in/jmh03/', '_blank', 'noopener noreferrer');
            }
            
            else if (commandSource === "github"){
                window.open('https://github.com/j-adia', '_blank', 'noopener noreferrer');
            }

            else {
                window.open("https://" + commandSource);
            }

            break;

        case "tree":
            var treeString = printTree(tree);

            return (
                <div className="response" id="tree">
                    <pre>{treeString}</pre>
                </div>
            )
            
        case "neofetch":
            const neo = `
     _.-- ,.--.
   .'   .'    /
   | @       |'..--------._
  /      \\._/              '.
 /  .-.-                     \\
(  /    \\                     \\
 \\\\      '.                  | #
  \\\\       \\   -.           /
   :\\       |    )._____.'   \\
    "       |   /  \\  |  \\    )
            |   |./'  :__ \\.-'
            '--'
            
`;
            return(
                <div id="neofetch" className="response">
                    <pre>{neo}</pre>
                    <div id="neoinfo">
                        <p>resume@overview</p>
                        <p>----------------</p>
                        <p><b>Host</b>: Jadia Holmes</p>
                        <p><b>Uptime</b>: 21 years</p>
                        <p><b>Occupation</b>: CS @ UCF</p>
                        <p><b>Languages</b>: python, c++, java</p>
                        <p><b>Likes</b>: music, long walks, tea</p>
                    </div>
                </div>
            )
        
        case "theme":
        break;
    }
}

export default ActionResponse;
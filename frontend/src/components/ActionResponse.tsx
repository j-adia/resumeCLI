import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type CommandType = {
    command: string;
    currentDir: string;
};

const directoryFiles = new Map<string, string[]>([
    ['projects', ['Contact Manager', 'Notion Note Converter', 'Morse Code Translator', 'Record Player']],
    ['skills', ['C/C++', 'Python', 'Java', 'Javascript', 'Typescript', 'Git + Github', 'SQL', 'MongoDB', 'Excel', 'Docker', 'React', 'Flask']],
    ['coursework', ['Processes for Object-Oriented Software Development', 'Computer Science II', 'Artificial Intelligence', 'Systems Software', 'Database Management Systems']],
    ['extras', ['album recommendations']]
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

// 7

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
                trees.push(`└───── ${e.label}\n` + "\t");
            }

            else {
                trees.push(
                    `├───── ${e.label}\n`,
                );

                if (count === size - 1){
                    trees.push("│\t└");
                }
                else {
                    trees.push("│\t├");
                }

                count++;
            }
            
            let count2 = 0;
            const size2 = e.children.length;

            
            // sub directories
            e.children.forEach(
                (b) => {
                    if (size2 === 1){
                        trees.push(`└───── ${b.label}`);
                    }

                    else {
                        trees.push(
                            `───── ${b.label}\n`,
                            );
                
                            if (count2 === size2 - 2){
                                trees.push("│\t└");
                            }
                            else if (count2 !== size2 - 1){
                                trees.push("│\t├");
                            }
                    }
                    
                    count2++;
                }
            )
        }
     );

    // don't forget join!
    return trees.join("");
}

function ActionResponse(props: CommandType){

    const tree = buildTree();   
    printTree(tree);

    const navigate = useNavigate();

    const [commandType, commandSource] = props.command.split(" ");

    switch(commandType){
        case "h":
            return (
                <p className="response">
                    Commands <br/>
                    --------- <br/>
                    ` tree: list everything.<br/>
                    ` cd {'<directory-name>'}: switch to directory.<br/>
                    ` cat {'<file-name>'}: view file.<br/>
                    ` ls: list items in the current directory.<br/>
                    ` clr: clear terminal.<br/>
                    ` neofetch: my summary.<br/>
                    ` quote: print random quote from Dune.<br/>
                    ` rice: change terminal theme.<br/>
                    ` open {'<url>'}: opens a url in a new tab.<br/>
                    ` open linkedin: goes to my linkedin.<br/>
                    ` open github: goes to my github.<br/>
                    ` a: about.<br/>
                    ` h: get help.<br/>
                    ` exit: return to title screen.<br/>
                </p>
            ); 

        case "exit":
            useEffect(() => {
                navigate("/");
            })

            return;
        
        case "a":
            return (
                <p className="response">
                    welcome! i'm Jadia, a computer science student at the University of Central Florida. i'm an aspiring cloud software developer/dev-ops engineer.<br/><br/>
                    I made this website so I could present my resume in a fun, unique way. so, if you're a human seeing this, I hope you enjoy!<br/><br/>
                    if you've never used a command line terminal before, this is your beginner-friendly introduction!<br/><br/>
                    to start, list the sections of my resume with the 'ls' command. these are <i>directories</i>. to navigate to them, use 'cd {'[directory-name]'}'. or, 
                    you can just use the quick navigation commands at the top :)
                </p>
            )

        case "clr":
            window.location.reload();
            break;

        case "cd":
            props.currentDir = commandSource;
            break;
        
        case "ls":
            if (!commandSource){
                return <p className="response"> contents --{">"} {directoryFiles.get(props.currentDir)?.join(' ')}</p>
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
    }
}

export default ActionResponse;
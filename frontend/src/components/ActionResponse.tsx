import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type CommandType = {
    command: string;
    currentDir: string;
};

export class TreeNode 
{
    public parent: TreeNode | null;
    public children: TreeNode[] = [];

    constructor(parent: TreeNode | null)
    {
        this.parent = parent;
        if(this.parent) this.parent.children.push(this);
    }
}

export class MenuItem extends TreeNode
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
    const root = new MenuItem(null, "~");
    const projectsDir = new MenuItem(root, "projects/");
    const skillsDir = new MenuItem(root, "skills/");
    const educationDir = new MenuItem(root, "education/");
}

function ActionResponse(props: CommandType){
    const directoryFiles = new Map<string, string[]>([
        ['projects', ['Contact Manager', 'Notion Note Converter', 'Morse Code Translator', 'Record Player']],
        ['skills', ['C/C++', 'Python', 'Java', 'Javascript', 'Typescript', 'Git + Github', 'SQL', 'MongoDB', 'Excel', 'Docker', 'React', 'Flask']],
        ['coursework', ['Processes for Object-Oriented Software Development', 'Computer Science II', 'Artificial Intelligence', 'Systems Software', 'Database Management Systems']]
    ]);

    const navigate = useNavigate();

    const [commandType, commandSource] = props.command.split(" ");

    switch(commandType){
        case "h":
            return (
                <p id="response">
                    ` ls: list items in the current directory <br/>
                    ` cd {'directory-name'}: switch to the specified directory <br/>
                    ` clr: clear terminal<br/>
                    ` h: get help<br/>
                    ` vi {'file-name'}: view file<br/>
                    ` a: about {'(view my bio)'}<br/>
                    ` exit: return to title screen <br/>
                    ` neofetch: a tldr<br/>
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
                    welcome! i'm Jadia, a computer science student at the University of Central Florida. i'm an aspiring cloud developer/dev-ops engineer.<br/><br/>
                    I made this website so I could present my resume in a fun, unique way. so, if you're a human looking at this website, I hope you enjoy!<br/><br/>
                    and if you've never used a command line terminal before, this will be your beginner-friendly introduction!<br/><br/>
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
                return <p id="response"> contents --{">"} {directoryFiles.get(props.currentDir)?.join(' ')}</p>
            }
            break;
            
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
            <div className="neofetch" id="response">
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
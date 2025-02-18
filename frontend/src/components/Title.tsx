const title1 = `
      _           _ _          _   _       _                     
     | | __ _  __| (_) __ _   | | | | ___ | |_ __ ___   ___  ___ 
  _  | |/ _\` |/ _\` | |/ _\` |  | |_| |/  _ \| | '_ \` _ \\ / _ \/ __|
 | |_| | (_| | (_| | | (_| |  |  _  | (_) | | | | | | |  __/\\__ \\
  \\___/ \\__,_|\\__,_|_|\\__,_|  |_| |_|\\___/|_|_| |_| |_|\\___||___/
                                                                  `;
const title2 = `
        __     ______     _____     __     ______        __  __     ______     __         __    __     ______     ______    
        /\\ \\   /\\  __ \\   /\\  __-.  /\\ \\   /\\  __ \\      /\\ \\_\\ \\   /\\  __ \\   /\\ \\       /\\ "-./  \\   /\\  ___\\   /\\  ___\\   
    _\\_\\ \\  \\ \\  __ \\  \\ \\ \\/\\ \\ \\ \\ \\  \\ \\  __ \\     \\ \\  __ \\  \\ \\ \\/\\ \\  \\ \\_____  \\ \\ \\-./\\ \\  \\ \\  __\\   \\ \\___  \\  
    /\\_____\\  \\ \\_\\ \\_\\  \\ \\____-  \\ \\_\\  \\ \\_\\ \\_\\     \\ \\_\\ \\_\\  \\ \\_____\\  \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_____\\  \\/\\_____\\ 
    \\/_____/   \\/_/\\/_/   \\/____/   \\/_/   \\/_/\\/_/      \\/_/\\/_/   \\/_____/   \\/_____/   \\/_/  \\/_/   \\/_____/   \\/_____/ 
    `;

const title3 = `
    ██╗ █████╗ ██████╗ ██╗ █████╗     ██╗  ██╗ ██████╗ ██╗     ███╗   ███╗███████╗███████╗
    ██║██╔══██╗██╔══██╗██║██╔══██╗    ██║  ██║██╔═══██╗██║     ████╗ ████║██╔════╝██╔════╝
    ██║███████║██║  ██║██║███████║    ███████║██║   ██║██║     ██╔████╔██║█████╗  ███████╗
██  ██║██╔══██║██║  ██║██║██╔══██║    ██╔══██║██║   ██║██║     ██║╚██╔╝██║██╔══╝  ╚════██║
╚█████╔██║  ██║██████╔╝██║██║  ██║    ██║  ██║╚██████╔╝███████╗██║ ╚═  ██║███████╗███████║
╚════╝ ╚═╝  ╚═╝╚═════╝ ╚═╝╚═╝  ╚═╝    ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝     ╚═╝╚══════╝╚══════╝
`;

const title4 = `
       █████               █████  ███               █████   █████          ████                                  
      ░░███               ░░███  ░░░               ░░███   ░░███          ░░███                                  
       ░███   ██████    ███████  ████   ██████      ░███    ░███   ██████  ░███  █████████████    ██████   █████ 
       ░███  ░░░░░███  ███░░███ ░░███  ░░░░░░███     ░███████████  ███░░███ ░███ ░░███░░███░░███  ███░░███ ███░░  
       ░███   ███████ ░███ ░███  ░███   ███████     ░███░░░░░███ ░███ ░███ ░███  ░███ ░███ ░███ ░███████ ░░█████ 
 ███   ░███  ███░░███ ░███ ░███  ░███  ███░░███     ░███    ░███ ░███ ░███ ░███  ░███ ░███ ░███ ░███░░░   ░░░░███
░░████████  ░░████████░░████████ █████░░████████    █████   █████░░██████  █████ █████░███ █████░░██████  ██████ 
 ░░░░░░░░    ░░░░░░░░  ░░░░░░░░ ░░░░░  ░░░░░░░░    ░░░░░   ░░░░░  ░░░░░░  ░░░░░ ░░░░░ ░░░ ░░░░░  ░░░░░░  ░░░░░░  
`;

const titles = [title1, title2, title3, title4];

function Title(){
    return (
        // pre tag preserves original formattting
        <div className="title"><pre><span style={ {fontFamily: 'IBM VGA'} }>{titles[2]}</span></pre></div>
    );
}

export default Title;
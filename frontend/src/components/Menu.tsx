import { useEffect } from "react";

function Menu(){    
    return(
        <div className="menu">
            <p id="menu-title">COMMAND MENU</p>
            <div id="commands">
                <p>a</p>
                <p>h</p>           
                <p>ls</p>
                <p>cd</p>                                                
                <p>vi</p>                                                
                <p>clr</p> 
                <p>exit</p>              
            </div>
            <div id="command-desc">
                <p>about</p>
                <p>help</p>
                <p>list items in the current directory</p>
                <p>switch to another directory</p>
                <p>view file</p>
                <p>clear terminal</p>
                <p>return to homepage</p>
            </div>
        </div>
    );
}

export default Menu;
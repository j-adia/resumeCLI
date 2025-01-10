const text = `
      _           _ _          _   _       _                     
     | | __ _  __| (_) __ _   | | | | ___ | |_ __ ___   ___  ___ 
  _  | |/ _\` |/ _\` | |/ _\` |  | |_| |/  _ \| | '_ \` _ \\ / _ \/ __|
 | |_| | (_| | (_| | | (_| |  |  _  | (_) | | | | | | |  __/\\__ \\
  \\___/ \\__,_|\\__,_|_|\\__,_|  |_| |_|\\___/|_|_| |_| |_|\\___||___/
                                                                  `;

function Title(){
    return (
        // pre tag preserves original formattting
        <div className="title"><pre><span style={ {fontFamily: 'IBM VGA'} }>{text}</span></pre></div>
    );
}

export default Title;
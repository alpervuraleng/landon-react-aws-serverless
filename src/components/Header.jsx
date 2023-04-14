import { useState, useEffect } from "react";

export default function Header ({linksData}) {
    const [menuLinks, setMenuLinks] = useState([]);

    const loadMenuLinksData = async function() {
      const resp = await fetch("https://c2szu1x7f1.execute-api.us-east-2.amazonaws.com/Production/menulinks");
      let jsonResp = await resp.json();
      setMenuLinks(jsonResp);
    }

    useEffect(() => {
      loadMenuLinksData();
    }, []);

    return (
      <header id="intro">
        <article className="fullheight">
          <div className="hgroup">
            <h1>Landon Hotel Test</h1>
            <h2>West London</h2>
            <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow"/></a></p>
          </div>
        </article>

        <nav id="nav">
          <div className="navbar">
            <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
            <ul>
              {
                menuLinks.map((link) => 
                  <li key={link.href}><a className={`info ${link.className}`} href={link.href}><span>{link.text}</span></a></li>
                ) 
              }
            </ul>
          </div>
        </nav>
      </header>
    );
}

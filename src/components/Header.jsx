export default function Header ({linksData}) {
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
                linksData.map((link) => 
                  <li><a className={`info ${link.className}`} href={link.href}><span>{link.text}</span></a></li>
                ) 
              }
            </ul>
          </div>
        </nav>
      </header>
    );
}

import './header.css'


export function Header() {
    return (
        <>
        <div className="header">
            <div className="header-name">
                <h1>Brian</h1>
                <img src='../icono.png' alt="hola" />
            </div>
            <div className="header-options">
                <ul>
                    <a>Home</a>
                    <a>Summary</a>
                    <a>Proyects</a>
                    <a>Contact</a>
                </ul>
            </div>
        </div>
        </>
    )
}
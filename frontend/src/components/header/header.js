import React from "react"
import { Link } from "react-router-dom"
import 'normalize.css' //importar o normalizador que vai dar reset no css
import "./style.css"


function Header() {
    return (
        <header>
            <div className="content">
                <div className="title">
                    <h1>Aplicação Teste</h1>
                </div>
                
                <div className="menu">
                    <ul>
                        <li>Feed</li>
                        <li>Pagina 2</li>
                        <li>Pagina 3</li>
                    </ul>

                </div>
                
            </div>
        </header>
        
    )
}


export default Header
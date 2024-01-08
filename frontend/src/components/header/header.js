import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

function Header() {
    return (
        <header>
            <div className="content">
                <div className="title">
                    <h1>Aplicação Teste</h1>
                </div>
                <div className="createCard">
                    <Link to={"/create"}>
                        <button>Criar carta</button>
                    </Link>

                </div>
            </div>
        </header>
    )
}


export default Header
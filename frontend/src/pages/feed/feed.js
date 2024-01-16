import React from "react"
import {Link} from "react-router-dom"
import 'normalize.css'
import "./style.css"
import Header from "../../components/header/header"

function Feed() {
    return (
        <div className="pagina">
        
            {/* <h1>Page Feed</h1>

            <Link to="/create">
                <button>Criar Carta</button>
            </Link> */}

            <Header></Header>
            <h1>Page Feed</h1>
            <div className="createCard">
                <Link to={"/create"}>
                    <button className="buttonCreate">Criar carta</button>
                </Link>

            </div>
        </div>
    )
}

export default Feed

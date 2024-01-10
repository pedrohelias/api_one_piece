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
        </div>
    )
}

export default Feed

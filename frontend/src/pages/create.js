import React from "react"
import {Link} from "react-router-dom"

function Create() {
    return (
        <div>
            <h1>Page Create</h1>
            <Link to="/">
                <button>Voltar para a home</button>
            </Link>
        </div>
    )
}

export default Create

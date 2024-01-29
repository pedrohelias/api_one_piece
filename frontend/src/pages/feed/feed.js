import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import 'normalize.css'
import "./style.css"
import Header from "../../components/header/header"
import axios from "axios"

function Feed() {
    const [cards, setCards] = useState([])

    useEffect(() => {
        //renderizar apos o componente aparecer na tela
        axios.get("http://localhost:8000/cards").then((response)=>{
            setCards(response.data) //vai mostrar os dados na tela
        }).catch(()=>{
            console.log("Deu errado")
        }) //realizar apenas quando o componente aparecer na tela
    }, [])

    function deletePost(id){
        axios.delete(`http://localhost:8000/deleteCard/${id}`)
        setCards(cards.filter(card => card._id !== id))
    }


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
            
            {cards.map((card,key) => {
               return (
                <div className="categorias">
                    <hr></hr>
                    <h3>custo: {card.cost}</h3>
                    <h3>descrição: {card.description}</h3>
                    <h3>imagem: {card.image_url}</h3>
                    <h3>nome: {card.name}</h3>
                    <h3>teste: {card.new_role}</h3>
                    <h3>força: {card.power}</h3>
                    <h3>tipo: {card.type}</h3>

                    <div className="buttons">
                        <div className="buttonEdit">
                            <Link to={{pathname: `/edit/${card._id}`}}>
                            <button>Edit</button>
                            </Link>
                        </div>
                        <div className="buttonDelete">
                           <button onClick={() => {
                            deletePost(card._id)
                           }}>Delete</button> 
                        </div>
                    </div>
                   
                </div>
               )
            })}

            </div>
        </div>
    )
}

export default Feed

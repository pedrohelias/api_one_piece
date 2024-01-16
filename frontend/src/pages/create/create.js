import React from "react"
import {Link} from "react-router-dom"
import "./style.css"
import Header from "../../components/header/header"
import {useForm} from "react-hook-form"
import axios from "axios"


function Create() {

    const {register, handleSubmit} = useForm()
    const onSubmit = data => axios.post("http://localhost:8000/addCards", data).then(()=>{
        console.log("deu tudo certo")
    }).catch(()=>{
        console.log("deu tudo errado")
    })

    return (
        <div>
            <Header></Header>            
            <main>
                <div className="card-post">
                    <h1>Criar Postagem</h1>
                    <div className="card-body-post">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="fields">
                                <label>name</label>
                                <input type="text" name="name" {...register("name")}></input>
                            </div>

                            <div className="fiels">
                                <label>cost</label>
                                <input type="text" name="cost" {...register("cost")}></input>
                            </div>

                            <div className="fields">
                                <label>power</label>
                                <input type="text" name="power" {...register("power")}></input>
                            </div>

                            <div className="fields">
                                <label>type</label>
                                <input type="text" name="type" {...register("type")}></input>
                            </div>

                            <div className="fields">
                                <label>description</label>
                                <textarea type="text" name="description" {...register("description")}></textarea>
                            </div>

                            <div className="fields">
                                <label>image_url</label>
                                <input type="text" name="image_url" {...register("image_url")}></input>
                            </div>

                            <div className="fields">
                                <label>new_role</label>
                                <input type="text" name="new_role" {...register("new_role")}></input>
                            </div>

                            <div className="btnEnviar">
                               <button type="submit">cadastrar</button>
                            </div>

                        </form>
                    </div>
                </div>
            </main>
            
            <Link to="/">
                <button>Voltar para a home</button>
            </Link>
        </div>
    )
}

export default Create

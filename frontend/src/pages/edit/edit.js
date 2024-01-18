import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import 'normalize.css'
import "./style.css"
import Header from "../../components/header/header"
import axios from "axios"
import { useNavigate, useParams, reset } from "react-router-dom"
import {useForm} from "react-hook-form"

function Edit() {
   
    const {id} = useParams()

  //preciso fazer a api para achar um registro a partir de um unico id  //fiz kkk
  

   
    const history = useNavigate()
    const {register, handleSubmit, reset} = useForm()
    const [dados, setDados] = useState({})

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.put(`http://localhost:8000/search/${id}`); // Substitua pela URL correta
            setDados(response.data);
          } catch (error) {
            console.error('Erro ao buscar dados:', error);
          }
        };
    
        fetchData();
      }, [id]);
    
   
    const onSubmit = data => axios.put(`http://localhost:8000/updateCard/${id}`, data).then(()=>{
        console.log("deu tudo certo a edicao")
        history("/") //vai fazer voltar pra pagina inicial

    }).catch(()=>{
        console.log("deu tudo errado")
    })

    return (
        <div>
            <Header></Header>            
            <main>
                <div className="card-post"> 
                    <h1>Editar Postagem</h1>
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

export default Edit

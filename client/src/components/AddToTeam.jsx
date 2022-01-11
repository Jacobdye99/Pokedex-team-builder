import { Link } from "react-router-dom"
import axios from "axios"
import MyTeam from "./MyTeam"
import { useState } from "react"
import api from "../sevices/apiConfig.js"

const defaultInput = {
    name: '',
}


export default function AddToTeam(props) {
    const [pokename, setPokename] = useState(defaultInput)
    const handleAdd = async (e) => {
        e.preventDefault()
        const fields = pokename
        const url = `https://pokeapi.co/api/v2/pokemon/${props.id}`
        const res = await axios.get(url)
        const post = await api.post('/', {fields} )
        console.log(res.data)
        setPokename(res.data.name)


    }
    return (
        <div>
            <Link to= '/Myteam' >
                <button onClick={handleAdd}>Add To Team</button> 
            </Link>
            <MyTeam />
        </div>
    )
}

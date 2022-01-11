import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import MyTeam from "./MyTeam"
import { useState, useEffect } from "react"






export default function AddToTeam(props) {
    // const teamMember = []
    
    const [pokename, setPokename] = useState()
    const [pokeImage, setPokeImage] = useState()
    const navigate = useNavigate()
    const {id} = useParams()
        
    useEffect(() => {
    const fetchPokeData = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${props.id}`
        const res = await axios.get(url)
        // console.log(res.data.name)
        setPokename(res.data.name)
    } 
    fetchPokeData()
}, [])

    function handleAdd(e) {
        e.preventDefault()
        props.teamMember.push(pokename)
        console.log(props.teamMember)
    }





    
    
    return (
        <div>
            <button onClick={handleAdd}>Add To Team</button> 
        </div>
    )
}

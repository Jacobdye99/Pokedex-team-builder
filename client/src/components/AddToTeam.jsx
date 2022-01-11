import { useNavigate } from "react-router-dom"
import axios from "axios"
// import MyTeam from "./MyTeam"
import { useState, useEffect } from "react"






export default function AddToTeam(props) {
    // const teamMember = []
    
    const [pokename, setPokename] = useState()
    const [pokeImage, setPokeImage] = useState()
    const [pokeTypes, setPokeTypes] = useState()
    const navigate = useNavigate()
    
        
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
        if (props.teamMemberName.length < 6) {
        props.teamMemberName.push(pokename)
        console.log(props.teamMemberName)
    }
        navigate('/Myteam')
    }





    
    
    return (
        <div>
            
            <button onClick={handleAdd}>Add To Team</button> 
            
        </div>
    )
}

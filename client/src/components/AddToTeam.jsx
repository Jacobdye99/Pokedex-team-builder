import { useNavigate } from "react-router-dom"
import axios from "axios"
// import MyTeam from "./MyTeam"
import { useState, useEffect } from "react"







export default function AddToTeam(props) {
    // const teamMember = []
    
    const [pokename, setPokename] = useState()
    const [pokeImage, setPokeImage] = useState()
    const [pokeType1, setPokeType1] = useState()
    const [pokeType2, setPokeType2] = useState()
    const navigate = useNavigate()
    

    
        
    useEffect(() => {
    const fetchPokeData = async () => {
        const url = `https://pokeapi.co/api/v2/pokemon/${props.id}`
        const res = await axios.get(url)
        // console.log(res.data.name)
        setPokename(res.data.name)
        setPokeImage(res.data.sprites?.front_default)
        setPokeType1(res.data.types[0]?.type.name)
        if (res.data.types[1]?.type.name !== undefined) {
            setPokeType2(res.data.types[1]?.type.name)
        }
        
    } 
    fetchPokeData()
}, [])

    function handleAdd(e) {
        e.preventDefault()
        if (props.teamMemberName.length < 6) {
        props.teamMemberName.push(pokename)
        props.teamMemberPic.push(pokeImage)
        props.teamMemberType1.push(pokeType1)
        props.teamMemberType2.push(pokeType2)
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

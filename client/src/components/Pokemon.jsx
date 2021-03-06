import {useEffect, useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import AddToTeam from './AddToTeam'



export default function Pokemon(props) {
    const teamMemberName = props.teamMemberName
    const teamMemberPic = props.teamMemberPic
    const teamMemberType1 = props.teamMemberType1
    const teamMemberType2 = props.teamMemberType2
    const [pokemon, setPokemon] = useState([])
    const [pokedex, setPokedex] = useState([])
    const {id} = useParams()
    // console.log(id)
    useEffect(() => {
        const fetchPokemon = async () => {
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`
            const res = await axios.get(url)
            // console.log(res.data)
            setPokemon(res.data)
            
        }
        fetchPokemon()


        const fetchPokedexEntry = async () => {
            const dexURL = `https://pokeapi.co/api/v2/pokemon-species/${id}/`
            const dexRes = await axios.get(dexURL)
            // console.log(dexRes.data)
            setPokedex(dexRes.data)
        }
        fetchPokedexEntry()
    }, [id])

    if(!pokemon.id) {
        return (
            <div> <img src='https://i.giphy.com/media/IQebREsGFRXmo/giphy.webp' alt="Loading" style={{'width': '200px' }} />
                <h2>Loading...</h2>
            </div>
        )
    
    }
    if(!pokedex.id) {
        return (
            <div> <img src='https://i.giphy.com/media/IQebREsGFRXmo/giphy.webp' alt="Loading" style={{'width': '200px' }}/>
                <h2>Loading...</h2>
            </div>
        )
    
    }







    return (
        <div className='Pokemon'>
            <div className='Name'>
                {/* <label>Name</label> */}
                <h2>{pokemon.name}</h2>
            </div>
            <div className='type'>
                <label>Type:</label>
                <h3>{pokemon.types[0]?.type.name}</h3>
                <h3>{pokemon.types[1]?.type.name}</h3>
            </div>
            <div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={pokemon.name} className='pics' />
            </div>
            <div >
                <h4>{pokedex.generation.name}</h4>
            </div>
            <ul className='fullStats'>
                {pokemon.stats.map((stat) => {
                    return (
                        <li key={stat.stat.name} className='stats'> 
                           <div> {stat.stat.name}: {stat.base_stat} </div>
                        </li>
                        )
                })}
            </ul>
            <AddToTeam id = {id} teamMemberName={teamMemberName} teamMemberPic={teamMemberPic} teamMemberType1={teamMemberType1} teamMemberType2={teamMemberType2}/>
            
        </div>
    )
}

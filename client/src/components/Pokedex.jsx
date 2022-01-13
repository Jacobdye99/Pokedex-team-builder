import axios from "axios"
import {useEffect, useState} from 'react'
import { Link } from "react-router-dom"

export default function Pokedex() {
    const [pokemon, setPokemon] = useState([])
    const [pokedex, setPokedex] = useState([])
    useEffect(() => {

        const fetchPokemon = async () => {
                const url = `https://pokeapi.co/api/v2/pokedex/national`
                const res = await axios.get(url)
                // console.log(res.data)
                setPokemon(res.data.pokemon_entries)
                setPokedex(res.data)
        }
        fetchPokemon()
    }, [])

    if(!pokedex.id) {
        return (
            <div> <img src='https://i.giphy.com/media/IQebREsGFRXmo/giphy.webp' alt="Loading"  style={{'width': '200px' }} />
            <h2>Loading...</h2>
        </div>
        )
    }


    return (
        <div>
            <ul>
                {pokemon.map((poke) => {
                    return (
                        <li key={poke.entry_number} id = 'list'>
                            <Link to = {`/Pokemon/${poke.entry_number}`} >
                                <div>
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.entry_number}.png`} className="listitems" alt= {poke.pokemon_species.name} />
                                </ div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            
        </div>
    )
}

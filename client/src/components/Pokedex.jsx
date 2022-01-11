import axios from "axios"
import {useEffect, useState} from 'react'
import { Link } from "react-router-dom"

export default function Pokedex() {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {

        const fetchPokemon = async () => {
                const url = `https://pokeapi.co/api/v2/pokedex/national`
                const res = await axios.get(url)
                // console.log(res.data)
                setPokemon(res.data.pokemon_entries)
                console.log(res.data.pokemon_entries[1].entry_number)
        }
        fetchPokemon()
    }, [])


    return (
        <div>
            <ul>
                {pokemon.map((poke) => {
                    return (
                        <li key={poke.entry_number} id = 'list'>
                            <div>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.entry_number}.png`} className="listitems" alt= {poke.pokemon_species.name} />
                                </ div>
                        </li>
                    )
                 })}
            </ul>
            
        </div>
    )
}

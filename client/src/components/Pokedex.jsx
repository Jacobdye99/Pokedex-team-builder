import axios from "axios"
import {useEffect, useState} from 'react'
import { Link } from "react-router-dom"

export default function Pokedex() {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {

        const fetchPokemon = async () => {
                const url = `https://pokeapi.co/api/v2/pokemon?limit=898/`
                const res = await axios.get(url)
                // console.log(res.data)
                let allPokemon = res.data
                // setAllPokemon(res.data)
                allPokemon.results.forEach((pokeData) => {
                    const fetchPokemonData = async () => {
                    const url2 = pokeData.url
                    const res2 = await axios.get(url2)
                    // console.log(res2.data)
                    setPokemon(res2.data)
                    }
                    fetchPokemonData()
                })
        }
        fetchPokemon()
    }, [])


    return (
        <div>
            <ul>
                {pokemon.forEach((poke) => {
                    return (
                        <li key={poke.id} id = 'list'>
                            <div>
                            <img src={poke.sprites?.front_default} className="listitems" alt= {poke.name} />
                                </ div>
                        </li>
                    )
                 })}
            </ul>
            
        </div>
    )
}

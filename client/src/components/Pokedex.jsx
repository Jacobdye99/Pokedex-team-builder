import axios from "axios"
import {useEffect, useState} from 'react'
import { Link } from "react-router-dom"

export default function Pokedex() {
    const [pokemon, setPokemon] = useState([])
    const [pokemonImages, setPokemonImages] = useState([])
    // const [id, setId] = useState()
    useEffect(() => {
        const fetchPokemon = async () => {
            
            const url = 'https://pokeapi.co/api/v2/pokedex/national/'
            const res = await axios.get(url)
            // console.log(res.data.pokemon_entries)
            // console.log(res.data.pokemon_entries)
            setPokemon(res.data.pokemon_entries)
        }
        fetchPokemon()

        const fetchPokemonImages = async () => {
            // for (let i = 1; i <= 898; i++) {
                const url = `https://pokeapi.co/api/v2/pokemon/${i}`
                const res = await axios.get(url)
                // setId(res.data.id)
                console.log(res.data.id)
                setPokemonImages(res.data)
            // }
        }
        fetchPokemonImages()
    }, [])


    return (
        <div>
            <ul>
                {/* {pokemonImages.map((poke) => {
                    return ( */}
                        <li key={poke.id} id = 'list'>
                            <h3 className="listitems">
                                {poke.sprites?.front_default}
                            </h3>
                        </li>
                    {/* ) */}
                 {/* })} */}
            </ul>
            
        </div>
    )
}

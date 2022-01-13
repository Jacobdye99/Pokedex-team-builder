import api from "../sevices/apiConfig.js"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import DeleteTeam from "./DeleteTeam.jsx"




export default function AllTeams(props) {
    const [teams, setTeams] =useState([])
    let toggleFetch = props.toggleFetch
    let setToggleFetch = props.setToggleFetch

    useEffect(() => {
        const fetchTeams = async () => {
            const res = await api.get('/')
            console.log(res.data)
            setTeams(res.data.records)
        }
        fetchTeams()
    }, [toggleFetch])




    return (
        <div>
            <ul>
                {teams.map((team) => {
                    return (
                        <li key={team.id} className="teams" >
                            <div className="teamsItems">
                                <h3>{team.fields?.username}'s Team</h3>
                                <img src={team.fields?.image1} alt={team.fields?.poke1} className="allTeamPics" />
                                <h4 className="pokeNames">{team.fields?.poke1}</h4>
                                <img src={team.fields?.image2} alt={team.fields?.poke2} className="allTeamPics"/>
                                <h4 className="pokeNames">{team.fields?.poke2}</h4>
                                <img src={team.fields?.image3} alt={team.fields?.poke3} className="allTeamPics"/>
                                <h4 className="pokeNames">{team.fields?.poke3}</h4>
                                <img src={team.fields?.image4} alt={team.fields?.poke4} className="allTeamPics"/>
                                <h4 className="pokeNames">{team.fields?.poke4}</h4>
                                <img src={team.fields?.image5} alt={team.fields?.poke5} className="allTeamPics"/>
                                <h4 className="pokeNames">{team.fields?.poke5}</h4>
                                <img src={team.fields?.image6} alt={team.fields?.poke6} className="allTeamPics"/>
                                <h4 className="pokeNames">{team.fields?.poke6}</h4>
                                <br />
                                <DeleteTeam id={team.id} 
                                    toggleFetch={toggleFetch} 
                                    setToggleFetch={setToggleFetch}
                                />
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


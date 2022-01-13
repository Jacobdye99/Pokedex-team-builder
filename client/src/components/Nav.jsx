
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <div className="navbar">
            <h1 className="head">Pokedex Team Builder</h1>
            <div id="linkBar">
            <Link to = '/' className="Pokedex" ><h2>Pokedex</h2></Link>
            <Link to = '/Myteam' className="myTeam" ><h2>My Team</h2></Link>
            <Link to = '/AllTeams' className="AllTeams" ><h2>All Teams</h2></Link>
            </div>
        </div>
    )
}

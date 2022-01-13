import api from "../sevices/apiConfig.js"
import { useNavigate } from "react-router-dom"


export default function DeleteTeam(props) {
    const navigate = useNavigate()
    const handleDelete = async () => {
        await api.delete(`/${props.id}`)
        // navigate('/AllTeams')
        props.setToggleFetch((prevToggle) => !prevToggle)
    }
    return (
        <div>
           <button onClick={handleDelete} id="delete">Delete</button> 
        </div>
    )
}

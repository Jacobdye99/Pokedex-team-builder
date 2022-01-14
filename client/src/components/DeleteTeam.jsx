import api from "../sevices/apiConfig.js"


export default function DeleteTeam(props) {
    const handleDelete = async () => {
        await api.delete(`/${props.id}`)
        props.setToggleFetch((prevToggle) => !prevToggle)
    }
    return (
        <div>
            <button onClick={handleDelete} id="delete">Delete</button> 
        </div>
    )
}

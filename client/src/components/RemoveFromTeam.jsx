import { useNavigate } from "react-router-dom"


export default function RemoveFromTeam(props) {
    let teamMemberPic = props.teamMemberPic
    let teamMemberName = props.teamMemberName
    let teamMemberType1 = props.teamMemberType1
    let teamMemberType2 = props.teamMemberType2
    const navigate = useNavigate()

    function handleDelete(e) {
        e.preventDefault()
        teamMemberName.splice(props.num, 1)
        teamMemberPic.splice(props.num, 1)
        teamMemberType1.splice(props.num, 1)
        teamMemberType2.splice(props.num, 1)
        navigate('/Myteam')
        props.setToggleFetch((prevToggle) => !prevToggle)
    }


    return (
        <div>
            <button onClick={handleDelete}>Remove</button>
        </div>
    )
}

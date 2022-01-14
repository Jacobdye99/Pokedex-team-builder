import {useState} from 'react'
import api from "../sevices/apiConfig.js";
import { useNavigate } from 'react-router-dom';



export default function SubmitTeam(props) {
    let teamMemberName = props.teamMemberName
    let teamMemberPic = props.teamMemberPic
    const defaultInput = {
        username: '',
        poke1: teamMemberName[0],
        image1: teamMemberPic[0],
        poke2: teamMemberName[1],
        image2: teamMemberPic[1],
        poke3: teamMemberName[2],
        image3: teamMemberPic[2],
        poke4: teamMemberName[3],
        image4: teamMemberPic[3],
        poke5: teamMemberName[4],
        image5: teamMemberPic[4],
        poke6: teamMemberName[5],
        image6: teamMemberPic[5],
    }
    const navigate = useNavigate()
    const [input, setInput] = useState(defaultInput)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const fields = input;
        await api.post('/', {fields})
        console.log(input)
        setInput(defaultInput)
        navigate('/AllTeams')
    }
    const handleTextInput = (e) => {
        e.preventDefault()
        const {id, value} = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [id]: value
        }))
        console.log(input)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input id='username' placeholder='Your Name' onChange={handleTextInput}></input>
            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

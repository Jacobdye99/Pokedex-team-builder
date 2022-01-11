

export default function MyTeam(props) {
    
    // console.log(props.pokename)
    // let name = props.pokename
    // console.log(props.teamMember[1])

    return (
        <div>
            <div>
            {props.teamMember[0]}
            </div>
            <br />
            <div>
            {props.teamMember[1]}
            </div>
            <br />
            <div>
            {props.teamMember[2]}
            </div>
            <br />
            <div>
            {props.teamMember[3]}
            </div>
            <br />
            <div>
            {props.teamMember[4]}
            </div>
            <br />
            <div>
            {props.teamMember[5]}
            </div>
            <br />
        </div>
    )
}

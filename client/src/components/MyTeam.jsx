import RemoveFromTeam from "./RemoveFromTeam";


export default function MyTeam(props) {
    let teamMemberPic = props.teamMemberPic
    let teamMemberName = props.teamMemberName
    let teamMemberType1 = props.teamMemberType1
    let teamMemberType2 = props.teamMemberType2
    let toggleFetch = props.toggleFetch
    let setToggleFetch = props.setToggleFetch

    return (
        <div className="pokemonTeam">
            <div className="individualpoke">
                <img src={teamMemberPic[0]} alt={teamMemberName[0]} />
            <h2>{teamMemberName[0]}</h2>
            
                <p> {teamMemberType1[0]} </p>
                <p> {teamMemberType2[0]} </p>
                <RemoveFromTeam num={0}
                    teamMemberName={teamMemberName}
                    teamMemberPic={teamMemberPic} 
                    teamMemberType1={teamMemberType1} 
                    teamMemberType2= {teamMemberType2}
                    toggleFetch={toggleFetch}
                    setToggleFetch={setToggleFetch}
                    />
            </div>
            <br />
            <div className="individualpoke">
            <img src={teamMemberPic[1]} alt={teamMemberName[1]} />
            <h2>{teamMemberName[1]}</h2>
            
                <p> {teamMemberType1[1]} </p>
                <p> {teamMemberType2[1]} </p>
                <RemoveFromTeam num={1} 
                    teamMemberName={teamMemberName} 
                    teamMemberPic={teamMemberPic} 
                    teamMemberType1={teamMemberType1} 
                    teamMemberType2= {teamMemberType2}
                    toggleFetch={toggleFetch}
                    setToggleFetch={setToggleFetch}
                    />
            </div>
            <br />
            <div className="individualpoke">
            <img src={teamMemberPic[2]} alt={teamMemberName[2]} />
            <h2>{teamMemberName[2]}</h2>
            
                <p> {teamMemberType1[2]} </p>
                <p> {teamMemberType2[2]} </p>
                <RemoveFromTeam num={2} 
                    teamMemberName={teamMemberName} 
                    teamMemberPic={teamMemberPic} 
                    teamMemberType1={teamMemberType1} 
                    teamMemberType2= {teamMemberType2}
                    toggleFetch={toggleFetch}
                    setToggleFetch={setToggleFetch}
                    />
            </div>
            <br />
            <div className="individualpoke">
            <img src={teamMemberPic[3]} alt={teamMemberName[3]} />
            <h2>{teamMemberName[3]}</h2>
            
                <p> {teamMemberType1[3]} </p>
                <p> {teamMemberType2[3]} </p>
                <RemoveFromTeam num={3} 
                    teamMemberName={teamMemberName} 
                    teamMemberPic={teamMemberPic} 
                    teamMemberType1={teamMemberType1} 
                    teamMemberType2= {teamMemberType2}
                    toggleFetch={toggleFetch}
                    setToggleFetch={setToggleFetch}
                    />
            </div>
            <br />
            <div className="individualpoke">
            <img src={teamMemberPic[4]} alt={teamMemberName[4]} />
            <h2>{teamMemberName[4]}</h2>
            
                <p> {teamMemberType1[4]} </p>
                <p> {teamMemberType2[4]} </p>
                <RemoveFromTeam num={4} 
                    teamMemberName={teamMemberName} 
                    teamMemberPic={teamMemberPic} 
                    teamMemberType1={teamMemberType1} 
                    teamMemberType2= {teamMemberType2}
                    toggleFetch={toggleFetch}
                    setToggleFetch={setToggleFetch}
                    />
            </div>
            <br />
            <div className="individualpoke">
            <img src={teamMemberPic[5]} alt={teamMemberName[5]} />
            <h2>{teamMemberName[5]}</h2>
            
                <p> {teamMemberType1[5]} </p>
                <p> {teamMemberType2[5]} </p>
                <RemoveFromTeam num={5} 
                    teamMemberName={teamMemberName} 
                    teamMemberPic={teamMemberPic} 
                    teamMemberType1={teamMemberType1} 
                    teamMemberType2= {teamMemberType2}
                    toggleFetch={toggleFetch}
                    setToggleFetch={setToggleFetch}
                    />
            </div>
            <br />
        </div>
    )
}

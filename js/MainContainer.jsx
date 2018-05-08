import React from 'react';
import SideContainer from './SideContainer.jsx';
import MiddleContainer from './MiddleContainer.jsx';

class MainContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            chosenTeam: ""
        }
    }

    handleTeamKey = (teamKey) => {
        this.setState({
            chosenTeam: teamKey
        })
    }

    render() {
        if(!this.props.teamsData) {
            return null
        } else {

            let easternTeams = [];
            let westernTeams = [];
            
            this.props.teamsData.forEach((team) => {
                 if(team.Conference == "Eastern") {
                     easternTeams.push(team)
                 } else {
                     westernTeams.push(team)
                 }
            })

            return(
                <div className="MainContainer">
                    <SideContainer teamsData={westernTeams} teamKey={this.handleTeamKey} />
                    <MiddleContainer chosenTeam={this.state.chosenTeam} />
                    <SideContainer teamsData={easternTeams} teamKey={this.handleTeamKey} />
                </div>    
            )
        }
    }
}

export default MainContainer;
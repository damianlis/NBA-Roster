import React from 'react';
import TableRoster from './TableRoster.jsx'
import Loader from './Loader.jsx';
import BottomContainer from './BottomContainer.jsx';

class MiddleContainer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            roster: [],
            playerID: "",
            player: []
        }

    }

    handlePlayer = (playerID) => {
        this.setState({
            playerID: playerID,
            player: []
        }, () => {
            this.state.roster.map((player) => {
                if (player.PlayerID == this.state.playerID) {
                    this.setState({
                        player: player
                    })
                }
            })
        }
        )
    }

    componentWillReceiveProps(nextProps) {

        if (nextProps.chosenTeam == "") {
            return false
        } else if (nextProps.chosenTeam !== "" && nextProps.chosenTeam !== this.props.chosenTeam) {
            this.setState({
                roster: "Loading",
                playerID: "",
                player: []
            }, () => {
                let playersBaseURL = `https://api.fantasydata.net/v3/nba/stats/JSON/Players/${nextProps.chosenTeam}`;
                let keyURL = "b6098a2ffbe14e6ea478123779c4cb6d";

                fetch(playersBaseURL, {
                    headers: {
                        "Ocp-Apim-Subscription-Key": keyURL
                    }
                }).then(response => {
                    return response.json()
                }).then(data => {
                    this.setState({
                        roster: data
                    })
                }).catch(error => {
                    console.log(error)
                })
            })
        }
    }

    render() {
        let renderComponent;
        if (this.state.roster === "Loading") {
            renderComponent = <Loader />
        } else if (this.state.roster.length !== 0) {
            renderComponent = <TableRoster rosterData={this.state.roster} playerData={this.handlePlayer} />
            if (this.state.player.length !== 0) {
                renderComponent =
                    <div>
                        <TableRoster rosterData={this.state.roster} playerData={this.handlePlayer} />
                        <BottomContainer player={this.state.player} />
                    </div>
            }
        } else {
            renderComponent = null
        }
        return (
            <div className="MiddleContainer">
                {renderComponent}
            </div>
        )
    }
}


export default MiddleContainer
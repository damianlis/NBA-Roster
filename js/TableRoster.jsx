import React from "react";

class TableRoster extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePlayerAfterClick = event => {
    if (typeof this.props.playerData === "function") {
      this.props.playerData(event.currentTarget.dataset.player);
    }
  };

  componentDidMount() {
    $(".PlayersTable").tablesorter();
  }

  render() {
    return (
      <table className="PlayersTable tablesorter">
        <thead>
          <tr>
            <th>#</th>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Pozycja</th>
          </tr>
        </thead>
        <tbody>
          {this.props.rosterData.map((player, index) => {
            return (
              <tr
                key={player.PlayerID}
                data-player={player.PlayerID}
                onClick={this.handlePlayerAfterClick}
              >
                <th>{player.Jersey}</th>
                <td>{player.FirstName}</td>
                <td>{player.LastName}</td>
                <td>{player.Position}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default TableRoster;

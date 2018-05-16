import React from "react";

class SideContainer extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   hasClass: false
    // }
  }

  handleTeamKeyAfterClick = event => {
    if (typeof this.props.teamKey === "function") {
      this.props.teamKey(event.currentTarget.dataset.key);
    }
    // this.setState({
    //   hasClass: !this.state.hasClass
    // })
    // if(this.state.hasClass) {
    //   event.currentTarget.className = "Logos Active"
    // } else {
    //   event.currentTarget.className = "Logos"
    // }
  };

  render() {
    if (!this.props.teamsData) {
      return null;
    } else {
      let teamsArr = this.props.teamsData;
      return (
        <div className="SideContainer">
          {teamsArr.map(team => {
            return (
              <div
                className="Logos"
                key={team.Key}
                data-key={team.Key}
                onClick={this.handleTeamKeyAfterClick}
                style={{ backgroundImage: `url(${team.WikipediaLogoUrl}` }}
              />
            );
          })}
        </div>
      );
    }
  }
}

export default SideContainer;

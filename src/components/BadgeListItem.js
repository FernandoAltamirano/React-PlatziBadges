import React from "react";

import Gravatar from "./Gravatar";
import twitterIcon from "../images/twitter.svg";
import "./styles/BadgesList.css";

class BadgeListItem extends React.Component {
  render() {
    return (
      <div className="Item">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt="Avatar"
        />
        <ul className="list-unstyled BadgesListItem__description">
          <li>
            <p>
              {this.props.badge.firstName} {this.props.badge.lastName}
            </p>
          </li>
          <li>
            <div className="BadgesListItem__description-social">
              <img src={twitterIcon} height="30" width="30" alt="" />
              <p>@{this.props.badge.twitter}</p>
            </div>
          </li>
          <li>
            <p>
              <strong>{this.props.badge.jobTitle}</strong>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default BadgeListItem;

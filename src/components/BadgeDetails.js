import React from "react";
import { Link } from "react-router-dom";

import confLogo from "../images/platziconf-logo.svg";
import "../pages/styles/BadgeDetails.css";

import Badge from "../components/Badge";
import DeleteBadgeModal from "./DeleteBadgeModal";

function BadgeDetails(props) {
  return (
    <div>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div className="col-6 BadgeDetails__hero-attendant-name">
              <h1>
                {props.badge.firstName} <br /> {props.badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <Badge
              firstName={props.badge.firstName}
              lastName={props.badge.lastName}
              email={props.badge.email}
              twitter={props.badge.twitter}
              jobTitle={props.badge.jobTitle}
            />
          </div>
          <div className="col text-center">
            <h1>Actions</h1>
            <div className="containerButtons">
              <Link
                className="text-reset text-decoration-none m-4 d-block"
                to={`/badges/${props.badge.id}/edit`}
              >
                <button className="btn btn-primary">Edit</button>
              </Link>
              <button onClick={props.onOpenModal} className="btn btn-danger ">
                Delete
              </button>
              <DeleteBadgeModal
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
                onDeleteBadge={props.onDeleteBadge}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;

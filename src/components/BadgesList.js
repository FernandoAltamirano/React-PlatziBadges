import React from "react";
import { Link } from "react-router-dom";

import BadgesListItem from "./BadgeListItem";
import "./styles/BadgesList.css";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filterBadges, setFilterBadges] = React.useState(badges);

  React.useMemo(() => {
    const resultBadge = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilterBadges(resultBadge);
  }, [badges, query]);
  return { query, setQuery, filterBadges };
}

function BadgesList(props) {
  const { query, setQuery, filterBadges } = useSearchBadges(props.Badges);
  if (filterBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(ev) => {
              setQuery(ev.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Creat new badge
        </Link>
      </div>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(ev) => {
            setQuery(ev.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filterBadges
          .slice(0)
          .reverse()
          .map((badge) => {
            return (
              <li className="BadgesListItem" key={badge.id}>
                <Link
                  className="text-reset text-decoration-none"
                  to={`/badges/${badge.id}`}
                >
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default BadgesList;

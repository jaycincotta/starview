import React, { useState } from "react";
import queryString from "query-string";
import StarView from "./StarView";

export default function StarLoader({ match, location }) {
  const poll = match.params.poll;
  const { title } = queryString.parse(location.search);
  console.log("StarLoader", poll, title);
  const [csv, setCsv] = useState(null);
  const star_url = `https://star.vote/poll/csv/${poll}/`;
  const cors_api_url = "https://cors-anywhere.herokuapp.com/";
  const url = cors_api_url.concat(star_url);
  const options = {
    method: "GET",
    headers: { "Content-Type": "application/x-www-form-urlencoded" }
  };
  fetch(url, options)
    .then(response => response.text())
    .then(text => setCsv(text));

  return csv ? <StarView csv={csv} title={title} /> : <div>Loading...</div>;
}

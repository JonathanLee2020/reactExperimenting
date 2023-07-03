// Data.jsx
import React from "react";
import axios from "axios";

function Data({ data }) {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.description}</p>
    </div>
  );
}

export default Data;

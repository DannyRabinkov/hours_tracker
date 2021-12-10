import React from "react";
import Axios from "axios";

function AllEmpComp({ showEmployees }) {
  const allEmployees = () => {
    Axios.get("http://localhost:3000/api/users/allEmployees/", {})
      .then((res) => {
        alert("got the users!");
        console.log(res);
        JSON.parse(res);
      })
      .catch(() => {
        alert("Oops something went wrong!");
      });
  };

  return (
    <div>
      {showEmployees.map((res) => (
        <div>{res.Name}</div>
      ))}
    </div>
  );
}

export default AllEmpComp;

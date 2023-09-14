import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeope] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeope(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove item</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeope([])}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;

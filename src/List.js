import React from "react";

const List = ({ people, handleRemove }) => {

  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;

        return (
          <div className="list" key={id} >
            <img src={image} alt={name} className="Img" />
            <div className="info">
              <h1>{name}</h1>
              <h5>{age} Years</h5>
            </div>
            <button className="remove-btn" onClick={()=> handleRemove(id)}>Remove</button>
          </div>
        );
      })}
    </>
  );
};

export default List;

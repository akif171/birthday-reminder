import React, { useState } from "react";
import data from "./data";
import List from "./List";
import "./App.css";

const App = () => {
  const [people, setPeople] = useState(data);

  const handleRemove = (personId)=>{
    const removePerson = people.filter((person)=> person.id !== personId)

      setPeople(removePerson)
      
  }

  console.log(people)

  return (
    <main className="main">
      <section className="container">
        <h1>{people.length} birthdays today </h1>
        <List people={people} handleRemove={handleRemove} />
        <button className="btn" onClick={()=> setPeople([])}>clear all</button>
      </section>

    </main>
  );
};

export default App;

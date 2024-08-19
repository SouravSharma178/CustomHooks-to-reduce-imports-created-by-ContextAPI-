import "./App.css";
import mainObject from "./Components/data";
import { useReducer, useState } from "react";
import AddPerson from "./Components/AddPerson";
import PersonList from "./Components/PersonList";
import ThemeContext from "./Components/ThemeContext";
import PersonContext from "./Components/PersonContext";
import PersonDispatchContext from "./Components/PersonDispatchContext";

function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [persons, dispatch] = useReducer(personReducer, mainObject);
  const [mode, setMode] = useState("darkMode");

  function personReducer(persons, action) {
    switch (action.type) {
      case "ADD":
        return [...persons, { ...action.payload, id: 5, age: 40 }];
      case "DELETE":
        return persons.filter((person) => person.id !== action.payload);
      case "UPDATE":
        const index = persons.findIndex(
          (person) => person.id === action.payload.id
        );
        const newPersons = [...persons];
        newPersons.splice(index, 1, action.payload);
        setEditableVideo(null);
        return [...newPersons];
      default:
        return persons;
    }
  }

  function updateVideo(id) {
    const obj = persons.findIndex((person) => person.id === id);
    setEditableVideo(persons[obj]);
  }

  return (
    <ThemeContext.Provider value={{ mode }}>
      <PersonContext.Provider value={persons}>
        <PersonDispatchContext.Provider value={dispatch}>
          <div className={mode}>
            <button
              className={mode}
              onClick={() =>
                mode === "darkMode" ? setMode("lightMode") : setMode("darkMode")
              }
            >
              Mode
            </button>
            <AddPerson editableVideo={editableVideo}>Add</AddPerson>
            <PersonList
              persons={persons}
              dispatch={dispatch}
              updateVideo={updateVideo}
            ></PersonList>
          </div>
        </PersonDispatchContext.Provider>
      </PersonContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

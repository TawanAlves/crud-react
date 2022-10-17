import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

const url = "http://localhost:3333/student";

function App() {
  const [i, setI] = useState(0);

  const [students, setStudents] = useState([]);
  const [fullname, setFullname] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [classroom, setClassroom] = useState("");
  const [school_average, setSchool_average] = useState("");
  const [is_active, setIs_active] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setStudents(data.data);
    }
    fetchData();
  }, [i]);

  // console.log(students);
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const student = {
      fullname,
      birthdate,
      classroom,
      school_average,
      is_active,
    };

    console.log(student);

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    });

    //  const addedStudent = await res.json();
    // setStudents((prevStudents) => [...prevStudents, addedStudent]);
    setI(i + 1)
    
  };

  const handleDelete = async(id) => {
    const res = await fetch(`${url}/${id}` , {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });  
    setI(i + 1)
      }



  return (
    <div className="App">
      <h1>CRUD</h1>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.fullname} - {student.birthdate} - {student.classroom} -
            {student.school_average}- {student.is_active}
            <button onClick={() => handleDelete(student.id) }>DEL</button>
          </li>
        ))}
      </ul>

      <div className="add-student">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </label>
          <label>
            Nascimento:
            <input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </label>
          <label>
            Sala:
            <input
              type="text"
              value={classroom}
              onChange={(e) => setClassroom(e.target.value)}
            />
          </label>
          <label>
            Média:
            <input
              type="text"
              value={school_average}
              onChange={(e) => setSchool_average(e.target.value)}
            />
          </label>
          <label>
            Estado:
            <input
              type="checkbox"
              value={is_active}
              onChange={(e) => setIs_active(e.target.checked)}
            />
          </label>

          <input type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;

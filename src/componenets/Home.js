import './Header.css'
import Task from './Task'

import React, { useEffect, useState } from "react";


const Home = () => {
  const [tasks, setTasks] = useState(localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []);
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const submit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title, description, }])
    setTitle("")
    setdescription("")
  };
 


  const deletekey = (index) => {
    const filteredArr = tasks.filter((val, i) => {
      return i !== index;
    })
    setTasks(filteredArr);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));

  }, [tasks])
  return (
    <div className='container'>
      <h1 className='tag'>Daily Tasks</h1>
      <form className="text" onSubmit={submit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea placeholder="Enter the description" value={description} onChange={(e) => setdescription(e.target.value)} ></textarea>

        <button className='btn' >ADD</button>
        

        {tasks.map((item, index) => (
          <Task key={index} title={item.title} description={item.description} deletekey={deletekey} index={index} />
        ))}
      </form>


    </div>
  )
}

export default Home

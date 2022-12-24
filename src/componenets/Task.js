import React from 'react';

const Task = ({title, description, deletekey, index}) => {
  return (
    <>
    <div className='task'>
    <div>
      <p>{title}</p>
      <span>{description}</span>
    </div>
    {/* </div>
    <div> */}
    <button className='btntask' onClick={()=>{
      deletekey(index)
    }}>Delete</button>
    </div>
 </>
  
  );
};

export default Task

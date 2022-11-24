import React, { useState } from 'react';
import "./App.css";

function TodoList() {
  const [activity,setActivity] = useState("");
  const [listData,setListData] = useState([]);

  function addActivity()
  {
    // setListData([...listData, activity])
    // console.log(listData);

    setListData((listData)=>{
      const updatedlist = [...listData, activity]
      console.log(updatedlist);
      setActivity("");
      return updatedlist;
    })
  }

  function removeActivity(i)
  {
        const updateListData = listData.filter((elem, id)=>{
          
          return i!=id;

        })
        setListData(updateListData);
  }


  return (
    <>
      <div className="container">
        <div className='header'>TODO LIST</div>
        <input type="text" placeholder='Add Activity' value={activity} onChange={(e)=>{setActivity(e.target.value)}}/>
        <button onClick={addActivity}>Add</button>
        <p className='heading-list'>Here is Your List : {")"}</p>
        {listData!=[] && listData.map((data, i)=>{           
            return(

              <>
                  <p key={i}>
                    <div className='listData'>{data}</div>
                    <div className='btn'>
                      <button onClick={()=>removeActivity(i)
                      }>remove(-)</button>
                    </div>
                    


                  </p>
              
              </>
            )


        })}
      </div>
    </>
  )
}

export default TodoList;
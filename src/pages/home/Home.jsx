import React, { useState, useEffect } from 'react'
import axios from "axios"
import List from "../../components/list/List"

function Home() {
  const [lists, setLists] = useState([])
  let title = "sac"

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(`lists${title && "?title=" + title}`,{
          headers:{
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmRlZmMxNjE4ODI0MTQ2OTcwYjQwMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjQ4MTY2NSwiZXhwIjoxNjUyOTEzNjY1fQ.qy-RcBl_5GKYL2kMMNHBmfq7k9J42PxEjQJxDEz3cxE",
          }
        })
        console.log(res);
        setLists(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    getRandomList()
  }, [title])
  return (
    <div>
      {lists.map((list, index) => 
      <List key={list.title + "-" + index} list={list} index={index} />
      )}
    </div>
  )
}

export default Home

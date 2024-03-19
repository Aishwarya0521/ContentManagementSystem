import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Page = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(0);
  const [page, setPage] = useState('');

  useEffect(() => {    
    axios.get(`http://localhost:3001/designpage`)
    .then(res=>{setPost(res.data)})
    .catch(err=>{console.log(err)})
  }, [])

  const handleSubmit = () => {
    axios.post(`http://localhost:3001/designpage`, {
        "id": id,"page": page})
        .then((res) => {console.log(res) })
      .catch((err) => {console.log(err) })
  }


    const handleDelete = (id) => {
      axios.delete(`http://localhost:3001/designpage/${id}`)
        .then(res => {
          console.log(res);
          setPost(post.filter(item => item.id !== id));
        })
        .catch(err => { console.log(err); });
    }

    const[popup,setPopup]=useState(false)
    const [id1, setId1] = useState(0);
    const [page1, setPage1] = useState('');

    const openPopup=(datas)=>{
    setPopup(true)
    setId1(datas.id)
    setPage1(datas.page)
    }

    const handleUpdate = () => {
      axios.put(`http://localhost:3001/designpage/${id1}`, {
        "id": id1,"page": page1
      })
      .then(res => { console.log(res); })
      .catch(err => { console.log(err); });
    }
  return (
    <div>
     <div className="container">
    <div className="login">
          <form onSubmit={handleSubmit}>
          <h1>Add Page Design</h1>
            <label>Id:</label>
            <input type='number' value={id} onChange={(e) => setId(e.target.value)}/><br></br>
            <label>Page design</label>
            <input type='text' value={page} onChange={(e) => setPage(e.target.value)}/><br></br>
            <button type='submit'>Add Page Design</button><br></br>
          </form>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Page</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
              {post.map((x) => (
               
                <tr key={x.id}>
                  <td>{x.id}</td>
                  <td>{x.page}</td>
                  <td>
                    <button onClick={() => openPopup(x)}>Update</button>
                    <button onClick={() => handleDelete(x.id)}>Delete</button>
                  </td>
                </tr>
              ))}    
            </tbody>
          </table>
      
          {popup && (
            <div className="popup">
              <form onSubmit={handleUpdate}>
                <button onClick={() => {setPopup(false);}}>X</button>
                <label>Id:</label>
                 <input type='number' value={id1} onChange={(e) => setId1(e.target.value)}/><br></br>
                <label>Article design</label>
                 <input type='text' value={page1} onChange={(e) => setPage1(e.target.value)}/><br></br>
                <button type='submit'>Updated Design</button><br></br>
              </form>
            </div>
          )}

          <br></br>
        </div>
        </div>


    </div>
  )
}
export default Page

import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Pagedesign = () => {
    const[post,setPost]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:3001/designpage`)
    .then(res=>{setPost(res.data)})
    .catch(err=>{console.log(err)})
  })


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
      <h2>User</h2>
      <div className='container'>
      <div className='user-container'>
        {
          post.map(x=>(
            <div className='grid-container'>
              <h2>{x.page}</h2>
              <button onClick={() => openPopup(x)}>Edit</button>
              {popup && (
            <div className="popup">
              <form onSubmit={handleUpdate}>
                <button onClick={() => {setPopup(false);}}>X</button>
                <br></br>
                 <label>page design</label>
                 <input type='text' value={page1} onChange={(e) => setPage1(e.target.value)}/><br></br>
                <button type='submit'>Updated Design</button><br></br>
              </form>
            </div>
          )}
              </div>
              
          ))
        }

      </div>
      </div>

    </div>
  )
}
export default Pagedesign

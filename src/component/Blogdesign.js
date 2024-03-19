import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Blogdesign = () => {
    const[post,setPost]=useState([])
  useEffect(()=>{
    axios.get(`http://localhost:3001/designblog`)
    .then(res=>{setPost(res.data)})
    .catch(err=>{console.log(err)})
  })

  
  const[popup,setPopup]=useState(false)
  const [id1, setId1] = useState(0);
  const [blog1, setBlog1] = useState('');

  const openPopup=(datas)=>{
  setPopup(true)
  setId1(datas.id)
  setBlog1(datas.blog)
  }

  const handleUpdate = () => {
    axios.put(`http://localhost:3001/designblog/${id1}`, {
      "id": id1,"blog": blog1
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
               <img src={x.image} width={100} height={100}/>
              <h2>{x.blog}</h2>
              <button onClick={() => openPopup(x)}>Edit</button>
              {popup && (
            <div className="popup">
              <form onSubmit={handleUpdate}>
                <button onClick={() => {setPopup(false);}}>X</button>
                <br></br>
               
                <label>page design</label>
                 <input type='text' value={blog1} onChange={(e) => setBlog1(e.target.value)}/><br></br>
                <button type='submit'>Updated Design</button><br></br>
              </form>
            </div>
          )}

          <br></br>
              </div>
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default Blogdesign

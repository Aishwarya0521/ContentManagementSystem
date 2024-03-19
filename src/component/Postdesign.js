
import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Postdesign = () => {
    const[post,setPost]=useState([])
    useEffect(() => {    
      axios.get(`http://localhost:3001/designpost`)
      .then(res=>{setPost(res.data)})
      .catch(err=>{console.log(err)})
    }, [])
  
    const[popup,setPopup]=useState(false)
    const [id1, setId1] = useState(0);
    const [postt1, setPostt1] = useState('');

    const openPopup=(datas)=>{
    setPopup(true)
    setId1(datas.id)
    setPostt1(datas.postt)
    }

    const handleUpdate = () => {
      axios.put(`http://localhost:3001/designpost/${id1}`, {
        "id": id1,"postt": postt1
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
              <h2>{x.postt}</h2>
              <button onClick={() => openPopup(x)}>Edit</button>
              {popup && (
            <div className="popup">
              <form onSubmit={handleUpdate}>
                <button onClick={() => {setPopup(false);}}>X</button>
                <br></br>
                <label>post design</label>
                 <input type='text' value={postt1} onChange={(e) => setPostt1(e.target.value)}/><br></br>
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

export default Postdesign

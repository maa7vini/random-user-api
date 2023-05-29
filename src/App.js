import './App.css';
import api from './services/api'
import { useState, useEffect } from 'react'
import { AiOutlinePhone, AiOutlineMail, AiOutlineHome } from 'react-icons/ai'
import { BsFlag } from 'react-icons/bs'

import { IconContext } from 'react-icons';

function App() {

  const [user, setUser] = useState()

  useEffect(() => {
    api
    .get('?exc=registered,id')
    .then(res => setUser(res.data.results[0]))
    .catch((err) => {
      console.log('Ops, algo deu errado!') 
    })
  }, [])

  function refresh(){

    window.location.reload()

  }

  return (
    <div className="App">
      <div className='container'>

        <div className='containerLeft'>

          <img src={user?.picture?.large}/>  

        </div>
        
        <div className='containerRight'>

          <div className='containerTxt'>
            <label>HELLO EVERYBODY I AM</label>

            <h1>{user?.name?.first}</h1>
            <h1>{user?.name?.last}</h1>

            <button onClick={refresh}>New User</button>

            <div className='userInfo'>
              <div className='icon'>
                <IconContext.Provider value={{ size: '20px'}}> 
                  <AiOutlinePhone />
                </IconContext.Provider>
              </div>

              <p>{user?.phone}</p>  
            </div>

            <div className='userInfo'>
              <div className='icon'>
                <IconContext.Provider value={{ size: '20px'}}>
                  <AiOutlineMail />
                </IconContext.Provider>
              </div>

              <p>{user?.email}</p>
            </div>

            <div className='userInfo'>
              <div className='icon'>
                <IconContext.Provider value={{ size: '20px'}}>
                  <AiOutlineHome />
                </IconContext.Provider>
              </div>

              <p>{user?.location?.city}</p>
            </div>

            <div className='userInfo'>
              <div className='icon'>
                <IconContext.Provider value={{ size: '20px'}}>
                  <BsFlag />
                </IconContext.Provider>
              </div>

              <p>{user?.location?.country}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;

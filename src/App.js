import './App.css';
import api from './services/api'
import { Container, ContainerLeft, ContainerRight, UserDiv, UserInfo, UserLocation } from './style/style';
import { useState, useEffect } from 'react'

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
      <Container>

        <ContainerLeft>

          <UserDiv className='userDiv'>
            <img src={user?.picture?.large}/> 

            <h1>{user?.name?.first}</h1> 

            <span onClick={refresh}>Refresh</span>
          </UserDiv>

        </ContainerLeft>

        <ContainerRight>

          <UserInfo className='userInfo'>

            <div className='userLeft'>

              <h2>{user?.name?.first} Informations</h2> 

              <div className='userTxt'>
                <label>Name:</label> 
                <div className='userName'>
                  <span>{user?.name?.first}</span> 

                 <div className='userLastName'>
                    <span>{user?.name?.last}</span> 
                 </div>

                </div>
              </div>

              <div className='userTxt'>
                <label>Gender:</label>
                <span>{user?.gender}</span> 
              </div>

              <div className='userTxt'>
                <label>Age:</label>
                <span>{user?.dob?.age}</span> 
              </div>

            </div>

            <div className='userRight'>

            <div className='userTxt'>
                <label>Phone:</label>
                <span>{user?.phone}</span> 
              </div>

              <div className='userTxt'>
                <label>Cell:</label>
                <span>{user?.cell}</span> 
              </div>

              <div className='userTxt'>
                <label>Nationality:</label>
                <span>{user?.nat}</span> 
              </div>

              <div className='userTxt'>
                <label>Country:</label>
                <span>{user?.location?.country}</span> 
              </div>

            </div>

          </UserInfo>

          <UserLocation>
            
          </UserLocation>

        </ContainerRight>

      </Container>
    </div>
  );
}

export default App;

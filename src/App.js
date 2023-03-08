import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
} from "react-router-dom";
import { Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Chat from './components/Chat';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from './components/firebase';
import Login from './components/Login';
import Spinner from 'react-spinkit';

function App() {


  const [user, loading] = useAuthState(auth);

  if (loading){
    return(
      <AppLoading>
        <AppLoadingContents>
          <img src="https://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png" alt="" />
        <Spinner
        name='ball-spin-fade-loader'
        />
        </AppLoadingContents>
      </AppLoading>
    );
  }
  return (
    <div className="app"> 
    <Router>
      {!user ? (
        <Login />
      ) : (

      
      <>
      <Header />
    
      <AppBody>
        <Sidebar />
        <Routes>

          <Route path="/" exact element={<Chat/>}/>

        </Routes>
      
      </AppBody>
      </>
      )}
    </Router>
    </div>
  

  ) 
  }

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`
const AppLoading = styled.div`
 display: grid;
 place-items: center;
 height: 100vw;
 width: 100%;  
`
const AppLoadingContents = styled.div`
text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

> img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
  `
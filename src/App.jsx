import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Buttons from './Buttons.jsx'
import Post from './Post.jsx'
import Footer from './Footer.jsx'

function App(props) {
  return(
  <div>
    <Header/>
    <Buttons/>
    <Post type = "General" hcolor = "#597567" user = "asdf"/>
    <Post type = "Event" hcolor = "#755959" user = "womp womp"/>
    <Post type = "Club" hcolor = "#595d75" user = "Harold"/>
    <Post type = "Study Help" hcolor = "#7a7732" user = "cbaker_04"/>
    <Post type = "Missed Connections" hcolor = "#725975" user = "asdf"/>
    <Footer/>
  </div>);
}

export default App

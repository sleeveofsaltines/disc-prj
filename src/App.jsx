import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Header from './Header.jsx'
import Buttons from './Buttons.jsx'
import Post from './Post.jsx'
import Footer from './Footer.jsx'
import ContactForm from './ContactForm.jsx'

function Home(){
  return(
    <div>
      <Header/>
      <Buttons/>
      <Post type = "General" hcolor = "#597567" idnum={1} postText = {"Currently this page (Home) is most fully implemented. The NavBar links to pages that are not yet constructed, but routed nonetheless. The footer, also links to some pages."+
                                                                        "The buttons and icons toggle visually, however don't yet filter or pop up comments, still, please enjoy clicking on them. Hover over the user icons to see a display card describing the user's name, major, and bio."}/>
      <Post type = "Event" hcolor = "#755959" idnum={3} postImg="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D1228364875959463&f=1&nofb=1&ipt=170043c47661b7376dfc9b0b343d6636e05ac818bb27a10bb4025606c2bc8f24"/>
      <Post type = "Club" hcolor = "#595d75" idnum={0} postImg = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F564x%2F95%2F03%2F2e%2F95032e5aaf1fe43bc796c95004e6b92a.jpg&f=1&nofb=1&ipt=0fdf60b33184c7e20ed6c622b0744ea75192355777c1a7022ca484e7474cdd74" postText={"We'll be here from 10 AM to 4 PM, make sure to show up!"}/>
      <Post type = "Study Help" hcolor = "#7a7732" idnum={8} postText={"Hey would anyone happen to have any advice on learning how to do row echelon reduction for EA1? Any resources that people could recommend would be much appreciated!"}/>
      <Post type = "Missed Connections" hcolor = "#725975" idnum={6} postText="I was the dude in the blue shirt you talked with at Backlot around 2 the other day. I only thought to ask for your number after, so I'm hoping you see this now (:"/>
      <Footer/>
    </div>
  )
}

function About(){
  return(
  <div>
    <Header/>
    <Post type = "General" hcolor = "purple" user = "Hayley" postText={<p>Hello and welcome to the Wildcat Bulletin! <br/><br/> The goal of this site is to act as a digital version of the
                                                                        bulletins found in our lovely dining halls. It can be hard meeting people in college, so the hope is that by keeping students informed
                                                                        of current events and issues on campus, more people will be encouraged to go out and find new friends. <br/><br/>
                                                                        Note that posts are color coded based on their type (ex: General posts are green, Events red, Clubs blue, Study Help, and Missed Connections pink)
                                                                        to make it easier for users to find the type of post they're looking for. <br/><br/>We're happy to have you here so please take a look around!</p>}/>
    <Footer/>
  </div>
  )
}

function Contact() {
  return(
    <div text-align = "center">
      <Header/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

function Messages() {
  return(
    <div text-align = "center">
      <Header/>
      <p className='unbuilt'>TBD</p>
      <Footer/>
    </div>
  );
}

function Following() {
  return(
    <div text-align = "center">
      <Header/>
      <p className='unbuilt'>TBD</p>
      <Footer/>
    </div>
  );
}

function Pinned() {
  return(
    <div text-align = "center">
      <Header/>
      <p className='unbuilt'>TBD</p>
      <Footer/>
    </div>
  );
}

function Settings() {
  return(
    <div text-align = "center">
      <Header/>
      <p className='unbuilt'>TBD</p>
      <Footer/>
    </div>
  );
}


function Routestuff(){
    return(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="messages" element={<Messages />}/>
          <Route path="following" element={<Following />}/>
          <Route path="pinned" element={<Pinned />}/>
          <Route path="settings" element={<Settings />}/>        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return(
    <div>
    <Routestuff/>
    </div>
  );
}

export default App

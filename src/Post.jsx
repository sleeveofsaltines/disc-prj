import React, { useState } from 'react';
import Cards from './Cards.jsx'



function Post({hcolor, user, idnum, postText, postImg}){
    const style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        backgroundColor: hcolor,
        borderStyle: "solid",
        borderColor: hcolor,
        borderRadius: "15px",
        borderWidth: "5px 2px 12px 2px",
        margin: "30px auto auto auto",
        width: "85%",
        maxWidth: "600px",
        minWidth:"screen",
        position: "relative",
        zIndex:"1",
    }

    const p_style = {
        padding: "2% 3% 3% 3%",
        backgroundColor: "#ffffff",
    }

    const lcircle = {
        height: "10px",
        width: "10px",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        position: "absolute",
        top: "0",
        margin: "2px 5px 10px",
    }
    const rcircle = {
        height: "10px",
        width: "10px",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        position: "absolute",
        top: "0",
        top: "2px",
        right: "5px",
    }

    const pin = {
        position: "absolute",
        bottom: "-8px",
        right: "6px",
        width: "22px",
        height: "22px",
        }

    const post_it = {
        position: "absolute",
        bottom: "-8px",
        right: "38px",
        width: "22px",
        height: "22px",
        }

    const avatar = {
        position: "absolute",
        bottom: "-9px",
        left: "3px",
        width: "35px",
        height: "21px",
        zIndex:"2",
        }

    const usrname = {
        position: "absolute",
        left: "40px",
        bottom: "-9px",
        color: "#ffffff",
        zIndex:"2",
        }

    const img_style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        margin: "auto auto",
        width: "90%",
        maxWidth: "550px",
        maxHeight: "1000px",
        position: "relative",
        zIndex:"1",
        padding: "0% 0% 1% 0%",
    }

    const showCard = () => {
        setCardVis("view_card")
    }

    function unshowCard() {
        setCardVis("no_card")
    }
    const [cardVis, setCardVis] = useState("no_card")

    const [pinSrc, setPinSrc] = useState('https://pic.onlinewebfonts.com/user/icons_7947.svg?width=5');

    const changePinSrc = () => {
        if(pinSrc == 'https://pic.onlinewebfonts.com/user/icons_7947.svg?width=5')
            setPinSrc('https://pic.onlinewebfonts.com/user/icons_7948.svg?width=5');
        else
            setPinSrc('https://pic.onlinewebfonts.com/user/icons_7947.svg?width=5');
    }

    const [postSrc, setPostSrc] = useState('https://pic.onlinewebfonts.com/thumbnails/animations_534903.svg?width=5&config=eyJMaW5lIjpbeyJEdXJhdGlvbiI6Nzg4LCJXaWR0aCI6NSwiQ29sb3IiOiIjZmZmZmZmIn0seyJEdXJhdGlvbiI6MTAwLCJXaWR0aCI6NSwiQ29sb3IiOiIjZmZmZmZmIn0seyJEdXJhdGlvbiI6MTgxOSwiV2lkdGgiOjUsIkNvbG9yIjoiI2ZmZmZmZiJ9LHsiRHVyYXRpb24iOjU4LCJXaWR0aCI6NSwiQ29sb3IiOiIjZmZmZmZmIn1dLCJCb3giOnsiV2lkdGgiOiIyNTYiLCJIZWlnaHQiOiIyNTYifSwiQ29uZmlnIjp7IldpZHRoIjozLCJPcGFjaXR5IjoiMSIsIlNlcXVlbnRpYWwiOnRydWUsIkFuaW1hdGUiOiJMaW5lYXIiLCJDb2xvciI6IiMwMDAwMDAiLCJSZXZlcnNlIjpmYWxzZX19');

    const changePostSrc = () => {
        if(postSrc == 'https://pic.onlinewebfonts.com/thumbnails/animations_534903.svg?width=5&config=eyJMaW5lIjpbeyJEdXJhdGlvbiI6Nzg4LCJXaWR0aCI6NSwiQ29sb3IiOiIjZmZmZmZmIn0seyJEdXJhdGlvbiI6MTAwLCJXaWR0aCI6NSwiQ29sb3IiOiIjZmZmZmZmIn0seyJEdXJhdGlvbiI6MTgxOSwiV2lkdGgiOjUsIkNvbG9yIjoiI2ZmZmZmZiJ9LHsiRHVyYXRpb24iOjU4LCJXaWR0aCI6NSwiQ29sb3IiOiIjZmZmZmZmIn1dLCJCb3giOnsiV2lkdGgiOiIyNTYiLCJIZWlnaHQiOiIyNTYifSwiQ29uZmlnIjp7IldpZHRoIjozLCJPcGFjaXR5IjoiMSIsIlNlcXVlbnRpYWwiOnRydWUsIkFuaW1hdGUiOiJMaW5lYXIiLCJDb2xvciI6IiMwMDAwMDAiLCJSZXZlcnNlIjpmYWxzZX19')
            setPostSrc('https://pic.onlinewebfonts.com/user/icons_7949.svg?width=5');
        else
            setPostSrc('https://pic.onlinewebfonts.com/thumbnails/animations_534903.svg?width=5&config=eyJMaW5lIjpbeyJEdXJhdGlvbiI6Nzg4LCJXaWR0aCI6NSwiQ29sb3IiOiIjZmZmZmZmIn0seyJEdXJhdGlvbiI6MTAwLCJXaWR0aCI6NSwiQ29sb3IiOiIjZmZmZmZmIn0seyJEdXJhdGlvbiI6MTgxOSwiV2lkdGgiOjUsIkNvbG9yIjoiI2ZmZmZmZiJ9LHsiRHVyYXRpb24iOjU4LCJXaWR0aCI6NSwiQ29sb3IiOiIjZmZmZmZmIn1dLCJCb3giOnsiV2lkdGgiOiIyNTYiLCJIZWlnaHQiOiIyNTYifSwiQ29uZmlnIjp7IldpZHRoIjozLCJPcGFjaXR5IjoiMSIsIlNlcXVlbnRpYWwiOnRydWUsIkFuaW1hdGUiOiJMaW5lYXIiLCJDb2xvciI6IiMwMDAwMDAiLCJSZXZlcnNlIjpmYWxzZX19');
    }
    
    return(
        <div>
        <span style={style}>
            <span style={lcircle}></span>
            <span style={rcircle}></span>
            <p style={p_style}>
                <img style={img_style} src={postImg} alt="" />
                {postText}
            </p>
            <input type='image' 
            onMouseOver={() => showCard()}
            onMouseLeave={() => unshowCard()}
            src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" alt="User icon" style={avatar}/>
            <span style={usrname}>{user}</span>
            <input type="image" src={pinSrc} style={pin} onClick={changePinSrc} alt = "A push pin" />
            <input type ="image" src={postSrc}  onClick={changePostSrc} alt="Two post-its with a pin" style={post_it}/>
        </span>
        <span className = {cardVis}>
            <Cards user_id={idnum}/>
        </span>
        </div>
    );
}
export default Post
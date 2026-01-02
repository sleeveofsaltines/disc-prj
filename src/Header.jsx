import NavBar from './NavBar.jsx'
function Header(){
    const style = {
        backgroundColor: "#202033",
        width:"100%",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        fontSize:"small",
        position:"sticky",
        top:"0",
        zIndex:"5",
    }
    const img_style = {
        height: "8vw",
        width: "auto",
        maxHeight: "40px",
        padding:"14px 0px 14px 10px",
    }
    
    
    return(
        <header style = {style}>
            <img style = {img_style} src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
            />
            <h1>Wildcat Bulletin</h1>
            <span><NavBar/></span>
        </header>
    );
}
export default Header
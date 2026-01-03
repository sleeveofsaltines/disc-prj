function ContactForm(){

    const form_style = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
    }

    const box_style = {
        backgroundColor: "white",
        width:"270px",
        margin:"10px",
    }

    const label_style = {
        margin:"10px 0px 5px 0px",
    }

    const mess_style = {
        backgroundColor: "white",
        height:"140px",
        width:"270px",
        margin:"10px",
    }

return(
    <div>
        <form style={form_style} action="">
            <label style={label_style} htmlFor="fname">First Name: </label>
            <input style={box_style} type="text" id="fname"/>

            <label style={label_style} htmlFor="lname">Last Name: </label>
            <input style={box_style} type="text" id="lname"/>

            <label style={label_style} htmlFor="email">Email: </label>
            <input style={box_style} type="text" id="email"/>

            <label style={label_style} htmlFor="message">Message: </label>
            <input style={mess_style} type="text" id="message"/>   

            <input className="inactive" type="submit" />
        </form>
        
    </div>
) 
}
export default ContactForm
function ProfilePicture() {
    //01. No (e) event
    // const imageUrl = './src/assets/profile.jpg'
    // const handleClick  = () => console.log("Oh No!");


    // 02. Use (e) event
    const imageUrl = './src/assets/profile.jpg'
    const handleClick  = (e) => e.target.style.display = "none";
    
    return (
        // <img onClick={handleClick} src={imageUrl}/>
        <img onClick = {(e) => handleClick(e)} src={imageUrl}/>
    );
}

export default ProfilePicture
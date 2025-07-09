import style from './Button.module.css'

function Button() {

    const styles = {
        backgroundColor: "rgb(0, 194, 188)",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
    }
    
    return (

        <>
            <button className= "button2">External CSS Button</button>
            <br /><br />
            <button className={style.button}>Module CSS Button</button>
            <br /><br />
            <button style={styles}>Inline CSS Button</button>
        </>
    );
}

export default Button
const Button = ({ color, text }) => {
    return <button 
            style={{ backgroundColor: color }} 
            class="btn">
                {text}
                </button>
}

export default Button

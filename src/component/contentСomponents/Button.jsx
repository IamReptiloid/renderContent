function Button({children, ...props}) {
    if (props.hasOwnProperty('visible') && !props.visible) {
        return
    }
    return (
        <button 
            className="button"
            style={props}
        >
            {children}
        </button>
    );
}

export default Button;
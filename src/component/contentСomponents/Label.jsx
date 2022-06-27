function Label({children, ...props}) {
    if (props.hasOwnProperty('visible') && !props.visible) {
        return
    }
    return (
        <span 
            className="label"
            style={props}
        >
            {children}
        </span>
    );
}

export default Label;
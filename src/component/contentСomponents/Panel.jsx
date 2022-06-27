import React from 'react';
import '../../style/Panel.scss'

function Panel({children, ...props}) {
    if (props.hasOwnProperty('visible') && !props.visible) {
        return
    }
    return (
        <div 
            className="panel" 
            style={props} 
        >
            {children}
        </div>
    );
}

export default Panel;
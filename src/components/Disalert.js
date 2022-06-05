import React from 'react'

function Disalert(props) {
    return (
        props.alertd  && <div className={`alert alert-${props.alertd.type}`} role="alert">
            {props.alertd.msg}
        </div>
    )
}

export default Disalert
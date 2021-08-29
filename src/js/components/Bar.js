import React from 'react';

function Bar(props){

  var style = {
    width: props.range,
    animation: 'move 1s linear',
}

    return (<a className="dropdown-item text-white" href="#">
    {props.skill}
    <div className="progress">
        <div className="progress-bar bg-neon" style={style}>
        <style>{`
            @keyframes move {
                 0% { width: 0; }
                 100% { width: props.range; }
            }
        `}</style>
        </div>
      </div>
</a>)
}

export default Bar;
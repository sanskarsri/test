import React from 'react';

function WorkCard(props){

    var style = {
        backgroundImage: `url(${ process.env.PUBLIC_URL + props.img})`,
    }
    var stylebtn = {
      backgroundColor: props.btn,
  }
    return (<div className="works_card">
    <h2>{props.name}</h2>
    <i className="fas fa-arrow-right"></i>
    <p>{props.desc}.</p>
    <div className="pic" style={style}></div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div className="social">
      <a href={props.link} target="_sanskar"><i className="fas fa-external-link-alt"></i></a>
      {/* <i class="fab fa-twitter"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-github"></i> */}
    </div>
    <button style={stylebtn}>
    </button>
  </div>)
}

export default WorkCard;
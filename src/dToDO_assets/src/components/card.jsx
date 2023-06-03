import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function Card(props) {
  const cardStyle = {
    width: "240px",
    borderRadius: "7px",
    margin: "16px",
    background: "#fff",
    float: "left",
    padding: "10px",
  };
  const h1Style = {
    fontSize: "1.4em",
    marginBottom: "6px",
    borderBottom:"1px solid #ccc",
  };
  const pStyle = {
    fontSize: "1.1em",
    marginBottom: "10px",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
  };
  const btnStyle = {
    position: "relative",
    float: "right",
    marginRight: "10px",
    color: "red",
    border: "none",
    height: "36px",
    cursor: "pointer",
    background:"transparent",
    outline: "none",
  };
  function handleClick(id) {
    props.onDelete(props.id)
  }
  return (
    <div style={cardStyle}>
      <h1 style={h1Style}>{props.title}</h1>
      <p style={pStyle}>{props.content}</p>
      <button onClick={handleClick} style={btnStyle} id={props.key}><DeleteIcon/></button>
    </div>
  );
}

export default Card;

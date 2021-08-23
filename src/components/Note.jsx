import React from "react";

// Material Icons
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => {props.onDelete(props.id)}} aria-label="delete">
        <DeleteRoundedIcon />
      </button>
    </div>
  );
}

export default Note;

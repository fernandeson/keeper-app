import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// Material Icons
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [note, setNote] = useState({
    key: "",
    id: "",
    title: "",
    content: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
        key: uuidv4(),
        id: uuidv4()
      };
    })
  }

  function submitNote(e) {
    props.onAdd(note);
    e.preventDefault();
    setNote({
      key: "",
      id: "",
      title: "",
      content: ""
    });
  }

  function expand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
          autoComplete="off"
          />
          )
        }
        <textarea
          onChange={handleChange}
          onClick={expand}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={note.content}
          autoComplete="off"
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote} aria-label="add">
            <AddRoundedIcon />
          </Fab>
        </Zoom>

        

      </form>
    </div>
  );
}

export default CreateArea;
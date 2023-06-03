import React,{useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [isExpanded,setExpanded]= useState(false);
    const [note,setNote]= useState({
        title:'',
        content:'',
    });

    function handleChange(e){
    const {name,value} = e.target;

    setNote({
      ...note,
        [name]:value,
    });
    }
    function handleSubmit(e){
        e.preventDefault();
        props.onadd(note);
        setNote({
            title:'',
            content:'',
        });
    }
    function expand(){
        setExpanded(true);
    }
  return (
    <div>
      <form className="create-note">
        {isExpanded?<input name="title" onChange={handleChange} value={note.title} placeholder="Title" />:null}
        <textarea onClick={expand} name="content" onChange={handleChange} value={note.content}placeholder="Take a note..." rows={isExpanded?"5":"1"} />
        <Zoom in={isExpanded}>
        <Fab onClick={handleSubmit}><AddIcon/></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

import { useContext } from "react";
import { EditorContext } from "../context/editorContext.jsx";

function ToolButtons() {

  const { dispatch } = useContext(EditorContext);


  return (
    <div className="tools">
      <button type="button" onClick={() => dispatch({ type: "rotated_left" })}>
        ↺ Rotate left
      </button>
      <button type="button" onClick={() => dispatch({ type: "rotated_right" })}>
        ↻ Rotate right
      </button>
      <button type="button" onClick={() => dispatch({ type: "flip_toggled" })}>
        ⇆ Flip
      </button>
      <button
        type="button"
        className="tools-reset"
        onClick={() => dispatch({ type: "edits_reset" })}
      >
        Reset
      </button>
      <button
        type="button"
        className="straighten"
        onClick={() => dispatch({ type: "straighten" })}
      >
        Straighten
      </button>
    </div>
  );
}

export default ToolButtons;

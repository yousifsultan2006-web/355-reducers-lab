import { useContext } from "react";
import { EditorContext } from "../context/editorContext.jsx";

import { PHOTOS } from "../photos.js";

function PhotoStrip() {
  const {  editor, dispatch } = useContext(EditorContext);
  return (
    <nav className="strip">
      {PHOTOS.map((photo) => (
        <button
          key={photo.id}
          type="button"
          className={photo.id === editor.photo ? "thumb thumb-on" : "thumb"}
          onClick={() => dispatch({ type: "photo_chosen", photo: photo.id })}
        >
          <img src={photo.src} alt="" />
          <span>{photo.title}</span>
        </button>
      ))}
    </nav>
  );
}

export default PhotoStrip;

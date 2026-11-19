import { PHOTOS } from "../photos.js";
import { useContext } from "react";
import { EditorContext } from "../context/editorContext.jsx";

function Preview() {
  const { editor } = useContext(EditorContext);
  const photo = PHOTOS.find((p) => p.id === editor.photo);
  const sideways = editor.rotation === 90 || editor.rotation === 270;

  const filter =
    `brightness(${editor.brightness}%) contrast(${editor.contrast}%) ` +
    `saturate(${editor.saturation}%) sepia(${editor.sepia}%)`;
  const transform =
    `rotate(${editor.rotation}deg) scale(${sideways ? 0.66 : 1}) ` +
    `scaleX(${editor.flipped ? -1 : 1})`;

  return (
    <figure className="preview">
      <div className="preview-frame">
        <img
          className="preview-photo"
          src={photo.src}
          alt={photo.title}
          style={{ filter, transform }}
        />
      </div>
      <figcaption className="preview-credit">
        {photo.title} · photo by {photo.author} on Unsplash
      </figcaption>
    </figure>
  );
}

export default Preview;

import { useContext } from "react";
import { EditorContext } from "../context/editorContext.jsx";

const SLIDERS = [
  { name: "brightness", label: "Brightness", max: 200 },
  { name: "contrast", label: "Contrast", max: 200 },
  { name: "saturation", label: "Saturation", max: 200 },
  { name: "sepia", label: "Sepia", max: 100 },
];

function Sliders() {
  const { editor, dispatch } = useContext(EditorContext);
  return (
    <div className="sliders">
      {SLIDERS.map((slider) => (
        <label key={slider.name} className="slider">
          <span className="slider-label">{slider.label}</span>
          <span className="slider-value">{editor[slider.name]}%</span>
          <input
            type="range"
            min="0"
            max={slider.max}
            value={editor[slider.name]}
            onChange={(e) =>
              dispatch({
                type: "slider_moved",
                name: slider.name,
                value: Number(e.target.value),
              })
            }
          />
        </label>
      ))}
    </div>
  );
}

export default Sliders;

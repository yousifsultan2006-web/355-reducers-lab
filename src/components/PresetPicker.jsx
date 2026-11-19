import { useContext } from "react";
import { EditorContext } from "../context/editorContext.jsx";
const CHOICES = [
  { id: "original", name: "Original" },
  { id: "warm", name: "Warm" },
  { id: "noir", name: "Noir" },
  { id: "faded", name: "Faded" },
];

function PresetPicker() {
  const { editor, dispatch } = useContext(EditorContext);
  return (
    <label className="preset-picker">
      Preset
      <select
        value={editor.preset}
        onChange={(e) => dispatch({ type: "preset_chosen", preset: e.target.value })}
      >
        {CHOICES.map((choice) => (
          <option key={choice.id} value={choice.id}>
            {choice.name}
          </option>
        ))}
        <option value="custom" disabled>
          Custom
        </option>
      </select>
    </label>
  );
}

export default PresetPicker;

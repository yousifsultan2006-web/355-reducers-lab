import PresetPicker from "./PresetPicker.jsx";
import Sliders from "./Sliders.jsx";
import ToolButtons from "./ToolButtons.jsx";

function Panel() {
  return (
    <aside className="panel">
      <PresetPicker/>
      <Sliders/>
      <ToolButtons/>
    </aside>
  );
}

export default Panel;

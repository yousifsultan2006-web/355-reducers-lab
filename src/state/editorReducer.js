import {PRESETS} from './presets.js'
export const initialEditor = {
  photo: "fjord",
  preset: "original",
  brightness: 100,
  contrast: 100,
  saturation: 100,
  sepia: 0,
  rotation: 0,
  flipped: false,
};

export function editorReducer(editor, action) {
  switch (action.type) {
    case "slider_moved":
      return { ...editor, [action.name]: action.value };

    case "rotated_left":
      return {
        ...editor,
        rotation: editor.rotation === 0 ? 270 : editor.rotation + 90,
      };

      case "preset_chosen":
      return {
        ...editor,  photo: action.photo};
        
      

       case "rotated_right":
      return {
        ...editor,
        rotation: editor.rotation === 0 ? 270 : editor.rotation - 90,
      };

      case "photo_chosen":
    return {
        ...editor,
        photo: action.photo
    };

      case "flip_toggled":
      return {
        ...editor,
        flipped: editor.flipped ===false ? true : false
      };
    case "edits_reset":
      return {...initialEditor, photo: editor.photo};

      case "straighten":
      return {...editor, rotation: 0, flipped : false };


    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

import {  createContext, useReducer } from "react";

import { editorReducer, initialEditor } from "../state/editorReducer.js";

export const EditorContext = createContext(null);

export function EditorProvider({children}) {
   const [editor, dispatch] = useReducer(editorReducer, initialEditor);

   return (
    <EditorContext.Provider value ={{ editor, dispatch }}>
        {children}
    </EditorContext.Provider>
   );



    
}
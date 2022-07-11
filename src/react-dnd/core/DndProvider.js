import DndContext from "./DndContext";
import { createDragDropManager } from '../../dnd-core'


function DndProvider({ children, backend }) {
    const value = { dragDropManager: createDragDropManager(backend) };
    return <DndContext.Provider value={value}>
        {children}
    </DndContext.Provider>
}

export default DndProvider
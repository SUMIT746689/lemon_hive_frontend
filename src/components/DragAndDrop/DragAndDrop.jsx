"use client"
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ConferenceSidebarLogo } from '../Logo/Conference.Sidebar';

function DragAndDrop({ isActive, handleClick, datas }) {
  const [characters, updateCharacters] = useState(datas);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <div className=" grid gap-4" {...provided.droppableProps} ref={provided.innerRef}>
            {characters.map(({ id, name, thumb, value }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <div onClick={() => handleClick(id)} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <div
                        style={isActive === id ? { boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.20)" } : {}}
                        className={` ${isActive === id ? 'bg-primary  text-white' : ' border border-border_color'} rounded-lg cursor-pointer flex items-center p-2 text-center`}
                      >
                        <ConferenceSidebarLogo />
                        <span className="w-full text-heading_4 sm:text-heading_3 font-bold capitalize">
                          {id}
                        </span>
                      </div>
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DragAndDrop;

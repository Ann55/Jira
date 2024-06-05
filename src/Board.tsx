import { useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
import { DndContext, DragOverlay } from "@dnd-kit/core";

import { Card } from "./Card";
import { BoardColumn } from "./BoardColumn";
import "./Board.css";

export default function Board() {
  const containers = ["Todo", "In progress", "Done"];
  const [activeCard, setActiveCard] = useState(null);
  const [tasks, setTasks] = useState([
    { id: "1", title: "title 1", parent: "Todo" },
    { id: "2", title: "title 2", parent: "Todo" },
    { id: "3", title: "title 3", parent: "Todo" },
    { id: "4", title: "title 4", parent: "Todo" },
    { id: "5", title: "title 5", parent: "Todo" },
  ]);
  const getTaskPos = (id: any) => tasks.findIndex((task) => task.id === id);

  return (
    <div className="board">
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        {containers.map((id) => (
          <BoardColumn key={id} id={id} title={id}>
            {tasks
              .filter((task) => task.parent === id)
              .map((item) => {
                const { id, title } = item;
                return (
                  <Card id={id} key={id}>
                    {title}
                  </Card>
                );
              })}
          </BoardColumn>
        ))}

        <DragOverlay>
          {activeCard ? (
            <Card id={activeCard.id}>{activeCard.title}</Card>
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );

  function handleDragStart(event: any) {
    const { active } = event;
    const task = tasks.find((task) => task.id === active.id);
    setActiveCard(task);
  }

  function handleDragEnd(event: any) {
    const { active, over } = event;

    if (!over) {
      setActiveCard(null);
      return;
    }

    if (active.id === over.id) {
      setActiveCard(null);
      return;
    }

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos).map((task) => {
        if (task.id === active.id) {
          return { ...task, parent: over.id };
        }
        return task;
      });
    });

    setActiveCard(null);
  }
}

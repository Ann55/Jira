import React from "react";
import { useDroppable } from "@dnd-kit/core";
import "./BoardColumn.css";
interface BoardColumnProps {
  id: any;
  title: any;
  children: React.ReactNode;
}
export function BoardColumn(props: BoardColumnProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };

  return (
    <div className="column" ref={setNodeRef} style={style}>
      <div className="column-title">{props.title}</div>
      <p>{props.children}</p>
    </div>
  );
}

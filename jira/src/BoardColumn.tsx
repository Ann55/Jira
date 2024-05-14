import "./BoardColumn.css";

interface BoardColumnProps {
  title: string;
}
export default function BoardColumn({ title }: BoardColumnProps) {
  return (
    <div className="column">
      <div className="column-title">{title}</div>
      <div className="ticket-space"></div>
    </div>
  );
}

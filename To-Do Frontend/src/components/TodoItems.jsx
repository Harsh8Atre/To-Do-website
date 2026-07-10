import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick, onCompleteClick }) => {
  const activeItems = todoItems.filter((item) => !item.completed);
  const completedItems = todoItems.filter((item) => item.completed);

  return (
    <div className="space-y-6">
      {activeItems.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Pending
          </h3>
          {activeItems.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              todoDate={item.dueDate}
              todoName={item.name}
              completed={item.completed}
              onDeleteClick={onDeleteClick}
              onCompleteClick={onCompleteClick}
            />
          ))}
        </div>
      )}

      {completedItems.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
              Completed
            </h3>
            <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-200">
              {completedItems.length}
            </span>
          </div>
          {completedItems.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              todoDate={item.dueDate}
              todoName={item.name}
              completed={item.completed}
              onDeleteClick={onDeleteClick}
              onCompleteClick={onCompleteClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoItems;

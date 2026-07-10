import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    if (!todoName.trim() || !dueDate) return;

    onNewItem(todoName.trim(), dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="rounded-[24px] border border-white/10 bg-slate-950/60 p-4 shadow-inner shadow-slate-950/30 sm:p-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end">
        <div className="flex-1">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Task
          </label>
          <input
            type="text"
            placeholder="What needs your attention?"
            value={todoName}
            onChange={handleNameChange}
            className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-400/30"
          />
        </div>
        <div className="lg:w-56">
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Due date
          </label>
          <input
            type="date"
            value={dueDate}
            onChange={handleDateChange}
            className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/30"
          />
        </div>
        <button
          type="button"
          onClick={handleAddButtonClicked}
          disabled={!todoName.trim() || !dueDate}
          className="rounded-2xl bg-gradient-to-r from-sky-500 to-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:scale-[1.01] hover:shadow-sky-500/30 disabled:cursor-not-allowed disabled:opacity-60 lg:min-w-[110px]"
        >
          Add task
        </button>
      </div>
    </div>
  );
}

export default AddTodo;

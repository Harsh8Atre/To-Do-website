function TodoItem({ id, todoName, todoDate, completed, onDeleteClick, onCompleteClick }) {
  const formattedDate = todoDate
    ? new Date(todoDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  return (
    <div
      className={`rounded-2xl border p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 ${
        completed
          ? "border-emerald-500/30 bg-emerald-500/10"
          : "border-slate-700/70 bg-slate-800/80 hover:border-sky-400/40"
      }`}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <button
            type="button"
            onClick={() => onCompleteClick(id)}
            className={`mt-1 flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-semibold transition ${
              completed
                ? "border-emerald-400 bg-emerald-400 text-slate-950"
                : "border-slate-500 bg-transparent text-transparent hover:border-sky-400"
            }`}
          >
            ✓
          </button>
          <div>
            <p className={`text-base font-semibold ${completed ? "text-slate-400 line-through" : "text-white"}`}>
              {todoName}
            </p>
            <p className={`mt-1 text-sm ${completed ? "text-emerald-300/80" : "text-slate-400"}`}>
              {formattedDate ? `Due ${formattedDate}` : "No deadline set"}
            </p>
          </div>
        </div>
        <button
          type="button"
          className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-2 text-sm font-medium text-rose-200 transition hover:bg-rose-500/20"
          onClick={() => onDeleteClick(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;

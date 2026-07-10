import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useEffect, useState } from "react";
import { addItemToServer, deleteItemFromServer, getItemsFromServer, markItemCompletedOnServer } from "./services/itemsService";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    getItemsFromServer().then((initialItems) => {
      setTodoItems(initialItems);
    });
  }, []);

  const handleNewItem = async (itemName, itemDueDate) => {
    const serverItem = await addItemToServer(itemName, itemDueDate);
    setTodoItems((currentItems) => [...currentItems, serverItem]);
  };

  const handleDeleteItem = async (id) => {
    const deletedId = await deleteItemFromServer(id);
    setTodoItems((currentItems) => currentItems.filter((item) => item.id !== deletedId));
  };

  const handleCompleteItem = async (id) => {
    const updatedItem = await markItemCompletedOnServer(id);
    setTodoItems((currentItems) =>
      currentItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.25),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.18),_transparent_30%),linear-gradient(135deg,_#020617_0%,_#111827_45%,_#0f172a_100%)] px-4 py-8 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-[32px] border border-white/10 bg-slate-900/70 p-6 shadow-[0_30px_80px_rgba(2,6,23,0.5)] backdrop-blur-xl sm:p-8 lg:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <AppName />
            <p className="mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
              Organize your day with a calm, beautiful workspace built for focus.
            </p>
          </div>
          <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-200">
            Stay focused 🌿
          </div>
        </div>

        <AddTodo onNewItem={handleNewItem} />

        {todoItems.length === 0 ? (
          <WelcomeMessage />
        ) : (
          <TodoItems
            todoItems={todoItems}
            onDeleteClick={handleDeleteItem}
            onCompleteClick={handleCompleteItem}
          />
        )}
      </div>
    </div>
  );
}

export default App;

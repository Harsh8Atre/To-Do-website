export const addItemToServer = async (task, date) => {
  const response = await fetch("http://localhost:3000/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task, date }),
  });
  const item = await response.json();
  return mapServerItemToLocalItem(item);
}

export const getItemsFromServer = async () => {
  const response = await fetch("http://localhost:3000/api/todo");
  const items = await response.json();
  return items.map(mapServerItemToLocalItem);
}

export const deleteItemFromServer = async (id) => {
  await fetch(`fetch("https://to-do-website-73my.onrender.com/api/todos")${id}`, {
    method: "DELETE",
  });
  return id;
}

export const markItemCompletedOnServer = async (id) => {
  const response = await fetch(`fetch("https://to-do-website-73my.onrender.com/api/todos")${id}/completed`, {
    method: "PUT",
  });
  const item = await response.json();
  return mapServerItemToLocalItem(item);
}

const mapServerItemToLocalItem = (serverItem) => {
  return {
    id: serverItem._id,
    name: serverItem.task,
    dueDate: serverItem.date,
    completed: serverItem.completed,
    createdAt: serverItem.createdAt,
    updatedAt: serverItem.updatedAt,
  };
}
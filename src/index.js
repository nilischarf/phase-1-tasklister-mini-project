document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const input = document.getElementById("new-task-description");
  const list = document.getElementById("tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value.trim();
    if (task !== "") {
      const item = document.createElement("li");
      item.textContent = task;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = " X ";
      deleteBtn.addEventListener("click", () => {
        list.removeChild(item);
      })

      item.appendChild(deleteBtn, " ");
      list.appendChild(item);
      input.value = "";
    }
  });
});

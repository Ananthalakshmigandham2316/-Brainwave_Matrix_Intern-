function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  taskList.appendChild(li);

  input.value = "";
}

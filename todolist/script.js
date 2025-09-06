function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskValue = taskInput.value.trim();
  
  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskValue;

  // ✅ Mark task as completed on click
  li.addEventListener("click", function() {
    li.classList.toggle("completed");
  });

  // ❌ Delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.style.marginLeft = "10px";
  deleteBtn.onclick = function() {
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}

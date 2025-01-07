const button = document.getElementById("send");
const btn = document.getElementById("daynight");
const input = document.getElementById("input");
const taskList = document.getElementById("taskList");

btn.addEventListener("click", () => {
    if (document.body.classList.toggle("dark-mode")) {
        btn.textContent = '☀️'; // Change to sun icon for light mode
    } else {
        btn.textContent = '🌙'; // Change to moon icon for dark mode
    }
});

button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.className = "task-item";

    // Task text
    const suha = document.createElement("span");
    suha.textContent = input.value;

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = '🖊'; // Pen icon
    editBtn.addEventListener("click", () => {
        const newText = prompt("Enter new text:", suha.textContent);
        if (newText) {
            suha.textContent = newText;
        }
    });

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🪣'; // Trash icon
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li); // Removes the entire task (text and buttons)
    });

    // Append elements to the list item
    li.append(suha, editBtn, deleteBtn);
    taskList.appendChild(li);

    // Clear input field after adding task
    input.value = '';
});

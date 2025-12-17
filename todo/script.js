const form = document.querySelector('form');
const taskholder = document.querySelector('.container p');
const input = document.querySelector('#task');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todo = input.value.trim();
    if (todo === "") return;

    // Create the task container
    const parent = document.createElement('div');
    parent.style.width = "90%";
    parent.style.display = "flex";
    parent.style.justifyContent = "space-between";
    parent.style.marginBottom = "10px";

    // Task text
    const task = document.createElement('span');
    task.textContent = todo;

    // Buttons Container
    const btnGroup = document.createElement('div');

    const doneButton = document.createElement('button');
    doneButton.textContent = "Done";
    doneButton.type = "button"; // Crucial: stops form from resetting
    doneButton.style.width = "60px";
    doneButton.style.marginRight = "5px";
    doneButton.onclick = () => {
        task.style.textDecoration = "line-through";
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";
    deleteButton.style.width = "60px";
    deleteButton.onclick = () => {
        parent.remove();
    };

    btnGroup.append(doneButton, deleteButton);
    parent.append(task, btnGroup);
    taskholder.append(parent);

    input.value = ""; // Clear input
});
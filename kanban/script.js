let taskData = {}
/* let taskData = JSON.parse(localStorage.getItem("tasks"))
console.log(taskData) */
const todo = document.getElementById('todo');
const progress = document.getElementById('progress')
const done = document.getElementById('done')
let draggedElement = null;
const togglemodalbutton = document.getElementById('toggle-modal')
const modal = document.querySelector('.modal')
const closemodal = document.getElementById('closemodal')
const addnewtask = document.getElementById('add-new-task')
const modalbg = document.querySelector('.bg')
const tasks = document.querySelectorAll('.task')

loaddata()
function loaddata() {
    if (localStorage.getItem("tasks")) {
        const data = JSON.parse(localStorage.getItem("tasks"));
        console.log(data);

        for (const col in data) {
            const columnElement = document.getElementById(col);
            data[col].forEach(savedtask => {
                console.log(savedtask);
                createTemplate(savedtask.title, savedtask.desc, columnElement); 
            });
        }
    }
}

tasks.forEach(task=>{
    task.addEventListener('drag', (e)=>{
        //console.log("dragging", e)
        draggedElement = task;
    })
})
function count(){
    [todo, progress, done].forEach(col =>{
        const tasks = col.querySelectorAll('.task')
        const count = col.querySelector('.right')

        taskData[col.id] = Array.from(tasks).map(t=>{
            return{
                title: t.querySelector("h2").innerText,
                desc: t.querySelector('p').innerText
            }
        })
        localStorage.setItem("tasks", JSON.stringify(taskData))

        count.innerText = tasks.length;
    })
}

function addDragEventsOnColumn(column){
    column.addEventListener('dragenter', (e)=>{
        e.preventDefault();
        column.classList.add("hover-over");
    })
    column.addEventListener("dragleave", (e)=>{
        e.preventDefault();
        column.classList.remove("hover-over");
    })
    column.addEventListener('dragover', e => {
        e.preventDefault();
    })
    column.addEventListener('drop', (e)=>{
        e.preventDefault()
        console.log(draggedElement, column)
        column.appendChild(draggedElement);
        column.classList.remove('hover-over')
        count();
    })
}
closemodal.addEventListener('click', (e)=>{
    modal.classList.remove('active')
})
modalbg.addEventListener('click', (e)=>{
    modal.classList.remove('active')
})

togglemodalbutton.addEventListener('click', (e)=>{
    modal.classList.toggle('active')
})

function createTemplate(taskname, taskdesc, column){
    const tempdiv = document.createElement('div');
    const tasktitle = document.createElement('h2');
    const taskdescription = document.createElement('p');
    const deletebutton = document.createElement('button');
    tempdiv.classList.add('task');
    tempdiv.draggable = true;
    tasktitle.id = 'task-name';
    taskdescription.id = 'task-descrip';
    deletebutton.id = 'task-delete';
    deletebutton.innerText = "Delete";

    tasktitle.innerText = taskname;
    taskdescription.innerText = taskdesc;

    tempdiv.append(tasktitle, taskdescription, deletebutton);

    // Append the task to the specified column
    column.appendChild(tempdiv);

    tempdiv.addEventListener('dragstart', (e) => {
        draggedElement = tempdiv;
        count();
    });

    deletebutton.addEventListener('click', (e) => {
        tasktitle.innerText = "";
        taskdescription.innerText = "";
        tempdiv.remove();
        count();
    });
}
addnewtask.addEventListener('click', (e)=>{
    const titleInput = document.getElementById('task-title-input');
    const descInput = document.getElementById('task-desc-input');

    const taskTitle = titleInput.value;
    const taskdesc = descInput.value;

    createTemplate(taskTitle, taskdesc, todo);

    titleInput.value = '';
    descInput.value = '';
    count()
    
    modal.classList.toggle('active');
})

addDragEventsOnColumn(todo)
addDragEventsOnColumn(progress)
addDragEventsOnColumn(done)
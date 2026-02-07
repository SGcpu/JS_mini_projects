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

tasks.forEach(task=>{
    task.addEventListener('drag', (e)=>{
        //console.log("dragging", e)
        draggedElement = task;
    })
})

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

function createTemplate(taskname, taskdesc){
    const tempdiv = document.createElement('div');
    const tasktitle = document.createElement('h2')
    const taskdescription = document.createElement('p')
    const deletebutton = document.createElement('button')
    tempdiv.classList.add('task');
    tempdiv.draggable = true;
    tasktitle.id = 'task-name'
    taskdescription.id = 'task-descrip'
    deletebutton.id = 'task-delete'
    deletebutton.innerText ="Delete"

    tasktitle.innerText = taskname;
    taskdescription.innerText = taskdesc;

    tempdiv.append(tasktitle, taskdescription, deletebutton);
    todo.appendChild(tempdiv)

    tempdiv.addEventListener('dragstart', (e) => {
        draggedElement = tempdiv;
    });

    deletebutton.addEventListener('click', (e)=>{
        tempdiv.remove();
    })

}
addnewtask.addEventListener('click', (e)=>{
    const taskTitle = document.getElementById('task-title-input').value;
    const taskdesc = document.getElementById('task-desc-input').value;

    createTemplate(taskTitle, taskdesc)

    modal.classList.toggle('active');
})

addDragEventsOnColumn(todo)
addDragEventsOnColumn(progress)
addDragEventsOnColumn(done)

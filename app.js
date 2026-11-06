const listDom = document.getElementById("lista")
const submitBtn = document.getElementById("submitbtn")
const filterCheckboxes = document.querySelectorAll('input[type="checkbox"]');       

const tasks = [
    {
        id: "1",
        title: "Coding",
        status: "new",
        priority: "high"
    },
    {
        id: "2",
        title: "Coding",
        status: "doing",
        priority: "low"
    },
    {
        id: "3",
        title: "Coding",
        status: "done",
        priority: "mid"
    },
]

const renderTasks = (tasksRender)=>{
    tasksRender.forEach(elem => {
    const li = document.createElement("li")
    li.innerHTML = `
        <p>Zadanie: ${elem.title}</p>
        <p>Priorytet: ${elem.priority}</p>
        <label for="status-${elem.id}">Status: </label>
        <select class="status-select" data-id="${elem.id}" id="status-${elem.id}">
            <option value="new" ${elem.status === 'new' ? 'selected' : ''}>New</option>
            <option value="doing" ${elem.status === 'doing' ? 'selected' : ''}>Doing</option>
            <option value="done" ${elem.status === 'done' ? 'selected' : ''}>Done</option>
        </select>
    `
    listDom.appendChild(li)
}); 
statusHandlers()
visibleTasks(tasksRender,tasks)
}

function filtering() {
    const all = document.getElementById("all").checked;
    const isNew = document.getElementById("new").checked;
    const doing = document.getElementById("doing").checked;
    const done = document.getElementById("done").checked;

    const filteredTasks = tasks.filter(task => {
        if (all) return true;
        if (task.status === "new" && isNew) return true;
        if (task.status === "doing" && doing) return true;
        if (task.status === "done" && done) return true;
        return false;
    });
    document.getElementById("lista").innerHTML = "";
    renderTasks(filteredTasks);
}

const addTask = (title,priority)=>{
     if (!title || title.trim() === "") { 
        console.error("Title cant be empty");
        return;
    }

    if (tasks.length >= 1000) {
        console.error("You cant add more than 1000 tasks");
        return;
    }

    const newTask = {
        id: Date.now().toString(),
        title,
        status: "new",
        priority
    }

    tasks.push(newTask)
    listDom.innerHTML = ""
    filtering()
}

const changeStatus = (id,newStatus)=>{
    const task = tasks.find(task=>task.id===id)

    if(!task){
        console.error("NO such status")
    }
    
    task.status = newStatus
    filtering()
}

const statusHandlers = () => {
    const statusSelects = document.querySelectorAll(".status-select");

    statusSelects.forEach(select => {
        select.addEventListener("change", (e) => {
            const taskId = e.target.getAttribute("data-id");
            const newStatus = e.target.value;
            changeStatus(taskId, newStatus);
        });
    });
};

const visibleTasks = (visible,tasks)=>{
    const komunikat = document.getElementById("ilosc")
    if(visible.length===0){
        komunikat.innerText = "Brak pasujacych rekordow"
    }
    else{
        komunikat.innerText = `Wyswietlono ${visible.length} z ${tasks.length} rekordow`
    }
}


filterCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("change", (e) => {
        const isNew = document.getElementById("new");
        const doing = document.getElementById("doing");
        const done = document.getElementById("done");
        const all = document.getElementById("all");

        if (e.target.id === "all" && e.target.checked) {
            isNew.checked = false;
            doing.checked = false;
            done.checked = false;
        } else if (e.target.checked) {
            all.checked = false;
        }

        if (!isNew.checked && !doing.checked && !done.checked) {
            all.checked = true;
        }
        filtering();
    });
});

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log("submit clicked");
    const title = document.getElementById("title").value
    const priority = document.getElementById("priority").value
    const errorContainer = document.getElementById("errorContainer")
    
    if(errorContainer){
        errorContainer.textContent = ""
    }
    
    try{
        if (!title || title.trim() === "") {
            throw new Error("Wpisz tytuł zadania!");
        }

        if (!priority || priority === "") {
            throw new Error("Wybierz poprawny priorytet z listy!");
        }
        addTask(title,priority)
        document.getElementById("title").value = ""
    }
    catch(err){
        console.error("Error:", err.message);
        errorContainer.textContent = err.message;
        errorContainer.style.color = "red";
    }
})

filtering()
const listDom = document.getElementById("lista")
const submitBtn = document.getElementById("submitbtn")

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

const renderTasks = (tasks)=>{
    tasks.forEach(elem => {
    const li = document.createElement("li")
    li.innerHTML = `
        <p>${elem.id}</p>
        <p>${elem.title}</p>
        <p>${elem.status}</p>
        <p>${elem.priority}</p>
    `
    listDom.appendChild(li)
    }); 
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
    renderTasks(tasks)
}

renderTasks(tasks)

function filter() {
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

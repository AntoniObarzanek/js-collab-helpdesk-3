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
    const listDom = document.getElementById("lista")
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
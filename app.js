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
    renderTasks(tasks)
}
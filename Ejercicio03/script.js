const ul = document.getElementById("lista-tareas");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => {
    if (!response.ok) throw new Error("Error en el pedido del Recurso!");
    return response.json();
  })
  .then(todos => todos.filter(t => t.completed))
  .then(completadas => {
    completadas.forEach(tarea => {
      const li = document.createElement("li");
      li.textContent = `${tarea.id}: ${tarea.title}`;
      li.classList.add("completada");
      ul.appendChild(li);
    });
  })
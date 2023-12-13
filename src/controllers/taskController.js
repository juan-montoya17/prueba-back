const  { client } = require('../utils/sanity-config');

async function getAllTasks(req, res) {
    try {
        let posts = await client.fetch('*[_type == "task"]')
        const task = posts.map((post) => ({
            id: post._id,
            title: post.title,
            status: post.status,
          }));
        res.status(200).json({
            ok: true,
            results: task});
    } catch (error) {
        res.status(400).json({ 
            ok: false,
            error: 'Error al obtener las tareas.' , error});
  }
}

async function createTask(req, res) {
    try {
        const { title, status } = req.body;
        const newTask = await client.create({_type: "task", title, status})
        const task = {
            id: newTask._id,
            title: newTask.title,
            status: newTask.status,
        };
        return res.status(200).json({
            ok: true,
            results: task});
    } catch (error) {
        return res.status(400).json({ 
            ok: false,
            error: 'Error al crear la tarea.', error });
  }
}

async function updateTask(req, res) {
    try {
        const taskId = req.params.id;
        const { title, status } = req.body;
        const updateTask = await client.patch(taskId).set({title, status}).commit()
        const task = {
            id: updateTask._id,
            title: updateTask.title,
            status: updateTask.status,
        };
        return res.status(200).json({
            ok: true,
            results: task});
    } catch (error) {
        return res.status(400).json({ 
            ok: false,
            error: 'Error al editar la tarea.', error });
  }
}

async function deleteTask(req, res) {
    try {
        const taskId = req.params.id;
        const respuesta = await client.delete(taskId)
        return res.status(200).json({ ok: true });
    } catch (error) {
        return res.status(400).json({ 
            ok: false,
            error: 'Error al eliminar la tarea.', error });
  }
}

module.exports = { getAllTasks, createTask, updateTask, deleteTask };
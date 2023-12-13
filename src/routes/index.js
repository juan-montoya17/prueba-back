const route = require('express').Router();
const { getAllTasks, createTask, updateTask, deleteTask } = require('./../controllers/taskController');
/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Operaciones relacionadas con las tareas
 */

/**
 * @swagger
 * /task:
 *   get:
 *     summary: Obtiene todas las tareas
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Objeto con todas las tareas
 *         content:
 *           application/json:
 *             example:
 *              ok: true
 *              results:
 *               - id: "m8VOqhccr4TPWaaeSLlQcq"
 *                 title: "Tarea 1"
 *                 status: "pending"
 *               - id: "masdahdajhsbdjhasbhj"
 *                 title: "Tarea 2"
 *                 status: "done"
 */
route.get('/task',getAllTasks);

/**
 * @swagger
 * /task:
 *   post:
 *     summary: Agregar una nueva tarea
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             title: "Nueva tarea"
 *     responses:
 *       200:
 *         description: Tarea agregada
 *         content:
 *           application/json:
 *             example:
 *              ok: true
 *              results:
 *               id: "m8VOqhccr4TPWaaeSLlQcq"
 *               title: "Tarea"
 *               status: "done"
 *       400:
 *         description: Error al crear la tarea
 *         content:
 *           application/json:
 *             example:
 *              ok: false
 *              error: "Error al crear la tarea."
 */
route.post('/task', createTask);

/**
 * @swagger
 * /task/{id}:
 *   put:
 *     summary: Actualizar tarea por id
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la tarea
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             title: "Tarea ..."
 *             status: "done"
 *     responses:
 *       200:
 *         description: Tarea actualizada con éxito
 *         content:
 *           application/json:
 *             example:
 *             ok: true
 *             results:
 *               id: "m8VOqhccr4TPWaaeSLlQcq"
 *               title: "Tarea ..."
 *               status: "done"
 *       404:
 *         description: Error al actualizar la tarea
 *         content:
 *           application/json:
 *             example:
 *               error: "Error al editar la tarea."
 */
route.put('/task/:id',updateTask);

/**
 * @swagger
 * /task/{id}:
 *   delete:
 *     summary: Eliminar una tarea
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la tarea 
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarea eliminada
 *         content:
 *           application/json:
 *             example:
 *               ok: true
 *       404:
 *         description: Error al eliminar la tarea
 *         content:
 *           application/json:
 *             example:
 *               error: "Error al eliminar la tarea."
 */
route.delete('/task/:id', deleteTask);

module.exports = route;
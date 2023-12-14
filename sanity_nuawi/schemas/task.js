export default {
    name: 'task',
    title: 'tareas',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'titulo',
        type: 'string',
      },
      {
        name: 'status',
        title: 'estado',
        preview: {
            select: {
              pending: 'pendiente',
              done: 'hecho',
            },
          },
        type: 'string',
      }
    ]
  }

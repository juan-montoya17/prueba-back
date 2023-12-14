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
        initialValue: 'pending',
        options: {
          list: [
            { title: 'Pendiente', value: 'pending' },
            { title: 'Hecho', value: 'done' }
          ]
        },
        type: 'string',
      }
    ]
  }

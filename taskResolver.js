let tasks = [
  {
    id: '1',
    title: 'Développement Front-end',
    description: 'Créer une UI avec React',
    completed: false,
    duration: 4
  },
  {
    id: '2',
    title: 'Backend Auth',
    description: 'Authentification avec Express',
    completed: false,
    duration: 3
  }
];

const taskResolver = {
  Query: {
    task: (_, { id }) => tasks.find(t => t.id === id),
    tasks: () => tasks,
  },
  Mutation: {
    addTask: (_, { title, description, completed, duration }) => {
      const task = { id: String(tasks.length + 1), title, description, completed, duration };
      tasks.push(task);
      return task;
    },
    completeTask: (_, { id }) => {
      const task = tasks.find(t => t.id === id);
      if (task) task.completed = true;
      return task;
    },
    changeDescription: (_, { id, description }) => {
      const task = tasks.find(t => t.id === id);
      if (task) task.description = description;
      return task;
    },
    deleteTask: (_, { id }) => {
      const index = tasks.findIndex(t => t.id === id);
      if (index !== -1) {
        tasks.splice(index, 1);
        return true;
      }
      return false;
    }
  }
};

module.exports = taskResolver;

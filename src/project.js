class project {
  constructor(title) {
    this.title = title;
    this.todo_list = [];
  }

  addTodo(item) {
    this.todo_list.push(item);
  }

  getTodo() {
    return this.todo_list;
  }

  getTitle() {
    return this.title;
  }
}

export { project };

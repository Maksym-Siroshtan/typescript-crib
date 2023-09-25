class Task {
  constructor(public priority: number) {}
}

class TaskList {
  private tasks: Task[] = [];

  public sortByPriority() {
    // Сортировать таск лист по приоритетам
    this.tasks = this.tasks.sort((a, b) => {
      if (a.priority > b.priority) {
        return 1;
      } else if (a.priority === b.priority) {
        return 0;
      } else {
        return -1;
      }
    });
  }

  public addTask(task: Task) {
    this.tasks.push(task);
  }

  public getTask() {
    return this.tasks;
  }

  public count() {
    return this.tasks.length;
  }

  public getIterator() {
    // В данном случае итератор по приоритетам
    return new PriorityTaskIterator(this);
  }
}

interface IIterator<T> {
  // Интерфейс итератора
  current(): T | undefined; // Текущий элемент
  next(): T | undefined; // Следующий элемент
  prev(): T | undefined; // Предидущий элемент
  index(): number; // Индекс элемента
}

class PriorityTaskIterator implements IIterator<Task> {
  private position: number = 0;
  private taskList: TaskList;

  constructor(taskList: TaskList) {
    taskList.sortByPriority(); // Упорядочить по приоритетам
    this.taskList = taskList;
  }

  current(): Task | undefined {
    return this.taskList.getTask()[this.position];
  }
  next(): Task | undefined {
    this.position += 1;
    return this.taskList.getTask()[this.position];
  }
  prev(): Task | undefined {
    this.position -= 1;
    return this.taskList.getTask()[this.position];
  }
  index(): number {
    return this.position;
  }
}

const taskList = new TaskList();
taskList.addTask(new Task(8));
taskList.addTask(new Task(1));
taskList.addTask(new Task(3));

const iterator = taskList.getIterator();
console.log(iterator.current());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.prev());
console.log(iterator.index());

"use strict";
class Task {
    constructor(priority) {
        this.priority = priority;
    }
}
class TaskList {
    constructor() {
        this.tasks = [];
    }
    sortByPriority() {
        // Сортировать таск лист по приоритетам
        this.tasks = this.tasks.sort((a, b) => {
            if (a.priority > b.priority) {
                return 1;
            }
            else if (a.priority === b.priority) {
                return 0;
            }
            else {
                return -1;
            }
        });
    }
    addTask(task) {
        this.tasks.push(task);
    }
    getTask() {
        return this.tasks;
    }
    count() {
        return this.tasks.length;
    }
    getIterator() {
        // В данном случае итератор по приоритетам
        return new PriorityTaskIterator(this);
    }
}
class PriorityTaskIterator {
    constructor(taskList) {
        this.position = 0;
        taskList.sortByPriority(); // Упорядочить по приоритетам
        this.taskList = taskList;
    }
    current() {
        return this.taskList.getTask()[this.position];
    }
    next() {
        this.position += 1;
        return this.taskList.getTask()[this.position];
    }
    prev() {
        this.position -= 1;
        return this.taskList.getTask()[this.position];
    }
    index() {
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
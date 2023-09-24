"use strict";
class DocumentItem {
    constructor() {
        this.setState(new DraftDocumentItemState()); // - Черновик!
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.state.setContext(this);
    }
    publishDoc() {
        this.state.publish();
    }
    deleteDoc() {
        this.state.delete();
    }
}
class DocumentItemState {
    setContext(item) {
        this.item = item; // Установим контекст нужного состояния
    }
}
class DraftDocumentItemState extends DocumentItemState {
    // Логика состояния поста - черновик
    constructor() {
        super();
        this.name = "DraftDocument";
    }
    publish() {
        console.log(`Опубликуем текст документа ${this.item.text}`);
        this.item.setState(new PublishDocumentItemState()); // - Опубликован!
    }
    delete() {
        console.log("Документ удалён");
    }
}
class PublishDocumentItemState extends DocumentItemState {
    // Логика состояния поста - опубликовано
    constructor() {
        super();
        this.name = "PublishDocument";
    }
    publish() {
        console.log("Невозможно опубликовать уже опубликованный документ");
    }
    delete() {
        console.log("Снято с публикации");
        this.item.setState(new DraftDocumentItemState()); // - Черновик!
    }
}
const item = new DocumentItem(); // Новый документ
item.text = "My post!"; // Наполним документ
console.log(item.getState()); // - Черновик!
item.publishDoc(); // Опубликуем текст документа My post!
console.log(item.getState()); // - Опубликован!
item.publishDoc(); // Невозможно опубликовать уже опубликованный документ
item.deleteDoc(); // Снято с публикации
console.log(item.getState()); // - Черновик!

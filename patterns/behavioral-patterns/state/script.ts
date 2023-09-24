class DocumentItem {
  // Логика документа, не захламлена состояниями документа, у состояний реализована своя отдельная логика
  public text: string;
  private state: DocumentItemState;

  constructor() {
    this.setState(new DraftDocumentItemState()); // - Черновик!
  }

  getState() {
    return this.state;
  }

  setState(state: DocumentItemState) {
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

abstract class DocumentItemState {
  // Общий абстрактный класс для реализации состояний
  public name: string;
  public item: DocumentItem;

  public setContext(item: DocumentItem) {
    this.item = item; // Установим контекст нужного состояния
  }

  public abstract publish(): void;
  public abstract delete(): void;
}

class DraftDocumentItemState extends DocumentItemState {
  // Логика состояния поста - черновик
  constructor() {
    super();
    this.name = "DraftDocument";
  }

  public publish(): void {
    console.log(`Опубликуем текст документа ${this.item.text}`);
    this.item.setState(new PublishDocumentItemState()); // - Опубликован!
  }

  public delete(): void {
    console.log("Документ удалён");
  }
}

class PublishDocumentItemState extends DocumentItemState {
  // Логика состояния поста - опубликовано
  constructor() {
    super();
    this.name = "PublishDocument";
  }

  public publish(): void {
    console.log("Невозможно опубликовать уже опубликованный документ");
  }

  public delete(): void {
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

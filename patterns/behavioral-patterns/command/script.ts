class User12 {
  constructor(public userId: number) {}
}

class CommandHistory {
  public commands: Command[] = [];

  push(command: Command) {
    this.commands.push(command);
  }

  remove(command: Command) {
    this.commands = this.commands.filter(
      (c) => c.commandId !== command.commandId
    );
  }
}

abstract class Command {
  public commandId: number;

  abstract execute(): void;

  constructor(public history: CommandHistory) {
    this.commandId = Math.random();
  }
}

class AddUserCommand extends Command {
  constructor(
    private user: User12,
    private receiver: UserService12,
    history: CommandHistory
  ) {
    super(history);
  }

  execute(): void {
    this.receiver.saveUser(this.user);
    this.history.push(this);
  }

  undo(): void {
    this.receiver.deleteUser(this.user.userId);
    this.history.remove(this);
  }
}

class UserService12 {
  saveUser(user: User12) {
    console.log(`Сохраняю пользователя с id ${user.userId}`);
  }

  deleteUser(userId: number) {
    console.log(`Удаляю пользователя с id ${userId}`);
  }
}

class Controller12 {
  receiver: UserService12;
  history: CommandHistory = new CommandHistory();

  addReceiver(receiver: UserService12) {
    this.receiver = receiver;
  }

  run() {
    const addUserCommand = new AddUserCommand(
      new User12(1),
      this.receiver,
      this.history
    );

    addUserCommand.execute();
    console.log(addUserCommand.history);
    addUserCommand.undo();
    console.log(addUserCommand.history);
  }
}

const controller12 = new Controller12();
controller12.addReceiver(new UserService12());
controller12.run();

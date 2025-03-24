export class AppComponent {
  title = 'Hello from BridgeLabz';
  userName: string = '';

  isValidName(): boolean {
    return /^[A-Z][a-zA-Z]{2,}$/.test(this.userName);
  }
}

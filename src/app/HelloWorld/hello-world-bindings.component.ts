import { Component } from '@angular/core';

@Component({
  selector: 'hello-world-bindings',
  templateUrl: 'hello-world-bindings.component.html'
})
export class HelloWorldBindingsComponent {
  fontColor: string = 'teal';
  sayHelloId: number = 1;
  canClick: boolean = false;
  message: string = 'Hello, World!';

  sayMessage() {
    alert(this.message);
  }
}
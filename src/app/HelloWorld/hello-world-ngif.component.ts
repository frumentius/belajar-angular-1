import { Component } from '@angular/core';

@Component({
  selector: 'hello-world-ngif',
  templateUrl: 'hello-world-ngif.component.html'
})
export class HelloWorldNgIfComponent {
  message: string = 'I\'m read only!';
  canEdit: boolean = false;

  onEditClick(): void {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = 'I\'m read only!';
    }
  }
}
import { Component } from '@angular/core';
import { Logger } from './services/logger.service';

@Component({
    selector: 'hello-world-di',
    templateUrl: 'hello-world-dependency-injection.component.html'
})
export class HelloWorldDependencyInjectionComponent {
    count: number = 0;

    constructor(private logger: Logger) { }

    onLogMe(): void {
        this.logger.writeCount(this.count);
        this.count++;
    }
}
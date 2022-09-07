import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent {
    @Input() message: string;
    @Output() close = new EventEmitter<void>();  //void means we don't emit any data

    onClose() {
        this.close.emit();
    }
}
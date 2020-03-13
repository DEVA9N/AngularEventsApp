import { Component, Input, Inject, ViewChild, ElementRef } from '@angular/core'
import { JQ_TOKEN } from './jQuery.service'

@Component({
    selector: 'simple-modal',
    templateUrl: './simple-modal.component.html',
    styles: [`
        .modal-body { height: 250px; overflow-y: scroll; }
    `],
})

export class SimpleModalComponent {
    @Input() title: String
    @Input() elementId: String
    @Input() closeOnBodyClick: String
    @ViewChild('modalcontainer', { static: true }) container: ElementRef

    constructor(@Inject(JQ_TOKEN) private $: any) {

    }

    closeModal() {
        if (this.closeOnBodyClick.toLocaleLowerCase() === "true") {
            this.$(this.container.nativeElement).modal('hide')
        }
    }
}
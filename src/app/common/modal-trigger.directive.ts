import { Directive, OnInit, Inject, ElementRef } from '@angular/core'
import { JQ_TOKEN } from './jQuery.service';

@Directive({
    // [] indicates that this is an attibute not an element
    selector: '[modal-trigger]',

})

export class ModalTriggerDirective implements OnInit {
    private element : HTMLElement
    
    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $ : any) {
        this.element = ref.nativeElement
    }

    ngOnInit(): void {
        this.element.addEventListener('click', e =>{
            this.$('#simple-modal').modal({})
        })
    }

}
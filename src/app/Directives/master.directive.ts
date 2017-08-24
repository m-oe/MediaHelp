import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { SpeakerListService } from '../Domainservices/speakerList.service';
import { Anwender } from '../Domainmodel/Anwender';
/**
 * Add the template content to the DOM unless the condition is true.
 */

@Directive({ selector: '[master]' })
export class MasterDirective {

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
        private speakerService: SpeakerListService) { }

    @Input() set myMaster(master: Anwender) {
        this.speakerService.getActualClient().subscribe((client) => {
            if (master.id === client.id) {
                debugger
                this.viewContainer.clear();
            } else {
                debugger
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
        });
    }
}

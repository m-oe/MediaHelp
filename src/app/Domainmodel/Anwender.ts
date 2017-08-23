export class Anwender {
    id: string;
    isSpeaking: Boolean;
    canSpeak:Boolean;
    name : string;
    constructor(id){
        this.canSpeak= false;
        this.id = id; // ToDo getID method
        this.isSpeaking = false;
        this.name= 'muster ' + id;

    }
}
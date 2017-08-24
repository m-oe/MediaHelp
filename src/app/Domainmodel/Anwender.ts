export class Anwender {
    id: string;
    isSpeaking: Boolean;
    name : string;
    constructor(id){
        this.id = id; // ToDo getID method
        this.isSpeaking = false;
        this.name= 'user ' + id;

    }
}
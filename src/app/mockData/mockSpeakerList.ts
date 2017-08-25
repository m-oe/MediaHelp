import { Anwender } from "../Domainmodel/Anwender";
import { Unterhaltungspool } from "../Domainmodel/Unterhaltungspool";
export const speakerListmock = [
    new Anwender('Murat'),
    new Anwender('Fedi'),
    new Anwender('Fedi'),
    new Anwender('Berkan'),
    new Anwender('Sergej'), 
    
    

]

export const actualclientMock = new Anwender('Fedi');
export const unterhaltungspoolMock: Unterhaltungspool = { anwenderGroup: speakerListmock, speaker: new Anwender('speaker'), master: new Anwender('master') };

import { Anwender } from "../Domainmodel/Anwender";
import { Unterhaltungspool } from "../Domainmodel/Unterhaltungspool";
export const speakerListmock = [
    new Anwender(1),
    new Anwender(2),
    new Anwender(3),
    new Anwender(4),
    new Anwender(5),
    new Anwender(6),
    new Anwender(7),
]

export const actualclientMock = new Anwender('ich');
export const unterhaltungspoolMock: Unterhaltungspool = { anwenderGroup: speakerListmock, speaker: new Anwender('speaker'), master: new Anwender('master') };

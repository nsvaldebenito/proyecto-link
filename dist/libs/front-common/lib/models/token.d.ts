export interface IToken {
    tokenId: string;
    tokenNumber: string;
    tokenStatus: {
        statusId: string;
        statusDescripcion: string;
    };
    device: {
        deviceId: string;
        deviceNumber: string;
        deviceType: string;
        deviceDescription: string;
    };
    wallet: {
        walleId: string;
        walleDescripcion: string;
    };
}
export declare class Token implements IToken {
    tokenId: string;
    tokenNumber: string;
    tokenStatus: {
        statusId: string;
        statusDescripcion: string;
    };
    device: {
        deviceId: string;
        deviceNumber: string;
        deviceType: string;
        deviceDescription: string;
    };
    wallet: {
        walleId: string;
        walleDescripcion: string;
    };
    constructor(tokenId?: string, tokenNumber?: string, tokenStatus?: {
        statusId: string;
        statusDescripcion: string;
    }, device?: {
        deviceId: string;
        deviceNumber: string;
        deviceType: string;
        deviceDescription: string;
    }, wallet?: {
        walleId: string;
        walleDescripcion: string;
    });
    static Build(token: IToken): Token;
    toJSON(): object;
}

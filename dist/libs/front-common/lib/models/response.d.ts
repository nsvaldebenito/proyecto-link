export declare type Response<T> = {
    code: 'OK' | 'ok';
    message: {
        responseCode: 'OK';
        response: T;
    } | {
        responseCode: 'UNEXIST_USER';
        response: any;
    };
} | {
    code: 'error';
    message: any;
};

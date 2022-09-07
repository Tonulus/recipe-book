export class User {
    constructor(
        public email: string,
        public id: string,
        private _token: string,
        private _tokeExpirationDate: Date) {}

    //with defined get, the property _token can be accessed like a property like user.token (without _ before token),
    //however this get method is called
    get token() {
        if (!this._tokeExpirationDate || new Date() >= this._tokeExpirationDate) {
            //return null even if we have the token because the token is expired. Date() is current date.
            return null;    
        }
        return this._token;
    }
}
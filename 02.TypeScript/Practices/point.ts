 
export class Point {

    constructor( private _x? : number, private _y? : number ){}
        
    getPoints(){
        console.log("X : " + this._x);
        console.log("Y : " + this._y);
    }
}


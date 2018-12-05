
export class LikeComponent {

    constructor(private _likesCount : number, private _isSelected : boolean) {}

    onClick(){
        
        this._isSelected === true 
            ? this._likesCount-- 
            : this._likesCount++;
        
        this._isSelected = !this._isSelected;

    }

    likesCount() {
        return this._likesCount;
    }

    isSelected(){
        return this._isSelected;
    }
}
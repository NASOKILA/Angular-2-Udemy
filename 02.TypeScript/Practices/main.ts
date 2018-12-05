import { LikeComponent } from './like.component';


let likeComponent = new LikeComponent(10, true);

let likes : number;
let isSelected : boolean;

likeComponent.onClick();
likes = likeComponent.likesCount();
isSelected = likeComponent.isSelected();

console.log(`LikesCount : ${likes}, IsSelected : ${isSelected}.`)

likeComponent.onClick();
likes = likeComponent.likesCount();
isSelected = likeComponent.isSelected();

console.log(`LikesCount : ${likes}, IsSelected : ${isSelected}.`)

likeComponent.onClick();
likes = likeComponent.likesCount();
isSelected = likeComponent.isSelected();

console.log(`LikesCount : ${likes}, IsSelected : ${isSelected}.`)

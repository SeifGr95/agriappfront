import { User } from './user';

export class Question {
    title:string;
type : string; 
description:string; 
id_user: any;
image : string
constructor(){
    this.id_user = localStorage.getItem('id')
}
}

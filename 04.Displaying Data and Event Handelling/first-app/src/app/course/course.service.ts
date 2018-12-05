import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CourseService {

    constructor(){
    
    }        
    
    public getCourses(){
        return ["Course1", "Course2" ,"Course3"];
    }
}
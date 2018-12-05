
import { AbstractControl, ValidationErrors } from "@angular/forms";
import { resolve } from "../../../node_modules/@types/q";

//We will create a validator function that check is we have an empty space insade our username 
//We name it cannotContainSpace !
export class UsernameValidators {


    //we use the class abstractControl, it returns ValidationErrors or null
    //we declare it as static so now to use it we dont need an instance of the entire class.
    static cannotContainSpace(control : AbstractControl) : ValidationErrors | null {
        
        //we check if we have empty strings in the 'username' !            
        //The control.value is of type 'any' but we need to treat it as a string so we use the keyword 'as'
        if((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace : true }    //we can return additional details insade this object
        }

        return null 
    }


    //we create another static method to check if the username is uniqhe, by using a server.
    //we use a promise for the async operations.
    static shouldBeUnique(control : AbstractControl) : Promise<ValidationErrors | null> {
        
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if(control.value === "mosh") 
                    resolve({ shouldBeUnique: true });   //we can return additional details insade this object
                else 
                    resolve(null)
            }, 2000);
        });
    }
    
}




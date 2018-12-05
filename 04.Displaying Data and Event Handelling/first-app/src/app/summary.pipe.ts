
import { Pipe, PipeTransform } from  '@angular/core'

@Pipe({
    name : 'summary'
})
export class SummaryPipe implements PipeTransform {
    
    //receivce an optional parameter
    //we pass in the characters count that we want the summary to be
    //we can keep adding parameters
    transform(value : string, charactersCount? : number){
        
        if(value === null)
            return null;

        //if we did not pass any charactersCount or we passed a number less than 10 
        //we show the first 50 charactest of the text or if the text is less than that we show it' length. 
        if(charactersCount === null || charactersCount < 10)
            return value.substr(0, Math.min(value.length, 50)) + ' . . .';

        return value.substr(0, Math.min(charactersCount, value.length)) + ' . . .';
    }

}

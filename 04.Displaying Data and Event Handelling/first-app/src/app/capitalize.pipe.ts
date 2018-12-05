
import { Pipe, PipeTransform } from '@angular/core'


@Pipe({
    name : "capitalize"
})
export class CapitalizePipe  implements PipeTransform{

    transform(value : string, args? : any){

        if(value === null)
            return null;

        let words : string[] = value.split(' ');
        
        let filteredWords : string[] = [];

        words.map(word => {
            
            word = this.wordsCheckAndCapitalize(word);
            
            filteredWords.push(word);
            
        });

        this.FirstWordCapitalize(filteredWords);

        return filteredWords.join(' ');
    }

    private wordsCheckAndCapitalize(word: string) {
        word = word.toLowerCase();
        if (word !== 'the' && word !== 'of') {
            word = word.charAt(0).toUpperCase() + word.substring(1);
        }
        return word;
    }

    private FirstWordCapitalize(filteredWords: string[]) {
        let filteredWord = filteredWords[0];
        filteredWord = filteredWord.charAt(0).toUpperCase() + filteredWord.substring(1);
    }
}

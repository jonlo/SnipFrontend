
import { addSnippet } from "../restClient/snippetApi";

export class ActionButtons{
    
    constructor(apiHandler){
        this.apiHandler = apiHandler;
        this.newSnippetButton = document.getElementById('newSnippet');
        this.newSnippetButton.addEventListener('click',()=>{
            this.openNewSnippetMenu();
        })
    }

    openNewSnippetMenu(){
        console.log("open menu new");
    }
}
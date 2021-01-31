
import { addSnippet } from "../restClient/snippetApi";

export class ActionButtons{
    
    constructor(apiHandler){
        this.apiHandler = apiHandler;
        this.container = document.getElementById('addSnippet');
        this.container.style.visibility = "hidden";
        this.newSnippetButton = document.getElementById('newSnippet');
        this.newSnippetButton.addEventListener('click',()=>{
            this.openNewSnippetMenu();
        })
    }

    openNewSnippetMenu(){
        this.container.style.visibility = "visible";
        console.log("open menu new");
    }
}
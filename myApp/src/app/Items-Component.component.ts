import { Component } from '@angular/core';
import { DataService } from './DataService.service';

//Task 1: Creating a component for displaying a list of itms.

@Component({


    // creating properties of the component.
    selector: "items",
    template: `
    <h2> {{ getTitle() }} </h2>
    <ul style="width:20%; float:left;">
        <h3>Language</h3>
        <li *ngFor= "let name of ProgrammingLanguage">
        {{name}}
        </li>
    </ul>

    <ul style="width:20%; float:left;">
        <h3>Author</h3>
        <li *ngFor= "let author of AuthorName">
        {{author}}
        </li>
    </ul>
    `
})

export class ItemsComponent{
    title="List of Programming languages and their authors.";
    ProgrammingLanguage;
    AuthorName;

//Method to return the title of the list
    getTitle(){
        return this.title;
    }

//Defining a constructor for creating an instance of DatService using dependancy injection.
    constructor(service: DataService){
        this.ProgrammingLanguage=service.getProgrammingLanguageName();
        this.AuthorName=service.getAuthorName();
    }
}
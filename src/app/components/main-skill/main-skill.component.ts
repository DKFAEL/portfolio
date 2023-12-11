import { Component } from '@angular/core';

@Component({
  selector: 'app-main-skill',
  templateUrl: './main-skill.component.html',
  styleUrls: ['./main-skill.component.css']
})
export class MainSkillComponent {

  public isMain: boolean = true
  public Html:boolean = false
  public Java:boolean = false
  public Js:boolean = false
  public Angular:boolean = false

  mostrar () {
    this.isMain = true
    this.Angular = false
    this.Html = false
    this.Java = false
    this.Js = false
  }


  esconder (number: number){
    if(number == 1){ this.Html = true } 
    if(number == 2){ this.Java = true } 
    if(number == 3){ this.Js = true } 
    if(number == 4){ this.Angular = true } 
    this.isMain = false
  }


}

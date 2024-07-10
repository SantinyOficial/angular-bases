import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListHComponent {

  public heroNames: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  public deleteHero?:string;

  public deleteLastHero():void{
    this.deleteHero = this.heroNames.pop();
  }

}

import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HEROES } from '../heroes/mock-heroes';
import { HeroService } from '../shared/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [{ // 添加这一项来注入提供器
    provide: HeroService, useClass: HeroService
  }]
})
export class HeroesComponent implements OnInit {

  heroes:Hero[];
  selectedHero: Hero;


  constructor(private heroSevice: HeroService) { }

  ngOnInit(): void {
  	this.getHeroes();
  }

  getHeroes():void{
  	this.heroSevice.getHeroes()
  		.subscribe(heroes=>{
  			this.heroes=heroes;
  		});
  }

  onSelect(hero:Hero):void{
  	this.selectedHero=hero;
  }

}

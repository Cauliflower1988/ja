import { Injectable } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HEROES } from '../heroes/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private messageService: MessageService;

  constructor(messageService: MessageService) { 
  	this.messageService=messageService;
  }

  getHeroes():Observable<Hero[]>{
  	this.messageService.add("HeroService fetched heroes");
  	return of(HEROES);
  }
  
  getHero(id:number):Observable<Hero>{
  	this.messageService.add("HeroService fetched hero based on id");
  	return of(HEROES.find(hero=>hero.id===id));
  }

}

import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }
  recipes = [];
  getRecipes(){
    return this.homeService.getRecipes();
  }

  ngOnInit() {
    this.getRecipes().subscribe(response => {
      this.recipes = response
    })
  }

}
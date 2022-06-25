import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  typesOfTopics: string[] = [
              'Animation',
              'Cartooning',
              'Character Design',
              'Comedy',
              'Design',
              'Djing',
              'Engineering',
              'Game Design'
              ];
  menuOption: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
}

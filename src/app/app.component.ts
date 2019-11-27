import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-class-app';
  loadedFeature = 'students';
  onNavigate(feature: string){
    this.loadedFeature=feature;
  }
}

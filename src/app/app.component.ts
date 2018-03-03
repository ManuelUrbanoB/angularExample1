import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cursoPlatzi  ';
  lugares:any=[
    {plan:'pagado','cercania':1,'dispancia':1,'nombre':'la Panaderia rico pastel'},
    {plan:'pagado','cercania':2,'dispancia':1.8,'nombre':'Floreria muchas flores'},
    {plan:'asdasd','cercania':3,'dispancia' :2,'nombre':'Veterinaria cuida tu animal'},
    {plan:'gratis','cercania':3,'dispancia' :2,'nombre':'Veterinaria cuida tu animal'}

  ];
  lat: number = 51.678418;
  lng: number = 7.809007;
}

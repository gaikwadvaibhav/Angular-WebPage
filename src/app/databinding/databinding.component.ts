import { Component  } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent  {

componentName : string;

  constructor() {
    this.componentName = "Android"
   }

   addition(){
     return 2+2;
   }
 
}

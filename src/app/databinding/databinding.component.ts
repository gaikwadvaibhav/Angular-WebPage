import { Component  } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent  {

componentName : string;
iptype : string;
border : string;

  constructor() {
    this.componentName = "Android"
   this.iptype = "Button"
   this.border = '1px solid green' 
  }

   addition(){
     return 2+2;
   }
 
}

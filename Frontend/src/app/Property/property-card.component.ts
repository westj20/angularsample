import { Component } from "@angular/core"; // Import Component from @angular/core

@Component({
    selector: 'app-property-card', // Use a comma instead of a colon
   templateUrl: 'property-card.component.html',
   styleUrls: ['property-card.component.css']

})
export class PropertyCardComponent {
Property: any = {
    "Id": 1,
    "Name": "Josh House",
    "Type": "House",
    "Price": 12000
}
}
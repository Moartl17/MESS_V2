import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
    public currentAge!: number;
    constructor(){}
    ngOnInit(){
        this.currentAge = calculateAge(new Date(1977, 5, 17));
    } 
}
function calculateAge(birthdate: Date): number 
{
    var today_date = new Date();
    var today_year = today_date.getFullYear();
    var today_month = today_date.getMonth();
    var today_day = today_date.getDate();
    var age = today_year - birthdate.getFullYear();

    if ( today_month < (birthdate.getMonth() - 1))
    {
        age--;
    }
    if (((birthdate.getMonth() - 1) == today_month) && (today_day < birthdate.getDay()))
    {
        age--;
    }
    return age;
}


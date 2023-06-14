import { Component } from '@angular/core';

interface UserName{
  firstName:string,
  lastName:string
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  user:UserName={
    firstName:'Test',
    lastName:'User'
  }

}
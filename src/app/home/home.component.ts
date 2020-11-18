import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],  
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }
  durationInSeconds = 5;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.openFromComponent(AvanadeComponent, {
      duration: this.durationInSeconds * 500,
    });
  }
}


@Component({
  selector: 'popup',
  templateUrl: 'popup.html',
  styles: [`
    .avanade_surprise {
      color: red;
      text-align: center;
    }
  `],
})
export class AvanadeComponent {}
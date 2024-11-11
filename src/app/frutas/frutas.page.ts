import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{IonicModule} from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-frutas',
  templateUrl: './frutas.page.html',
  styleUrls: ['./frutas.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule,IonicModule,RouterLink]
})
export class FrutasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

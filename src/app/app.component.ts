import { Component } from '@angular/core';
import { CrytoApiService } from './cryto-api.service';
import {MatDialog} from '@angular/material';
import { PriceModalComponent } from './price-modal/price-modal.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mSources:Object;
  displayedColumns: string[] = ['position', 'name'];
  constructor(private cryptoData:CrytoApiService, public dialog: MatDialog){
    console.log('app component constructor called');         
  }
  openDialog(c_price, c_name): void {
    const dialogRef = this.dialog.open(PriceModalComponent, {
      data: {price: c_price, name: c_name}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit() {
        //load articles
      //this.cryptoData.initArticles().subscribe(data => this.mArticles = data['articles']);
    //load news sources
    this.cryptoData.initSources()
                   .subscribe(data=> {
                     this.mSources = data.data;
                     //console.log(data);
                   });  
    
    }


  searchArticles(source){
    console.log("selected source is: "+source);
    //this.cryptoData.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }
}

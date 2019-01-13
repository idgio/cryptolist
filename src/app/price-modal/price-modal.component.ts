import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-price-modal',
  templateUrl: './price-modal.component.html',
  styleUrls: ['./price-modal.component.css']
})
export class PriceModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PriceModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 

    }

  ngOnInit() {
  }

}

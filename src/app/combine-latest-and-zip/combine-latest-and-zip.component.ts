import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, combineLatestAll, combineLatestWith, zip } from 'rxjs';

@Component({
  selector: 'app-combine-latest-and-zip',
  templateUrl: './combine-latest-and-zip.component.html',
  styleUrls: ['./combine-latest-and-zip.component.scss']
})
export class CombineLatestAndZipComponent implements OnInit {

  constructor() { }
  myInput1= new FormControl('');
  myInput2= new FormControl('');

  ngOnInit(): void {
    const combined = combineLatest(this.myInput1.valueChanges,this.myInput2.valueChanges);
    combined.subscribe((val)=>{
      console.log("Combine Latest ",val)
    });
    const zipped = zip(this.myInput1.valueChanges,this.myInput2.valueChanges);
    zipped.subscribe((val)=>{
      console.log("Zip ",val)
    });
  }

}

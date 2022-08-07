import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styleUrls: ['./take-until.component.scss']
})
export class TakeUntilComponent implements OnInit,OnDestroy {

  constructor() { }
  myInput= new FormControl('');
  stop$=new Subject<string>();

  ngOnInit(): void {
    this.myInput.valueChanges.pipe(takeUntil(this.stop$)).subscribe((val)=>{
      console.log(val);
    })
  }
  stop()
  {
    this.stop$.next("Stop");
    this.stop$.complete();
  }
  ngOnDestroy(): void {
    this.stop$.next("Stop");
    this.stop$.complete();
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, from, Observable, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent implements OnInit, OnDestroy{

  adds:string[]=['up10%','up20%','buy 1 get 2','buy 2 get 3'];
  subscrbtion!:Subscription
  
  obs = new Observable((observer)=>{
    console.log('observable test')
    let i=0;
    setInterval(() => {
      if(i==this.adds.length){
          observer.complete();
      }
      observer.next(this.adds[i]);
      i++;
    }, 2000);
  })
  // newAds = from(this.adds);
  
  ngOnInit(): void {
    this.subscrbtion = this.obs.subscribe({
      next:(data)=>{console.log(data)},
      error:(err)=>{console.log(err)},
      complete:()=>{console.log('Compleeted...')},
    })

    // this.newAds.pipe(
    //   take(1),
    //   filter((ad)=>ad.includes("up"))
    // ).subscribe({
    //   next:(data)=>{console.log(data)},
    //   error:(err)=>{console.log(err)},
    //   complete:()=>{console.log('Compleeted...')},
    // })

  }

  ngOnDestroy(): void {
    this.subscrbtion.unsubscribe()
  }

}

import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { SubscriptionService } from '../app/service/subscription.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  showGoUp : boolean = false;
  showMain : boolean = false;

  days : string;
  hours : string;
  minutes : string;
  seconds : string;

  emailText : string ="";

  private subscription: Subscription;
  
  public publishDay = new Date('Apr 14 2021 00:00:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  constructor(@Inject(DOCUMENT) private document: Document,
    private subscriptionService : SubscriptionService
    ){
    this.days = "00";
    this.hours = "00";
    this.minutes = "00";
    this.seconds = "00";
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = interval(1000)
           .subscribe(x => { this.getTimeDifference(); });
  }

  private getTimeDifference () {
    let timeDifference = this.publishDay.getTime() - new  Date().getTime();
    if(timeDifference<0){
      this.showMain = true;
    }
    this.allocateTimeUnits(timeDifference);
  }

  private allocateTimeUnits (timeDifference) {
    let secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    let minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    let hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    let daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));

    this.days = daysToDday < 10 ? "0"+daysToDday : ""+daysToDday;
    this.hours = hoursToDday < 10 ? "0"+hoursToDday : ""+hoursToDday;
    this.minutes = minutesToDday < 10 ? "0"+minutesToDday : ""+minutesToDday;
    this.seconds = secondsToDday < 10 ? "0"+secondsToDday : ""+secondsToDday;
  }


  submitEmail(){
    if(this.validateEmail(this.emailText)){
      let emailCaps = this.emailText.toUpperCase();
      this.subscriptionService.getSubscriptionByEmail(emailCaps).then(details => {
        if(details.exists){
          //this.notifyService.showWarning("You are already subscribed...","Subscription");
        }else{
          this.subscriptionService.addSubscription(emailCaps).then(r=>{
            this.emailText = "";
            //this.notifyService.showSuccess("Your email submited successfully...","Subscription");
          }).catch(e=>{
            //this.notifyService.showError("Please try after sometime...","Subscription");
            console.log(e)
          });
        }
      })
    }
  }
  validateEmail(emailText: string) : boolean {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailText)) {
      return true;
    }
    //this.notifyService.showWarning("Please enter proper email...","Subscription");
    return false;
  }

  @HostListener('window:scroll', [])  
  onWindowScroll() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      this.showGoUp = true;
    }else{
      this.showGoUp = false;
    }
  }

  scrollTop(){
    window.scroll(0,0);
  }
  title = 'auxileo-labs';
}

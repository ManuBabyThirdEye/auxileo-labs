import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  

  subscriptionCollectionName = "subscription";

  constructor(private firestore : AngularFirestore) {}

  addSubscription(email : string) : Promise<any>{
    return this.firestore.collection(this.subscriptionCollectionName).doc(email).set({acknowledged : false});
  }

  getSubscriptionByEmail(emailText: any) : Promise<any>{
    return this.firestore.collection(this.subscriptionCollectionName).doc(emailText).get().toPromise();
  }
}

import { Injectable } from '@angular/core';
import { Action, AngularFirestore, DocumentSnapshot, QuerySnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Course } from 'src/bean/bean';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  videoCollectionName = "video";
  blogCollectionName = "blog";
  coursesCollectionName = "courses";

  constructor(private firestore : AngularFirestore) { }

  getVideoList(limit : number) : Promise<QuerySnapshot<any>>{
    if(limit == -1){
      return this.firestore.collection(this.videoCollectionName, ref=>ref.orderBy("priority")).get().toPromise();
    }
    return this.firestore.collection(this.videoCollectionName,ref=>ref.orderBy("priority").limit(limit)).get().toPromise();
  }

  getBlogList(limit : number) : Promise<QuerySnapshot<any>>{
    if(limit == -1){
      return this.firestore.collection(this.blogCollectionName, ref=>ref.orderBy("priority")).get().toPromise();
    }
    return this.firestore.collection(this.blogCollectionName,ref=>ref.orderBy("priority").limit(limit)).get().toPromise();
  }

  getCourseList(limit : number) : Promise<QuerySnapshot<any>>{
    if(limit == -1){
      return this.firestore.collection(this.coursesCollectionName, ref=>ref.orderBy("priority")).get().toPromise();
    }
    return this.firestore.collection(this.coursesCollectionName,ref=>ref.orderBy("priority").limit(limit)).get().toPromise();
  }

  getCourseById(id : string): Observable<Action<DocumentSnapshot<unknown>>>{
    return this.firestore.collection(this.coursesCollectionName).doc(id).snapshotChanges();
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private textSource = new BehaviorSubject('default message');
  private imageSource = new BehaviorSubject('default message');

  currentText = this.textSource.asObservable();
  currentImage = this.imageSource.asObservable();

  constructor() { }

  changeText(text: string) {
    this.textSource.next(text)
  }

  changeImage(image: string) {
    this.imageSource.next(image);
  }

}

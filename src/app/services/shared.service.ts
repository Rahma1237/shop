import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private keywordSubject=new BehaviorSubject<string>("")
  keyword=this.keywordSubject.asObservable()

  updateKeyword(keyword: string) {
    this.keywordSubject.next(keyword)
  }
}

import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-num',
  templateUrl: './num.component.html',
  styleUrls: ['./num.component.css']
})
export class NumComponent implements OnInit {
  result:string='Your data will displayed here..';
  query:string='';
  constructor() { }

  ngOnInit() {
  }
  onEnter(e){
    this.query=e.target.value;
  }
  onFetch(){
    axios.get(`http://numbersapi.com/${this.query}`).then(res=>{this.result=res.data});
  }

}

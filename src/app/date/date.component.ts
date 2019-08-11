import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  result:string='enter date in MM/dd format';
  query:string='';
  constructor() { }

  ngOnInit() {
  }
  onEnter(e){
    this.query=e.target.value;
  }
  onFetch(){
    const date=this.query.split('/');
    const m=parseInt(date[0]);
    const d=parseInt(date[1]);
    if(m<=12 && d>=1 && d<=31){


    axios.get(`http://numbersapi.com/${this.query}/date`).then(res=>{this.result=res.data}).catch(err=>{
      this.result="enter in correct format";
    });
  }else{
    this.result="enter in correct format";
  }
  
  }
}

import { Component, OnInit } from '@angular/core';
import {EventService} from 'src/app/apis/event.service'
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private service : EventService ) { }
  items;
  favoris =[];
  selectedItem
    ngOnInit(): void {
      this.service.getevent()
      .subscribe((data)=>{
        this.items=data;
        console.log(this.items)
      })
      this.service.getuserfavoris()
      .subscribe((data :any[])=>{
        this.favoris=data;
        console.log(data)
      })
    }
    showItem(element){
      this.selectedItem=element
    }
    setfavoris(id){
      this.service.setFavoris(id)
      .subscribe((data)=>{
                console.log(data)
                this.favoris.push(data)
      })
    }

    isfavoris(id_event){
     
      let x=this.favoris.find((f)=> f.id_event === id_event)
      if(x){
        return true}
        else return false

    }
  }  
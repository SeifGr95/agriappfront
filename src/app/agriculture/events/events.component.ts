import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/apis/event.service'
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { EventModel } from './event.model'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  
  dateModel: NgbDateStruct;
  user = JSON.parse(localStorage.getItem('user'))

  constructor(private service: EventService, private calendar: NgbCalendar) { }
  items;
  all: any = []
  favoris: any = [];
  selectedItem
  new_answer
  all_active

  is_update: Boolean
  update_id: string

  title
  type

  lieu
  description
  contenu
  today


  ngOnInit(): void {
    console.log("tttt")
    let d = new Date();
    this.today  = {year: d.getFullYear(), month: d.getMonth()+1, day: d.getDate()}

    this.is_update = false
    this.service.getevent()
      .subscribe((data) => {
        console.log("dddd")
        this.items = data;
        this.all = this.items;
        this.all_active = true;
      })

    this.service.getuserfavoris()
      .subscribe((data: any) => {
        this.favoris = data;
      })
  }
  showFavList() {

    this.items = this.all.filter((ev) => this.isFavoris(ev._id))
    this.all_active = false;
  }
  showAllList() {
    this.items = this.all
    this.all_active = true;
  }

  add() {
    let str_date = this.dateModel.year + "-" + this.dateModel.month + "-" + this.dateModel.day;
    let ev = new EventModel(this.title, this.type, this.lieu, str_date, this.description, this.contenu)
    this.service.createevent(ev).subscribe(er => {
      this.all.push(er);
      this.items = this.all
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'evenement ajoutée avec succé',
        showConfirmButton: false,
        timer: 1500
      })
    });

  }
  showEdit(elem) {
    this.is_update = true
    this.update_id = elem._id
    this.title = elem.title
    this.type = elem.type
    this.lieu = elem.lieu
    this.dateModel = { year: parseInt(elem.date.split('-')[0]), month: parseInt(elem.date.split('-')[1]), day: parseInt(elem.date.split('-')[2]) }
    this.description = elem.description
    this.contenu = elem.contenu

  }
  update() {
    let str_date = this.dateModel.year + "-" + this.dateModel.month + "-" + this.dateModel.day;
    let ev = new EventModel(this.title, this.type, this.lieu, str_date, this.description, this.contenu)
    this.service.updateEvent(this.update_id, ev).subscribe((res: Config) => {
      console.log(res)
      if (res.status != "failed") {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'succé de mise a jour',
          showConfirmButton: false,
          timer: 1500
        })
        let x = this.all.findIndex(elem => elem._id == this.update_id)
        if (x != -1) {
          this.all[x] = res.record
          this.title = null
          this.type = null
          this.dateModel = null
          this.lieu = null
          this.description = null
          this.contenu = null

        }
      }
    })
  }

  delete(elem_id) {
    this.service.deleteEvent(elem_id).subscribe(res => {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'evenement supprimée',
        showConfirmButton: false,
        timer: 1500
      })
      this.items = this.items.filter(elem => elem._id != elem_id)

    })
  }

  showItem(element) {
    this.selectedItem = element
  }
  setfavoris(id) {
    if (!this.isFavoris(id))
      this.service.setFavoris(id)
        .subscribe((data) => {
          this.favoris.push(data)
        })
  }

  isFavoris(id_event) {

    let x = this.favoris.findIndex(elem => {
      if(elem && elem.id_event){
       return elem.id_event == id_event
      }
      return -1
    })
    if (x != -1) {
      return true
    }
    else {
      return false
    }

  }
  selectToday() {
    this.dateModel = this.calendar.getToday();
  }
  addToFavoris(_id) {
    this.service.setFavoris(_id).subscribe(data => {
      let result: any = data;
      this.service.getuserfavoris()
        .subscribe((data: any) => {

          this.favoris = data.favoris;
        })
    })
  }
}


export interface Config {

  status: string;
  message: string;
  record: Object
}
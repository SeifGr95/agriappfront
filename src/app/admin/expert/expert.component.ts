import { Component, OnInit } from '@angular/core';
import { ExpertService } from 'src/app/apis/expert.service';
import { RdvService } from 'src/app/apis/rdv.service';
import ExpertModel from 'src/app/viewModels/Expert.model';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { RDVModel } from './rdv.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-expert',
  templateUrl: './expert.component.html',
  styleUrls: ['./expert.component.css'],
})
export class ExpertComponent implements OnInit {
  dateModel: NgbDateStruct;
  expert: ExpertModel;
  expert_list: any = [];
  all: any = [];
  search_txt;
  rdv: RDVModel;
  show_form: Boolean;
  is_update: Boolean;
  btn_message: String;
  today;
  user = JSON.parse(localStorage.getItem('user'));
  lisetSecteur;
  secteur
  listspecialite;
  specialite
  ville_exp
  list_ville = [
    'Ariana',
    'Béja',
    'Ben Arous',
    'Bizerte',
    'Gabes',
    'Gafsa',
    'Jendouba',
    'Kairouan',
    'Kasserine',
    'Kebili',
    'La Manouba',
    'Le Kef',
    'Mahdia',
    'Médenine',
    'Monastir',
    'Nabeul',
    'Sfax',
    'Sidi Bouzid',
    'Siliana',
    'Sousse',
    'Tataouine',
    'Tozeur',
    'Tunis',
    'Zaghouan',
  ];
  constructor(
    private expert_srv: ExpertService,
    private calendar: NgbCalendar,
    private rdv_srv: RdvService
  ) {}

  ngOnInit(): void {
    let d = new Date();
    this.today = {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate(),
    };
    this.expert = new ExpertModel();
    this.rdv = new RDVModel();
    this.rdv.client = this.user._id;

    this.show_form = false;
    this.expert_srv.getExpert().subscribe((data) => {
      this.expert_list = data;
      this.all = this.expert_list;
      console.log(this.all);
    });
    this.expert_srv.getAllsecteur().subscribe((data1) => {
      this.lisetSecteur = data1;
      console.log(this.lisetSecteur)
      this.secteur = this.lisetSecteur[0].title
      this.recuper()
    });
    
  }
  recuper() {
    this.expert_srv.GetByName(this.secteur).subscribe((res) => {
      console.log(this.secteur)
      this.listspecialite = res[0]['Specialite'];
      console.log(this.listspecialite);
    });
  }
  recuperSpecialite(){ 
    this.expert_list = this.all.filter(elem=> elem.Specialite._id == this.specialite)
  }
  filterVille(){
    this.expert_list = this.all.filter(elem=> elem.ville_exp.toLowerCase() == this.ville_exp.toLowerCase())
  }

  addRDV() {
    let str_date =
      this.dateModel.year +
      '-' +
      this.dateModel.month +
      '-' +
      this.dateModel.day;
    this.rdv.date_rdv = str_date;

    console.log(this.rdv);
    this.rdv_srv.create(this.rdv).subscribe((data) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      });
    });
  }
  search() {
    console.log(this.search_txt);
    this.expert_list = this.all.filter(
      (elem) =>
        elem.name.includes(this.search_txt) ||
        elem.email.includes(this.search_txt) ||
        elem.firstname.includes(this.search_txt) ||
        elem.tel_exp.includes(this.search_txt) ||
        elem.ville_exp.includes(this.search_txt) ||
        elem.Specialite._id.includes(this.search_txt)
    );
  }
  selectExpert(elem) {
    this.rdv.expert = elem._id;
    console.log(this.rdv);
  }

  addOrUpdateNews() {
    if (this.is_update) {
      this.expert_srv
        .updateExpert(this.expert._id, this.expert)
        .subscribe((res) => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500,
          });
          this.show_form = false;
          this.expert_list = this.expert_list.map((elem) => {
            if (elem._id == this.expert._id) {
              return this.expert;
            }
            return elem;
          });

          this.expert = new ExpertModel();
        });
    } else {
      console.log(this.expert);
      this.expert_srv.createExpert(this.expert).subscribe((res) => {
        this.expert_list.push(res);
        this.expert = new ExpertModel();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
        });
        this.show_form = false;
      });
    }
  }
  showAddForm() {
    this.expert = new ExpertModel();
    this.btn_message = 'ajouter';
    this.show_form = !this.show_form;
    this.is_update = false;
  }
  showEditForm(elem) {
    this.expert.name = elem.name;
    this.expert.email = elem.email;
    this.expert.firstname = elem.firstname;
    this.expert._id = elem._id;
    this.expert.tel_exp = elem.tel_exp;
    this.expert.ville_exp = elem.ville_exp;
    this.expert.verification = elem.verification;
    this.expert.Specialite = elem.Specialite;
    this.is_update = true;
    this.show_form = true;
    this.btn_message = 'mise a jour';
  }
  delete(id) {
    this.expert_srv.deleteExpert(id).subscribe((r) => {
      this.expert_list = this.expert_list.filter((elem) => elem._id != id);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'the News has been deleted',
        showConfirmButton: false,
        timer: 1500,
      });
    });
  }
}

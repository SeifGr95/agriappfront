import { Component, OnInit } from '@angular/core';
import {ProduitService} from 'src/app/apis/produit.service'
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

  constructor(private srv : ProduitService ) { } //
  produit;
  selectedProduit
    ngOnInit(): void {
      this.srv.getproduit()
      .subscribe((data)=>{
        this.produit=data;
        console.log(this.produit)
      })
  
    }
    showarticle(element){
      
      this.selectedProduit=element
    }
  
  }
  
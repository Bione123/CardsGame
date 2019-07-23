import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carta-coperta',
  templateUrl: './carta-coperta.component.html',
  styleUrls: ['./carta-coperta.component.css']
})
export class CartaCopertaComponent implements OnInit {
 @Input() num
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => {
      this.num = p["num"]
    })
  }
  }



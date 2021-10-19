import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit {

  monitor: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.monitor = 1;
  }

  consultar() {
    this.router.navigate(['/cameras', this.monitor]);
  }

}

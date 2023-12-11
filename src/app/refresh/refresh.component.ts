import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.scss'],
})
export class RefreshComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}

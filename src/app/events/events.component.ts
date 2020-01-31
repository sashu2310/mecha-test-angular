import { Component, OnInit } from '@angular/core';
import { BlockService } from '../block.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = []
  constructor(private _blockService: BlockService) { }

  ngOnInit() {
    // this._blockService.getEvents()
    //   .subscribe(
    //     res => this.events = res,
    //     err => console.log(err)
    //   )
  }

}

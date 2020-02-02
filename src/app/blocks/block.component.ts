import { Component, OnInit } from '@angular/core';
import { BlockService } from '../block.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {

  blockData = {
    id: ''
  };
  firstName;
  userId;
  chain = [];
  peers = [];
  addBlockStatus = false;
  viewChainStatus = false;
  peerStatus = false;
  value = '';
  isEmpty = false;
  constructor(private _blockService: BlockService,
    private _userService: UserService,
    private _router: Router) { }


  ngOnInit() {
    this.firstName = localStorage.firstName;
    this.userId = localStorage._id;
    this._blockService.viewChain(this.userId)
      .subscribe(
        res => {
          if (res.success) {
            console.log(res);
          }
          else {
            console.log('cannot be viewed');
          }
        },
        err => console.log(err)
      )
  }

  addBlock() {
    this.peerStatus = false;
    this.viewChainStatus = false;
    this.addBlockStatus = !this.addBlockStatus;
    console.log(this.addBlockStatus);
  }

  addingBlock() {
    this.addBlockStatus = false;
    this.blockData.id = localStorage._id;
    this._blockService.addBlock(this.blockData)
      .subscribe(
        res => {
          if (res.success) {
            this.viewBlock();
          }
          else {
            console.log('cannot be inserted');
          }
        },
        err => console.log(err)
      )
  }
  viewBlock() {
    this.peerStatus = false;
    this.addBlockStatus = false;
    this.viewChainStatus = true;
    this._blockService.viewChain(this.userId)
      .subscribe(
        res => {
          if (res.success) {
            this.chain = res.data;
            console.log(this.chain.length);
          }
          else {
            console.log('cannot be viewed');
          }
        },
        err => {
          console.log(err);
          this._router.navigate(['/login']);
        }
      )
  }
  viewPeers() {
    this.peerStatus = true;
    this.viewChainStatus = false;
    this.addBlockStatus = false;
    this._userService.viewPeers()
      .subscribe(
        res => {
          if (res.success) {
            this.peers = res.data;
            // this.filterData();
          }
          else {
            console.log('cannot be viewed');
          }
        },
        err => console.log(err)
      )

  }

  // filterData() {
  //   this.peers.forEach((element) => {
  //     if(element._id == this.userId)  {

  //     }
  //   });
  // }
}

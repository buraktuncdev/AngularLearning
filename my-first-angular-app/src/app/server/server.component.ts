import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{
  servercomponentVariable = 'Server Component Variable Binding';
  serverId = 10;
  serverStatus = 'offline';

  serverCreationStatus = 'No server was created'

  allowNewServer = false;


  getServerStatus(){
    return this.serverStatus;
  }
  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    },2000)
  }

  onCreateServer(){
  this.serverCreationStatus = 'Server was created'
  }

  ngOnInit(): void {
  }


}

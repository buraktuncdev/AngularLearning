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

  serverName = '';
  getServerStatus(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    return this.serverStatus
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green': 'red'
  }

  constructor() {

    setTimeout(()=> {
      this.allowNewServer = true;
    },2000)
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created with name: ' + this.serverName
  }

  onUpdateServerName($event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  ngOnInit(): void {
  }


}

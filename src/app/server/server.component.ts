import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {
  serverID = 10;
  serverStat = 'offline';

  constructor() {
    this.serverStat = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor(){
    return this.serverStat === 'online' ? 'green' : 'red';
  }
}

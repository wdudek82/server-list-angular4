import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output()
  serverCreated = new EventEmitter<{
    serverType: string
    serverName: string,
    serverContent: string,
  }>();
  newServerName: string;
  newServerContent: string;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverType) {
    if (this.newServerName && this.newServerContent) {
      console.log(serverType);

      this.serverCreated.emit({
        serverType: serverType,
        serverName: this.newServerName,
        serverContent: this.newServerContent
      });
      this.newServerName = '';
      this.newServerContent = '';
    }
  }

}

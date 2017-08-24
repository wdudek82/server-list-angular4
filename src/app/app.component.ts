import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  serverElements = [
    {type: 'server', name: 'TestServer', content: 'It\'s just a test server'}
  ];

  constructor() {}

  ngOnInit() {}

  onServerAdded(serverData: {serverName: string, serverContent: string, serverType: string}) {
    console.log('add server ' + serverData.serverType);

    this.serverElements.push({
      type: serverData.serverType,
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onDestroy() {
    console.log('onDestroy called!');
    this.serverElements.splice(0, 1);
  }

}

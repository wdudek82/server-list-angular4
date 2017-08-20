import { Component, EventEmitter, OnInit, Output, ViewChild, ElementRef } from '@angular/core';

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
  // newServerName: string;
  // newServerContent: string;
  @ViewChild('serverNameInput') serverNameInput: ElementRef;
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  isEmpty(string) {
    let empty = false;
    if (!string || string.match(/^\s+$/)) {
      empty = true;
    }
    return empty;
  }

  onAddServer(type: string, serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    const name = this.serverNameInput.nativeElement.value;
    const content = this.serverContentInput.nativeElement.value;

    console.log('name: ' + this.isEmpty(name));
    console.log('content: ' + this.isEmpty(content));

    if (!this.isEmpty(name) && !this.isEmpty(content)) {
      this.serverCreated.emit({
        serverType: type,
        serverName: name,
        serverContent: content
      });

      this.serverNameInput.nativeElement.value = '';
      this.serverContentInput.nativeElement.value = '';
    }
  }

}

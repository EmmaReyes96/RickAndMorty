import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('terra') divTerra!: ElementRef<HTMLDivElement>;
  @ViewChild('cloud') divCloud!: ElementRef<HTMLDivElement>;
  @ViewChild('moon') divMoon!: ElementRef<HTMLDivElement>;
  
  
  constructor() {  }

  ngAfterViewInit() {
  }
  
  onMouseMove(event:any){    
    this.divTerra.nativeElement.style.backgroundPositionX = event.offsetX+ 'px'
    this.divTerra.nativeElement.style.backgroundPositionX = (-event.offsetX / 5) + "px"
    this.divTerra.nativeElement.style.backgroundPositionY= (-event.offsetY / 10) + "px"

    this.divCloud.nativeElement.style.backgroundPositionX = (-event.offsetX / 50) + "px"
    this.divCloud.nativeElement.style.backgroundPositionY = (-event.offsetY / 50) + "px"
  }

}

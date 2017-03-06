import {Component, Renderer, ElementRef, ViewChild, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit,OnDestroy{

  public menuInactiveDesktop: boolean; //PC

  public menuActiveMobile: boolean; // 手机

  public profileActive: boolean;

  public topMenuActive: boolean;

  public topMenuLeaving: boolean;

  @ViewChild('scroller') public scrollerViewChild: ElementRef;
  public scroller: HTMLDivElement;
  documentClickListener: Function;

  menuClick: boolean;
  topMenuButtonClick: boolean;

  constructor(public renderer: Renderer) {}

  ngAfterViewInit() {

    // menu 滚动条
    this.scroller = <HTMLDivElement> this.scrollerViewChild.nativeElement;

    //hides the overlay menu and top menu if outside is clicked
    this.documentClickListener = this.renderer.listenGlobal('body', 'click', (event) => {
      if(!this.isDesktop()) {
        if(!this.menuClick) {
          this.menuActiveMobile = false;
        }

        if(!this.topMenuButtonClick) {
          this.hideTopMenu();
        }

        this.menuClick = false;
        this.topMenuButtonClick = false;
      }
    });
  }

  toggleMenu(event: Event) {
    this.menuClick = true;
    if(this.isDesktop()) {
      this.menuInactiveDesktop = !this.menuInactiveDesktop;
      if(this.menuInactiveDesktop) {
        this.menuActiveMobile = false;
      }
    }
    else {
      this.menuActiveMobile = !this.menuActiveMobile;
      if(this.menuActiveMobile) {
        this.menuInactiveDesktop = false;
      }
    }

    if(this.topMenuActive) {
      this.hideTopMenu();
    }

    event.preventDefault();
  }

  hideTopMenu() {
    this.topMenuLeaving = true;
    setTimeout(() => {
      this.topMenuActive = false;
      this.topMenuLeaving = false;
    }, 500);
  }

  isDesktop() {
    return window.innerWidth > 1024;
  }

  ngOnDestroy() {
    if(this.documentClickListener) {
      this.documentClickListener();
    }
  }


}

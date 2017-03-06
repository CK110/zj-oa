import {
  Component, OnInit, NgModule, Input, animate, trigger, state, style, transition,
  ViewEncapsulation
} from '@angular/core';

import { MenuItem } from 'primeng/primeng';
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.html',
})
export class SideBar implements OnInit {

  @Input() items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: '新建流程', icon: 'fa-desktop',
        items: [
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] },
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] },
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] },
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] },
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] }
        ]
      },
      {
        label: '个人办公', icon: 'fa-bookmark',
        items: [
          { label: '工作计划', icon: 'fa-dribbble', routerLink: ['/empty'] },
          { label: '通 讯 录', icon: 'fa-linkedin ' ,routerLink: ['/empty']},
          { label: '工作CASE', icon: 'fa-list-ol ',routerLink: ['/empty']}
        ]
      },
      {
        label: '消息中心', icon: 'fa-desktop',
        items: [
          { label: '发送消息', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '已发消息', icon: 'fa-google', routerLink: ['/errand'] },
          { label: '已收消息', icon: 'fa-android', routerLink: ['/errand'] }
        ]
      },
      {
        label: '信息发布', icon: 'fa-desktop',
        items: [
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] },
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] }
        ]
      },
      {
        label: '业务管理', icon: 'fa-desktop',
        items: [
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] },
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] }
        ]
      },
      {
        label: '车辆管理', icon: 'fa-desktop',
        items: [
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] },
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] }
        ]
      },
      {
        label: '综合查询', icon: 'fa-desktop',
        items: [
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] },
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] }
        ]
      },
      {
        label: '订票管理', icon: 'fa-desktop',
        items: [
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] },
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] }
        ]
      },
      {
        label: '报表统计', icon: 'fa-desktop',
        items: [
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] },
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] }
        ]
      },
      {
        label: '基础数据', icon: 'fa-desktop',
        items: [
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] },
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] }
        ]
      },
      {
        label: '库存管理', icon: 'fa-desktop',
        items: [
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] },
          { label: '公假流程', icon: 'fa-android', routerLink: ['/errand'] },
          { label: '公假续假流程', icon: 'fa-google', routerLink: ['/errand'] }
        ]
      }
    ];
  }

}

@Component({
  selector: '[app-submenu]',
  template: `
       <ul>
            <template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
                <li [ngClass]="{'active-menuitem': isActive(i)}">
                    <a [href]="child.url || '#'" (click)="itemClick($event,child,i)">
                        <i class="fa fa-fw" [ngClass]="child.icon"></i>
                        <span>{{child.label}}</span>
                        <i class="fa fa-fw fa-angle-down" *ngIf="child.items"></i>
                    </a>
                    <ul app-submenu [item]="child" *ngIf="child.items" [@children]="isActive(i) ? 'visible' : 'hidden'" ></ul>
                </li>
            </template>
        </ul>
    `,
  styleUrls: ['./sidebar.css'],
  animations: [
    trigger('children', [
      state('hidden', style({
        height: '0px'
      })),
      state('visible', style({
        height: '*'
      })),
      transition('visible => hidden', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
      transition('hidden => visible', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ],
  encapsulation:ViewEncapsulation.None
})
export class SubMenu {

  @Input() item: MenuItem[];

  @Input() root: boolean;

  activeIndex: number;

  constructor(private router: Router) { }

  itemClick(event: Event, item: MenuItem, index: number)  {
    this.activeIndex = (this.activeIndex === index) ? null : index;

    event.preventDefault();
    if (item.routerLink) {
      this.router.navigate(item.routerLink);
    }
  }

  isActive(index: number): boolean {
    return this.activeIndex === index;
  }
}

@NgModule({
  imports:[CommonModule],
  declarations:[SideBar,SubMenu],
  exports:[SideBar,SubMenu]
})
export class SideBarModule{}

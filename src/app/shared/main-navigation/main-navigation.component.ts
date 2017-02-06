import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MenuItem } from "primeng/primeng";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-ui-main-navigation',
  templateUrl: './main-navigation.component.html',
  styleUrls: ['./main-navigation.component.css']
})
export class MainNavigationComponent implements OnInit {
  currDate = Date.now();
  private opened = false

  toggleMainBar(){
      this.opened = !this.opened;
  }

  constructor() { }

    private menuItems: MenuItem[]

    ngOnInit() {
        this.menuItems = [
            {
                label: "Projects",
                icon: "fa-dashboard",
                items: [
                    {
                        label: "View All",
                        icon: "fa-binoculars",
                        routerLink: ["/pages/project"]
                    },
                    {
                        label: "New",
                        icon: "fa-plus",
                    }
                ]
            },
            {
                label: "Data Objects",
                items: [
                    {
                        label: "View All",
                        icon: "fa-binoculars",
                        routerLink: ["/pages/data-object"]
                    },
                    {
                        label: "New",
                        icon: "fa-plus",
                        routerLink: ["/pages/data-object/edit"]
                    }
                ]
            },
            {
                label: "Maps",
                items: [
                    {
                        label: "View All",
                        icon: "fa-binoculars",
                        routerLink: ["/pages/map"]
                    },
                    {
                        label: "New",
                        icon: "fa-plus",
                        routerLink: ["/pages/map/edit"]
                    }
                ]
            },
            {
                label: "Admin Tools",
                icon: "fa-cog",
                items: [
                    {
                        label: "Users",
                        icon: "fa-users",
                        items: [
                            {
                                label: "View All",
                                icon: "fa-binoculars",
                                routerLink: ["/pages/user"]
                            },
                            {
                                label: "New",
                                icon: "fa-user-plus",
                            }
                        ]
                    },
                    {
                        label: "Clients",
                        icon: "fa-user",
                        items: [
                            {
                                label: "View All",
                                icon: "fa-binoculars",
                                routerLink: ["/pages/client"]
                                
                            },
                            {
                                label: "New",
                                icon: "fa-user-plus",
                            }
                        ]
                    }
                ]
            }
        ];
    }
}
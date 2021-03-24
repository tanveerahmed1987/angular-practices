import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  menu: MenuItem[] = [
    { title: 'Home', link: '#home', icon: 'fa fa-fw fa-home' },
    { title: 'Services', link: '#services', icon: 'fa fa-fw fa-wrench' },
    { title: 'Clients', link: '#clients', icon: 'fa fa-fw fa-user' },
    { title: 'Contacts', link: '#contacts', icon: 'fa fa-fw fa-envelope' },
  ];
}

class MenuItem {
  title: string;
  link: string;
  icon: string;
}

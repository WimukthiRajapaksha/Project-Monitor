import { Component, OnInit } from '@angular/core';

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: '/user_profile', title: 'User Profile',  icon:'ti-user-profile', class: '' },
    { path: '/project_list', title: 'Project List',  icon:'ti-view-list-alt', class: '' },
    // { path: 'typography', title: 'Typography',  icon:'ti-text', class: '' },
    { path: '/submissions', title: 'Submissions',  icon:'ti-pencil-alt2', class: '' },
    { path: '/group_activity', title: 'Group Activity',  icon:'ti-map', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'ti-bell', class: '' },
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'ti-export', class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'app-sidebar-cmp',
    styleUrls: ['./sidebar.component.css'],
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }

}

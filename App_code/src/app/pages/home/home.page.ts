
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // resources = [
  //   {
  //     title: 'Login Pages',
  //     icon: 'sign-in-alt'
  //   },
  //   {
  //     title: 'Profiles Pages',
  //     icon: 'user-circle'
  //   },
  //   {
  //     title: 'Accordion-List',
  //     icon: 'poll-h'
  //   },
  //   {
  //     title: 'Ionic Components',
  //     icon: 'check-circle'
  //   },
  //   {
  //     title: 'Dialog Alert',
  //     icon: 'exclamation-circle'
  //   },
  //   {
  //     title: 'Firebase CRUD',
  //     icon: 'fire'
  //   },
  //   {
  //     title: 'Expandable',
  //     icon: 'file-invoice'
  //   },
  //   {
  //     title: 'Image Gallery',
  //     icon: 'images'
  //   },
  //   {
  //     title: 'Steppers',
  //     icon: 'outdent'
  //   },
  //   {
  //     title: 'App Tour',
  //     icon: 'flag-usa'
  //   },
  //   {
  //     title: 'Charts',
  //     icon: 'chart-pie'
  //   },
  //   {
  //     title: 'Parallax',
  //     icon: 'stream'
  //   },
  //   {
  //     title: 'Timeline',
  //     icon: 'list-ul'
  //   },
  //   {
  //     title: 'Item-Ribbon',
  //     icon: 'award'
  //   },
  //   {
  //     title: 'Payments',
  //     icon: 'money-bill-alt'
  //   },
  //   {
  //     title: 'Forms',
  //     icon: 'archive'
  //   },
  //   {
  //     title: 'Side Menus',
  //     icon: 'bars'
  //   },
  //   {
  //     title: 'Miscellaneous',
  //     icon: 'folder'
  //   },
  //   {
  //     title: 'Native APIs',
  //     icon: 'mobile'
  //   }

  // ];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  simple() {
    console.log('simple login');
    this.router.navigate(['abroad'])
  }
  register() {
    console.log('register');
    this.router.navigate(['register'])
  }

}

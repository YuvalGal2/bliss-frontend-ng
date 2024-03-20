import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent implements OnInit{

  @Input('redirect') redirect!: {showRedirectButton:boolean, url?: string};
  hidden:boolean = true;
  loading:boolean = false;
  constructor(private router:Router) {}
  redirectBack(url: string | undefined): void {
    this.router.navigate([url]);
  }

  setTimers() {
    setTimeout(() => {
      this.loading =  true;
    },300)

    setTimeout(() => {
      this.hidden = false;
      this.loading = false;
    },2000)
  }

  ngOnInit() {
    this.setTimers();
  }


}

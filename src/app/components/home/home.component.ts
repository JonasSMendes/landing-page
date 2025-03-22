import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from "../button/button.component";
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
import { WorkTeamComponent } from "../work-team/work-team.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, ButtonComponent, NewsletterFormComponent, WorkTeamComponent, FooterComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

import { Component, signal } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'app-newsletter-form',
  providers: [
    NewsletterService
  ],
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {

  newsLetterForm!: FormGroup;

  loading = signal(false);

  constructor(private service: NewsletterService) {
    this.newsLetterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }


  submit() {
    this.loading.set(true)
    if (this.newsLetterForm.valid) {
      this.service.sendData(this.newsLetterForm.value.name, this.newsLetterForm.value.email).subscribe({
        next: () => {
          this.newsLetterForm.reset;
          this.loading.set(false);
        }
      });
    }
  }
}

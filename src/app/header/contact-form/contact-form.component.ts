import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm = this.fb.group({
    email: null,
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    message: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }
}

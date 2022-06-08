import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faker } from '@faker-js/faker';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public form: FormGroup;
  public submitting: boolean = false;
  public heroes$: Observable<any>;

  public constructor(private fb: FormBuilder, private router: Router, private httpClient: HttpClient) {
    this.form = this.fb.group({
      website: ['', [Validators.required, Validators.pattern(/^(www\.)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)]],
      about: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      coverPhoto: ['']
    });

    this.heroes$ = this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1/comments');
  }

  public ngOnInit(): void {}

  public get submitDisabled(): boolean {
    return this.form.invalid || this.submitting;
  }

  public onSubmit(): void {
    this.submitting = true;
    setTimeout(() => {
      this.submitting = false;
      this.router.navigate(['/confirmation']);
    }, faker.datatype.number({ min: 5000, max: 10000 }));
  }
}

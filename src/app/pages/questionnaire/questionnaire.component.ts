import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questionnaire',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <h2>Client Questionnaire</h2>
    <form (ngSubmit)="submit()" [formGroup]="questionnaireForm">
      <label>Name*</label><br/><input formControlName="name"/><br/>
      <label>Email*</label><br/><input formControlName="email"/><br/>
      <label>Phone</label><br/><input formControlName="phone"/><br/>
      <label>Business Name</label><br/><input formControlName="businessName"/><br/>
      <label>Goals</label><br/><textarea formControlName="goals"></textarea><br/>
      <label>Must-have features</label><br/><textarea formControlName="mustHaves"></textarea><br/>
      <label>Budget</label><br/><input formControlName="budget"/><br/>
      <button type="submit">Submit</button>
    </form>
    <div *ngIf="message">{{message}}</div>
  `
})
export class QuestionnaireComponent {
  questionnaireForm: FormGroup;
  message='';

  constructor(private fb: FormBuilder, private svc: QuestionnaireService){
    this.questionnaireForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      businessName: [''],
      goals: [''],
      mustHaves: [''],
      budget: ['']
    });
  }

  submit(){
    if(this.questionnaireForm.valid){
      this.svc.submitQuestionnaire(this.questionnaireForm.value).subscribe({
        next: () => { this.message='Submitted successfully'; this.questionnaireForm.reset(); },
        error: (e) => { console.error(e); this.message='Error submitting'; }
      });
    } else {
      this.message='Please fill required fields';
    }
  }
}

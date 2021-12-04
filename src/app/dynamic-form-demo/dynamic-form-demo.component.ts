import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-dynamic-form-demo',
  templateUrl: './dynamic-form-demo.component.html',
  styleUrls: ['./dynamic-form-demo.component.scss']
})
export class DynamicFormDemoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    phoneNumbers: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  get phoneNumbers() {
    return this.profileForm.get('phoneNumbers') as FormArray;
  }

  addAlias() {
    this.phoneNumbers.push(this.formBuilder.control(''));
  }
  
  onSubmit() {
    console.warn(this.profileForm.value);
  }

}

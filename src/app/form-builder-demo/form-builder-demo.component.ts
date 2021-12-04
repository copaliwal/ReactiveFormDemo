import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-form-builder-demo',
  templateUrl: './form-builder-demo.component.html',
  styleUrls: ['./form-builder-demo.component.scss']
})
export class FormBuilderDemoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['']
  });

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}

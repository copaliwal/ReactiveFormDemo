import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from "@angular/forms";

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}

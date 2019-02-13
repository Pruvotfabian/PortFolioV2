import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private af: AngularFireDatabase) {
    this.createForm();
  }
  ngOnInit() {
  }
  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required ],
      email: ['', Validators.required, Validators.email],
      message: ['', Validators.required],
    });
  }
  onSubmit() {
    const {name, email, message} = this.form.value;
    const date = Date();
    let formRequest = { name, email, message, date };
    this.af.database.ref('/messages').push(formRequest);
    this.form.reset();
  }
}
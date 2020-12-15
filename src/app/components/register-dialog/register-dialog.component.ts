import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { User } from '../../models/User';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-register-dialog',
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.css']
})

export class RegisterDialogComponent implements OnInit {

  form: FormGroup;
  hide = true;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<RegisterDialogComponent>,
              @Inject(MAT_DIALOG_DATA) {firstName, lastName, email, passwordPlain, passwordPlainCheck}: User) {
    this.form = fb.group({
      firstName: [firstName, Validators.required],
      lastName: [lastName, Validators.required],
      email: [email, [Validators.required, Validators.email]],
      passwordPlain: [passwordPlain, Validators.required],
      passwordPlainCheck: [passwordPlainCheck, Validators.required]
    });
  }

  ngOnInit(): void {

  }

  save(){
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}

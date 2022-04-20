import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // taskList: TaskModel[] = [];

  form: FormGroup;


  constructor(
    // private  formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    // this.initForm();
  }


  // private initForm() {
  //   this.form = this.formBuilder.group({
  //     task : new FormControl('', Validators.required)
  //   });
  //   const id = Guid.create().toString();
  // }

}

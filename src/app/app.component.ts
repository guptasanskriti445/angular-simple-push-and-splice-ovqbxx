import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  TaskList = [];
  countTask = 0;
  createForm!: FormGroup;
  constructor(private _formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.createForm = this._formBuilder.group({
      tasks: [''],
    });
  }

  // this mathed is use for the push element in to the array
  addTask() {
    if (this.createForm.value.tasks != '') {
      this.TaskList.push(this.createForm.value.tasks);
      this.countTask = this.TaskList.length;
      this.createForm.get('tasks')?.setValue('');
    } else {
      alert('Please insert something!!!');
    }
  }

  // this mathed is get the index of the element of ayyar and splice that form the array as compare the index and splice
  removeTask(index) {
    this.TaskList.splice(index, 1);
    this.countTask = this.TaskList.length;
  }
}

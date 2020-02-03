import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
//import form modules
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  //specify property for a root form group
  customerForm: FormGroup;
  //template for data model(defines the data pass from backend to frontend)
  customer = new Customer();

  constructor() { }

  ngOnInit() {
    //create the instance of the form group....form model(interacts the form value and the states)
    this.customerForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendCatalog: new FormControl(true),

    });
  }

  save() {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }
}

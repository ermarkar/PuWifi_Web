import { Component, OnInit } from '@angular/core';
import { MailService } from '../../services/common/mail.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: "contact-us",
  templateUrl: "contact-us.component.html"
})
export class ContactUsComponent implements OnInit {

  contactUsForm: FormGroup;

  constructor(private mailService: MailService) { }

  ngOnInit() {
    this.contactUsForm = new FormGroup({
      name: new FormControl("", Validators.compose([
        Validators.required
      ])),
      emailId: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      message: new FormControl("", Validators.compose([
        Validators.required
      ]))
    });
  }

  mailUs(data) {
    this.mailService.sendMail(data).subscribe((response: any) => {
      if (response.message) {
        var toastHTML = 'Thanks for contacting us!!';
        M.toast({ html: toastHTML, classes: "rounded" });
        this.contactUsForm.reset();
      } else {
        var toastHTML = 'Something went wrong :(';
        M.toast({ html: toastHTML, classes: "rounded" });
      }
    });
  }
}

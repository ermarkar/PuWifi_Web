import { Component } from '@angular/core';
import { MailService } from '../../services/common/mail.service';

@Component({
  selector: "contact-us",
  templateUrl: "contact-us.component.html"
})
export class ContactUsComponent {

  constructor(private mailService: MailService) { }

  mailUs() {
    let data;
    this.mailService.sendMail(data).subscribe((response) => {
      console.log("data");
    });
  }
}

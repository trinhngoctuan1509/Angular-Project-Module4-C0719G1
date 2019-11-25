import { Component, OnInit } from '@angular/core';
import { HelpsServiceService} from "src/app/services/helps-service.service";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})

export class HelpComponent implements OnInit {
public helps;
public formSendHelpMessage:FormGroup;

  constructor(
    private helpsService:HelpsServiceService,
    public formBuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.formSendHelpMessage = this.formBuilder.group({
      fullName: [''],
      email: [''],
      phoneNumber: [''],
      reason:[''],
      note:['']
    })
  }

  sendHelpMessage(){
    this.helpsService.sendHelpMessage(this.formSendHelpMessage.value).subscribe(data=>{
      console.log(data);
    })
  }


  

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatDialog } from "@angular/material";
import { PostConfirmComponent} from "../post-confirm/post-confirm.component";

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  formPosts : FormGroup
  imageUrls:string = "assets/image/default.png";
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog
    
  ) { }

  ngOnInit() {
   
    this.createForm()
  }
 createForm(){
this.formPosts = this.formBuilder.group({
  userId:[1],
  title: [''],
  categoryId: [''],
  regionId: [''],
  sellerId: [''],
  postOfTypeId: [''],
  statusOfPostId: [''],
  address: [''],
  area: [''],
  directionId: [''],
  contentPost: [''],
  price: [''],
  ableComposition: [''],
  imagePost1: [''],
  imagePost2: [''],
  imagePost3: [''],
  imagePost4: [''],
  imagePost5: [''],
  imagePost6: [''],
 
})
this.formPosts.valueChanges.subscribe(data=>{
  console.log(data)
})
 }
  onSelectFile(event) {   
    if (event.target.files && event.target.files[0]) {  
                var reader = new FileReader();
                reader.onload = (event:any) => {
                  console.log(event.target.result[1]);
                   this.imageUrls= event.target.result; 
                }
                reader.readAsDataURL(event.target.files[0]);
                console.log("assets/image/" + event.target.files[0].name);
        
    }
  }

  // CLick Open Dialog Confirm
  onClickAdd(){
   this.dialog.open(PostConfirmComponent,
    {data: this.formPosts.value, height: '100%',
    width: '80%',})

}
}

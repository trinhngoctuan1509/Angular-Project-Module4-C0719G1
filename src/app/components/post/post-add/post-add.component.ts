import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from "@angular/forms";
import { MatDialog } from "@angular/material";
import { PostConfirmComponent} from "../post-confirm/post-confirm.component";
import { CategoryService } from "../../../services/category.service";
import { RegionService } from "../../../services/region.service";
import { DirectionService } from "../../../services/direction.service";
import { LoginService } from "../../../services/login.service";
import { User } from "../../../models/user.model";
@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  formPosts : FormGroup
  imageUrls:string = "assets/image/default.png";
  categories;
  regions;
  directions;
  userDetails;
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private categoryService: CategoryService,
    private regionService: RegionService,
    private directionService: DirectionService,
    private loginService:LoginService
  ) { }

  ngOnInit() {
    this.userDetails= new User();
   this.loginService.getUser().subscribe(data=>{
     this.userDetails=data
   })
    this.createForm()
    this.getAllCategory()
    this.getAllRegions()
    this.getAllDirection()
  }
 createForm(){
this.formPosts = this.formBuilder.group({
  
  title: ['',[
    Validators.required,
  ]],
  categoryId: [''],
  regionId: [''],
  sellerId: [''],
  postOfTypeId: [''],
  statusOfPostId: [''],
  address: ['',[
    Validators.required
  ]],
  area: ['',[
    Validators.required,
    Validators.pattern('[0-9]+')
  ]],
  directionId: [''],
  contentPost: ['',[
    Validators.required
  ]],
  price: ['',[
    Validators.required,
    Validators.pattern('[0-9]+')
  ]],
  ableComposition: [false],
  imagePost1: [''],
  imagePost2: [''],
  imagePost3: [''],
  imagePost4: [''],
  imagePost5: [''],
  imagePost6: [''],
 
})

this.formPosts.valueChanges.subscribe(data=>{
 
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

// Get All Category
getAllCategory(){
  this.categoryService.getAllCategory().subscribe(data=>{
    this.categories = data;
  })
}

// Get All Region
getAllRegions(){
  this.regionService.getAllRegions().subscribe(data=>{
    this.regions = data;
  })
}

getAllDirection(){
  this.directionService.getAllDirection().subscribe(data=>{
    this.directions = data;
  })
}
}

import { Component, OnInit, Inject} from '@angular/core';
import { Router } from "@angular/router";
import { MAT_DIALOG_DATA ,MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-post-confirm',
  templateUrl: './post-confirm.component.html',
  styleUrls: ['./post-confirm.component.css']
})
export class PostConfirmComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any,
    public dialogRef: MatDialogRef<PostConfirmComponent>,
  private router: Router
  ) { }

  ngOnInit() {
    console.log(this.data)
  }

  // Click Cancel
  onClickBack(){
    this.dialogRef.close();
  }

// Click Add new Post
  onClickAdd(){
    window.location.href = 'posts/add/success';

  }
}

import { Component, OnInit } from "@angular/core";
import { FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { Books } from "src/app/model/Books.model";
import { BooksService } from "src/app/service/books.service";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.css"],
})
export class AddBookComponent implements OnInit {
  addBookForm: FormGroup;
  bookData: Books;
  formAdded = false;

  constructor(
    private booksService: BooksService,
    private fb: FormBuilder,
    private router:Router, private route:ActivatedRoute
  ) {
    // create object of AppBookData class
  }

  ngOnInit() {
    this.addBookForm = this.fb.group({
      bookName: ['',Validators.required],
      authorName: ['',Validators.required],
      discription: ['',Validators.required],
    })
  }

  // onClick save book call to the service function
  onClickAddBook() {
    const bookInComingData=this.addBookForm.value
    this.bookData=bookInComingData;
    this.formAdded = true;
    this.booksService.saveBook(this.bookData);
    alert("Added Book")
    this.router.navigate(['../showbooks'],{relativeTo:this.route});
  }
}

// create class as model
export class AddBookData {
  id: string;
  bookName: string;
  authorName: string;
  discription: string;
}

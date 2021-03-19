import { Component, Input, OnInit } from "@angular/core";
import {
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Books } from "src/app/model/Books.model";
import { BooksService } from "src/app/service/books.service";
import { ShowBooksComponent } from "../show-books.component";

@Component({
  selector: "app-update-book",
  templateUrl: "./update-book.component.html",
  styleUrls: ["./update-book.component.css"],
})
export class UpdateBookComponent implements OnInit {
  @Input() bookToUpdateWithAllData: Books;
  updateBookForm: FormGroup;
  formUpdated: boolean = false;
  bookInComingData: Books;
  paramsSubscription: Subscription;
  constructor(
    private fb: FormBuilder,
    private bookService: BooksService,
    private router: Router,
    private route: ActivatedRoute,
    private showBooks:ShowBooksComponent
  ) {
    this.bookInComingData = new Books();
  }

  ngOnInit() {
    this.updateBookForm = this.fb.group({
      authorName: ["", Validators.required],
      discription: ["", Validators.required],
    });
  }

  /**
   *  give call to the updateBook method of service to update book.
   */
  onUpdateBook() {
    //save form data in bookInComingData variable
    this.bookInComingData = this.updateBookForm.value;
    // call to updateBook method of bookService
    this.bookService.updateBook(this.bookToUpdateWithAllData, this.bookInComingData);
    this.formUpdated = true;
    this.updateBookForm.reset();
    this.reloadCurrentRoute();
    alert("Book updated successfully");
  }

  /**
   * after update book again show all books so reload book
   */
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
  }

  /**
   * update form cancle button
   */
  onCancleUpdateBook(){
    this.reloadCurrentRoute();
  }

}





import { Component, OnInit, SimpleChanges } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Books } from "src/app/model/Books.model";
import { BooksService } from "src/app/service/books.service";

@Component({
  selector: "app-show-books",
  templateUrl: "./show-books.component.html",
  styleUrls: ["./show-books.component.css"],
})
export class ShowBooksComponent implements OnInit {
  searchData:string;
  bookNameForSearch:string='';
  allBooks: Books[] = [];
  updateBook:boolean=false;
  bookToUpdateWithAllData:Books;

  confirmdialoguematerial: boolean;
  confirmdialoguenonmaterial:boolean;
  constructor(
    private books: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    //when load page should display all book
    this.fetchBooksFromBooksService();
  }

  //called to the fetchAllBooksFromAPI() of service method
  fetchBooksFromBooksService() {
    this.allBooks = this.books.fetchAllBooksFromAPI();
  }

  //called to the deleteBookbyId() of the service method
  onDeleteClickDeleteBook(bookId: any) {
    this.books.deleteBookbyId(bookId)
    setTimeout(()=>{
    this.fetchBooksFromBooksService();
    },1000)
  }

  // comes id of book which to be update through button onclick
  onUpdateClick(bookToUpdateWithAllData:Books){
    this.bookToUpdateWithAllData=bookToUpdateWithAllData;
    this.updateBook=true;
  }

  //called to the getBookByBookName() of the service method
  searchBookByName(){
    this.allBooks = this.books.getBookByBookName(this.bookNameForSearch);
    console.log(this.allBooks);
  }

}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Books } from '../model/Books.model';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BooksService implements OnInit{
  allBooks: Books[]=[];

  id:any;
  url="http://localhost:8080/delete";
  constructor(private http:HttpClient) {}

  ngOnInit(){
  }

  fetchAllBooksFromAPI():any{
    let allBooks:any=[];
    this.http.get<{[data:string]:Books}>("http://localhost:8080/findAllBooks")
    .pipe(map(responseData=>{
     for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          allBooks.push({...responseData[key], k:key})
        }
      }
      return allBooks;
    }))
   .subscribe((allBooks) =>{
       console.log(allBooks);
    })
    return allBooks;
  }

  deleteBookbyId(id:string){
       this.http.delete("http://localhost:8080/delete"+"/"+id)
       .subscribe(posts=>{
         console.log(posts);
       })
  }

  getBookByBookName(bookName:string):any{
    let allBooksByName:any=[];
    this.http.get<{[data:string]:Books}>("http://localhost:8080/findByBookName"+"/"+bookName)
    .pipe(map(responseData=>{
      for(const key in responseData){
         if(responseData.hasOwnProperty(key)){
           allBooksByName.push({...responseData[key], k:key})
         }
       }
       return allBooksByName;
     }))
    .subscribe(posts=>{
      console.log(allBooksByName);
    })
    return allBooksByName;
  }

  saveBook(booksData:Books){
    console.log("Done");
    this.http.post("http://localhost:8080/addBook",booksData)
    .subscribe((responseData) => {
      console.log(responseData);
    });
  }

  updateBook(bookToUpdateWithAllData:Books,booksData:Object){
    let idOfBookToUpdate=bookToUpdateWithAllData.bookId
        this.http.put("http://localhost:8080/updateBook"+"/"+idOfBookToUpdate,booksData)
    .subscribe((responseData) => {
      console.log(responseData);
    });
  }

}

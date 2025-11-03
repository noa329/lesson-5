import { Router } from "express";
import {addBook,deleteBook,updateBook,getAllBooks,getBookById,borrowBook,returnBook}from "./controllers./book.controller.js"

const router = Router();
//קבלת כל הספרים
router.get('', getAllBooks) ;


//קבלת ספר לפי קוד
router.get('/:id',getBookById);
//הוספת ספר חדש
router.post('', addBook) ;
//עדכון ספר קיים
router.put('/:id', updateBook) ;

//השאלת ספר
router.patch('/:id/borrow', borrowBook) ;
   
//החזרת ספר
router.patch('/:id/return',returnBook);
//מחיקת ספר
router.delete('/:id',deleteBook);
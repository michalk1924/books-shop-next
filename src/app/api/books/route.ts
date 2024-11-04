// app/api/books/route.js

import { NextResponse, NextRequest } from "next/server";
import books from './books'

export async function GET(request : NextRequest) {
  return new NextResponse(JSON.stringify(books), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request : NextRequest) {
  const newBook = await request.json();
  newBook.id = books.length ? books[books.length - 1].id + 1 : 1; // יצירת ID חדש
  books.push(newBook);

  return new NextResponse(JSON.stringify(newBook), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function PUT(request : NextRequest) {
  const updatedBook = await request.json();
  const bookIndex = books.findIndex((book) => book.id === updatedBook.id);

  if (bookIndex === -1) {
    return new Response(JSON.stringify({ message: 'Book not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  books[bookIndex] = { ...books[bookIndex], ...updatedBook };
  return new NextResponse(JSON.stringify(books[bookIndex]), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}


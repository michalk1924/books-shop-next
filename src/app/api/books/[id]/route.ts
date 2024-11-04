import { NextResponse, NextRequest } from "next/server";
import books from '../books';

export async function DELETE(request: NextRequest, { params }: { params: any }) {
    try {
        const { id } = params;
        const bookIndex = books.findIndex((book) => book.id === parseInt(id));
        if (bookIndex === -1) {
            return new NextResponse('Book not found', { status: 404 });
        }
        books.splice(bookIndex, 1);
        return new NextResponse('Book deleted successfully', { status: 200 });
    } catch (error) {
        console.error(error);
        return new NextResponse('Error deleting book', { status: 500 });
    }
}

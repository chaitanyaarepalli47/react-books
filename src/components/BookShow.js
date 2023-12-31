import { useState } from "react";
import BookEdit from "./BookEdit";
import useBookContext from "../hooks/use-books-context"

function BookShow({book}){
    const {deleteBookById } = useBookContext();
    const [showEdit,setShowEdit] = useState(false);

    const handleDeleteClick = () =>{
        deleteBookById(book.id)
    };

    const handleSubmit = () => {
        setShowEdit(false);
      };

    const handleEditClick = () =>{
        setShowEdit(!showEdit);
    }

    let edit = <h3>{book.title}</h3>
    if(showEdit){
        edit = <BookEdit book = {book} onSubmit = {handleSubmit}/>;
    }
    
    return (
        <div className="book-show">
            <img
                alt = "books"
                src = {`https://picsum.photos/seed/${book.id}/300/200`}
            />
            <div>{edit}</div>
            <div className = "actions">
                <button className = "delete" onClick = {handleDeleteClick}>Delete</button>
                <button className = "edit" onClick = {handleEditClick}>Edit</button>
            </div>
        </div>
    );
}

export default BookShow;
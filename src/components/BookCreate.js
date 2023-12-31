import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

function BookCreate(){
    const {createBooks} = useBooksContext();
    const [title, setTitle] = useState('');
    
    const handleChange = (event) =>{
        setTitle(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        createBooks(title);
        setTitle('');
    }

    return (
        <div className = "book-create">
            <form onSubmit={handleSubmit}>
                <input className="input"
                    value={title}
                    placeholder="enter title here"
                    onChange={handleChange}
                />
                <button className="button">Create!</button>
            </form>
        </div>
    );
}

export default BookCreate;
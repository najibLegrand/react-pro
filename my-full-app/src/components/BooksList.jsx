// src/components/BooksList.jsx
import React, { useEffect, useState } from "react";

function BooksList() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  // 1. Lire (GET)
  const fetchBooks = async () => {
    try {
      const res = await fetch("http://localhost:3000/books");
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      console.error("Erreur lors de la récupération :", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // 2. Créer (POST)
  const addBook = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, author }),
      });
      setTitle("");
      setAuthor("");
      fetchBooks();
    } catch (err) {
      console.error("Erreur lors de l'ajout :", err);
    }
  };

  // 3. Supprimer (DELETE)
  const deleteBook = async (id) => {
    try {
      await fetch(`http://localhost:3000/books/${id}`, {
        method: "DELETE",
      });
      fetchBooks();
    } catch (err) {
      console.error("Erreur lors de la suppression :", err);
    }
  };

  return (
    <div>
      <h2>Liste des Livres</h2>
      <ul>
        {books.map((b) => (
          <li key={b.id}>
            {b.title} - {b.author}{" "}
            <button onClick={() => deleteBook(b.id)}>Supprimer</button>
          </li>
        ))}
      </ul>

      <h3>Ajouter un nouveau livre</h3>
      <form onSubmit={addBook}>
        <input
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Auteur"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default BooksList;

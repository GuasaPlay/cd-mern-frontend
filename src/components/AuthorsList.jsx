import axios from "axios";
import { useAuthor } from "hooks/useAuthor";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const AuthorList = () => {
  const navigate = useNavigate();
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { deleteAuthor } = useAuthor();

  const getAuthors = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/author/get-all-authors");
      setAuthors(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAuthors();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteAuthor(id);
      getAuthors();
      setAuthors([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="mt-10 rounded-lg bg-white py-3 shadow-lg">
      {loading && (
        <div className="text-center font-medium text-slate-700">
          Cargando...
        </div>
      )}
      {!loading && authors.length === 0 && (
        <div className="text-center font-medium text-slate-700">
          No hay autores, agrega uno!
        </div>
      )}
      <ul className="divide-y-2">
        {authors.map((author) => (
          <li
            key={author._id}
            className="group flex items-center justify-between px-6 py-4 transition-colors hover:bg-gray-100"
          >
            <div>
              <h3 className="font-semibold text-slate-700">{author.name}</h3>

              <p className="text-sm font-medium text-slate-600">
                {" "}
                {author.quote}
              </p>
            </div>
            <div className="hidden space-x-2 group-hover:flex">
              <Button
                name="Editar"
                onClick={() => navigate(`/autores/${author._id}/edit`)}
              />
              <Button
                name="Eliminar"
                bg="delete"
                onClick={() => handleDelete(author._id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

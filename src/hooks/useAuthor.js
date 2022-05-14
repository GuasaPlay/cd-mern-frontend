import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

export const useAuthor = () => {
  const params = useParams();
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getAuthor = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/author/get-author-by-id", {
        params: { authorId: params.id },
      });
      setAuthor(data);
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message || "Error al cargar el autor");
    } finally {
      setLoading(false);
    }
  };

  const deleteAuthor = async (id) => {
    try {
      const res = await axios.delete("/author/delete-author", {
        params: { authorId: id },
      });
      return res;
    } catch (err) {
      console.error(err);
    }
  };

  return { deleteAuthor, getAuthor, author, loading, error };
};

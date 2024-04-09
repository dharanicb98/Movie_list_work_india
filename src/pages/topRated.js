import { useState, useEffect } from "react";
import { topRatedMovies } from "../services/topRated";
import MovieCard from "../components/movieCard";
import { searchMovies } from "../services/searchMovies";
import Loader from "../components/loder";

const TopRated = ({ searchQuery }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    getData();
  }, [currentPage, searchQuery]);

  async function getData() {
    try {
      setLoading(true);

      let response;

      if (searchQuery.trim() !== "") {
        response = await searchMovies(
          currentPage,
          searchQuery.trim()?.toLowerCase()
        );
      } else {
        response = await topRatedMovies(currentPage);
      }

      setData(response?.results);
      setTotalPages(response?.total_pages);
      setTotalResults(response?.total_results);
      setLoading(false);
    } catch (e) {
      setError(e?.message);
      setLoading(false);
    }
  }

  function handlePrevPage() {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  }

  function handleNextPage() {
    setCurrentPage((prevPage) =>
      prevPage < totalPages ? prevPage + 1 : prevPage
    );
  }

  return (
    <>
      {error && <>{error}</>}
      {loading && (
        <div className="loding">
          <Loader />
        </div>
      )}

      {!error && !loading && (
        <div className="movie-items scrollbar-hide">
          {data?.map((popularmovies, idx) => (
            <MovieCard
              key={idx}
              title={popularmovies?.title}
              imagePath={popularmovies?.poster_path}
              rating={popularmovies?.vote_average}
              id={popularmovies?.id}
            />
          ))}
        </div>
      )}
      <div className="pages">
        <div className="page-btn">
          <button
            className="button"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span>Page: {currentPage}</span>
          <button
            className="button"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        <div>Total Records: {totalResults}</div>
      </div>
    </>
  );
};

export default TopRated;

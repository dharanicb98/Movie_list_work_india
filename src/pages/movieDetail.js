import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieDetail, movieCasting } from "../services/movieDetail";
import Banner from "../components/movieDetail/banner";
import CastActorCard from "../components/movieDetail/castActorCard";
import Loader from "../components/loder";

const MovieDetail = () => {
  const [data, setData] = useState([]);
  const [casting, setCasting] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const params = useParams();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setLoading(true);
      const response = await movieDetail(params?.id);
      const castingResponse = await movieCasting(params?.id);
      setCasting(castingResponse?.cast);
      console.log("response", castingResponse);
      setData(response);
      setLoading(false);
    } catch (e) {
      setError(e?.message);
      setLoading(false);
    }
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
        //   JSX CODE
        <>
          <Banner
            backdrop_path={data?.backdrop_path}
            overview={data?.overview}
            title={data?.title}
            vote_average={data?.vote_average}
            runtime={data?.runtime}
            genres={data?.genres}
            release_date={data?.release_date}
            poster_path={data?.poster_path}
          />

          <h1 className="cast">Cast</h1>
          <div className="movie-actors-list">
            {casting &&
              casting?.map((cast, idx) => (
                <CastActorCard
                  key={idx}
                  image={cast?.profile_path}
                  name={cast?.name}
                  character={cast?.character}
                />
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetail;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import { getMovie, getMovieVideos } from "@/services/movies";

import { dateFormat } from "@/utils/dateFormat";

import getImageUrl from "@/utils/getImageUrl";
import "./styles.scss";

export default function MoviePage() {
  const [movieData, setMovieData] = useState({ production_companies: [] });
  const [movieVideo, setMovieVideo] = useState("");

  const { id } = useParams();

  const loadMovieData = async () => {
    const videoRes = await getMovieVideos(id);
    console.log(videoRes);
    const res = await getMovie(id);
    if (!res) return;
    setMovieData(res.data);
    setMovieVideo(videoRes.data.results[0].key);
  };

  const getRuntime = (runtime) => {
    if (!runtime) return;
    return (runtime / 60).toFixed(2).replace(".", "h");
  };

  const getGenresString = (genres) => {
    if (!genres) return;
    return genres?.map((genre) => genre.name).join(", ");
  };

  useEffect(() => {
    loadMovieData();
  }, []);

  return (
    <div className="movie-page">
      <div
        className="movie-header"
        style={{
          background: `url(${getImageUrl(movieData?.backdrop_path, 1920)})`,
        }}
      >
        <div className="movie-header-wrapper">
          <div className="cubos-container">
            <div className="poster-wrapper">
              <img src={getImageUrl(movieData?.poster_path)} />
            </div>
            <div className="detail-wrapper">
              <h1>{movieData?.title}</h1>
              <span>
                {`${getRuntime(movieData?.runtime)} | ${getGenresString(
                  movieData?.genres
                )}`}
              </span>
              <p className="max-lines-2">{movieData?.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="movie-content">
        <div className="cubos-container">
          <section>
            <h2>Sinopse:</h2>
            <p>{movieData?.overview}</p>
          </section>
          <section>
            <h2>Trailer:</h2>
            {movieVideo ? (
              <iframe
                src={`https://www.youtube.com/embed/${movieVideo}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : (
              <></>
            )}
          </section>
          <section>
            <h2>Ficha técnica:</h2>
            <div className="tec-wrapper">
              <div>
                <h4>Nome Original:</h4>
                <p>{movieData.original_title}</p>
              </div>
              <div>
                <h4>Data lançamento:</h4>
                <p>{dateFormat(movieData.release_date)}</p>
              </div>
              <div>
                <h4>Duração:</h4>
                <p>{getRuntime(movieData?.runtime)}</p>
              </div>
              <div>
                <h4>Gênero:</h4>
                <p>{getGenresString(movieData?.genres)}</p>
              </div>
              <div>
                <h4>Produção:</h4>
                <p>{movieData?.production_companies[0]?.name}</p>
              </div>
              <div>
                <h4>País de Origem:</h4>
                <p>{movieData.original_language}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Link to="/fidelidade" className="fn-btn">
        Modo Fidelidade
      </Link>
    </div>
  );
}

import { useState, useEffect } from 'react';
// import NavBar from "../components/NabBar";
// import Head from "next/head";
import Seo from "../components/Seo";

export default function Home () {
    const [movies, setMovies] = useState();
    useEffect(() => {
        (async () => {
        const { results } = await (await fetch(`/api/movies`)).json();
        setMovies(results);
        })();
    }, []);

    return (
        <div className="container">
          <Seo title="Home" />
          {!movies && <h4>Loading...</h4>}
          {movies?.map((movie) => (
            <div className="movie" key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              <h4>{movie.original_title}</h4>
            </div>
          ))}
          <style jsx>{`
            .container {
              display: grid;
              grid-template-columns: 1fr 1fr;
              padding: 20px;
              gap: 20px;
            }
            .movie img {
              max-width: 100%;
              border-radius: 12px;
              transition: transform 0.2s ease-in-out;
              box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
            }
            .movie:hover img {
              transform: scale(1.05) translateY(-10px);
            }
            .movie h4 {
              font-size: 18px;
              text-align: center;
            }
          `}</style>
        </div>
      );    
}

// 파일명이 jsx가 될 필요도 없고 react를 import해 올 필요도 없음 
// useState 나 useEffect와 같은 react method를 쓰고 싶다면 react를 import 해야 함
// nextjs의 가장 좋은 기능 중 하나는 앱에 있는 페이지들이 미리 렌더링 된다는 것. 이것들은 정적(static)으로 생성됨
// create react app은 client-side render를 하는 앱을 만드는 것
// client-side 란 내 브라우저가 유저가 보는 UI 를 만드는 모든 것을 한다는 것을 의미


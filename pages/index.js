import { useState, useEffect } from 'react';
// import NavBar from "../components/NabBar";
// import Head from "next/head";
import Seo from "../components/Seo";

export default function Home ({results}) {
    // const [movies, setMovies] = useState();
    // useEffect(() => {
    //     (async () => {
    //     const { results } = await (await fetch(`/api/movies`)).json();
    //     setMovies(results);
    //     })();
    // }, []);

    return (
        <div className="container">
          <Seo title="Home" />
          {/* {!movies && <h4>Loading...</h4>} */}
          {results?.map((movie) => (
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

// getServerSideProps라는 이름이 매우 중요하고 다른 걸로 바꾸면 안됨
// 이 함수 내에서 어떤 코드를 쓰던지 간에 그 코드는 서버에서 돌아가게 됨 
// client쪽이 아니라 server쪽에서만 작동 
// 그렇다면 이걸 이용해서 API key를 숨길 수도 있겠군?
// rewrites를 꼭 안써도 되겠어 
// 대신에 api key를 여기에 쓴다면 절대로 client에게 보여지지 않을 것 백엔드에서만 실행되니까!
// 데이터가 유효할 때 화면이 보여지게 되는게 좋은지 또는 로딩화면을 보여준 다음에 데이터를 받는게 좋은지
export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
      results,
    }
  }
}

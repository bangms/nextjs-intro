import { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
// import NavBar from "../components/NabBar";
// import Head from "next/head";
import Seo from "../components/Seo";

/*
  client-side 렌더링과 server-side only 렌더링 중에 어떤 걸 선택해야하는지 
  getServerSideProps 함수를 활성화하기 전 까지는 사전 생성된 html 페이지에 데이터가 포함되지는 않았었음 
  nextjs는 페이지를 미리 html로 export 해줌 
  컴포넌트의 초기 state를 미리 export 하기 때문에 누군가 홈페이지를 접속했을 때 react 가 처리를 마치기 전 까지는  
  실제 html 소스 코드를 보면 "로딩중" 인 걸 확인할 수 있음 
  그게 유저가 접속한 바로 그 순간에 보게 될 화면 
  그리고 나서 react의 처리가 완료되면 useEffect, useState, fetch를 한 후에 영화정보를 state에 넣어서 
  유저가 화면에서 영화정보를 볼 수 있게 됨 
  다시 말하면, react의 처리가 완료될 때까지 기다려야하고 
  유저는 잠깐 혹은 API에서 더이터를 받아올 때까지 "로딩중" 상태를 봐야한다는 의미 
  API 반응이 느리다면 유저는 "로딩중" 단계를 아주 긴 시간 봐야함
  하지만 이렇게 말고 항상 html이 완전한 상태로 준비되었으면 한다면 
  즉, 유저가 접속했을 때 모든 데이터가 페이지에 들어있고 유저가 "로딩중" 상태를 보지 않았으면 한다면
  이 때 바로 getServerSideProps를 사용하는 것이었음 
  getServerSideProps 함수에서는 fetch를 통해 데이터베이스를 불러올 수도 있고 원하는 모든 것을 할 수 있음
  이건 프론트에 보이지 않고 백엔드에서만 작동
  그러니까 여기에 API key를 넣을 수도 있고, 데이터를 가져오거나, 뭐든 원하는 건 다 할 수 있음 
  그리고 데이터가 모두 준비가 되었을 때 그제서야 유저들에게 페이지가 보이게 됨
  조건은 getServerSideProps라는 이름의 함수를 export 해주기만 하면 됨
  async를 해줄 필요는 없음 여기서 해준 이유는 await를 사용했기 때문임
  그리고 
    return {
      props: {
        results,
      }
    }
  이렇게 생긴 객체를 반환해주어야 함 
  props가 있고 그 안에는 나의 props를 넣으면 됨 
  내가 할 건 fetch를 하거나 혹은 데이터베이스 요청, API 불러오기, API key 사용하기 등 
  내가 하고 싶은 걸 한 다음에 props를 반환해주면 됨 
  이 말인 즉슨, 백엔드에서 이걸 다 처리하기 전까지는 유저에게는 아무것도 안보인다는 뜻
  완전한 서버 사이드 렌더링임. 유저한테는 네비게이션 바 조차도 안보임 풋터도 다 안보임
  api 처리가 끝날때까지는 아무것도............
  반환한 props, results가 들어있는 객체는 Home( {results} ) 로 감
  page의 props으로 들어감~! _app.js에서 pageProps를 해준 이유가 바로 이것 때문 
  getServerSideProps를 넣어주면 nextjs는 이 함수를 실행시켜서 _app.js의 {...pageProps}에 넣어줌 
  그게 바로 Home의 props처럼 들어오게 되는 것 
   
*/
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
            <Link href={`/movies/${movie.id}`} key={movie.id}>
              <a>
                <div className="movie">
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                  <h4>{movie.original_title}</h4>
                </div>
              </a>
            </Link>
          ))}
          <style jsx>{`
            .container {
              display: grid;
              grid-template-columns: 1fr 1fr;
              padding: 20px;
              gap: 20px;
            }
            .movie {
              cursor: pointer;
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

/*
getServerSideProps라는 이름이 매우 중요하고 다른 걸로 바꾸면 안됨
이 함수 내에서 어떤 코드를 쓰던지 간에 그 코드는 서버에서 돌아가게 됨 
client쪽이 아니라 server쪽에서만 작동 
그렇다면 이걸 이용해서 API key를 숨길 수도 있겠군?
rewrites를 꼭 안써도 되겠어 
대신에 api key를 여기에 쓴다면 절대로 client에게 보여지지 않을 것 백엔드에서만 실행되니까!
데이터가 유효할 때 화면이 보여지게 되는게 좋은지 또는 로딩화면을 보여준 다음에 데이터를 받는게 좋은지
nextjs가 백엔드에서 받아온 props를 return해서 가져다주면 react가 props를 가져와서 results array를 뽑아줌
결국 page가 유저에게 보여지기 전에 props를 받아오는 function을 만드는 일을 한 것
*/
export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
    ).json();

  return {
    props: {
      results,
    }
  }
}

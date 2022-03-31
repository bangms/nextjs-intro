
export default function App({Component, pageProps}) {
    // 무조건 이 이름이어야 함 Next JS가 가장 먼저 App을 보기 때문. 
    // index를 렌더링 하기 전에, _app.js를 먼저 확인할 거고, 그 다음에 index.js의 내용물을 렌더링 함 
    // 여기 넣어둔 청사진을 기반해서 _app.js는 하나의 blueprint
    return (
        <div>
            <Component {...pageProps} />
            <span>hello</span>
        </div>
    );
}
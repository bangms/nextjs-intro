import Layout from "../components/Layout";
import "../styles/globals.css";
// import NavBar from "../components/NabBar";
// global.css import 하려고 하면 커스텀 App 이외의 파일들로부터는 임포트 할 수 없다고 error발생 
// 하지만 커스텀 App 컴포넌트가 있는 곳이라면 모든 Global Styles를 임포트 할 수 있음 (다른 곳에서는 안되고 _app 에서는 가능)

export default function App({Component, pageProps}) {
    // 무조건 이 이름이어야 함 Next JS가 가장 먼저 App을 보기 때문. 
    // index를 렌더링 하기 전에, _app.js를 먼저 확인할 거고, 그 다음에 index.js의 내용물을 렌더링 함 
    // 여기 넣어둔 청사진을 기반해서 _app.js는 하나의 blueprint
    return (
        <div>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}
// import Head from "next/head";
import NavBar from "../components/NabBar";
import Seo from "../components/Seo";

export default function Potato() {
    return <div>
        <Seo title="About" />
        <h1>About</h1>
    </div>
}
// component의 이름은 중요하지 않음. export default인 것이 중요함
// default 로 export하지 않는다면 사이트에서 about에 들어갔을 때 에러가 발생함

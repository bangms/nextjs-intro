import { useRouter } from "next/router";

// [변수명] nextjs에 이것이 변수를 포함하는 다이나믹 URL이다 라는 걸 알려주는 유일한 방법
export default function Detail() {
    const router = useRouter();
    console.log(router); 
    return <div>
        {/* 유저가 익명모드(크롬시크릿창)로 홈페이지를 거치지 않고 상세페이지로 바로 접속할 때 문제가 발생함 
        이 경우에는 Loading 문구가 보임 router.query.title이 존재하지 않기때문에..
        router.query.title은 유저가 홈페이지에서 상세페이지로 넘어올때만 존재함*/}
        <h4>{router.query.title || "Loading..." }</h4>
    </div>
}
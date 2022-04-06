import { useRouter } from "next/router";
import Seo from "../../components/Seo";

// [변수명] nextjs에 이것이 변수를 포함하는 다이나믹 URL이다 라는 걸 알려주는 유일한 방법
export default function Detail({params}) {
    const router = useRouter();
    const [title, id] = params;
    // const [title, id] = router.query.params || [];
    /*
    왜 || [] 를 추가해주면 되는건지 없으면 TypeError남 undefined is not iterable.
    에러가 발생하는 이유는 이 페이지가 백엔드에서 pre-render 되기 때문
    server에서 미리 렌더링됨 server에는 router.query.params가 아직 존재하지 않음.
    기본적으로 미리 렌더링이 되기때문에 먼저 html 파일이 내려옴 이때 문제가 아직 js들이 다운로드가 안됐기 때문에 
    useRouter()로 정보를 제대로 가져오질 못하는 상태임 그렇기 때문에 초기에는 빈 배열을 추가해줘서 
    오류가 발생하지 않도록 해주고, js가 내려가서 다시 렌더링하게되면 
    그 때는 빈 배열이 아닌 router.quer y.params에서 값을 가져와서 뿌려주는 것.
    정확하게 보고싶을 경우 검사 -> 네트워크 -> slow 3g 로 설정하신 후에 
    페이지 렌더링 확인하시면 먼저 html쪽 뜨고나서 js까지 모두 다운로드 된 후에야 title이 보이는걸 볼 수 있음
    SSR 방식 이기 때문~~! https://ayaan.oopy.io/ssr-vs-csr
    */

    console.log(router); 
    return <div>
        {/* 유저가 익명모드(크롬시크릿창)로 홈페이지를 거치지 않고 상세페이지로 바로 접속할 때 문제가 발생함 
        이 경우에는 Loading 문구가 보임 router.query.title이 존재하지 않기때문에..
        router.query.title은 유저가 홈페이지에서 상세페이지로 넘어올때만 존재함*/}
        <Seo title={title} />
        <h4>{title}</h4>
    </div>
}

// API로 데이터를 fetch를 해오기 위함이 아니라 조금 더 빠르게 데이터를 가져오기 위함 단순히 제목과 id를 얻기 위해 사용 
export function getServerSideProps({params: {params}}) {
    // context 안에서 params를 가져오고 그 안에 있는 params를 또 가져오기
    // console.log(ctx);
    return {
        props: {
            params
        },
    }
}
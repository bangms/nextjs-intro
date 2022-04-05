import { useRouter } from "next/router";

// [변수명] nextjs에 이것이 변수를 포함하는 다이나믹 URL이다 라는 걸 알려주는 유일한 방법
export default function Detail() {
    const router = useRouter();
    console.log(router); 
    return "detail";
}
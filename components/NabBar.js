import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "./NavBar.module.css";

export default function NavBar() {
    // 라우터와 연결할 수 있도록 해주는 Hook
    const router = useRouter();  
    console.log(router); // 우리 location에 관한 정보들을 얻을 수 있음 

    // 클래스 이름을 추가할 때 텍스트로 적지 않고 자바스크립트 오브젝트에서의 프로퍼티 형식으로 작성 
    // 이러한 접근 방식의 장점으로는 class명이 nav가 아니라 NavBar_nav 그리고 어떤 무작위 텍스트로 구성됨
    // 그러면 그 어떤 충돌도 만들지 않음 예를 들면 다른 컴포넌트에서도 nav라는 클래스 이름을 사용할 수 있도록 하는 것
    // 또 /NavBar.module.css 모듈 내에 다른 클래스 이름이 존재한다면 유저가 브라우저에서 봤을 때 모두 이상한 무작위 이름으로 작성되는 것
    // 다른 css 파일 또는 module.css 파일과 충돌하지 않을까 걱정하지 않아도 됨! (같은 이름으로 만들어도 무작위 이름이 붙으니까 충돌 안남)
    return (
        // <nav className={styles.nav}>
        <nav>
            <img src="/logo.svg" />
            <div>
                <Link href="/">
                <a className={router.pathname === "/" ? "active" : ""}>Home</a>
                </Link>
                <Link href="/about">
                <a className={router.pathname === "/about" ? "active" : ""}>About</a>
                </Link>
            </div>
             <style jsx>{`
                nav {
                display: flex;
                gap: 10px;
                flex-direction: column;
                align-items: center;
                padding-top: 20px;
                padding-bottom: 10px;
                box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
                    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
                }
                img {
                max-width: 100px;
                margin-bottom: 5px;
                }
                nav a {
                font-weight: 600;
                font-size: 18px;
                }
                .active {
                color: tomato;
                }
                nav div {
                display: flex;
                gap: 10px;
                }
            `}</style>
        </nav>
    ) 
}

/*
    NextJS 어플리케이션에서 anchor 태그를 네비게이팅 하는 데에 사용하면 안 되는 이유는 
    NextJS에, 앱 내에서 페이지를 네비게이트 할 때 사용해야만 하는 특정 컴포넌트가 존재하기 때문
    ReactJS에서 React Router Link를 사용해야만 할 때와 이유가 같음 
    특정 페이지에 들어가면 전체 어플리케이션은 새로고침이 됨 -> 그건 싫음 client side navigation  이 없다는 의미니까
    브라우저가 다른 페이지로 보내기 위해 전체 페이지를 새로고침 한다는 얘기. 
    이런식으로 하면 느려질 수 있기 때문에 NextJS에서는 특정 사용해야만 하는 특정 Link 컴포넌트가 존재함 
    Link를 사용하면 새로고침이 되지 않고 a 태그보다 훨씬 속도가 빠름 

    React Router Dom 
    Link에 style이나 className을 줄 수 없음 NextJS에서는 anchor 태그를 생성해서 줘야함
    Link는 단지 href만을 위한 것 나머지는 모두 anchor 태그에다 넣기 
*/

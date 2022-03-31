// import { useState } from 'react';

import NavBar from "../components/NabBar";

export default function Home () {
    // const [counter, setCounter] = useState(0);
    // return "hi";
   return(
        <div>
            <NavBar />
            <h1>Hello</h1>
            {/* <h1> Hello {counter} </h1> */}
            {/* <button onClick={() => setCounter((prev) => prev + 1)}>+</button> */}
            <style jsx global>{`
                a {
                    color: white;
                }
            `}</style>
        </div>
   )     
}

// 파일명이 jsx가 될 필요도 없고 react를 import해 올 필요도 없음 
// useState 나 useEffect와 같은 react method를 쓰고 싶다면 react를 import 해야 함
// nextjs의 가장 좋은 기능 중 하나는 앱에 있는 페이지들이 미리 렌더링 된다는 것. 이것들은 정적(static)으로 생성됨
// create react app은 client-side render를 하는 앱을 만드는 것
// client-side 란 내 브라우저가 유저가 보는 UI 를 만드는 모든 것을 한다는 것을 의미


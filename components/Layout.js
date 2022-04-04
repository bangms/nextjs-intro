import NavBar from "./NabBar";

// children이란 리액트가 제공하는 prop인데 하나의 컴포넌트를 또 다른 컴포넌트 안에 넣을 때 쓸 수 있음 
// Layout 컴포넌트는 children 이라는 prop을 가지게 됨
// children이란 _app.js에 있는 <Component {...pageProps} />를 말함 
export default function Layout({children}) {
     return (
         <>
            <NavBar />
            <div>{children}</div>
         </>
     )
}
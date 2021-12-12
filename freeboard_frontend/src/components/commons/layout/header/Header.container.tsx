import { useRouter } from "next/router"
import HeaderUI from "./Header.presenter"

export default function Header(){
    const router = useRouter()

    function onClickLogin(){
        router.push("/login")
    }

    function onClickSignUp(){
        router.push("/signup")
    }

    return <HeaderUI 
    onClickLogin={onClickLogin}
    onClickSignUp={onClickSignUp}
    />
}
import { useRouter } from "next/router"
import HeaderUI from "./Header.presenter"

export default function Header(){
    const router = useRouter()

    function onClickMySignin(){
        router.push("/signin")
    }

    return <HeaderUI 
    onClickMySignIn={onClickMySignin}/>
}
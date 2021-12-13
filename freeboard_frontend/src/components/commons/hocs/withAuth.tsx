import { useEffect } from "react"
import { useRouter } from "next/router"


export const withAuth = (Component) => {props} => {
    const router = useRouter()
    useEffect(() => {
        if(!localStorage.getItem("accessToken")) {
            alert("회원만 입장 가능합니다. 로그인을 먼저 해주세요")
            router.push("/login")
        }
    }, [])

    return <Component {...props} />
}
import { useRouter } from "next/router"
import { useEffect } from "react"


export const withAuth = (Component) => {props} => {
    const router = useRouter()

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken")
        if(!accessToken) {
            alert("회원만 입장 가능합니다.")
            router.push("/login")
        }
    }, [])

    return <Component {...props} />
}
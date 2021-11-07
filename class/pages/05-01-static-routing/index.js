//이동전 페이지& 이동후 페이지 만들어서 버튼 누르면 이동후 페이지로 넘어가게끔
import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter()

  function onClickMove() {
    router.push("/05-02-static-routed")
  }

  return (
  <button onClick={onClickMove}>페이지 이동하기</button>
  )
  
}

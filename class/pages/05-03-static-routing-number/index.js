//이동전 페이지& 이동후 페이지 만들어서 버튼 누르면 이동후 페이지로 넘어가게끔
import { useRouter } from "next/router";

export default function StaticRoutingNumberPage() {
  const router = useRouter()

  function onClickMove1() {
    router.push('/05-04-static-routed-number/1')
  }

  function onClickMove2() {
    router.push('/05-04-static-routed-number/2')
  }

  function onClickMove3() {
    router.push('/05-04-static-routed-number/3')
  }

  return (
    <>
    <button onClick={onClickMove1}>1번 게시글로 이동하기</button>
    <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
    <button onClick={onClickMove3}>3번 게시글로 이동하기</button>
    </>
  )
  
}

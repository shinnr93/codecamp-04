import { useRouter } from "next/router";
import { useState } from "react";

type IPage = "/boards" | "/markets" | "/mypage"

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useState("/");

  const moveToPage = (page: IPage) => () => {
    setVisitedPage(page);
    router.push(page);
  };

  return {
    moveToPage,
    visitedPage,
  };
}

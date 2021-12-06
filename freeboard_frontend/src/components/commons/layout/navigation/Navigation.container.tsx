import { useRouter } from "next/router";
import NavigationUI from "./Navigation.presenter";
import { MouseEvent } from "react";

export default function Navigation() {
  const router = useRouter();

  function onClickMenu(event: MouseEvent<HTMLDivElement>) {
    if (event.target instanceof Element) router.push(event.target.id);
  }

  return <NavigationUI onClickMenu={onClickMenu} />;
}

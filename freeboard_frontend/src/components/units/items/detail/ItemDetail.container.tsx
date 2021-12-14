import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ItemDetailUI from "./ItemDetail.presenter";
import { FETCH_USED_ITEM, TOGGLE_USED_ITEM_PICK } from "./ItemDetail.queries";

export default function ItemDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.myId,
    },
  });

  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);

  async function onClickPick() {
    try {
      const result = await toggleUseditemPick({
        variables: {
          useditemId: router.query.myId,
        },
      });
      console.log("찜", result);
    } catch (error) {
      alert("ㅈㅈ");
      console.log(error.message);
    }
  }

  return <ItemDetailUI data={data} onClickPick={onClickPick} />;
}

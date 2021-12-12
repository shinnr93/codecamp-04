import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ItemDetailUI from "./ItemDetail.presenter";
import { FETCH_USED_ITEM } from "./ItemDetail.queries";

export default function ItemDetail() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.myId,
    },
  });

  console.log("애기나리", data?.fetchUseditem);

  return <ItemDetailUI data={data} />;
}

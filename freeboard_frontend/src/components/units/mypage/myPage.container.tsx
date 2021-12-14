import { useQuery } from "@apollo/client";
import { FETCH_USED_ITEMS_I_PICKED } from "./myPage.queries"
import MyPageUI from "./myPage.presenter";

export default function MyPage(){
    const { data: PickList} = useQuery(FETCH_USED_ITEMS_I_PICKED, {
        variables: {
          search: "",
        },
      });
    return(
        <MyPageUI PickList={PickList} />
    )
}


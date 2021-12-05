import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ItemsListUI from "./ItemsList.presenter";
import { FETCH_USED_ITEMS } from "./ItemsList.queries";

export default function ItemsList (){
    const router = useRouter()
    const {data} = useQuery(FETCH_USED_ITEMS)
    
    const onClickDetail = (event) => {
        router.push(`/items/${event.target.id}`)
    }


    return (
        <ItemsListUI data={data} onClickDetail={onClickDetail}/>
    )
}
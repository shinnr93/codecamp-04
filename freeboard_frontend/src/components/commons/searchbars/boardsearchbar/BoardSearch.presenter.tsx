import * as S from "./BoardSearch.styles";
import { IBoardSearchUIProps } from "./BoardSearch.types";

export default function BoardSearchUI(props: IBoardSearchUIProps){

    return(
        <S.SearchBar>
            {/* <S.FireFilledIcon /> */}
            <S.AudioOutlinedInput />
            <S.SearchbarInput 
                placeholder="검색어를 입력해주세요"
                onChange={props.onChangeSearchbar}
            />
        </S.SearchBar>
    )
}
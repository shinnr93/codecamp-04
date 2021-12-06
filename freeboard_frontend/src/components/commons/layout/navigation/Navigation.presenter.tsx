import * as S from "./Navigation.styles";

export default function NavigationUI(props) {
  return (
    <S.Navigation>
      <>|</>
      <S.Menu id="/boards/new" onClick={props.onClickMenu}>
        HOME
      </S.Menu>
      <>|</>
      <S.Menu id="/boards/list" onClick={props.onClickMenu}>
        COMMUNITY
      </S.Menu>
      <>|</>
      <S.Menu id="/market/items/list" onClick={props.onClickMenu}>
        MARKET
      </S.Menu>
      <>|</>
      <S.Menu id="/cats" onClick={props.onClickMenu}>
        HEALING
      </S.Menu>
      <>|</>
    </S.Navigation>
  );
}

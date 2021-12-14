import { Wrapper, LoginInfo, Label, UserName, PickList } from "./myPage.styles";

export default function MyPageUI(props) {
  return (
    <>
      <Wrapper>
        <LoginInfo>
          <Label>마이 페이지</Label>
          {/* <UserName>{props.loginData?.fetchUserLoggedIn?.name}님</UserName> */}
          <PickList>
            찜 목록{" "}
            {props.PickList?.fetchUseditemsIPicked.map((el) => (
              <div key={el._id}>
                <div>상품명{el.name}</div>
                <div>상품가격{el.price}</div>
              </div>
            ))}
          </PickList>
        </LoginInfo>
      </Wrapper>
    </>
  );
}

import * as S from "./BoardWrite.styles"




export default function FreeBoardWriteUI(props){

    return(
        <>
        <div>
      <h1>
        <S.NewContent>게시물 등록</S.NewContent>
      </h1>
      <S.Bodywrapper>
        <S.IdPassWord>
          <S.WriterWrapper>
            <S.Writer>작성자</S.Writer>
            <S.HeadInput
              type="text"
              placeholder="이름을 적어주세요"
              onChange={props.write}
            />
            <S.ErrorMessage>{props.checkwriter}</S.ErrorMessage>
          </S.WriterWrapper>
          <S.PassWordWrapper>
            <S.PassWord>비밀번호</S.PassWord>
            <S.HeadInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={props.pw}
            />
            <S.ErrorMessage>{props.checkpw}</S.ErrorMessage>
          </S.PassWordWrapper>
        </S.IdPassWord>
        <S.TitleBox>
          <S.Title>제목</S.Title>
          <S.TitleInput
            type="text"
            placeholder="제목을 작성해주세요"
            onChange={props.head}
          />
          <S.ErrorMessage>{props.checktitle}</S.ErrorMessage>
        </S.TitleBox>
        <div>
          <S.Content>내용</S.Content>
          <S.ContentBox
            type="text"
            placeholder="내용을 작성해주세요"
            onChange={props.innertext}
          />
          <S.ErrorMessage>{props.checktext}</S.ErrorMessage>
        </div>
        <S.Home>주소</S.Home>
        <S.Zipwrapper>
          <S.ZipCode type="text" placeholder="07520" />
          <S.ZipCodeSearch>우편번호 검색</S.ZipCodeSearch>
        </S.Zipwrapper>
        <S.Address1>
          <S.AddressInput type="text" onChange={props.add} />
          <S.ErrorMessage>{props.checkaddress}</S.ErrorMessage>
        </S.Address1>
        <S.AddressInput type="text" onChange={props.add2} />
        <S.ErrorMessage>{props.checkaddress2}</S.ErrorMessage>
        <S.Youtube>유튜브</S.Youtube>
        <S.YoutubeLink type="text" placeholder="링크를 복사해주세요." />
        <S.Photo>사진 첨부</S.Photo>
        <S.Picture>
          <S.PictureButton></S.PictureButton>
          <S.PictureButton></S.PictureButton>
          <S.PictureButton></S.PictureButton>
        </S.Picture>
        <S.Main>메인 설정</S.Main>
        <input type="radio" name="mainsetting" checked="checked" /> 유튜브
        <input type="radio" name="mainsetting" />
        사진
      </S.Bodywrapper>
      <S.EnterBox>
        <S.Enter type="text" name="등록" onClick={props.join}>
          등록하기
        </S.Enter>
      </S.EnterBox>

      {/* <button>등록하기</button> */}
    </div>
        </>


    )

}
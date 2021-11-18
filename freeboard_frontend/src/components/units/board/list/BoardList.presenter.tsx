import { gql, useQuery } from '@apollo/client';
import { useState, MouseEvent } from 'react'
import { getDate } from '../../../../commons/libraries/utils'
import { Next } from '../detail/BoardDetail.styles';

import {
  Wrapper,
  TableTop,
  TableBottom,
  Row,
  ColumnHeaderBasic,
  ColumnHeaderTitle,
  ColumnBasic,
  ColumnTitle,
  Footer,
  PencilIcon,
  ButtonWrapper,
  WriteButton,
  DeleteButton,
  Prev,
  NextButton,
} from "./BoardList.styles"


const FETCH_BOARDS = gql`
query fetchBoards($page: Int) {
  fetchBoards(page: $page) {
    _id
    writer
    title
  }
}
`;

const FETCH_BOARDS_COUNT = gql`
query fetchBoardsCount {
  fetchBoardsCount
}
`;


export default function BoardListUI(props){
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery(FETCH_BOARDS, {
    variables: {
      page: startPage,
    }
  })

  const { data: dataBoardCount } =
  useQuery(FETCH_BOARDS_COUNT)
  const lastPage = dataBoardCount
    ? Math.ceil(dataBoardCount?.fetchBoardsCount / 10)
    : 0;


  function onClickPage(event) {
    if (event.target instanceof Element)
    refetch({page: Number(event.target.id)})
  }


  function onClickPrevPage () {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10)
  }

  function onClickNextPage () {
    if(startPage + 10 > lastPage ) return;
    setStartPage((prev) => prev + 10)
  }



    return(
        <Wrapper>
        <TableTop />
        <Row>
        <ColumnHeaderBasic>번호</ColumnHeaderBasic>
        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
        <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
        <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
      </Row>
      {props.data?.fetchBoards.map((el, index) => (
        <Row key={el._id}>
          <ColumnBasic>{index + 1}</ColumnBasic>
          {new Array(1).fill(1).map(
            (_, index) =>
            startPage + index <= lastPage && (
              <ColumnTitle id={el._id} onClick={props.boardDetail}>{el.title}</ColumnTitle>
  
            )
          )}
          <ColumnBasic>{el.writer}</ColumnBasic>
          <ColumnBasic>{getDate(el.createdAt)}</ColumnBasic>
        </Row>
      ))}
      <TableBottom />
      <Footer>
        <ButtonWrapper>
        <WriteButton onClick={props.boardWrite}>
          <PencilIcon src="/images/board/list/write.png" />
          게시물 등록하기
        </WriteButton>
        <DeleteButton>게시물 삭제하기</DeleteButton>
        </ButtonWrapper>
        <Prev onClick={onClickPrevPage}>이전페이지</Prev>
    {new Array(10).fill(1).map(
      (_, index) =>
      startPage + index <= lastPage && (
        <span
        key = {startPage + index}
        onClick={onClickPage}
        id={String(startPage + index)}
        style={{ margin: "10px", cursor: "pointer"}}
        >
          {startPage + index}
        </span>
      )
    )}
    <NextButton onClick={onClickNextPage}>다음페이지</NextButton>

      </Footer>
    </Wrapper>
  );
}
           {/* <BestofList>
        <div>
      {props.best?.fetchBoardsOfTheBest.map((el, index) => (
        <Row key={el._id}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{index + 1}</Column>
          <ColumnTitle id={el._id} onClick={props.boardDetail}>{el.title}</ColumnTitle>
          <ColumnWriter>{el.writer}</ColumnWriter>
          <Column>{getDate(el.createdAt)}</Column>
          <Column>
            {/* <button id={el._id} onClick={props.delete}>삭제하기</button> */}
          {/* </Column>
        </Row>
      ))}
      <>
      <span><Line></Line></span>
      </>
    </div>
        <List></List>
        <Delete></Delete>
        </BestofList>
        <Latest>
        <div>
      {props.data?.fetchBoards.map((el, index) => (
        <Row key={el._id}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{index + 1}</Column>
          {new Array(1).fill(1).map(
            (_, index) =>
            startPage + index <= lastPage && (
              <ColumnTitle id={el._id} onClick={props.boardDetail}>{el.title}</ColumnTitle>

            )
          )}
          <Column>{el.writer}</Column>
          <Column>{getDate(el.createdAt)}</Column>
          <Column>
            {/* <button id={el._id} onClick={props.delete}>삭제하기</button> */}
    //       </Column>
    //     </Row>
    //   ))}
    // </div>

    {/* <div>
      {data?.fetchBoards?.map((el) => (
        <div key={el._id}>
          {el.title} {el.writer}
        </div>
      ))}
    </div> */}

//     <span onClick={onClickPrevPage}>이전페이지</span>
//     {new Array(10).fill(1).map(
//       (_, index) =>
//       startPage + index <= lastPage && (
//         <span
//         key = {startPage + index}
//         onClick={onClickPage}
//         id={String(startPage + index)}
//         style={{ margin: "10px", cursor: "pointer"}}
//         >
//           {startPage + index}
//         </span>
//       )
//     )}
//     <span onClick={onClickNextPage}>다음페이지</span>
//         </Latest>
//         </S.Wrapper>
        
//     ) */} */}



// }
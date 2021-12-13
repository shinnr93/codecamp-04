import { gql, useQuery } from "@apollo/client";
import { MouseEvent, useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_BOARDS } from "./BoardList.queries";
// import 'antd/dist/antd.css';

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
  Prev,
  NextButton,
  // LeftOutlined
} from "./BoardList.styles";
import BoardSearch from "../../../commons/searchbars/boardsearchbar/BoardSearch.container";
import { Input, Space } from 'antd';
import { v4 as uuidv4} from "uuid"

const { Search } = Input;
const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function BoardListUI(props) {
  const [startPage, setStartPage] = useState(1);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS, {
    variables: {
      page: startPage,
    },
  });

  const { data: dataBoardCount } = useQuery(FETCH_BOARDS_COUNT);

  const lastPage = dataBoardCount
    ? Math.ceil(dataBoardCount?.fetchBoardsCount / 10)
    : 0;

  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    alert("나리 <3")
    if (event.target instanceof Element)
      refetch({ page: Number(event.target.id) });
  };

  function onClickPrevPage() {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
  }

  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  }

  return (
    <Wrapper>
      <div>{props.isSearch ? "검색" : "목록"}</div>
      <TableTop />
      <Row>
        <ColumnHeaderBasic>번호</ColumnHeaderBasic>
        <ColumnHeaderTitle>제목</ColumnHeaderTitle>
        <ColumnHeaderBasic>작성자</ColumnHeaderBasic>
        <ColumnHeaderBasic>날짜</ColumnHeaderBasic>
      </Row>
      {/* {data?.fetchBoards.map((el, index) => (
        <Row key={el._id}>
          <ColumnBasic>
            <input type="checkbox" />
            {index + 1}
          </ColumnBasic>
          {new Array(1).fill(1).map(
            (_, index) =>
              startPage + index <= lastPage && (
                <ColumnTitle id={el._id} onClick={props.boardDetail}>
                  {el.title}
                </ColumnTitle>
              )
          )}
          <ColumnBasic>{el.writer}</ColumnBasic>
          <ColumnBasic>{getDate(el.createdAt)}</ColumnBasic>
        </Row>
      ))} */}

      {props.searchData?.fetchBoards.map((el, index) => (
        <Row key={uuidv4()}>
          <ColumnBasic>
            <input type="checkbox" />
            {index + 1}
          </ColumnBasic>
          {new Array(1).fill(1).map(
            (_, index) =>
              startPage + index <= lastPage && (
                <ColumnTitle id={el._id} onClick={props.boardDetail}>
                  {el.title}
                </ColumnTitle>
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
          {/* <LeftOutlined /> */}
        </ButtonWrapper>
        <Prev onClick={onClickPrevPage}>이전페이지</Prev>
        {new Array(10).fill(1).map(
          (_, index) =>
            startPage + index <= lastPage && (
              <span
                key={startPage + index}
                onClick={onClickPage}
                id={String(startPage + index)}
                style={{ margin: "10px", cursor: "pointer" }}
              >
                {startPage + index}
              </span>
            )
        )}
        <NextButton onClick={onClickNextPage}>다음페이지</NextButton>
      </Footer>
      <Search
        placeholder="검색어를 입력해 주세요"
        allowClear
        enterButton="Search"
        size="large"
        onChange={props.mySearch}
        onSearch={props.onSearch}
      />
    </Wrapper>
  );
}

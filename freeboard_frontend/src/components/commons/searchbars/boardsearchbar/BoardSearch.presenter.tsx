import * as S from "./BoardSearch.styles";
import { IBoardSearchUIProps } from "./BoardSearch.types";
import { Input, Space } from "antd";

const { Search } = Input;
export default function BoardSearchUI(props: IBoardSearchUIProps) {
  return (
    <>
      <Search
        placeholder="검색어를 입력해 주세요"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={props.onSearch}
      />
    </>
  );
}

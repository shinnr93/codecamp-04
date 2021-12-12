import { ApolloQueryResult } from "@apollo/client";
import { MouseEvent } from "react"
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  onClickPage: (event: MouseEvent<HTMLSpanElement>) => void;
  refetch: (
    variables: Partial<IQueryFetchBoardsArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  keyword: string;
  onChangeKeyword: (value: string) => void;
  startPage: number;
}

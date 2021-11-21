import { gql } from '@apollo/client'






export const FETCH_BOARDS = gql`
 query fetchBoards($page:Int){
     fetchBoards(page:$page) {
         _id
         writer
         title
         createdAt
     }
 }
`;


export const FETCH_BOARDS_OF_THE_BEST = gql`
query {fetchBoardsOfTheBest {
    _id
    writer
    title
    contents
    likeCount
    createdAt
  }
  }
`;

export const DELETE_BOARD = gql`
mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
}
`;

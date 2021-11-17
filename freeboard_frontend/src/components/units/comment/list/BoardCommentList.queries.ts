import {gql} from "@apollo/client"


export const FETCH_BOARD_COMMENTS = gql`
query fetchBoardComments($boardId: ID!, $page: Int) {
    fetchBoardComments(boardId: $boardId, page: $page) {
      _id
      writer
      contents
      createdAt
      rating
    }
  }
`

export const UPDATE_BOARD_COMMENT = gql`
mutation updateBoardComment(
  $updateBoardCommentInput: UpdateBoardCommentInput!
  $password: String
  $boardCommentId: ID!
) {
  updateBoardComment(
    updateBoardCommentInput: $updateBoardCommentInput
    password: $password
    boardCommentId: $boardCommentId
  ) {
    _id
  }
}
`;
import { useRouter } from 'next/router'
import { gql, useQuery } from "@apollo/client";
import {
  Bodywrapper,
  Title,
  Id,
  Date,
  Img,
  Contents,
  Youtube,
  Like,
  WriterProfile,
  Mainwrapper,
  Next,
  List,
  Previous,
  Relwrapper,
  LikeImg
} from "../../../styles/freeboard";

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){
        _id
        writer
        title
        contents
        createdAt
        }
    }

`;

export default function FreeBoardPage() {
  const router = useRouter()

  const {data} = useQuery(FETCH_BOARD, {
      variables: {
          boardId : router.query.Id
      }
  })

  let create = String(data?.fetchBoard.createdAt)
  create = create.split("T").join("").split("")
  let createDate = create.slice(0, 10).join("")
  let createTime = create.slice(10, 15).join("")
  // create = createDate + "|" + createTime
  create = `${createDate}  | ${createTime}`
  
  return (
    <div>
      <Bodywrapper>
        <Mainwrapper>
          <>
            <Title>{data?.fetchBoard.title}</Title>
            {/* <Id>{data?.fetchBoard._id}</Id> */}
            <Date>{create}</Date>
          </>
          <Img />
          <Contents>
            {data?.fetchBoard.contents}
            </Contents>
          <Youtube
            src="../../../videos/제주도.mp4"
            width="640"
            height="480"
            controls
          ></Youtube>
          <div>
            <Like><LikeImg src="../../../images/좋아요.png" /></Like>
          </div>
          <WriterProfile>{data?.fetchBoard.writer}</WriterProfile>
          <Relwrapper>
          <Previous>이전 글</Previous>
          <List>목록</List>
          <Next>다음 글</Next>
          </Relwrapper>
        </Mainwrapper>
      </Bodywrapper>
    </div>
  );
}

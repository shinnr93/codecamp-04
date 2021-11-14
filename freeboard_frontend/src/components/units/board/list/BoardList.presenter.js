import { getDate } from '../../../../commons/libraries/utils'
import * as S from './BoardList.styles'






export default function BoardListUI(props){



    return(
        <>
        <S.Latest>
        


        <div>
      {props.data?.fetchBoards.map((el, index) => (
        <S.Row key={el._id}>
          <S.Column>
            <input type="checkbox" />
          </S.Column>
          <S.Column>{index + 1}</S.Column>
          <S.ColumnTitle id={el._id} onClick={props.boardDetail}>{el.title}</S.ColumnTitle>
          <S.Column>{el.writer}</S.Column>
          <S.Column>{getDate(el.createdAt)}</S.Column>
          <S.Column>
            {/* <button id={el._id} onClick={props.delete}>삭제하기</button> */}
          </S.Column>
        </S.Row>
      ))}
    </div>
        </S.Latest>
        <S.BestofList>
        <div>
      {props.best?.fetchBoardsOfTheBest.map((el, index) => (
        <S.Row key={el._id}>
          <S.Column>
            <input type="checkbox" />
          </S.Column>
          <S.Column>{index + 1}</S.Column>
          <S.Column>{el.title}</S.Column>
          <S.Column>{el.writer}</S.Column>
          <S.Column>{getDate(el.createdAt)}</S.Column>
          <S.Column>
            {/* <button id={el._id} onClick={props.delete}>삭제하기</button> */}
          </S.Column>
        </S.Row>
      ))}
    </div>
        <S.List></S.List>
        <S.Delete></S.Delete>
        </S.BestofList>
        </>
    )



}
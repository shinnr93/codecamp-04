<BestofList>
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
     <button id={el._id} onClick={props.delete}>삭제하기</button> */}
   </Column>
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
    <button id={el._id} onClick={props.delete}>삭제하기</button> 
     </Column>
     </Row>
   ))}
 </div>

 <div>
{data?.fetchBoards?.map((el) => (
<div key={el._id}>
  {el.title} {el.writer}
</div>
))}
</div> 

    <span onClick={onClickPrevPage}>이전페이지</span>
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
    <span onClick={onClickNextPage}>다음페이지</span>
        </Latest>
        </S.Wrapper>

    ) }
import { InputWrapper, PencilIcon, Wrapper } from "./BoardCommentWrite.styles";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
    return (
        <Wrapper>
            {!props.isEdit && (
                <>
                <PencilIcon src="/images/boardComment/write/pencil.png"/>
                <span>댓글</span>
                </>
            )}
            <InputWrapper>
                <Input placeholder="작성자"
                readOnly={Boolean(props.el?.writer)}
                defaultValue={props.el?.writer || ""}
                onChange={props.onChangemyWriter}
                />
            </InputWrapper>
        </Wrapper>
    )

}
import styled from '@emotion/styled'


export const MyInput = styled.input`
    width: 100px;
    height: 20px;
`;


export const MyButton = styled.button`
    background-color: ${(props) => props.qqq === true ? "yellow" : "grey"};
    //함수가 아니기에 prop를 못받아서 강제로 함수만든것
    font-size: 30px;
`;
import styled from '@emotion/styled'


export const MyInput = styled.input`
    width: 100px;
    height: 20px;
`;


export const MyButton = styled.button`
    background-color: ${(props) => props.qqq === true ? "yellow" : "grey"};
    font-size: 30px;
`;
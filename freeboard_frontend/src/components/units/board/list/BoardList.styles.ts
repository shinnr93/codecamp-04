import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Latest = styled.div``;

export const Column = styled.div``;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: blue;
  }
`;

export const TextToken = styled.span`
  color: ${(props) => (props.isMatched ? "red" : "black")};
`;

export const ColumnHeaderBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnHeaderTitle = styled.div`
  width: 70%;
  text-align: center;
`;

export const ColumnBasic = styled.div`
  width: 10%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 70%;
  text-align: center;
  cursor: pointer;

  :hover {
    color: blue;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ;
  padding-top: 50px;
`;

export const PencilIcon = styled.img``;

export const ButtonWrapper = styled.div`
  padding-left: 300px;
`;

export const WriteButton = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #f5f2fc;
  }
`;


export const Prev = styled.button`
  /* width: 90px;
  height: 52px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #E3D7FC;
  } */
`;

export const NextButton = styled.button`
  /* width: 90px;
  height: 52px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  :hover {
    background-color: #E3D7FC;
  } */
`;

// export const LeftOutlined = styled.div``

// export const Column = styled.div`
//     /* width: 20%; */
// `

// export const ColumnWriter = styled.div`
//     /* width: 20%; */
// `;

// export const ColumnTitle = styled.div`
//     /* width: 20%; */
//     cursor: pointer;
//     :hover{
//         text-decoration: underline;
//         color: blue
//     };
// `

// export const BestofList = styled.div`

// `;

// export const List = styled.div`
// `;

// export const Delete = styled.div`
// `;

// export const Line = styled.div`
// height: 20px;

// `;

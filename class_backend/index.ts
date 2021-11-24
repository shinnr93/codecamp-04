// console.log("Hello World!!!");

import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.mysql";

const typeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String!
    age: Int
  }

  type AAA {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoards: [AAA]
  }

  type Mutation {
    # 주석처리 createBoard(writer: String, title: String, age: Int): String
    createBoard(createBoardInput: CreateBoardInput!): String
    deleteBoard(number: Int!) : String
  }
`;

const resolvers = {
  Query: {
    fetchBoards: async () => {
      // 어쩌구저쩌구(데이터베이스에서 게시물데이터 꺼내오기)
      const result = await Board.find({ where: {isDeleted: null }});
      console.log(result);

      return result;
    },
  },

  Mutation: {
    // loginCheck: (parent: any, args: any) => {


    // },
    deleteBoard: async (_: any, args: any ) => {
      await Board.update({number: args.number}, { deletedAt: new Date() })
      return "게시물이 정상적으로 삭제되었습니다."
    },

    createBoard: async (_: any, args: any) => {
      // loginCheck({aaa: "흰둥이"})
      // 어쩌구저쩌구(데이터베이스에 게시물데이터 등록하기)
      /////////1번째 방법
      // await Board.insert({
      //   title: "안녕하세요 테스트입니다",
      //   writer: "그럼난흰둥이",
      //   age: 6,
      // });

      /////////2번째 방법
      // await Board.insert({
      //   title: args.title,
      //   writer: args.writer,
      //   age: args.age,
      // });

      /////////3번째 방법
      // console.log()
      //   ...args.createBoardInput,
      // title: args.createBoardInput.title,
      // writer: args.createBoardInput.writer,
      // age: args.createBoardInput.age,
      // });

      await Board.insert({
        ...args.createBoardInput,
        // title: args.createBoardInput.title,
        // writer: args.createBoardInput.writer,
        // age: args.createBoardInput.age,
      });

      return "게시물 등록에 성공하였습니다";
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

createConnection({
  type: "mysql",
  database: "mysql",
  username: "root",
  password: "codecamp",
  host: "34.64.207.239",
  port: 3321,
  // @ts-ignore
  entities: [__dirname + "/*.mysql.ts"],
  logging: true,
  synchronize: true,
})
  .then(() => {
    // 연결 성공시 실행하기
    console.log("연결 완료!");

    server.listen({ port: 4000 });
  })
  .catch((error) => {
    // 연결 실패시 실행하기
    console.log(error);
  });

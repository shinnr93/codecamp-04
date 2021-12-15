import { gql, useMutation } from "@apollo/client";
import Head from "next/head"

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
    }
  }
`;

export default function PointPage() {
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  function onClickPoint1() {
    const IMP = window.IMP;
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "1000 포인트",
        amount: 1000,
        buyer_email: "yeen00123@gmail.com",
        buyer_name: "강선우",
        buyer_tel: "010-2018-2034",
        buyer_addr: "서울특별시 구로구 구로3동",
        buyer_postcode: "00001",
        m_redirect_url: "",
        // 모바일일 때는 아예 사이트가 넘어가 버리기 때문에 결제를 완료하면 다시 보내줄 url 을 써줘야 한다
        // m_redirect_url: """
      },
      async (rsp) => {
        if (rsp.success) {
          const result = await createPointTransactionOfLoading({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
        } else {
          alert("실패");
        }
      }
    );
  }

  function onClickPoint2() {}

  function onClickPoint3() {}

  return (
    <>
    <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <button onClick={onClickPoint1}>1000원 충전하기</button>
      <button onClick={onClickPoint2}>3000원 충전하기</button>
      <button onClick={onClickPoint3}>10000원 충전하기</button>
    </>
  );
}

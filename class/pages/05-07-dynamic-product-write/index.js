import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

//API 만들고
const CREATE_PRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationProductPage() {
  const router = useRouter();
  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [mySeller, setMySeller] = useState("");
  const [myProduct, setMyProduct] = useState("");
  const [productContent, setProuctContent] = useState("");
  const [productPrice, setProductPrice] = useState(0);

  function onChangeMySeller(event) {
    setMySeller(event.target.value);
  }

  function onChangeMyProduct(event) {
    setMyProduct(event.target.value);
  }

  function onChangeProductContent(event) {
    setProuctContent(event.target.value);
  }

  function onChangeProductPrice(event) {
    setProductPrice(event.target.value);
  }

  async function zzz() {
    try {
      const result = await createProduct({
        variables: {
          seller: mySeller,
          createProductInput: {
            name: myProduct,
            detail: productContent,
            price: Number(productPrice),
          },
        },
      });
      console.log(result);
      //router.push('/05-08-dynamic-product-read/' + result.data.createProduct._id)// 가장 기초 표기법(O)
      router.push(
        `/05-08-dynamic-product-read/${result.data.createProduct._id}`
      ); // 템플릿 리터럴(O)
      //router.push('/05-08-dynamic-product-read/${result.data.createProduct._id}') // 잘못된 표기(X)
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      판매자 <input type="text" onChange={onChangeMySeller} />
      <br />
      상품명 <input type="text" onChange={onChangeMyProduct} />
      <br />
      상품내용 <input type="text" onChange={onChangeProductContent} />
      <br />
      상품가격 <input type="number" onChange={onChangeProductPrice} />
      <br />
      <button onClick={zzz}>상품 등록하기</button>
    </>
  );
}

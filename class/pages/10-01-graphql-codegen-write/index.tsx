import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { IMutation, IMutationCreateProductArgs } from "../../src/commons/types/generated/types";

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
  const [createProduct] = useMutation<Pick<IMutation, 'createProduct'>, IMutationCreateProductArgs >(CREATE_PRODUCT);
 
  
  async function zzz() {
    try {
      const result = await createProduct({
        variables: {
          seller: "철수",
          createProductInput: {

          }
        }
      });
      console.log(result);
      result.data?.createProduct?._id
      //router.push('/05-08-dynamic-product-read/' + result.data.createProduct._id)// 가장 기초 표기법(O)
      router.push(
        `/05-08-dynamic-product-read/${result.data?.createProduct?._id}`
      ); // 템플릿 리터럴(O)
      //router.push('/05-08-dynamic-product-read/${result.data.createProduct._id}') // 잘못된 표기(X)
    
    } catch (error) {
      // console.log(error.message);
    }
  }

  return (
    <>
      판매자 <input type="text"  />
      <br />
      상품명 <input type="text"  />
      <br />
      상품내용 <input type="text"  />
      <br />
      상품가격 <input type="number"  />
      <br />
      <button onClick={zzz}>상품 등록하기</button>
    </>
  );
}

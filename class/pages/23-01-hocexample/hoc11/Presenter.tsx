const withAuth = (Component) => {
  return (props) => {
    return <Component {...props} />;
  };
};

const Presenter = (props) => {
  return <div>프리젠터 입니다. props: {props.aaa}</div>;
};

export default withAuth(Presenter);

function aaa(Component) {
  //   return function bbb(){

  // 로그인 검증 로직!

  //     return "결과물"
  
  // }
}

const withAuth = (Componnent) => (props) => {
  //  로그인 검증 로직

  return <Componnent {...props} />;
};

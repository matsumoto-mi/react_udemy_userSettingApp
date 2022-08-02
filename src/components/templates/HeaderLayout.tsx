import { memo, ReactNode, VFC } from "react";
import { Header } from "../organisms/lauout/Header";

type Props = {
  //タグで渡した要素を渡せる型の宣言がReactNode
  children: ReactNode;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});

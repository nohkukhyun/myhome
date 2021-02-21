import React, { useEffect } from "react";
import Layout from "../../components/work/Layout";
import MainContents from "../../components/work/maincontents";
import { useDispatch, useSelector } from "react-redux";
import {
  slideAnimationStart,
  slideAnimationFinish,
} from "../../store/animation/slide/slide.action";
import { RootState } from "../../store/rootReducer";

type WorkProps = {
  history?: History | any;
};


function WorkContainer({ history }: WorkProps) {
  const dispatch = useDispatch();
  const { status } = useSelector((state: RootState) => state.slide);

  //animation start
  useEffect(() => {
    dispatch(slideAnimationStart());
  }, [dispatch]);

  if (status) {
    setTimeout(() => {
      dispatch(slideAnimationFinish());
    }, 2100);
  }

  return (
    <Layout>
      <MainContents history={history} />
    </Layout>
  );
}

export default WorkContainer;

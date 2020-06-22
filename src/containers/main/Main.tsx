import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  slideAnimationStart,
  slideAnimationFinish,
} from "../../store/animation/slide/slide.action";
import { RootState } from "../../store/rootReducer";

type MainProps = {
  history?: History | any;
};

type prevProps = {
  prevProps: () => void;
};

function Home({ history }: MainProps) {
  const dispatch = useDispatch();
  const { status } = useSelector((state: RootState) => state.slide);

  useEffect(() => {
    dispatch(slideAnimationStart());
  }, [dispatch]);

  if (status) {
    setTimeout(() => {
      dispatch(slideAnimationFinish());
    }, 2200);
  }

  return <div></div>;
}

export default Home;

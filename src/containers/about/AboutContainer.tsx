import React, { useEffect } from "react";
import About from "../../components/about/About";
import { useDispatch, useSelector } from "react-redux";
import {
  slideAnimationStart,
  slideAnimationFinish,
} from "../../store/animation/slide/slide.action";
import { RootState } from "../../store/rootReducer";

type AboutProps = {
  history?: History | any;
};

function AboutContainer({ history }: AboutProps) {
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

  return <About history={history} />;
}

export default AboutContainer;

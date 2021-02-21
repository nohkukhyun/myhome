import React, { useState, useEffect } from "react";
import About from "../../components/about/About";
import { useDispatch, useSelector } from "react-redux";
import {
  slideAnimationStart,
  slideAnimationFinish,
} from "../../store/animation/slide/slide.action";
import { getUserInfoAsync } from "../../store/github/github.action";
import { RootState } from "../../store/rootReducer";

function AboutContainer() {
  const dispatch = useDispatch();
  const { status } = useSelector((state: RootState) => state.slide);
  const { userInfo } = useSelector((state: RootState) => state.github);
  const [names, setNames] = useState("");
  const [open, setOpen] = useState(false);

  //animation start
  useEffect(() => {
    dispatch(slideAnimationStart());
  }, [dispatch]);

  if (status) {
    setTimeout(() => {
      dispatch(slideAnimationFinish());
    }, 2100);
  }

  useEffect(() => {
    dispatch(getUserInfoAsync.request("nohkukhyun"));
  }, [dispatch]);

  const handleSubmitName = (name: string) => {
    dispatch(getUserInfoAsync.request(name));
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const names = e.target.value;
    setNames(names);
  };

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <About
      userInfo={userInfo}
      handleSubmitName={handleSubmitName}
      handleChangeName={handleChangeName}
      names={names}
      open={open}
      handleModal={handleModal}
    />
  );
}

export default AboutContainer;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../../components/main/Layout";
import Sidebar from "../../components/main/sidebar";
import MainContents from "../../components/main/maincontents";
import { slideAnimationSuccess } from "../../store/animation/slide/slide.action";
import { RootState } from "../../store/rootReducer";

function Home() {
  const dispatch = useDispatch();
  const { status } = useSelector((state: RootState) => state.slide);

  useEffect(() => {
    dispatch(slideAnimationSuccess());
  }, [dispatch, status]);

  return (
    <Layout>
      <Sidebar />
      <MainContents />
    </Layout>
  );
}

export default Home;

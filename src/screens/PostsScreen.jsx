import React, { useState, useEffect } from "react";
import { View } from "react-native";
import axios from "axios";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CardPosts from "../components/CardPosts";
import Pagination from "../components/Pagination";
import Loading from "../components/Loading";

const PostsScreen = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getPosts = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=7`
      );
      setPosts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getPosts(currentPage);
  }, [currentPage]);

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
      extraScrollHeight={100}
      keyboardShouldPersistTaps="handled"
      enableAutomaticScroll={true}
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, padding: 10 }}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <View>
            <CardPosts posts={posts} />
          </View>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            loading={loading}
          />
        </>
      )}
    </KeyboardAwareScrollView>
  );
};

export default PostsScreen;

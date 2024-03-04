import React, { useEffect, useState } from "react";
import { createPost, getPosts, removePost } from "../apis";
import Post from "../components/post";
import Profile from "../components/profile";
import WritePost from "../components/write-post";
import useAuth0Client from "../providers/use-auth0-client";
import { PostType } from "../types";
import "./page-home.scss";

const PageHome: React.FC = () => {
  const auth0Client = useAuth0Client();
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const token = await auth0Client.getTokenSilently();
        const posts = await getPosts(token);
        setPosts(posts);
      } catch (error) {
        alert(error);
      }
    })();
  }, [auth0Client]);

  const deletePostById = async (id: number) => {
    try {
      const token = await auth0Client.getTokenSilently();

      await removePost(token, id);

      const posts = await getPosts(token);
      setPosts(posts);
    } catch (error) {
      alert(error);
    }
  };

  const writePost = async (message: string) => {
    try {
      const token = await auth0Client.getTokenSilently();

      await createPost(token, { message });

      const posts = await getPosts(token);
      setPosts(posts);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="posting--page-home">
      <div className="posting--page-home-left">
        <Profile />
      </div>
      <div className="posting--page-home-center">
        <WritePost writePost={writePost} />
        {posts.map((post) => (
          <Post key={post.id} {...post} deletePostById={deletePostById} />
        ))}
      </div>
      <div className="right">module-federation-section</div>
    </div>
  );
};

export default PageHome;

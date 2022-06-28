import { useEffect, useState } from "react";
import MainAppLayout from "../components/layout/MainAppLayout";
import PostItem from "../components/PostItem";
import useAuthenticatedAxios from "../hooks/useAuthenticatedAxios";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);
  const authenticatedAxios = useAuthenticatedAxios();
  useEffect(() => {
    authenticatedAxios.get("/posts").then(({ data, status }) => {
      setPosts(data);
    });
  }, []);
  return (
    <MainAppLayout title="Dashboard">
      <div className="grid grid-cols-4 gap-4">
        {posts.map((post) => {
          return <PostItem post={post} key={post.id} />;
        })}
      </div>
    </MainAppLayout>
  );
}

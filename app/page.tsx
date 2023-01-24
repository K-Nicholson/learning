import Link from "next/link";
import getPostMetaData from "../components/GetPostMetaData";
import PostPreview from "../components/PostPreview";

const HomePage = () => {
    const postMetaData = getPostMetaData();
    const postPreviews = postMetaData.map((post) => (
        <PostPreview key = {post.slug} {...post} />
    ));
    return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>;
};

export default HomePage;
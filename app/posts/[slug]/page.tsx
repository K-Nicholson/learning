import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetaData from "../../../components/GetPostMetaData";


const getPostContent = (slug :string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async() =>{
    const posts = getPostMetaData();
    return posts.map((post) => ({
        slug:post.slug,
    }));
};


const PostPage= (props:any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return(
        <div>
            <div className="my-12 text-center">
                <h1 className="text-2xl text-slate-600 text-cetner">{post.data.title}</h1>
                <p className="text-slate-400">{post.data.date}</p>
            </div>

            <article className="prose">
                <Markdown>{post.content}</Markdown>
            </article>
        </div>
    );
};
export default PostPage;
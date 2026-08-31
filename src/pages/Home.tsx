import { useQuery } from "@tanstack/react-query";

import Card from "../components/ui/Card/Card";

import '../components/ui/home.css';
import { getPosts } from "../api/posts.api";
import type { IPost } from "../types/post.types";

interface IProps {



}


const Home = ({ }: IProps) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["posts"],
        queryFn: getPosts
    });
    console.log(data);
    if (isLoading) {
        return <p>Loading posts...</p>;
    }
    if (isError) {
        return <p>Something went wrong!</p>;
    }
    return (
        <div className="posts-grid">
            {
                data?.map((post) => {
                    return (
                        <div className="post-card" key={post.id}>
                            <Card  title={post.title} description={post.body}
                            >
                                {/* <Button text="Learn More" variant="primary" onClick={() => alert("More Information")} /> */}
                            </Card>
                        </div>

                    );
                })
            }
           
        </div>
    )
}

export default Home
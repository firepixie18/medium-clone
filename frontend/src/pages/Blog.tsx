import { useParams } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { FullBlog } from "./FullBlog";
import { useBlog } from "../hooks";

export const Blog = () => {
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });

    if (loading || !blog) {
        return <div>
            <Appbar />
        
            <div className="h-screen flex flex-col justify-center">
                
                <div className="flex justify-center">
    
                </div>
            </div>
        </div>
    }
    return <div>
        <FullBlog blogProp={blog} />
    </div>
}
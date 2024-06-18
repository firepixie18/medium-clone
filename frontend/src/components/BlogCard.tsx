import { Link } from "react-router-dom";

interface BlogCardProps{
    id:string
    author:string,
    title:string,
    content:string,
    publishedDate:string
}


export const BlogCard = ({ id,author, title, content, publishedDate }: BlogCardProps) => {
    const displayContent = (content: string) => {
      const maxLength = 300;
      if (content.length <= maxLength) {
        return content;
      }
      const firstPart = content.slice(0, 100);
      const secondPart = content.slice(100, 200);
      const remainingPart = content.slice(200, maxLength);
      return (
        <>
          {firstPart}
          <br />
          {secondPart}
          <br />
          {remainingPart}...
        </>
      );
    };
  
    return (
      <Link to={`/blog/${id}`}>
      <div>
        <div className="mt-5 border-b border-slate-300 px-5 w-screen max-w-screen-md cusor-pointer">
         <div className="flex">
            <div className="flex justify-center flex-col pt-0.5"><Avatar name={author} size1={"small"} /> </div>
            <div className="text-sm pl-1 pt-1 pr-1.5 font-normal">{author}</div>
            <div className="flex justify-center flex-col">
                <Circle/>
            </div>
            <div className="text-sm pl-1 pt-1 font-normal text-slate-400"> {publishedDate}</div>
          </div>
          <div className="text-xl font-semibold pt-1.5">{title}</div>
          <div className="text-sm  text-slate-500 pt-1">{displayContent(content)}</div>
          <div className=" text-sm font-normal text-slate-400 pb-2 pt-6">{`${Math.ceil(content.length / 100)} min read`}</div>
        </div>
      </div>
      </Link>
    );
  };
  
  export default BlogCard

export function Circle(){
    return <div className="h-0.5 w-0.5 rounded-full bg-slate-500">
    </div>
}

interface AvatarProps{
    name:string,
    size?:number
}

interface AvatarProps {
  name: string;
  size1?:string ;
}

export function Avatar({ name, size1 }: AvatarProps) {
  const [firstName, lastName] = name.split(" ");
  const firstInitial = firstName.charAt(0).toUpperCase();
  const lastInitial = lastName ? lastName.charAt(0).toUpperCase() : "";
  
  // Using ternary operator inside template literal
  const avatarClass = `relative inline-flex items-center justify-center ${
    size1 === "small" ? "w-6 h-6" : "w-8 h-8"
  } overflow-hidden bg-gray-100 rounded-full dark:bg-slate-400`;

  return (
    <div>
      <div className={avatarClass}>
        <span className="font-sm text-gray-100 dark:text-gray-100">
          {firstInitial}
          {lastInitial}
        </span>
      </div>
    </div>
  );
}


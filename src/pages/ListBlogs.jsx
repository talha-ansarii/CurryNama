import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BLogCard";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Pagination } from "@/components/ui/pagination";
import PaginationButton from "@/components/PaginationButton";
const ListBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [latestBlogImgSrc , setLatestBlogImgSrc] = useState(null)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `http://localhost/wordpress/wp-json/wp/v2/posts?_fields=id,slug,title,content,date,excerpt`,        
        );

        console.log(response.data)
        await setBlogs(response.data);
        // console.log(blogs)
        
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, [currentPage]);

  console.log(blogs)
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  function getLatestBlog(blogs) {
    const blogsCopy = [...blogs];
    blogsCopy.sort((a, b) => new Date(b.date) - new Date(a.date));
    // console.log(blogsCopy[0])
    return blogsCopy[0];
  }

  const latestBlog = getLatestBlog(blogs);
  // console.log(latestBlog)
  const date = new Date(latestBlog?.date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
//   console.log(latestBlog)
// console.log(formattedDate)
  

console.log(latestBlog?.content.rendered)

const extractFirstImageSrc = (htmlContent) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const img = doc.querySelector('img');
  return img ? img.src : null;
};
useEffect(() => {
  const src = extractFirstImageSrc(latestBlog?.content.rendered);
setLatestBlogImgSrc(src);
},[latestBlog])



  return (
    <div>
      <Navbar />
      <div >
        <div className="relative pt-24  md:pt-[200px] lg:pt-24 bg-[white]  w-[87%] m-auto   flex flex-col justify-start items-center">
         
          <div className="flex lg:flex-row lg:justify-center lg:items-center  md:flex-row flex-col mt-[50px]">
          <img
              src={latestBlogImgSrc}
              className="block md:hidden lg:hidden z-10 w-[326px] h-[172px] md:w-[371px] md:h-[365px] lg:w-[500px] lg:h-[471px] object-cover rounded-t-[20px] md:rounded-r-[20px] lg:rounded-r-[20px]"
            />
            <div className="flex flex-col justify-start md:gap-10 lg:gap-10 gap-2 pt-10 md:w-[50%] items-start bg-[#1C6360] pl-4 pb-4 lg:pl-[30px] md:pl-[30px] md:ml-[0px] lg:ml-[0px] z-0 w-[326px] h-[128px] p-2 lg:w-[50%] lg:h-[522px] md:h-[365px] blog-shadow lg:rounded-l-[20px] rounded-b-[20px] md:rounded-l-[20px] lg:rounded-br-[0px] md:rounded-br-[0px] mt-[-20px] md:mt-[0px] lg:mt-[0px]">
              <div className="text-[20px] pt-[0px] md:leading-[29px] lg:leading-[50px] md:pt-0 lg:pt-0 md:text-[24px] lg:text-[40px] text-[white] montserrat font-[600]">
                <div
                  dangerouslySetInnerHTML={{ __html: latestBlog?.title.rendered }}
                ></div>
              </div>
              <div className="flex flex-col gap-4 montserrat font-[500] md:text-[14px] md:leading-[17.5px] lg:text-[16px] lg:leading-[19.5px] text-white">
              <div className="hidden md:block lg:block">
              <div dangerouslySetInnerHTML={{
                __html: latestBlog?.excerpt.rendered
              }} ></div> 

              </div>
              <div className="flex justify-start items-center gap-2">
                <img
                  className="w-[35px] h-[40px] md:w-[32px] lg:w-[53px] lg:h-[55px] md:h-[33px]"
                  src="/logo.png"
                />
                <div className=" montserrat lg:text-[14px] md:text-[14px] text-[11px] text-[white] inter font-[500]">
                  {formattedDate}
                </div>
              </div>
              <Link to={`/blogs/${latestBlog?.id}`}  className=" hidden md:block lg:flex montserrat mt-[30px] btn-shadow font-[600px] text-[18px] w-[150px] h-[50px] px-[8x] py-[3px] lg:text-[16px]  lg:w-[106px] lg:h-[40px] lg:px-[0px] lg:py-[7px] md:text-[16px] md:w-[97px] md:h-[28px] md:px-[0px] md:py-[0px] rounded-[20px] bg-[#DA3D12] text-white  justify-center items-center  ">
               <p> Read More</p>
              </Link>
              </div>
            </div>
            <img
              src={latestBlogImgSrc}
              className="hidden md:block lg:block z-10 w-[326px] h-[172px] md:w-[50%] md:h-[365px] lg:w-[50%] lg:h-[522px] object-cover rounded-r-[20px] md:rounded-r-[20px] lg:rounded-r-[20px]"
            />
          </div>

        </div>
      </div>
      <div className=" bg-[white] ">
        <div className="pt-10 bg-[white] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-[87%] gap-4 md:gap-4 lg:gap-4 md:w-[87%] lg:w-[87%]  place-items-stretch place-content-between mx-auto ">
          {blogs.map((blog, index) => (
            <div
            className=""
              onClick={() => {
                navigate(`/blogs/${blog.id}`);
                window.location.reload();
              }}
              key={blog.id}
            >
            {
              index%3 === 0 || index === 0 ? <div className="flex w-full justify-start">
                <BlogCard blog={blog} />
              </div>
              :
              index%3 === 1 ? <div className="flex w-full justify-center">
                <BlogCard blog={blog} />
              </div>
              :
              <div className="flex w-full justify-end">
                <BlogCard blog={blog} />
                </div>
               
            }
          
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center m-auto pb-12 mt-10">
          <PaginationButton
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListBlogs;

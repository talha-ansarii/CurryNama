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

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `https://backend.sevenburgers.workers.dev/api/v1/blog/bulk?page=${currentPage}&pageSize=9`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setBlogs(response.data.blogs);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  function getLatestBlog(blogs) {
    const blogsCopy = [...blogs];
    blogsCopy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return blogsCopy[0];
  }

  const latestBlog = getLatestBlog(blogs);
  // console.log(latestBlog)
  const date = new Date(latestBlog?.createdAt);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div>
      <Navbar />
      <Link to={`/blogs/${latestBlog?.id}`} className="relative">
        <div className="relative pt-24  md:pt-[200px] lg:pt-24 bg-[white]  p-8 flex flex-col justify-start items-center">
         
          <div className="flex lg:flex-row lg:justify-center lg:items-center  md:flex-row flex-col mt-[50px]">
          <img
              src={latestBlog?.images[0]}
              className="block md:hidden lg:hidden z-10 w-[326px] h-[172px] md:w-[371px] md:h-[365px] lg:w-[500px] lg:h-[471px] object-cover rounded-t-[20px] md:rounded-r-[20px] lg:rounded-r-[20px]"
            />
            <div className="flex flex-col justify-start md:gap-10 lg:gap-10 gap-2 pt-10 md:w-[365px] items-start bg-[#1C6360] pl-4 pb-4 lg:pl-[30px] md:pl-[30px] md:ml-[0px] lg:ml-[0px] z-0 w-[326px] h-[128px] p-2 lg:w-[477px] lg:h-[471px] md:h-[365px] blog-shadow lg:rounded-l-[20px] rounded-b-[20px] md:rounded-l-[20px] lg:rounded-br-[0px] md:rounded-br-[0px] mt-[-20px] md:mt-[0px] lg:mt-[0px]">
              <div className="text-[20px] pt-[0px] md:leading-[29px] lg:leading-[50px] md:pt-0 lg:pt-0 md:text-[24px] lg:text-[40px] text-[white] montserrat font-[600]">
                <div
                  dangerouslySetInnerHTML={{ __html: latestBlog?.title }}
                ></div>
              </div>
              <div className="flex flex-col gap-4 montserrat font-[500] md:text-[14px] md:leading-[17.5px] lg:text-[16px] lg:leading-[19.5px] text-white">
              <div className="hidden md:block lg:block">
              title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem title title lorem ipsum lirem 

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
              <button className=" hidden md:block lg:block montserrat mt-[30px] btn-shadow font-[600px] text-[18px] w-[150px] h-[50px] px-[8x] py-[3px] lg:text-[16px] lg:w-[106px] lg:h-[40px] lg:px-[0px] lg:py-[7px] md:text-[16px] md:w-[97px] md:h-[28px] md:px-[0px] md:py-[0px] rounded-[20px] bg-[#DA3D12] text-white  ">
                Read More
              </button>
              </div>
            </div>
            <img
              src={latestBlog?.images[0]}
              className="hidden md:block lg:block z-10 w-[326px] h-[172px] md:w-[371px] md:h-[365px] lg:w-[500px] lg:h-[471px] object-cover rounded-r-[20px] md:rounded-r-[20px] lg:rounded-r-[20px]"
            />
          </div>

        </div>
      </Link>
      <div className="w-full bg-[white] ">
        <div className="pt-10 bg-[white] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-[80%] m-auto">
          {blogs.map((blog) => (
            <div
              onClick={() => {
                navigate(`/blogs/${blog.id}`);
                window.location.reload();
              }}
              key={blog.id}
            >
              <BlogCard />
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

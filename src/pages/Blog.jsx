import { useParams } from "react-router";
import React, { useEffect, useRef, useState, useTransition } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import BlogCard from "../components/BLogCard";
import Footer from "../components/Footer";

const Blog = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [scrollY, setScrollY] = useState(0);
  const [blogs, setBlogs] = useState([]);

  const [blog , setBlog] = useState(null)

  const { id } = useParams();

  // console.log(id)

  useEffect(() => {
    
    
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  } ,[scrollY]  )

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
         "http://localhost/wordpress/wp-json/wp/v2/posts?_fields=id,slug,title,content,date")
        console.log(response.data);
        setBlogs(response.data);
        
        
      } catch (error) {
        console.error("Error fetching blogs:", error);

      }
    };
    fetchBlogs();
  }, []);


  function getBlogById(blogId) {
    return blogs.find(blog => blog.id === blogId);
  }

  useEffect(() => {
    setBlog(getBlogById(parseInt(id)));
  }, [id, blogs]);

 

  

  const date = new Date(blog?.date);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  // console.log(formattedDate)





 


  return (
    <div className="bg-[white] ">
      <Navbar />
      <div className="flex flex-col md:flex-col w-full  lg:justify-start  lg:gap-0 lg:flex-row ">
      <div className="md:w-full w-full lg:w-[80%] lg:mt-[86px] relative   ">

      
        <div className="w-[87%] pt-20 md:pt-[120px]  lg:pt-[50px] m-auto pb-9">
          <div className="text-[32px] md:text-[64px] md:leading-[77.6px] flex justify-start pt-[25px]  lg:pt-0 lg:text-[85px] lg:leading-[90px] text-[black] montserrat font-[600]">
            <div className="" />
            {blog?.title.rendered}
          </div>
          <div className="text-[#616161] montserrat font-[500] text-[12px] md:text-[13px] lg:text-[15px] md:leading-[20px] leading-[20px] w-full flex justify-start items-center">
            <div className="flex items-center justify-between pt-2">
              <div className="flex text-[10px] leading-[12px] md:text-[13px] md:leading-[15px] lg:text-[20px] lg:leading-[24px]   gap-2 items-center text-[#1C6360] montserrat font-[500]">
                <img
                  className="w-[24px] h-[24px] md:w-[54px] md:h-[54px] lg:w-[54px] lg:h-[54px]"
                  src="/colorLogo.png"
                />
                {formattedDate}
                
              </div>
            </div>
          </div>

          <div className="flex gap-2 my-6">
          <a href="https://twitter.com/" target="_blank" className="cursor-pointer">
            
            <img
              src="/Blog/twitter.svg"
              alt="twitter"
              className="w-[10px] h-[10px] lg:w-[21px] lg:h-[21px]  "
            />
          </a>
          <a href="https://twitter.com/" target="_blank" className="cursor-pointer">
            
            <img
              src="/Blog/insta.svg"
              alt="twitter"
              className="w-[10px] h-[10px] lg:w-[21px] lg:h-[21px]  "
            />
          </a>
          <a href="https://twitter.com/" target="_blank" className="cursor-pointer">
            
            <img
              src="/Blog/fb.svg"
              alt="twitter"
              className="w-[10px] h-[10px] lg:w-[21px] lg:h-[21px]  "
            />
          </a>
           
          </div>

          
        </div>

        <div className="w-[80%] overflow-hidden m-auto ">
          <div className="my-6 inter text-[14px] leading-[16.94px]">
           <div className="wordpress-content"  dangerouslySetInnerHTML={{
              __html: blog?.content.rendered,
           }} ></div>
          </div>
       
        </div>

        
        </div>
        <div className={`md:hidden lg:flex flex-col    mt-[86px] w-[20%] hidden ${scrollY > 890 ? "sticky top-[86px] h-[1500px] right-[30px] overflow- " : " absolute  top-[890px]  right-[30px] " } `}>
          <div className="montserrat ml-4 pt-4 pb-6 font-[900] lg:text-[32px] lg:leading-[39px] text-[24px] leading-[29px]">
            Latest Posts
          </div>
          <div className=" flex flex-col  gap-4 ">
            {
              blogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
              ))
            }
          

          </div>
        </div>


        <div className="w-full md:flex lg:hidden flex justify-center items-center flex-col">
          <div className="bg-[#A1A1A1] h-[1px] w-[80%] mt-28"></div>
          <div className="montserrat w-full ml-12 pt-4 pb-6 font-[900] md:text-[28px] md:leading-[34px] text-[24px] leading-[29px]">
            Latest Posts
          </div>
          <div className="grid grid-cols-1 place-items-stretch  w-[80%] m-auto md:grid-cols-3 gap-4 mb-12">
            {
              blogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
              ))
            }
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default Blog;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({blog}) => {
  const [src , setSrc] = useState(null)
  console.log(blog)
    


const extractFirstImageSrc = (htmlContent) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const img = doc.querySelector('img');
  return img ? img.src : null;
};
useEffect(() => {
  const src = extractFirstImageSrc(blog?.content.rendered);
setSrc(src);
},[blog])


const date = new Date(blog?.date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className="max-w-sm rounded-lg overflow-hidden cursor-pointer lg:px-0 lg:mb-7 md:mb-0 mb-0">
            <div className=''>

      <img className="w-[236px] md:w-[218px] lg:w-[369px]  h-[144px] md:h-[153px] lg:h-[278px] rounded-[21px] object-cover" src={src} alt="Burger" />
            </div>
      <div className="pt-4">
        <h2 className="text-[12px] leading-[14px] md:text-[13px] md:leading-[15.58px] lg:text-[20px] lg:leading-[24px] font-[600] text-[#1C6360] montserrat ">{blog?.title?.rendered} </h2>
        <div className="flex items-center justify-between pt-2">
          <div className="flex text-[10px] leading-[12px] md:text-[10px] md:leading-[10px] lg:text-[11px] lg:leading-[24px]   gap-2 items-center text-[#1C6360] montserrat font-[500]">
          <img className='w-[24px] h-[24px] md:w-[32px] md:h-[32px] lg:w-[54px] lg:h-[54px]' src="/colorLogo.png"/>

          {formattedDate}
          </div>
        </div>
        <Link 
          to={`/blogs/${blog?.id}`}
            className="flex gap-2 lg:mb-0 mb-10 w-full items-center hover:underline cursor-pointer mt-2"
          >
            <div className="montserrat font-[500] text-[10px] leading-[12px] md:text-[10px] md:leading-[11px] lg:text-[11px] lg:leading-[24px] text-[#DA3D12]">
              Read More
            </div>
            <img src="/orangeArrow.svg" alt="faq" className="lg:w-[12px] md:w-[7px] w-[9px]" />
          </Link>
      </div>
    </div>
  );
}

export default BlogCard;

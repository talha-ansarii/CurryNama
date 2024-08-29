import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const OurStory = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


  return (
    <div>
    <Navbar/>
        <div className='w-[90%] pt-[100px] mx-auto'>
        <div className='teko font-[700] text-[40px] md:leading-[62px] leading-[40px] lg:text-[60px] lg:leading-[60px] mt-12 md:text-[60px] text-center text-[#DA3D12]'>The Story of Currynama: A Culinary Journey by Seven Seas Hotel</div>
        <div className='montserrat my-4 md:my-12 lg:my-12 font-[600] text-[11px] lg:text-[20px] lg:leading-[24px] md:text-[15px] md:leading-[18px] leading-[15px] text-[#1C6360] text-center '>Currynama, the beloved cloud kitchen of Seven Seas Hospitality Group, has become a household name in delectable Indian cuisine. What started as an ambitious venture quickly became a culinary phenomenon, with multiple outlets serving thousands of satisfied customers across Delhi NCR.</div>
        
        <div className='grid grid-cols-3 gap-6 w-full place-items-center'>
  <img src='/HomePage/TOP1.jpg' alt='paneer' className='rounded-[4px] md:rounded-[10px] lg:rounded-[10px] lg:w-[365px] lg:h-[265px] object-cover mt-4 md:mt-[20px] lg:mt-[20px] shadow-md'/>
  <img src='/HomePage/TOP2.jpg' alt='paneer' className='rounded-[4px] md:rounded-[10px] lg:rounded-[10px] lg:w-[365px] lg:h-[265px] object-cover mt-4 md:mt-[20px] lg:mt-[20px] shadow-md'/>
  <img src='/HomePage/TOP3.jpg' alt='paneer' className='rounded-[4px] md:rounded-[10px] lg:rounded-[10px] lg:w-[365px] lg:h-[265px] object-cover mt-4 md:mt-[20px] lg:mt-[20px] shadow-md'/>
</div>

        <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row gap-10 my-10 md:my-12 lg:my-12'>
            <div className='w-full lg:w-[50%] md:w-[50%] flex items-start justify-start '>
            <img src='/HomePage/TOP4.jpg' alt='paneer' className='rounded-[4px] md:rounded-[10px] lg:rounded-[10px] lg:w-[603px] lg:h-[407px] object-cover  shadow-md'/>     
            </div>
            <div className='w-full lg:w-[50%] md:w-[50%]  flex flex-col justify-start '>
                <div className='teko font-[600] text-center md:text-left lg:text-left text-[30px] leading-[30px] md:text-[40px] lg:text-[40px] md:leading-[40px] lg:leading-[40px] text-[#DA3D12]'>From Humble Beginnings to Culinary Excellence </div>
                <div className='montserrat font-[600] text-center md:text-left lg:text-left lg:text-[20px] lg:leading-[24px] pt-2 md:text-[12px] md:leading-[15px] text-[#1C6360] text-[15px] leading-18px]'>The journey of Currynama began with opening its first outlet in Rohini on August 27, 2021. From day one, Currynama aimed to bring the authentic taste of Indian cuisine to the doorstep of its customers, ensuring every meal is prepared with the highest standards of quality and hygiene. The overwhelming response from Rohini’s outlets set the stage for Currynama’s rapid expansion.  </div>
            </div>
        </div>
        <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row  gap-10 my-10 md:my-12 lg:my-12'>
        <div className='w-full flex md:hidden lg:hidden xl:hidden items-start justify-start '>
            <img src='/HomePage/TOP5.jpg' alt='paneer' className='rounded-[4px] md:rounded-[10px] lg:rounded-[10px] lg:w-[603px] lg:h-[407px] object-cover  shadow-md'/>     
            </div>
            <div className='w-full lg:w-[50%] md:w-[50%]  flex flex-col justify-start '>
                <div className='teko font-[600] text-[30px] leading-[30px] md:leading-[40px] lg:leading-[40px] md:text-[40px] text-[#DA3D12] text-center md:text-left lg:text-left'>Expansion and Milestones </div>
                <div className='montserrat font-[600] lg:text-[20px] lg:leading-[24px] md:text-[15px] md:leading-[18px] text-[#1C6360] text-[12px] leading-[15px] text-center md:text-left lg:text-left'>Following the success of Rohini, Currynama opened its second outlet in LR (Lawrence Road) on October 16, 2021. The new outlet quickly became popular, further establishing Currynama's reputation for delivering mouth-watering dishes. Encouraged by this success, the third outlet was launched in GK (Greater Kailash) on January 7, 2022, bringing the flavours of Currynama to a new audience.<br/>
The journey continued with the opening of outlets in Gurgaon on May 18, 2022, Noida on November 18, 2022, and finally, Preet Vihar on December 26, 2022. Each new location added to the growing list of loyal customers who couldn't get enough of Currynama's delicious offerings.
 </div>
            </div>
            <div className='w-[50%] hidden md:flex lg:flex xl:flex items-start justify-start '>
            <img src='/HomePage/TOP5.jpg' alt='paneer' className='rounded-[4px] md:rounded-[10px] lg:rounded-[10px] lg:w-[603px] lg:h-[407px] object-cover  shadow-md'/>     
            </div>
        </div>

        <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row  gap-10 my-10 md:my-12 lg:my-12'>
            <div className='w-full lg:w-[50%] md:w-[50%] flex items-start justify-start '>
            <img src='/HomePage/TOP6.jpg' alt='paneer' className='rounded-[4px] md:rounded-[10px] lg:rounded-[10px] lg:w-[603px] lg:h-[407px] object-cover  shadow-md'/>     
            </div>
            <div className='w-full lg:w-[50%] md:w-[50%] flex flex-col justify-start '>
                <div className='teko font-[600] text-[30px] text-center md:text-left lg:text-left md:text-[40px] leading-[30px] md:leading-[40px] lg:leading-[40px] text-[#DA3D12]'>The Road Ahead </div>
                <div className='montserrat font-[600] lg:text-[20px] lg:leading-[24px] md:text-[15px] md:leading-[18px] text-[#1C6360] text-[12px]  text-center md:text-left lg:text-left leading-[15px]'>Currynama’s journey is a testament to its commitment to excellence and its ability to consistently deliver exceptional dining experiences. As it continues to grow and expand, Currynama remains dedicated to bringing the best of Indian cuisine to more homes, ensuring every meal is a memorable one.<br/>
With each outlet, Currynama brings the rich heritage of Indian flavours and the promise of quality that Seven Seas Hotel is known for. The story of Currynama is one of passion, dedication, and a relentless pursuit of culinary perfection.
  </div>
            </div>
        </div>

        <div className='flex flex-col md:flex-row lg:flex-row xl:flex-row gap-2 lg:gap-10 md:gap-10 my-10 md:my-12 lg:my-12'>
        <div className='w-full md:hidden lg:hidden lg:w-[50%] md:w-[50%] flex items-center justify-center '>
        <img src='/HomePage/TOP7.jpg' alt='paneer' className='rounded-[4px] md:rounded-[10px] lg:rounded-[10px]   object-cover w-full h-[300px] shadow-md'/>    
            </div>
            <div className='flex justify-center items-center md:hidden lg:hidden gap-2 w-[100%] h-[100%]'>
                <img src='/HomePage/TOP8.jpg' alt='paneer' className='rounded-[4px] md:rounded-[10px] lg:rounded-[10px] w-[50%]  object-cover  shadow-md'/> 
                <img src='/HomePage/TOP9.jpg' alt='paneer' className='rounded-[4px] md:rounded-[10px] lg:rounded-[10px] w-[50%]   object-cover  shadow-md'/> 
                </div>
         
            <div className='w-full lg:w-[40%] md:w-[40%] flex flex-col justify-start '>
                <div className='teko font-[600] text-[30px] leading-[32px] md:leading-[40px] lg:leading-[40px] text-[#DA3D12] md:text-[40px] text-center md:text-left lg:text-left'>Top-Selling Delicacies</div>
                <div className='montserrat font-[600]  lg:text-[18px] lg:leading-[20px] md:text-[10px] md:leading-[12px] text-[#1C6360] text-center md:text-left lg:text-left text-[12px] leading-[14px]'>Currynama's menu is a treasure trove of Indian flavours, with several dishes becoming absolute favourites among its patrons. The top-selling items include:<br/><br />
- <b>  Kakori Kebab Taco: </b> Savor the fusion of flavours with our Kakori Kebab Taco, where succulent, spiced kebabs meet the crisp freshness of a taco shell.<br/><br />
- <b>Gur Rasgulla: </b> Indulge in the rich, caramelised sweetness of our traditional Gur Rasgulla, a delightful twist on the classic Indian dessert.<br/><br />
- <b> Teh Pe Teh Paneer Tikka:</b> A layered paneer tikka that is a delight for vegetarians and a favourite at every gathering.<br/><br />
- <b>Dal Seven Seas:</b> A signature lentil dish that embodies the essence of comfort food, perfect for any meal.<br/><br />
-<b>Butter Chicken:</b>  An all-time favourite, this creamy and savoury chicken dish has won hearts across all outlets.<br/><br />
-<b>Gur Rasgulla:</b>  A traditional sweet treat, this dessert adds a perfect end to a sumptuous meal with its sweet and satisfying taste.
  </div>
            </div>
            <div className='w-[60%] hidden lg:flex md:flex gap-2'>
                <div className='w-[50%] h-[100%]'>
                <img src='/HomePage/TOP7.jpg' alt='paneer' className='rounded-[4px] md:rounded-[10px] lg:rounded-[10px] w-full h-full  object-cover  shadow-md'/> 

                </div>
                <div className='flex flex-col gap-2 w-[50%] h-[100%]'>
                <img src='/HomePage/TOP8.jpg' alt='paneer' className='rounded-[4px] md:rounded-[10px] lg:rounded-[10px] w-[100%] h-[50%]  object-cover  shadow-md'/> 
                <img src='/HomePage/TOP9.jpg' alt='paneer' className='rounded-[4px] md:rounded-[10px] lg:rounded-[10px] w-[100%] h-[50%]  object-cover  shadow-md'/> 
                </div>
            </div>
        </div>

        </div>
        <Footer/>
    </div>
  )
}

export default OurStory
import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-fade";


const DetailProject = ({ item, clickGetBack }) => {
    return (
        <div className='detail-project'>
            <div className="content-part">
                <button className='button-back' onClick={clickGetBack}>
                    Back to projects
                </button>
                <h1>{item.name}</h1>
                <p className="content">
                    {item.content}
                </p>
                <p className="skills">
                    <span>Skills:</span> {item.skills}
                </p>

                <div className="wrap-btn">
                    <a href={item.linkWeb} className="button" target='_blank'>Demo</a>
                    <a href={item.linkGithub} className="button" target='_blank'>Code</a>
                </div>
            </div>
            <div className="list-img-part">
                <Swiper
                    style={{
                        '--swiper-pagination-color': 'hsl(23, 100%, 75%)',
                    }}
                    speed={600}
                    loop={true}
                    spaceBetween={30}
                    effect={"fade"}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}

                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                >
                    {item.img.map((img, index) => (
                        <SwiperSlide>
                            <img src={img} alt={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    )
}

export default DetailProject
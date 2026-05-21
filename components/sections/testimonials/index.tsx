'use client';

import { useTranslations } from 'next-intl';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F59E0B" className="h-5 w-5">
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
      clipRule="evenodd"
    />
  </svg>
);

const MOCK_TESTIMONIALS = [
  {
    name: 'Chị Nguyễn Thanh Hương',
    location: 'Hà Nội',
    quote:
      '"Gia đình tôi đã có một kỳ nghỉ tuyệt vời. Xe đời mới, tài xế rất nhiệt tình, lái xe an toàn và hỗ trợ chu đáo suốt hành trình."',
    image: 'https://i.pravatar.cc/150?u=huong',
  },
  {
    name: 'Anh Lê Văn Nam',
    location: 'TP. Hồ Chí Minh',
    quote:
      '"Tour 4 đảo thực sự ấn tượng. Đặc biệt là bạn hướng dẫn viên chụp ảnh rất có tâm, gia đình tôi có rất nhiều ảnh đẹp."',
    image: 'https://i.pravatar.cc/150?u=nam',
  },
  {
    name: 'Bạn Trần Minh Tâm',
    location: 'Đà Nẵng',
    quote:
      '"Giá vé VinWonders tại đây rẻ hơn mua tại quầy. Nhận mã QR ngay lập tức, không phải chờ đợi. Dịch vụ rất nhanh chóng."',
    image: 'https://i.pravatar.cc/150?u=tam',
  },
  {
    name: 'Chị Phạm Thị Yến',
    location: 'Hải Phòng',
    quote:
      '"Rất hài lòng với dịch vụ thuê xe tự lái. Thủ tục nhanh gọn, xe sạch sẽ và đầy đủ tiện nghi. Chắc chắn sẽ ủng hộ lại lần sau!"',
    image: 'https://i.pravatar.cc/150?u=yen',
  },
  {
    name: 'Anh Hoàng Hải',
    location: 'Nha Trang',
    quote:
      '"Mình đặt vé cáp treo Hòn Thơm và Safari, giá ưu đãi tốt hơn nhiều so với tự mua. Các bạn tư vấn viên hỗ trợ rất nhiệt tình."',
    image: 'https://i.pravatar.cc/150?u=ioas',
  },
];

export default function Testimonials() {
  const tTest = useTranslations('testimonials');

  return (
    <section id="testimonials" className="section-shell py-12 md:py-16">
      <h2 className="text-center font-display text-[30px] font-extrabold text-primary md:text-[36px]">
        {tTest('title')}
      </h2>
      <div className="mt-10 px-4 sm:px-16 md:px-24">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6 py-4">
            {MOCK_TESTIMONIALS.map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
                <article
                  className="h-full rounded-3xl p-6 lg:p-8 flex flex-col justify-between gap-6 relative
                             bg-card/60 backdrop-blur-xl
                             border border-white/40 dark:border-white/10
                             shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
                >
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>

                  <p className="text-[15px] leading-relaxed text-text-muted flex-grow">
                    {item.quote}
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12 rounded-full object-cover shadow-sm"
                    />
                    <div>
                      <p className="font-bold text-text-secondary text-[15px]">{item.name}</p>
                      <p className="text-[13px] text-text-muted/50">{item.location}</p>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-6 md:-left-12 lg:-left-16 h-10 w-10 md:h-12 md:w-12 border-[2px] border-text-muted/30 bg-transparent text-text-muted/80 shadow-none cursor-pointer hover:scale-110 active:scale-95 hover:border-primary hover:bg-transparent hover:text-primary transition-all" />
          <CarouselNext className="hidden sm:flex -right-6 md:-right-12 lg:-right-16 h-10 w-10 md:h-12 md:w-12 border-[2px] border-text-muted/30 bg-transparent text-text-muted/80 shadow-none cursor-pointer hover:scale-110 active:scale-95 hover:border-primary hover:bg-transparent hover:text-primary transition-all" />
        </Carousel>
      </div>
    </section>
  );
}

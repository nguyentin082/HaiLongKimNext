'use client';

import type { GalleryItem } from './types';

const GALLERY_PATH = '/images/gallery';

/** All 34 gallery images from local assets */
export const GALLERY_IMAGES: GalleryItem[] = [
  // 1. Big Hero Landscape
  {
    src: `${GALLERY_PATH}/z7680037770963_c6c7a8a75bce86cf3c1013b8fd1d9929.jpg`,
    alt: 'Rừng dừa Bảy Mẫu',
    className: 'md:col-span-2 md:row-span-2',
  },
  // 2. Big Hero Landscape
  {
    src: `${GALLERY_PATH}/z7680024715650_c0ac73912fbbbacdebd04518c81e0bda.jpg`,
    alt: 'Summer trip biển',
    className: 'md:col-span-2 md:row-span-2',
  },

  // Standard Landscape
  {
    src: `${GALLERY_PATH}/z7680040598806_846741146a4ecc007caeeb09ae3a666f.jpg`,
    alt: 'Vinpearl Land',
  },
  { src: `${GALLERY_PATH}/z7680043362298_cd2c20c80d664dc5de3cae16fac42d3c.jpg`, alt: 'Đền cổ' },

  // Portrait
  {
    src: `${GALLERY_PATH}/z7680038321309_f7a5d9effa9d0addcd21853f4d95a41c.jpg`,
    alt: 'Tháp Ponagar',
    className: 'row-span-2',
  },

  // Standard Landscape
  {
    src: `${GALLERY_PATH}/z7680049983750_aa993f12581178a83d94de3dd3c27be6.jpg`,
    alt: 'Sân bay Phú Quốc',
  },
  {
    src: `${GALLERY_PATH}/z7680023568151_7c957f4cbbb50c139a3a0b5b818da985.jpg`,
    alt: 'Tiệc tối trên biển',
  },
  {
    src: `${GALLERY_PATH}/z7680031916487_22451fbb6f424b2b21d43b98d3b180ea.jpg`,
    alt: 'Team building bãi biển',
  },
  {
    src: `${GALLERY_PATH}/z7680025115070_3a34ba78f8a19015c6c37535ab9e67ad.jpg`,
    alt: 'Nhóm bạn biển',
  },

  // Portrait
  {
    src: `${GALLERY_PATH}/z7680032323810_e05f8e9fd58c0fe0b0bf4b53d15183e3.jpg`,
    alt: 'Đoàn du lịch',
    className: 'row-span-2',
  },

  // Standard Landscape
  {
    src: `${GALLERY_PATH}/z7680050370140_ea1aac4f50e05511e9510149a2d460b6.jpg`,
    alt: 'VinWonders gia đình',
  },
  {
    src: `${GALLERY_PATH}/z7680046412745_ce804af592fe6465912f920f7926350f.jpg`,
    alt: 'Chùa Bái Đính',
  },
  {
    src: `${GALLERY_PATH}/z7680030685679_fe50631475a663cf8eaeef8c2111e986.jpg`,
    alt: 'MC sự kiện biển',
  },

  // Portrait
  {
    src: `${GALLERY_PATH}/z7680033184406_2b99f4220edd843f9c075880a68c638e.jpg`,
    alt: 'Tham quan di tích',
    className: 'row-span-2',
  },

  // Standard Landscape
  {
    src: `${GALLERY_PATH}/z7680031091373_44446ff696e3201ea800fe814bc3e971.jpg`,
    alt: 'Hoạt động nhóm',
  },
  {
    src: `${GALLERY_PATH}/z7680031490759_6b424740fa8eb213891dfe3b6b191bd0.jpg`,
    alt: 'Trò chơi bãi biển',
  },
  {
    src: `${GALLERY_PATH}/z7680033534957_4db2d4ab1eb26037a3f374b5e11c6932.jpg`,
    alt: 'Thưởng thức ẩm thực',
  },

  // Portrait
  {
    src: `${GALLERY_PATH}/z7680041874541_d46a546a6aecc4917dea27fbcd752924.jpg`,
    alt: 'Tour biển',
    className: 'row-span-2',
  },

  // Standard Landscape
  {
    src: `${GALLERY_PATH}/z7680033910872_82437d1fd7642eab6c7a67a12da76684.jpg`,
    alt: 'Hành trình khám phá',
  },
  {
    src: `${GALLERY_PATH}/z7680035404215_cf349909bcef23c2d3043f60d866df2e.jpg`,
    alt: 'Đoàn khách đông',
  },
  {
    src: `${GALLERY_PATH}/z7680035783128_35e3653bbdc2694b2b283b53dcea9d3b.jpg`,
    alt: 'Chụp ảnh kỷ niệm',
  },

  // Portrait
  {
    src: `${GALLERY_PATH}/z7680042287387_420b660a33f27724f23136997bedb1c4.jpg`,
    alt: 'Nhóm du lịch',
    className: 'row-span-2',
  },

  // Standard Landscape
  {
    src: `${GALLERY_PATH}/z7680036227772_b3ecf1761c2b677c2d70f2d65ff7bba1.jpg`,
    alt: 'Địa điểm du lịch',
  },
  {
    src: `${GALLERY_PATH}/z7680039644954_e916ecccb7323d2a89986151cf7e64c4.jpg`,
    alt: 'Tour tham quan',
  },
  {
    src: `${GALLERY_PATH}/z7680040145143_e95e03d9c1ca929f9ac3be955a704622.jpg`,
    alt: 'Đoàn khách tham quan',
  },

  // Portrait
  {
    src: `${GALLERY_PATH}/z7680048234200_6fbb202b4c31cd67eb6638a56e59bf59.jpg`,
    alt: 'Tour miền Bắc',
    className: 'row-span-2',
  },

  // Standard Landscape
  {
    src: `${GALLERY_PATH}/z7680041370946_0f832c7b15076412294b9e792fe828d5.jpg`,
    alt: 'Khoảnh khắc vui vẻ',
  },
  {
    src: `${GALLERY_PATH}/z7680042757624_6eecbd4e74de4cf139aec421f99384a3.jpg`,
    alt: 'Hành trình miền Trung',
  },
  {
    src: `${GALLERY_PATH}/z7680043893428_f0327fa4ddf6510535487e153f202505.jpg`,
    alt: 'Khám phá thiên nhiên',
  },

  // Portrait
  {
    src: `${GALLERY_PATH}/z7680049185688_1d81cef1640d49fa5d39c4ead6e2ebb5.jpg`,
    alt: 'Chuyến đi nhóm',
    className: 'row-span-2',
  },

  // Wide Landscape (col-span-2 only)
  {
    src: `${GALLERY_PATH}/z7680046969823_5325c3fcb606cc308ee4b257a78d9a51.jpg`,
    alt: 'Tham quan chùa',
    className: 'md:col-span-2',
  },

  // Standard Landscape
  {
    src: `${GALLERY_PATH}/z7680044461642_37cd8ed0601c9a84dab7ccef32c259a4.jpg`,
    alt: 'Đoàn khách vui vẻ',
  },
  {
    src: `${GALLERY_PATH}/z7680047593170_c3399aef964780868d65580ed5c2527b.jpg`,
    alt: 'Di tích lịch sử',
  },

  // Portrait
  {
    src: `${GALLERY_PATH}/z7680051204050_26ac96f8e3f2c09778b6232b66ce6d4f.jpg`,
    alt: 'Kỷ niệm hành trình',
    className: 'row-span-2',
  },
];

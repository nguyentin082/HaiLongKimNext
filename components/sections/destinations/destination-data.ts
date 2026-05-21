export type DestinationFilterId = 'featured' | 'north' | 'central' | 'south';

export interface DestinationFilter {
  id: DestinationFilterId;
  label: string;
}

export interface DestinationItemData {
  id: string;
  region: Exclude<DestinationFilterId, 'featured'>;
  tagKey: string;
  titleKey: string;
  image: string;
  altKey: string;
}

export interface DestinationItemViewModel {
  id: string;
  image: string;
  alt: string;
  tag: string;
  title: string;
}

export const destinationItemsByFilter: Record<DestinationFilterId, DestinationItemData[]> = {
  featured: [
    {
      id: 'laocai',
      region: 'north',
      tagKey: 'dest_laocai_tag',
      titleKey: 'dest_laocai_title',
      image: '/images/place/laocai.jpg',
      altKey: 'dest_laocai_alt',
    },
    {
      id: 'danang',
      region: 'central',
      tagKey: 'dest_danang_tag',
      titleKey: 'dest_danang_title',
      image: '/images/place/danang.jpg',
      altKey: 'dest_danang_alt',
    },
    {
      id: 'phuquoc',
      region: 'south',
      tagKey: 'dest_phuquoc_tag',
      titleKey: 'dest_phuquoc_title',
      image: '/images/place/phuquoc.jpg',
      altKey: 'dest_phuquoc_alt',
    },
  ],
  north: [
    {
      id: 'hanoi',
      region: 'north',
      tagKey: 'dest_hanoi_tag',
      titleKey: 'dest_hanoi_title',
      image: '/images/place/phoco-hanoi.jpg',
      altKey: 'dest_hanoi_alt',
    },
    {
      id: 'ninhbinh',
      region: 'north',
      tagKey: 'dest_ninhbinh_tag',
      titleKey: 'dest_ninhbinh_title',
      image: '/images/place/ninhbinh.jpg',
      altKey: 'dest_ninhbinh_alt',
    },
    {
      id: 'mocchau',
      region: 'north',
      tagKey: 'dest_mocchau_tag',
      titleKey: 'dest_mocchau_title',
      image: '/images/place/mocchau-sonla.jpg',
      altKey: 'dest_mocchau_alt',
    },
    {
      id: 'hagiang',
      region: 'north',
      tagKey: 'dest_hagiang_tag',
      titleKey: 'dest_hagiang_title',
      image: '/images/place/caonguyen-hagiang.jpg',
      altKey: 'dest_hagiang_alt',
    },
    {
      id: 'quangninh',
      region: 'north',
      tagKey: 'dest_quangninh_tag',
      titleKey: 'dest_quangninh_title',
      image: '/images/place/quangninh.jpg',
      altKey: 'dest_quangninh_alt',
    },
  ],
  central: [
    {
      id: 'quangbinh',
      region: 'central',
      tagKey: 'dest_quangbinh_tag',
      titleKey: 'dest_quangbinh_title',
      image: '/images/place/quangbinh.jpg',
      altKey: 'dest_quangbinh_alt',
    },
    {
      id: 'hue',
      region: 'central',
      tagKey: 'dest_hue_tag',
      titleKey: 'dest_hue_title',
      image: '/images/place/hue.jpg',
      altKey: 'dest_hue_alt',
    },
    {
      id: 'danang',
      region: 'central',
      tagKey: 'dest_danang_tag',
      titleKey: 'dest_danang_title',
      image: '/images/place/danang.jpg',
      altKey: 'dest_danang_alt',
    },
    {
      id: 'hoian',
      region: 'central',
      tagKey: 'dest_hoian_tag',
      titleKey: 'dest_hoian_title',
      image: '/images/place/hoian.jpg',
      altKey: 'dest_hoian_alt',
    },
    {
      id: 'quynhon',
      region: 'central',
      tagKey: 'dest_quynhon_tag',
      titleKey: 'dest_quynhon_title',
      image: '/images/place/quynhon.jpg',
      altKey: 'dest_quynhon_alt',
    },
    {
      id: 'binhthuan',
      region: 'central',
      tagKey: 'dest_binhthuan_tag',
      titleKey: 'dest_binhthuan_title',
      image: '/images/place/binhthuan.jpg',
      altKey: 'dest_binhthuan_alt',
    },
    {
      id: 'phuyen',
      region: 'central',
      tagKey: 'dest_phuyen_tag',
      titleKey: 'dest_phuyen_title',
      image: '/images/place/phuyen.jpg',
      altKey: 'dest_phuyen_alt',
    },
    {
      id: 'vinhhy',
      region: 'central',
      tagKey: 'dest_vinhhy_tag',
      titleKey: 'dest_vinhhy_title',
      image: '/images/place/vinhvinhhy-ninhthuan.jpg',
      altKey: 'dest_vinhhy_alt',
    },
    {
      id: 'khanhhoa',
      region: 'central',
      tagKey: 'dest_khanhhoa_tag',
      titleKey: 'dest_khanhhoa_title',
      image: '/images/place/khanhhoa.jpg',
      altKey: 'dest_khanhhoa_alt',
    },
  ],
  south: [
    {
      id: 'cantho',
      region: 'south',
      tagKey: 'dest_cantho_tag',
      titleKey: 'dest_cantho_title',
      image: '/images/place/cantho.jpg',
      altKey: 'dest_cantho_alt',
    },
    {
      id: 'benninhkieu',
      region: 'south',
      tagKey: 'dest_benninhkieu_tag',
      titleKey: 'dest_benninhkieu_title',
      image: '/images/place/benninhkieu-cantho.jpg',
      altKey: 'dest_benninhkieu_alt',
    },
    {
      id: 'mytho',
      region: 'south',
      tagKey: 'dest_mytho_tag',
      titleKey: 'dest_mytho_title',
      image: '/images/place/mytho.jpg',
      altKey: 'dest_mytho_alt',
    },
    {
      id: 'dongthap',
      region: 'south',
      tagKey: 'dest_dongthap_tag',
      titleKey: 'dest_dongthap_title',
      image: '/images/place/dongthap.jpg',
      altKey: 'dest_dongthap_alt',
    },
    {
      id: 'chaudoc',
      region: 'south',
      tagKey: 'dest_chaudoc_tag',
      titleKey: 'dest_chaudoc_title',
      image: '/images/place/rungtram-chaudoc.jpg',
      altKey: 'dest_chaudoc_alt',
    },
    {
      id: 'soctrang',
      region: 'south',
      tagKey: 'dest_soctrang_tag',
      titleKey: 'dest_soctrang_title',
      image: '/images/place/soctrang.jpg',
      altKey: 'dest_soctrang_alt',
    },
    {
      id: 'baclieu',
      region: 'south',
      tagKey: 'dest_baclieu_tag',
      titleKey: 'dest_baclieu_title',
      image: '/images/place/baclieu.jpg',
      altKey: 'dest_baclieu_alt',
    },
    {
      id: 'camau',
      region: 'south',
      tagKey: 'dest_camau_tag',
      titleKey: 'dest_camau_title',
      image: '/images/place/camau.jpg',
      altKey: 'dest_camau_alt',
    },
    {
      id: 'tayninh',
      region: 'south',
      tagKey: 'dest_tayninh_tag',
      titleKey: 'dest_tayninh_title',
      image: '/images/place/tayninh.jpg',
      altKey: 'dest_tayninh_alt',
    },
  ],
} as const;

export function createDestinationViewModels(
  items: DestinationItemData[],
  translate: (key: string) => string,
): DestinationItemViewModel[] {
  return items.map((item) => ({
    id: item.id,
    image: item.image,
    alt: translate(item.altKey),
    tag: translate(item.tagKey),
    title: translate(item.titleKey),
  }));
}

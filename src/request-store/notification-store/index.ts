import { action, computed, makeObservable, observable } from 'mobx';
import { PATH } from '../../services/api';
import { AppRequestListStore } from '../../services/api/app-request-list-store';
import { INotification } from '../../models/notification/notification';

const Data: INotification[] = [
  {
    id: '1',
    title: 'Thông báo mới',
    content: 'Bạn có một thông báo mới.',
    date: '2024-10-17T10:00:00Z',
    type: 0,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6yT7oBWFeKJH-85mTe_LX8XL5RXw1mRFow&s',
    notifiBy: 'Hệ thống',
    status: false,
  },
  {
    id: '2',
    title: 'Cập nhật hệ thống',
    content: 'Hệ thống sẽ bảo trì vào đêm nay.',
    date: '2024-10-17T12:00:00Z',
    type: 1,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOIQxXHDAelcoUgo4kFEGfcnYtKZjFkjOMQQ&s',
    notifiBy: 'Quản trị',
    status: true,
  },
  {
    id: '3',
    title: 'Tin tức mới',
    content: 'Đọc bài viết mới nhất trên blog.',
    date: '2024-10-17T14:00:00Z',
    type: 2,
    image:
      'https://smilemedia.vn/wp-content/uploads/2023/05/tao-dang-chup-anh-o-bien-21.jpg',
    notifiBy: 'Tin tức',
    status: false,
  },
  {
    id: '4',
    title: 'Thông báo sự kiện',
    content: 'Tham gia sự kiện vào tuần tới.',
    date: '2024-10-17T16:00:00Z',
    type: 1,
    image:
      'https://inkythuatso.com/uploads/thumbnails/800/2023/02/1-kieu-tao-dang-di-bien-cua-nu-tuyet-dep-duoi-hoang-hon-bai-bien-chup-tu-phia-sau-lung-voi-dang-nguoi-dung-thang-tu-nhien-dang-buoc-di-tren-bai-cat-uot-2-tay-de-x-17-11-43-12.jpg',
    notifiBy: 'Sự kiện',
    status: false,
  },
  {
    id: '5',
    title: 'Cảnh báo bảo mật',
    content: 'Đã phát hiện hoạt động bất thường.',
    date: '2024-10-17T18:00:00Z',
    type: 2,
    image:
      'https://tiki.vn/blog/wp-content/uploads/2023/01/oTSeytvnxfiroKln4Ln0Db9eSjFUPFCRoys1FziA5vKhgLRiVJbuERzVxwP0rVINL2HzmtF-HPuwY5dTW42l_r1KOdgGTI7CUDbMTwj2ZnDItTZFr7cCJWBtzgP_Wgk7JSawJv1H9NgX005gpOtCSGBZ8rq2Rpn43WXXtFA8UIOyE1bifGYjCqO3zyeDhw.jpg',
    notifiBy: 'Bảo mật',
    status: true,
  },
  {
    id: '6',
    title: 'Khảo sát',
    content: 'Vui lòng tham gia khảo sát của chúng tôi.',
    date: '2024-10-17T20:00:00Z',
    type: 0,
    image:
      'https://luvinus.com/wp-content/uploads/2023/07/tao-dang-chup-anh-o-bien-20-767x1024.jpg',
    notifiBy: 'Khảo sát',
    status: false,
  },
  {
    id: '7',
    title: 'Thông báo nghỉ lễ',
    content: 'Chúng tôi sẽ nghỉ lễ vào cuối tuần này.',
    date: '2024-10-17T22:00:00Z',
    type: 1,
    image:
      'https://media.2dep.vn/resize_900x900/upload/luuly/2022/07/22/1001-cach-tao-dang-chup-anh-dep-danh-cho-hoi-me-song-ao-1658473240-1.jpg',
    notifiBy: 'Hệ thống',
    status: true,
  },
  {
    id: '8',
    title: 'Cập nhật phiên bản',
    content: 'Phiên bản mới đã sẵn sàng để cập nhật.',
    date: '2024-10-17T23:00:00Z',
    type: 1,
    image:
      'https://inkythuatso.com/uploads/thumbnails/800/2022/06/hinh-anh-dep-ve-du-lich-viet-nam-cho-dien-thoai-5-inkythuatso-08-14-13-53.jpg',
    notifiBy: 'Phát triển',
    status: false,
  },
  {
    id: '9',
    title: 'Thư mời',
    content: 'Bạn được mời tham gia buổi họp.',
    date: '2024-10-17T09:00:00Z',
    type: 1,
    image:
      'https://inkythuatso.com/uploads/thumbnails/800/2022/06/hinh-anh-dep-ve-du-lich-viet-nam-cho-dien-thoai-2-inkythuatso-08-14-13-18.jpg',
    notifiBy: 'Quản lý',
    status: false,
  },
  {
    id: '10',
    title: 'Khuyến mãi',
    content: 'Nhận ưu đãi đặc biệt chỉ trong hôm nay.',
    date: '2024-10-17T11:00:00Z',
    type: 3,
    image:
      'https://cdnphoto.dantri.com.vn/kORDAkSoS3Yox9gAeQyTOzFk1kw=/thumb_w/1920/2023/10/05/tttn6889-copy-1696489369175.jpg',
    notifiBy: 'Marketing',
    status: true,
  },
];

class NotifiStoreClass extends AppRequestListStore<INotification> {
  private data: INotification[];

  constructor(url: string, initialData: INotification[]) {
    super(url);
    this.data = initialData; // Lưu dữ liệu vào biến

    makeObservable(this, {
      listSelectData: computed,
    });
  }

  get listSelectData() {
    return this.data;
  }
  updateStatus() {
    this.data.forEach(notification => {
      notification.status = true;
    });
  }
}

const notifiInstance = new NotifiStoreClass('', Data);

export const NotifiStore = notifiInstance;

import { action, computed, makeObservable, observable } from 'mobx';
import { PATH } from '../../services/api';
import { AppRequestListStore } from '../../services/api/app-request-list-store';
import { Item } from '../../models/new-post/newPost';

const DATA: Item[] = [
  {
    id: '1',
    name: 'Xoài non',
    nickname: 'ChanChan',
    numFollowers: 150,
    biography: 'Yêu thích du lịch và chụp ảnh.',
    avata:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxkmyw35oN5VxFtxNIOFDzf4MnDzXPQ_KwWw&s',
    title: '2006',
    date: '16:24',
    image: [
      'https://inkythuatso.com/uploads/thumbnails/800/2022/06/hinh-anh-dep-ve-du-lich-viet-nam-cho-dien-thoai-5-inkythuatso-08-14-13-53.jpg',
      'https://inkythuatso.com/uploads/thumbnails/800/2022/06/hinh-anh-dep-ve-du-lich-viet-nam-cho-dien-thoai-2-inkythuatso-08-14-13-18.jpg',
      'https://cdnphoto.dantri.com.vn/SXdaHVAGLqUGdM-s0UxRuV0y7SU=/thumb_w/960/2021/05/15/co-gai-noi-nhu-con-vi-anh-can-cuoc-xinh-nhu-mong-nhan-sac-ngoai-doi-con-bat-ngo-hon-5-1621075314076.jpg',
      'https://nguoiduatin.mediacdn.vn/m24/upload/3-2023/images/2023-08-15/Ngam-than-hinh-phu-huynh-cua-gai-xinh-co-doi-tu-gay-tranh-cai-12-1692073627-320-width650height808.jpg',
    ],
    follow: false,
    like: 90,
    comment: [
      {
        id: '2039023',
        name: 'Mai Ngân',
        avata:
          'https://cdnphoto.dantri.com.vn/kORDAkSoS3Yox9gAeQyTOzFk1kw=/thumb_w/1920/2023/10/05/tttn6889-copy-1696489369175.jpg',
        title: 'đẹp ko nè',
      },
      {
        id: '2848904',
        name: 'Minh Nguyệt',
        avata:
          'https://cdnphoto.dantri.com.vn/VMuPPAn0dwo7icDtnbfff7NBgeA=/thumb_w/1920/2023/10/05/36472738964603545806843748075923560251034683n-1696491356088.jpg',
        title: 'đẹp thì lên đồ thôi',
      },
      {
        id: '2847896',
        name: 'Mai Hương',
        avata:
          'https://kenh14cdn.com/203336854389633024/2024/5/30/photo-6-1717075985235439521576.jpg',
        title: 'Lên lịch thôi dì',
      },
    ],
  },
  {
    id: '1',
    name: 'Xoài non',
    nickname: 'ChanChan',
    numFollowers: 150,
    biography: 'Yêu thích du lịch và chụp ảnh.',
    avata:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxkmyw35oN5VxFtxNIOFDzf4MnDzXPQ_KwWw&s',
    title: '2006',
    date: '16:24',
    image: [
      'https://inkythuatso.com/uploads/thumbnails/800/2022/06/hinh-anh-dep-ve-du-lich-viet-nam-cho-dien-thoai-5-inkythuatso-08-14-13-53.jpg',
      'https://inkythuatso.com/uploads/thumbnails/800/2022/06/hinh-anh-dep-ve-du-lich-viet-nam-cho-dien-thoai-2-inkythuatso-08-14-13-18.jpg',
      'https://cdnphoto.dantri.com.vn/SXdaHVAGLqUGdM-s0UxRuV0y7SU=/thumb_w/960/2021/05/15/co-gai-noi-nhu-con-vi-anh-can-cuoc-xinh-nhu-mong-nhan-sac-ngoai-doi-con-bat-ngo-hon-5-1621075314076.jpg',
      'https://nguoiduatin.mediacdn.vn/m24/upload/3-2023/images/2023-08-15/Ngam-than-hinh-phu-huynh-cua-gai-xinh-co-doi-tu-gay-tranh-cai-12-1692073627-320-width650height808.jpg',
    ],
    follow: false,
    like: 90,
    comment: [
      {
        id: '2039023',
        name: 'Mai Ngân',
        avata:
          'https://cdnphoto.dantri.com.vn/kORDAkSoS3Yox9gAeQyTOzFk1kw=/thumb_w/1920/2023/10/05/tttn6889-copy-1696489369175.jpg',
        title: 'đẹp ko nè',
      },
      {
        id: '2848904',
        name: 'Minh Nguyệt',
        avata:
          'https://cdnphoto.dantri.com.vn/VMuPPAn0dwo7icDtnbfff7NBgeA=/thumb_w/1920/2023/10/05/36472738964603545806843748075923560251034683n-1696491356088.jpg',
        title: 'đẹp thì lên đồ thôi',
      },
      {
        id: '2847896',
        name: 'Mai Hương',
        avata:
          'https://kenh14cdn.com/203336854389633024/2024/5/30/photo-6-1717075985235439521576.jpg',
        title: 'Lên lịch thôi dì',
      },
    ],
  },
  {
    id: '1',
    name: 'Xoài non',
    nickname: 'ChanChan',
    numFollowers: 150,
    biography: 'Yêu thích du lịch và chụp ảnh.',
    avata:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxkmyw35oN5VxFtxNIOFDzf4MnDzXPQ_KwWw&s',
    title: '2006',
    date: '16:24',
    image: [
      'https://inkythuatso.com/uploads/thumbnails/800/2022/06/hinh-anh-dep-ve-du-lich-viet-nam-cho-dien-thoai-5-inkythuatso-08-14-13-53.jpg',
      'https://inkythuatso.com/uploads/thumbnails/800/2022/06/hinh-anh-dep-ve-du-lich-viet-nam-cho-dien-thoai-2-inkythuatso-08-14-13-18.jpg',
      'https://cdnphoto.dantri.com.vn/SXdaHVAGLqUGdM-s0UxRuV0y7SU=/thumb_w/960/2021/05/15/co-gai-noi-nhu-con-vi-anh-can-cuoc-xinh-nhu-mong-nhan-sac-ngoai-doi-con-bat-ngo-hon-5-1621075314076.jpg',
      'https://nguoiduatin.mediacdn.vn/m24/upload/3-2023/images/2023-08-15/Ngam-than-hinh-phu-huynh-cua-gai-xinh-co-doi-tu-gay-tranh-cai-12-1692073627-320-width650height808.jpg',
    ],
    follow: false,
    like: 90,
    comment: [
      {
        id: '2039023',
        name: 'Mai Ngân',
        avata:
          'https://cdnphoto.dantri.com.vn/kORDAkSoS3Yox9gAeQyTOzFk1kw=/thumb_w/1920/2023/10/05/tttn6889-copy-1696489369175.jpg',
        title: 'đẹp ko nè',
      },
      {
        id: '2848904',
        name: 'Minh Nguyệt',
        avata:
          'https://cdnphoto.dantri.com.vn/VMuPPAn0dwo7icDtnbfff7NBgeA=/thumb_w/1920/2023/10/05/36472738964603545806843748075923560251034683n-1696491356088.jpg',
        title: 'đẹp thì lên đồ thôi',
      },
      {
        id: '2847896',
        name: 'Mai Hương',
        avata:
          'https://kenh14cdn.com/203336854389633024/2024/5/30/photo-6-1717075985235439521576.jpg',
        title: 'Lên lịch thôi dì',
      },
    ],
  },
  {
    id: '2',
    name: 'Hoà mizy',
    nickname: 'hoà hoà',
    numFollowers: 200,
    biography: 'Thích khám phá những điều mới mẻ.',
    avata:
      'https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/474015QSt/anh-gai-xinh-1.jpg',
    title: 'Hạ Long',
    date: '16:24',
    image: [
      'https://cdn.nguyenkimmall.com/images/companies/_1/anh-dep-lam-hinh-nen-1.jpg',
      'https://i.pinimg.com/564x/be/ae/97/beae97e62496df410420ed5e58c7b456.jpg',
      'https://photo2.tinhte.vn/data/attachment-files/2021/04/5450719_20210226-nu_sinh_de_thuong_12.jpg',
      'https://photo2.tinhte.vn/data/attachment-files/2021/04/5450721_20210312-gai_dep_6.jpg',
      'https://cdn.thoitiet247.edu.vn/wp-content/uploads/2024/04/hinh-gai-dep-lam-hinh-nen-1.jpg',
    ],
    follow: true,
    like: 80,
    comment: [
      {
        id: '2039023',
        name: 'Quế Trân',
        avata:
          'https://kenh14cdn.com/203336854389633024/2024/5/30/photo-6-1717075985235439521576.jpg',
        title: '1100đ',
      },
      {
        id: '2848904',
        name: 'Nguyễn Linh',
        avata:
          'https://kenh14cdn.com/203336854389633024/2024/5/30/photo-6-1717075985235439521576.jpg',
        title: 'xinh quá à',
      },
    ],
  },
  {
    id: '3',
    name: 'Linh Chi',
    nickname: 'Chi chi',
    numFollowers: 300,
    biography: 'Một cô gái thích sống tích cực.',
    avata:
      'https://kenh14cdn.com/203336854389633024/2024/5/30/photo-6-1717075985235439521576.jpg',
    title: 'G9',
    date: '16:24',
    image: [
      'https://kenh14cdn.com/203336854389633024/2024/5/30/photo-6-1717075985235439521576.jpg',
      'https://newsmd2fr.keeng.vn/tiin/archive/imageslead/2024/02/01/rg19roj6ieo9i6uo82pp6w0k93u155uz.jpg',
      'https://cdn-i.doisongphapluat.com.vn/resize/th/upload/2024/06/16/xoai-non-la-ai1-21223683.jpg',
    ],
    follow: true,
    like: 130,
    comment: [
      {
        id: '2039023',
        name: 'Đặng Phương',
        avata:
          'https://kenh14cdn.com/203336854389633024/2024/5/30/photo-6-1717075985235439521576.jpg',
        title: 'Suy nghĩ non nớt',
      },
      {
        id: '2848904',
        name: 'Lan Liễu',
        avata:
          'https://kenh14cdn.com/203336854389633024/2024/5/30/photo-6-1717075985235439521576.jpg',
        title: 'Uii cho con',
      },
    ],
  },
  {
    id: '4',
    name: 'Ngọc Bích',
    nickname: 'koko ',
    numFollowers: 50,
    biography: 'Thích đọc sách và khám phá.',
    avata:
      'https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/102023/dl2_20231017180937.jpg',
    title: 'G10',
    date: '14:30',
    image: [
      'https://file.hstatic.net/200000503583/file/anh-di-bien-chup-sau-lung-_15__a19a0d1be5bd4d8b8c27e4337ad488a3.jpg',
      'https://truyenhinhnghean.vn/file/4028eaa46735a26101673a4df345003c/102023/dl2_20231017180937.jpg',
      'https://nqs.1cdn.vn/2023/10/14/static-images.vnncdn.net-files-publish-2023-10-14-_doi-co-chay-5-46.jpg',
    ],
    follow: false,
    like: 85,
    comment: [
      {
        id: '1039023',
        name: 'Trần Hòa',
        avata:
          'https://file.hstatic.net/200000503583/file/anh-di-bien-chup-sau-lung-_15__a19a0d1be5bd4d8b8c27e4337ad488a3.jpg',
        title: 'Thật tuyệt vời!',
      },
      {
        id: '1848904',
        name: 'Mai Lan',
        avata:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6yT7oBWFeKJH-85mTe_LX8XL5RXw1mRFow&s',
        title: 'Rất đẹp!',
      },
    ],
  },
  {
    id: '5',
    name: 'Hà Anh',
    nickname: 'anh',
    numFollowers: 120,
    biography: 'Yêu thích nghệ thuật và nhiếp ảnh.',
    avata:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOIQxXHDAelcoUgo4kFEGfcnYtKZjFkjOMQQ&s',
    title: 'G11',
    date: '15:45',
    image: [
      'https://smilemedia.vn/wp-content/uploads/2023/05/tao-dang-chup-anh-ngoai-troi-3.jpg',
      'https://lh7-us.googleusercontent.com/23ku10G9IqgosYGksG6Vw7AFDi_W3dzVpdSxOay-EXJk4pbJJ2lat7z1-kTPrTAqnVETJS3u8PK58S5IWAmKKl7NDKiwoI9-F_Ci0IKYbHrGOeJUupDfKCvIN2xC7LKZjk9zhIyj_RtMjimxT9bnBIo',
      'https://smilemedia.vn/wp-content/uploads/2023/05/tao-dang-chup-anh-o-bien-21.jpg',
      'https://inkythuatso.com/uploads/thumbnails/800/2023/02/1-kieu-tao-dang-di-bien-cua-nu-tuyet-dep-duoi-hoang-hon-bai-bien-chup-tu-phia-sau-lung-voi-dang-nguoi-dung-thang-tu-nhien-dang-buoc-di-tren-bai-cat-uot-2-tay-de-x-17-11-43-12.jpg',
    ],
    follow: true,
    like: 210,
    comment: [
      {
        id: '2039024',
        name: 'Nguyễn Lan',
        avata:
          'https://tiki.vn/blog/wp-content/uploads/2023/01/oTSeytvnxfiroKln4Ln0Db9eSjFUPFCRoys1FziA5vKhgLRiVJbuERzVxwP0rVINL2HzmtF-HPuwY5dTW42l_r1KOdgGTI7CUDbMTwj2ZnDItTZFr7cCJWBtzgP_Wgk7JSawJv1H9NgX005gpOtCSGBZ8rq2Rpn43WXXtFA8UIOyE1bifGYjCqO3zyeDhw.jpg',
        title: 'Cảnh đẹp quá!',
      },
      {
        id: '2848905',
        name: 'Thúy Vân',
        avata:
          'https://tiki.vn/blog/wp-content/uploads/2023/01/Y7deW5ZtpOonbiD_XawHLHdkjKYKHvWxvxNZzKdXXn0L8InieLIH_-U5m0u-RUlFtXKp0Ty91Itj4Oxwn_tjKg_UZo3lxFSrOH_DHIbpKP1LDn80z6BbOxj4d8bmymdy8PWFGjLkTpCdoz-3X-KY7IedQ_dxWJlHSIBWwCYhgM02FvUfVUgLKOQxrQWgjw.jpg',
        title: 'Yêu thích bức ảnh này!',
      },
    ],
  },
  {
    id: '6',
    name: 'Kiều My',
    nickname: 'My my',
    numFollowers: 90,
    biography: 'Cô gái yêu thích thời trang.',
    avata: 'https://m.yodycdn.com/blog/tao-dang-chup-anh-bikini-yodyvn18.jpg',
    title: 'G12',
    date: '12:10',
    image: [
      'https://media.2dep.vn/resize_900x900/upload/luuly/2022/07/22/1001-cach-tao-dang-chup-anh-dep-danh-cho-hoi-me-song-ao-1658473240-1.jpg',
      'https://promotion-asus.com.vn/wp-content/uploads/2023/04/chup-anh-bien-nghe-thuat-dep-chat-lam-hinh-nen-dien-thoai-may-tinh-30.jpg',
      'https://luvinus.com/wp-content/uploads/2023/07/tao-dang-chup-anh-o-bien-20-767x1024.jpg',
    ],
    follow: false,
    like: 95,
    comment: [
      {
        id: '3039025',
        name: 'Phan Hạnh',
        avata:
          'https://file.hstatic.net/200000503583/file/chup-anh-binh-minh-tren-bien-2__7__a7cd1be707414e42855dddad2e2c3f8a.jpg',
        title: 'Quá đẹp!',
      },
      {
        id: '3848906',
        name: 'Linh Chi',
        avata:
          'https://inkythuatso.com/uploads/thumbnails/800/2023/02/1-kieu-tao-dang-di-bien-cua-nu-tuyet-dep-duoi-hoang-hon-bai-bien-chup-tu-phia-sau-lung-voi-dang-nguoi-dung-thang-tu-nhien-dang-buoc-di-tren-bai-cat-uot-2-tay-de-x-17-11-43-12.jpg',
        title: 'Cảnh đẹp như mơ!',
      },
    ],
  },
];

class NewStoreClass extends AppRequestListStore<Item> {
  private data: Item[];

  constructor(url: string, initialData: Item[]) {
    super(url);
    this.data = initialData; // Lưu dữ liệu vào biến

    makeObservable(this, {
      listSelectData: computed,
      toggleFollow: action,
    });
  }

  get listSelectData() {
    return this.data;
  }

  toggleFollow(id: string) {
    const item = this.data.find(item => item.id === id);

    if (item) {
      // Đảo giá trị của follow
      item.follow = !item.follow;
      // Lưu lại trạng thái follow vào isFollow
      console.log('Updated follow status:', item.follow);
    }
  }
}

const newStoreInstance = new NewStoreClass('', DATA);
export const NewStore = newStoreInstance;

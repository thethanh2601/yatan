import { action, computed, makeObservable, observable } from 'mobx';
import { PATH } from '../../services/api';
import { AppRequestListStore } from '../../services/api/app-request-list-store';
import { Message } from '../../models/mess/mess';

const DATA: Message[] = [
  {
    id: '1',
    avatar:
      'https://smilemedia.vn/wp-content/uploads/2023/05/cach-tao-dang-chup-anh-ngoi-1.jpg', // Đổi hình ảnh của role 0
    name: 'Linh',
    status: false,
    textBy: 'user',
    inbox: [
      {
        id: '1',
        text: 'Chào bạn! Hôm nay bạn có kế hoạch gì không?',
        role: 0,
        avatarUrl:
          'https://smilemedia.vn/wp-content/uploads/2023/05/cach-tao-dang-chup-anh-ngoi-1.jpg', // Đổi hình ảnh của role 0
      },
      {
        id: '2',
        text: 'Chào! Mình định đi xem phim. Còn bạn?',
        role: 1,
        avatarUrl:
          'https://giadinh.mediacdn.vn/296230595582509056/2021/8/15/photo-12-1629014429191619916684.jpg', // Đổi hình ảnh của role 1
      },
      {
        id: '3',
        text: 'Mình cũng đang nghĩ đến việc xem phim! Bộ nào hay vậy?',
        role: 0,
        avatarUrl:
          'https://smilemedia.vn/wp-content/uploads/2023/05/cach-tao-dang-chup-anh-ngoi-1.jpg', // Đổi hình ảnh của role 0
      },
      {
        id: '4',
        text: 'Mình nghe nói phim "Doraemon" mới ra mắt rất hay!',
        role: 1,
        avatarUrl:
          'https://giadinh.mediacdn.vn/296230595582509056/2021/8/15/photo-12-1629014429191619916684.jpg', // Đổi hình ảnh của role 1
      },
      {
        id: '5',
        text: 'Nghe hấp dẫn đấy! Bạn có muốn đi cùng không?',
        role: 0,
        avatarUrl:
          'https://smilemedia.vn/wp-content/uploads/2023/05/cach-tao-dang-chup-anh-ngoi-1.jpg', // Đổi hình ảnh của role 0
      },
      {
        id: '6',
        text: 'Tất nhiên rồi! Mình rất thích xem phim hoạt hình.',
        role: 1,
        avatarUrl:
          'https://giadinh.mediacdn.vn/296230595582509056/2021/8/15/photo-12-1629014429191619916684.jpg', // Đổi hình ảnh của role 1
      },
      {
        id: '7',
        text: 'Thế thì hẹn nhau ở rạp lúc 7 giờ nhé?',
        role: 0,
        avatarUrl:
          'https://smilemedia.vn/wp-content/uploads/2023/05/cach-tao-dang-chup-anh-ngoi-1.jpg', // Đổi hình ảnh của role 0
      },
      {
        id: '8',
        text: 'Ok, hẹn gặp bạn tại rạp!',
        role: 1,
        avatarUrl:
          'https://giadinh.mediacdn.vn/296230595582509056/2021/8/15/photo-12-1629014429191619916684.jpg', // Đổi hình ảnh của role 1
      },
      {
        id: '9',
        text: 'Mình sẽ mua vé trước nhé.',
        role: 0,
        avatarUrl:
          'https://smilemedia.vn/wp-content/uploads/2023/05/cach-tao-dang-chup-anh-ngoi-1.jpg', // Đổi hình ảnh của role 0
      },
      {
        id: '10',
        text: 'Cảm ơn bạn! Mình rất mong chờ!',
        role: 1,
        avatarUrl:
          'https://giadinh.mediacdn.vn/296230595582509056/2021/8/15/photo-12-1629014429191619916684.jpg', // Đổi hình ảnh của role 1
      },
    ],
  },
  {
    id: '2',
    avatar:
      'https://i.pinimg.com/736x/33/18/3b/33183b18107f4057e9a1898de53f029c.jpg',
    name: 'Lệ',
    status: true,
    textBy: 'user',
    inbox: [
      {
        id: '1',
        text: 'Chào! Mình vừa mới xong phần của mình.',
        role: 0,
        avatarUrl:
          'https://i.pinimg.com/736x/33/18/3b/33183b18107f4057e9a1898de53f029c.jpg',
      },
      {
        id: '2',
        text: 'Tuyệt vời! Chúng ta nên họp để thảo luận.',
        role: 1,
        avatarUrl:
          'https://giadinh.mediacdn.vn/296230595582509056/2021/8/15/photo-12-1629014429191619916684.jpg',
      },
      {
        id: '3',
        text: 'Mình có một vài ý tưởng để chia sẻ.',
        role: 0,
        avatarUrl:
          'https://i.pinimg.com/736x/33/18/3b/33183b18107f4057e9a1898de53f029c.jpg',
      },
      {
        id: '4',
        text: 'Rất mong chờ! Khi nào bạn rảnh?',
        role: 1,
        avatarUrl:
          'https://giadinh.mediacdn.vn/296230595582509056/2021/8/15/photo-12-1629014429191619916684.jpg',
      },
    ],
  },
  {
    id: '3',
    avatar:
      'https://smilemedia.vn/wp-content/uploads/2023/05/cach-tao-dang-chup-anh-ngoi-1.jpg',
    name: 'Quế Trân',
    status: false,
    textBy: 'user',
    inbox: [
      {
        id: '1',
        text: 'Mình cũng muốn gặp bạn!',
        role: 1,
        avatarUrl:
          'https://giadinh.mediacdn.vn/296230595582509056/2021/8/15/photo-12-1629014429191619916684.jpg',
      },
      {
        id: '2',
        text: 'Bạn có thời gian vào cuối tuần này không?',
        role: 0,
        avatarUrl:
          'https://smilemedia.vn/wp-content/uploads/2023/05/cach-tao-dang-chup-anh-ngoi-1.jpg',
      },
      {
        id: '3',
        text: 'Có chứ! Hẹn gặp ở quán cà phê nhé.',
        role: 1,
        avatarUrl:
          'https://giadinh.mediacdn.vn/296230595582509056/2021/8/15/photo-12-1629014429191619916684.jpg',
      },
    ],
  },
  {
    id: '4',
    avatar:
      'https://anhvienpiano.com/wp-content/uploads/2019/05/chup-anh-thoi-trang-dep-my-man-duoi-anh-mat-troi-1.jpg',
    name: 'Thảo Nhi',
    status: true,
    textBy: 'user',
    inbox: [
      {
        id: '1',
        text: 'Mình định đi du lịch một chút.',
        role: 0,
        avatarUrl:
          'https://anhvienpiano.com/wp-content/uploads/2019/05/chup-anh-thoi-trang-dep-my-man-duoi-anh-mat-troi-1.jpg',
      },
      {
        id: '2',
        text: 'Nghe hay đấy! Bạn sẽ đi đâu?',
        role: 1,
        avatarUrl:
          'https://giadinh.mediacdn.vn/296230595582509056/2021/8/15/photo-12-1629014429191619916684.jpg',
      },
      {
        id: '3',
        text: 'Có thể là Đà Nẵng, bạn có muốn đi cùng không?',
        role: 0,
        avatarUrl:
          'https://anhvienpiano.com/wp-content/uploads/2019/05/chup-anh-thoi-trang-dep-my-man-duoi-anh-mat-troi-1.jpg',
      },
    ],
  },
];

class MessStoreClass extends AppRequestListStore<Message> {
  private data: Message[];

  constructor(url: string, initialData: Message[]) {
    super(url);
    this.data = initialData; // Lưu dữ liệu vào biến

    makeObservable(this, {
      listSelectData: computed,
      toggleStatus: action,
    });
  }

  get listSelectData() {
    return this.data;
  }
  toggleStatus(id: string) {
    const item = this.data.find(item => item.id === id);

    if (item) {
      // Đảo giá trị của follow
      item.status = !item.status;
      // Lưu lại trạng thái follow vào isFollow
      console.log('Updated follow status:', item.status);
    }
  }
}

const messInstance = new MessStoreClass('', DATA);
export const MessStore = messInstance;

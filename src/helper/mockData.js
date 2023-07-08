import { faker } from '@faker-js/faker'

export const carouselItems = [
  {
    title: 'Điểm ATM & Chi nhánh',
    icon: 'LocationOnIcon',
    path: '/atm-location',
  },
  {
    title: 'Hotline Chi nhánh',
    icon: 'CurrencyExchangeIcon',
    path: '/hotline',
  },
  {
    title: 'Tài sản bán đấu giá',
    icon: 'GavelIcon',
    path: '/auction',
  },
  // create more 7 items
  {
    title: 'Góc tư vấn',
    icon: 'HelpCenterIcon',
    path: '/help-center',
  },
  {
    title: 'Tỉ giá ngoại tệ',
    icon: 'PaidIcon',
    path: '/exchange-rate',
  },
  {
    title: 'Biểu phí dịch vụ',
    icon: 'AccountBalanceIcon',
    path: '/fee',
  },
  {
    title: 'Lãi suất tiết kiệm',
    icon: 'PaymentIcon',
    path: '/interest-rate',
  },
  {
    title: 'Ngân hàng số',
    icon: 'LocalConvenienceStoreIcon',
    path: '/digital-banking',
  },
  {
    title: 'Thanh toán và chuyển tiền',
    icon: 'SavingsIcon',
    path: '/payment',
  },
  {
    title: 'Công cụ tính toán',
    icon: 'LocalMallIcon',
    path: '/calculator',
  },
]

export const listProductNBat = [
  {
    imgUrl: faker.image.avatarGitHub(),
    title: 'Ngân hàng số',
    description: 'Sử dụng các ứng dụng ngân hàng số để cuộc sống dễ dàng',
  },
  {
    imgUrl: faker.image.avatarGitHub(),
    title: 'Bảo hiểm Agribank',
    description: 'Sẵn sàng đồng hành và bảo vệ toàn diện cho bạn và gia đình',
  },
  {
    imgUrl: faker.image.avatarGitHub(),
    title: 'Thẻ Agribank',
    description:
      'Giao dịch tiện lợi với hơn 14.000 điểm chấp nhận thẻ trên toàn quốc',
  },
  {
    imgUrl: faker.image.avatarGitHub(),
    title: 'Gửi tiền Agribank',
    description:
      'Gửi tiền tiết kiệm tại Agribank với lãi suất tiền gửi hấp dẫn',
  },
]

export const listPost = [
  {
    imgUrl: faker.image.imageUrl(),
    typePost: 'Hoạt động Agribank',
    title: 'Đại hội Công đoàn Agribank lần thứ VI thành công tốt đẹp',
  },
  {
    imgUrl: faker.image.imageUrl(),
    typePost: 'Hoạt động Agribank',
    title: 'Agribank đồng hành cùng người dân và doanh nghiệp',
  },
  {
    imgUrl: faker.image.imageUrl(),
    typePost: 'Công đoàn Agribank',
    title: 'Công đoàn Agribank: Dấu ấn nhiệm kỳ 2018 - 2023',
  },
]

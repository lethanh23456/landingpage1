import Screenshot1 from 'assets/image/saasThree/screen-1.png';

import group29 from 'assets/image/Group29.png';
import group30 from 'assets/image/Group30.png';
import group31 from 'assets/image/Group31.png';
import group38 from 'assets/image/Group38.png';
import group40 from 'assets/image/Group40.png';
import group41 from 'assets/image/Group41.png';
import group42 from 'assets/image/Group42.png';
import group43 from 'assets/image/Group43.png';
import group52 from 'assets/image/Group52.png';
import group54 from 'assets/image/Group54.png';
import IconSearch from 'assets/image/iconSearch.png';

import { ic_monetization_on } from 'react-icons-kit/md/ic_monetization_on';
import { ic_settings } from 'react-icons-kit/md/ic_settings';
import { pieChart } from 'react-icons-kit/icomoon/pieChart';
import { briefcase } from 'react-icons-kit/fa/briefcase';
import DangKi from 'common/src/components/FormDangKi/formMau';
import QRCode from 'common/src/components/QRCode/QRCode';
import FormTraCuu from './Table/FormTraCuuVB';

export const MENU_ITEMS = [
  {
    label: 'Home',
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'Screenshot',
    path: '#screenshot_section',
    offset: '0',
  },
  {
    label: 'Feature',
    path: '#feature_section',
    offset: '0',
  },
  {
    label: 'Pricing',
    path: '#pricing_section',
    offset: '0',
  },
  {
    label: 'Testimonial',
    path: '#testimonial_section',
    offset: '0',
  },
];

export const SERVICE_ITEMS = [
  {
    icon: 'flaticon-stopwatch-1',
    title: 'Fast Performance',
  },
  {
    icon: 'flaticon-prototype',
    title: 'Prototyping',
  },
  {
    icon: 'flaticon-code',
    title: 'Coade Export',
  },
  {
    icon: 'flaticon-vectors',
    title: 'Vector Editing',
  },
  {
    icon: 'flaticon-export',
    title: 'Export Presets',
  },
];

export const MONTHLY_PRICING_TABLE = [
  {
    name: 'Basic Account',
    description: 'For Small teams or group who need to build website ',
    price: '$0',
    priceLabel: 'Only for first month',
    buttonLabel: 'Start for free',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Business Account',
    description: 'For Mediums teams or group who need to build website ',
    price: '$9.87',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'Register Now',
    url: '#',
    trialButtonLabel: 'Or Start 14 Days trail',
    trialURL: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Premium Account',
    description: 'For Large teams or group who need to build website ',
    price: '$12.98',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'Register Now',
    url: '#',
    trialButtonLabel: 'Or Start 14 Days trail',
    trialURL: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
];

export const YEARLY_PRICING_TABLE = [
  {
    name: 'Basic Account',
    description: 'For a single client or team who need to build website ',
    price: '$0',
    priceLabel: 'Only for first month',
    buttonLabel: 'Start for free',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Business Account',
    description: 'For Small teams or group who need to build website ',
    price: '$6.00',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'Register Now',
    url: '#',
    trialButtonLabel: 'Or Start 14 Days trail',
    trialURL: '#',
    listItems: [
      {
        content: 'Unlimited secure storage',
      },
      {
        content: '2,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: '24/7 phone support',
      },
      {
        content: '50+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Premium Account',
    description: 'For Large teams or group who need to build website ',
    price: '$9.99',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'Register Now',
    url: '#',
    trialButtonLabel: 'Or Start 14 Days trail',
    trialURL: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '3,000s of Templates Ready',
      },
      {
        content: 'Advanced branding',
      },
      {
        content: 'Knowledge base support',
      },
      {
        content: '80+ Webmaster Tools',
      },
    ],
  },
];

export const FAQ_DATA = [
  {
    expend: true,
    title: 'How to contact with Customer Service?',
    description:
      'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
  },
  {
    title: 'App installation failed, how to update system information?',
    description:
      'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
  },
  {
    title: 'Website reponse taking time, how to improve?',
    description:
      'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
  },
  {
    title: 'New update fixed all bug and issues?',
    description:
      'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
  },
];

export const FOOTER_WIDGET = [
  {
    title: 'About Us',
    menuItems: [
      {
        url: '#',
        text: 'Support Center',
      },
      {
        url: '#',
        text: 'Customer Support',
      },
      {
        url: '#',
        text: 'About Us',
      },
      {
        url: '#',
        text: 'Copyright',
      },
      {
        url: '#',
        text: 'Popular Campaign',
      },
    ],
  },
  {
    title: 'Our Information',
    menuItems: [
      {
        url: '#',
        text: 'Return Policy',
      },
      {
        url: '#',
        text: 'Privacy Policy',
      },
      {
        url: '#',
        text: 'Terms & Conditions',
      },
      {
        url: '#',
        text: 'Site Map',
      },
      {
        url: '#',
        text: 'Store Hours',
      },
    ],
  },
  {
    title: 'My Account',
    menuItems: [
      {
        url: '#',
        text: 'Press inquiries',
      },
      {
        url: '#',
        text: 'Social media directories',
      },
      {
        url: '#',
        text: 'Images & B-roll',
      },
      {
        url: '#',
        text: 'Permissions',
      },
      {
        url: '#',
        text: 'Speaker requests',
      },
    ],
  },
  {
    title: 'Policy',
    menuItems: [
      {
        url: '#',
        text: 'Application security',
      },
      {
        url: '#',
        text: 'Software principles',
      },
      {
        url: '#',
        text: 'Unwanted software policy',
      },
      {
        url: '#',
        text: 'Responsible supply chain',
      },
    ],
  },
];

export const FEATURES = [
  {
    icon: 'flaticon-hourglass',
    title: 'App Development',
    description: 'Get your proof tests delivered home collect a sample from the news get design.',
  },
  {
    icon: 'flaticon-trophy-1',
    title: '10 Times Award',
    description: 'Get your proof tests delivered home collect a sample from the news get design.',
  },
  {
    icon: 'flaticon-upload',
    title: 'Cloud Storage',
    description: 'Get your proof tests delivered home collect a sample from the news get design.',
  },
  {
    icon: 'flaticon-settings',
    title: 'Customization',
    description: 'Get your proof tests delivered home collect a sample from the news get design.',
  },
  {
    icon: 'flaticon-strategy',
    title: 'UX Planning',
    description: 'Get your proof tests delivered home collect a sample from the news get design.',
  },
  {
    icon: 'flaticon-conversation',
    title: 'Customer Support',
    description: 'Get your proof tests delivered home collect a sample from the news get design.',
  },
];

export const SCREENSHOTS = [
  {
    icon: ic_monetization_on,
    id: 'daotaodaihoc',
    title: 'ĐÀO TẠO ĐẠI HỌC',
    image: Screenshot1,
    detail: [
      {
        icon: group29,
        title: 'Ngành Công nghệ thông tin',
        path: '/nganhhoc',
      },
      {
        icon: group30,
        title: 'Ngành An toàn thông tin',
        path: '/nganhhoc',
      },
      {
        icon: group31,
        title: 'Ngành Điện tử viễn thông',
        path: 'https://portal.ptit.edu.vn/khoa-vien-thong-1/',
      },
      {
        icon: group52,
        title: 'Ngành Kỹ thuật điện, điện tử',
        path: 'https://portal.ptit.edu.vn/khoa-ky-thuat-dien-tu-1/',
      },
      {
        icon: group54,
        title: 'Ngành Công nghệ đa phương tiện',
        path: 'https://portal.ptit.edu.vn/khoa-da-phuong-tien/',
      },
      {
        icon: group38,
        title: 'Ngành Truyền thông đa phương tiện',
        path: 'https://portal.ptit.edu.vn/khoa-da-phuong-tien/',
      },
      {
        icon: group43,
        title: 'Quản trị kinh doanh',
        path: 'https://portal.ptit.edu.vn/khoa-quan-tri-kinh-doanh/',
      },
      {
        icon: group42,
        title: 'Ngành Marketing',
        path: 'https://portal.ptit.edu.vn/nganh-hoc/marketing/',
      },
      {
        icon: group40,
        title: 'Ngành Kế toán',
        path: 'https://portal.ptit.edu.vn/khoa-tai-chinh-ke-toan/',
      },
      {
        icon: group41,
        title: 'Ngành Thương mại điện tử',
        path: 'https://portal.ptit.edu.vn/chuong-trinh-dao-tao/',
      },
    ],
  },
  {
    icon: ic_settings,
    title: 'ĐÀO TẠO SAU ĐẠI HỌC',
    image: Screenshot1,
    detail: [
      {
        icon: group29,
        title: 'Chuyên ngành Hệ thống thông tin',
        path: 'https://portal.ptit.edu.vn/saudaihoc/',
      },
      {
        icon: group30,
        title: 'Chuyên ngành Khoa học máy tính',
        path: 'https://portal.ptit.edu.vn/saudaihoc/',
      },
      {
        icon: group31,
        title: 'Chuyên ngành Kỹ thuật viễn thông',
        path: 'https://portal.ptit.edu.vn/saudaihoc/',
      },
      {
        icon: group52,
        title: 'Chuyên ngành Kỹ thuật điện tử',
        path: 'https://portal.ptit.edu.vn/saudaihoc/',
      },
      {
        icon: group43,
        title: 'Chuyên ngành Quản trị kinh doanh',
        path: 'https://portal.ptit.edu.vn/saudaihoc/',
      },
    ],
  },
  {
    icon: pieChart,
    title: 'ĐÀO TẠO LIÊN KẾT QUỐC TẾ',
    image: Screenshot1,
    detail: [
      {
        icon: group29,
        title: 'Ngành Công nghệ thông tin',
        path: 'https://portal.ptit.edu.vn/khoa-cong-nghe-thong-tin-1/',
      },
      {
        icon: group30,
        title: 'Ngành An toàn thông tin',
        path: 'https://portal.ptit.edu.vn/khoa-cong-nghe-thong-tin-1/',
      },
      {
        icon: group31,
        title: 'Ngành Điện tử viễn thông',
        path: 'https://portal.ptit.edu.vn/khoa-vien-thong-1/',
      },
      {
        icon: group52,
        title: 'Ngành Kỹ thuật điện, điện tử',
        path: 'https://portal.ptit.edu.vn/khoa-ky-thuat-dien-tu-1/',
      },
      {
        icon: group54,
        title: 'Ngành Công nghệ đa phương tiện',
        path: 'https://portal.ptit.edu.vn/khoa-da-phuong-tien/',
      },
      {
        icon: group38,
        title: 'Ngành Truyền thông đa phương tiện',
        path: 'https://portal.ptit.edu.vn/khoa-da-phuong-tien/',
      },
      {
        icon: group43,
        title: 'Quản trị kinh doanh',
        path: 'https://portal.ptit.edu.vn/khoa-quan-tri-kinh-doanh/',
      },
      {
        icon: group42,
        title: 'Ngành Marketing',
        path: 'https://portal.ptit.edu.vn/nganh-hoc/marketing/',
      },
      {
        icon: group40,
        title: 'Ngành Kế toán',
        path: 'https://portal.ptit.edu.vn/khoa-tai-chinh-ke-toan/',
      },
      {
        icon: group41,
        title: 'Ngành Thương mại điện tử',
        path: 'https://portal.ptit.edu.vn/chuong-trinh-dao-tao/',
      },
    ],
  },
  {
    icon: briefcase,
    title: 'ĐÀO TẠO NGẮN HẠN',
    image: Screenshot1,
    detail: [
      {
        icon: group29,
        title: 'Ngành Công nghệ thông tin',
        path: 'https://portal.ptit.edu.vn/khoa-cong-nghe-thong-tin-1/',
      },
      {
        icon: group30,
        title: 'Ngành An toàn thông tin',
        path: 'https://portal.ptit.edu.vn/khoa-cong-nghe-thong-tin-1/',
      },
      {
        icon: group31,
        title: 'Ngành Điện tử viễn thông',
        path: 'https://portal.ptit.edu.vn/khoa-vien-thong-1/',
      },
      {
        icon: group52,
        title: 'Ngành Kỹ thuật điện, điện tử',
        path: 'https://portal.ptit.edu.vn/khoa-ky-thuat-dien-tu-1/',
      },
      {
        icon: group54,
        title: 'Ngành Công nghệ đa phương tiện',
        path: 'https://portal.ptit.edu.vn/khoa-da-phuong-tien/',
      },
      {
        icon: group38,
        title: 'Ngành Truyền thông đa phương tiện',
        path: 'https://portal.ptit.edu.vn/khoa-da-phuong-tien/',
      },
      {
        icon: group43,
        title: 'Quản trị kinh doanh',
        path: 'https://portal.ptit.edu.vn/khoa-quan-tri-kinh-doanh/',
      },
      {
        icon: group42,
        title: 'Ngành Marketing',
        path: 'https://portal.ptit.edu.vn/nganh-hoc/marketing/',
      },
      {
        icon: group40,
        title: 'Ngành Kế toán',
        path: 'https://portal.ptit.edu.vn/khoa-tai-chinh-ke-toan/',
      },
      {
        icon: group41,
        title: 'Ngành Thương mại điện tử',
        path: 'https://portal.ptit.edu.vn/chuong-trinh-dao-tao/',
      },
    ],
  },
];
export const VBCC = [
  {
    icon: ic_monetization_on,
    title: 'Tra cứu theo số hiệu văn bằng',
    image: Screenshot1,
    detail: [
      {
        icon: IconSearch,
        title: <FormTraCuu />,
        // path: '/cntt',
      },
    ],
  },
  {
    icon: ic_settings,
    title: 'Tra cứu theo QR Code',
    image: Screenshot1,
    detail: [
      {
        icon: QRCode,
        title: <QRCode />,
        path: 'https://portal.ptit.edu.vn/saudaihoc/',
      },
      // {
      //   icon: group30,
      //   title: 'Chuyên ngành Khoa học máy tính',
      //   path: 'https://portal.ptit.edu.vn/saudaihoc/',
      // },
      // {
      //   icon: group31,
      //   title: 'Chuyên ngành Kỹ thuật viễn thông',
      //   path: 'https://portal.ptit.edu.vn/saudaihoc/',
      // },
      // {
      //   icon: group52,
      //   title: 'Chuyên ngành Kỹ thuật điện tử',
      //   path: 'https://portal.ptit.edu.vn/saudaihoc/',
      // },
      // {
      //   icon: group43,
      //   title: 'Chuyên ngành Quản trị kinh doanh',
      //   path: 'https://portal.ptit.edu.vn/saudaihoc/',
      // },
    ],
  },
];

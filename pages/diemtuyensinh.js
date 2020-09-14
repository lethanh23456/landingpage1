import { Table, Tooltip } from 'antd';
import Container from 'components/UI/Container';
import { enquireScreen } from 'enquire-js';
import React from 'react';
import Box from 'components/Box';
import TitleTable from 'components/DiemTuyenSinh/index.style.index';

const columns = [
  {
    title: 'STT',
    dataIndex: 'stt',
    align: 'center',
    width: '100px',
  },
  {
    title: 'Ngành',
    dataIndex: 'nganh',
    align: 'center',
    width: '250px',
  },
  {
    title: 'Mã ngành',
    dataIndex: 'idnganh',
    align: 'center',
  },
  // {
  //   title: 'Năm 2017',
  //   children: [
  //     {
  //       title: 'Điểm trúng tuyển',
  //       dataIndex: 'diem2017',
  //       align: 'center',
  //     },
  //     {
  //       title: 'Thứ tự nguyện vọng trúng tuyển khi bằng mức điểm trúng tuyển',
  //       dataIndex: 'nguyenVong2017',
  //       align: 'center',
  //     },
  //   ],
  //   //dataIndex: '2017',
  //   align: 'center',
  // },
  {
    title: 'Năm 2018',
    children: [
      {
        title: 'Điểm trúng tuyển',
        dataIndex: 'diem2018',
        align: 'center',
      },
      {
        title: (
          <Tooltip title="Thứ tự nguyện vọng trúng tuyển khi bằng mức điểm trúng tuyển">
            <span>Thứ tự nguyện vọng?</span>
          </Tooltip>
        ),
        dataIndex: 'nguyenVong2018',
        align: 'center',
      },
    ],
    // dataIndex: '2017',
    align: 'center',
  },
  {
    title: 'Năm 2019',
    children: [
      {
        title: 'Điểm trúng tuyển',
        dataIndex: 'diem2019',
        align: 'center',
      },
      {
        title: (
          <Tooltip title="Thứ tự nguyện vọng trúng tuyển khi bằng mức điểm trúng tuyển">
            <span>Thứ tự nguyện vọng?</span>
          </Tooltip>
        ),
        dataIndex: 'nguyenVong2019',
        align: 'center',
      },
    ],
    // dataIndex: '2017',
    align: 'center',
  },
];
const dataBVH = [
  {
    key: '1',
    stt: 1,
    nganh: 'Công nghệ thông tin',
    idnganh: '7480201',
    diem2017: '25,00',
    nguyenVong2017: 'TTNV = 1',
    diem2018: '22,00',
    nguyenVong2018: 'TTNV = 1',
    diem2019: '24,10',
    nguyenVong2019: 'TTNV = 1',
  },
  {
    key: '2',
    stt: 2,
    nganh: 'An Toàn thông tin',
    idnganh: '7480202',
    diem2017: '24,00',
    nguyenVong2017: 'TTNV <= 4',
    diem2018: '20,80',
    nguyenVong2018: 'TTNV <= 2',
    diem2019: '23,35',
    nguyenVong2019: 'TTNV <= 3',
  },
  {
    key: '3',
    stt: 3,
    nganh: 'Công nghệ kỹ thuật điện, điện tử',
    idnganh: '7510301',
    diem2017: '21,75',
    nguyenVong2017: 'TTNV <= 2',
    diem2018: '19,05',
    nguyenVong2018: 'TTNV = 1',
    diem2019: '21,05',
    nguyenVong2019: 'TTNV = 1',
  },
  {
    key: '4',
    stt: 4,
    nganh: 'Kỹ thuật điện tử viễn thông',
    idnganh: '7520207',
    diem2017: '22,50',
    nguyenVong2017: 'TTNV <= 3',
    diem2018: '19,10',
    nguyenVong2018: 'TTNV <= 3',
    diem2019: '21,95',
    nguyenVong2019: 'TTNV <= 4',
  },
  {
    key: '5',
    stt: 5,
    nganh: 'Công nghệ đa phương tiện',
    idnganh: '7329001',
    diem2017: '23,25',
    nguyenVong2017: 'TTNV = 1',
    diem2018: '20,75',
    nguyenVong2018: 'TTNV = 1',
    diem2019: '22,55',
    nguyenVong2019: 'TTNV <= 2',
  },
  {
    key: '6',
    stt: 6,
    nganh: 'Truyền thông đa phương tiện',
    idnganh: '7320104',
    diem2017: '23,75',
    nguyenVong2017: 'TTNV <= 8',
    diem2018: '20,90',
    nguyenVong2018: 'TTNV = 1',
    diem2019: '22,70',
    nguyenVong2019: 'TTNV = 1',
  },
  {
    key: '7',
    stt: 7,
    nganh: 'Quản trị kinh doanh',
    idnganh: '7340101',
    diem2017: '21,50',
    nguyenVong2017: 'TTNV <= 3',
    diem2018: '19,65',
    nguyenVong2018: 'TTNV <= 2',
    diem2019: '21,65',
    nguyenVong2019: 'TTNV = 1',
  },
  {
    key: '8',
    stt: 8,
    nganh: 'Marketing',
    idnganh: '7340115',
    diem2017: '22,50',
    nguyenVong2017: 'TTNV <= 4',
    diem2018: '20,30',
    nguyenVong2018: 'TTNV = 1',
    diem2019: '22,35',
    nguyenVong2019: 'TTNV <= 5',
  },
  {
    key: '9',
    stt: 9,
    nganh: 'Kế toán',
    idnganh: '7340301',
    diem2017: '21,50',
    nguyenVong2017: 'TTNV = 1',
    diem2018: '19,65',
    nguyenVong2018: 'TTNV <= 12',
    diem2019: '21,35',
    nguyenVong2019: 'TTNV <= 2',
  },
  {
    key: '10',
    stt: 10,
    nganh: 'Thương mại điện tử',
    idnganh: '7340122',
    diem2017: ' ',
    nguyenVong2017: '',
    diem2018: '20,05',
    nguyenVong2018: 'TTNV =1',
    diem2019: '22,45',
    nguyenVong2019: 'TTNV <= 2',
  },
];

const dataBVS = [
  {
    key: '1',
    stt: 1,
    nganh: 'Công nghệ thông tin',
    idnganh: '7480201',
    diem2017: '25,00',
    nguyenVong2017: 'TTNV = 1',
    diem2018: '20,25',
    nguyenVong2018: 'TTNV <= 8',
    diem2019: '22,00',
    nguyenVong2019: 'TTNV <= 6',
  },
  {
    key: '2',
    stt: 2,
    nganh: 'An Toàn thông tin',
    idnganh: '7480202',
    diem2017: '24,00',
    nguyenVong2017: 'TTNV <= 4',
    diem2018: '20,80',
    nguyenVong2018: 'TTNV <= 2',
    diem2019: '20,00',
    nguyenVong2019: 'TTNV = 1',
  },
  {
    key: '3',
    stt: 3,
    nganh: 'Công nghệ kỹ thuật điện, điện tử',
    idnganh: '7510301',
    diem2017: '21,75',
    nguyenVong2017: 'TTNV <= 2',
    diem2018: '16,50',
    nguyenVong2018: 'TTNV <= 10',
    diem2019: '17,00',
    nguyenVong2019: 'TTNV <=2',
  },
  {
    key: '4',
    stt: 4,
    nganh: 'Kỹ thuật điện tử viễn thông',
    idnganh: '7520207',
    diem2017: '22,50',
    nguyenVong2017: 'TTNV <= 3',
    diem2018: '17,00',
    nguyenVong2018: 'TTNV <= 7',
    diem2019: '17,00',
    nguyenVong2019: 'TTNV <= 2',
  },
  {
    key: '5',
    stt: 5,
    nganh: 'Công nghệ đa phương tiện',
    idnganh: '7329001',
    diem2017: '23,25',
    nguyenVong2017: 'TTNV = 1',
    diem2018: '19,25',
    nguyenVong2018: 'TTNV <= 8',
    diem2019: '21,00',
    nguyenVong2019: 'TTNV <= 6',
  },
  // {
  //   key: '6',
  //   stt: 6,
  //   nganh: 'Truyền thông đa phương tiện',
  //   idnganh: '7320104',
  //   diem2017: '23,75',
  //   nguyenVong2017: 'TTNV <= 8',
  //   diem2018: '20,90',
  //   nguyenVong2018: 'TTNV = 1',
  //   diem2019: '22,70',
  //   nguyenVong2019: 'TTNV = 1',
  // },
  {
    key: '6',
    stt: 6,
    nganh: 'Quản trị kinh doanh',
    idnganh: '7340101',
    diem2017: '21,50',
    nguyenVong2017: 'TTNV <= 3',
    diem2018: '18,20',
    nguyenVong2018: 'TTNV <= 8',
    diem2019: '19,70',
    nguyenVong2019: 'TTNV <= 3',
  },
  {
    key: '7',
    stt: 7,
    nganh: 'Marketing',
    idnganh: '7340115',
    diem2017: '22,50',
    nguyenVong2017: 'TTNV <= 4',
    diem2018: '19,30',
    nguyenVong2018: 'TTNV <= 7',
    diem2019: '21,20',
    nguyenVong2019: 'TTNV <= 6',
  },
  {
    key: '8',
    stt: 8,
    nganh: 'Kế toán',
    idnganh: '7340301',
    diem2017: '21,50',
    nguyenVong2017: 'TTNV = 1',
    diem2018: '17,00',
    nguyenVong2018: 'TTNV <= 12',
    diem2019: '18,00',
    nguyenVong2019: ' ',
  },
];

const DiemTuyenSinh = () => {
  let isMobile;
  enquireScreen((b) => {
    isMobile = b;
  });
  return (
    <Box style={{ marginTop: 120 }}>
      <Container>
        <div>
          <TitleTable>ĐIỂM TRÚNG TUYỂN THEO TỪNG NĂM</TitleTable>
          <br />
          <h2>CƠ SỞ ĐÀO TẠO PHÍA BẮC (mã BVH)</h2>
          <Table
            columns={columns}
            dataSource={dataBVH}
            bordered
            scroll={{ x: 1000 }}
          />
          <br />
          <h2>CƠ SỞ ĐÀO TẠO PHÍA NAM (mã BVS)</h2>
          <Table
            columns={columns}
            dataSource={dataBVS}
            bordered
            scroll={{ x: 1000 }}
          />
        </div>
      </Container>
    </Box>
  );
};
DiemTuyenSinh.defaultProps = {};
export default DiemTuyenSinh;

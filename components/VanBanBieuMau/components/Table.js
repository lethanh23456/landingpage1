import { Table } from 'antd';
import React from "react";

const BangVanBan = ({ dsTaiLieu }) => {
    const onCell = record => ({
        onClick: () => window.open(record?.taiLieu ?? ''), // click row
        style: { cursor: 'pointer' },
    });

    const columns = [
        {
            title: 'STT',
            dataIndex: 'index',
            align: 'center',
            width: 80,
            onCell,
        },
        {
            title: 'Tên văn bản',
            dataIndex: 'ten',
            key: 'ten',
            align: 'center',
            onCell,
        },
        {
            title: 'Lượt truy cập',
            dataIndex: 'view',
            key: 'view',
            align: 'center',
            width: 120,
            onCell,
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={dsTaiLieu}
                pagination={{
                    defaultCurrent: 1,
                    position: 'bottom',
                    showSizeChanger: true,
                    pageSizeOptions: ['10', '25', '50', '100'],
                }}
                scroll={{ x: 780 }}
                bordered
            />
        </div >
    );
}

export default BangVanBan;


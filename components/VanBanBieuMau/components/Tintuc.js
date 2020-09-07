// eslint-disable-next-line react/prefer-stateless-function
import { get } from 'libs/fetchData';
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
    CardTinTuc,
    CardTinTucIamge,
    CardTinTucTitle,
    StandForDate, StandForTitle, StandForWrapper
} from '../index.style';

const TinTuc = ({ }) => {
    const [relate, setRelate] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        get(setRelate, setLoading, 'sotay/tintuc', {
            params: {
                page: 1,
                limit: 2,
                cond: {
                    maLoaiTinTuc: "THÔNG BÁO",
                },
            },
        })
    }, []);
    console.log(new Date().toISOString(), "thong bao su kien");
    return (
        <div>
            {relate
                ?.filter((val, i) => i < 2)
                ?.map((award) => (
                    <>
                        <CardTinTuc>
                            <CardTinTucIamge />
                            <CardTinTucTitle>
                                {_.get(award, "tieuDe", "")}
                            </CardTinTucTitle>
                            <StandForWrapper>
                                <StandForTitle>
                                    FTU -
                                </StandForTitle>
                                <StandForDate>
                                    {
                                        _.get(award, "ngayDang", "") !== ""
                                            ? moment(_.get(award, "ngayDang", "")).format(
                                                "DD/MM/YYYY h:mm"
                                            )
                                            : ""
                                    }
                                </StandForDate>
                            </StandForWrapper>
                        </CardTinTuc>
                    </>
                ))}
        </div>
    );
};
export default TinTuc;

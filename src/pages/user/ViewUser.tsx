import React, { useState } from 'react';
import { Row, Col, Button } from "react-bootstrap";

const ViewUser = (props: any) => {

    return (
        <>
            <div className={`info-user ${props ? 'opened' : ''}`}>
                <div className="info-user-inner">
                    <div className='title-info-user'>Thông tin nhân viên</div>
                    <Row>
                        <Col xs={12} md={6}>
                            <label htmlFor="">Họ và tên</label>
                            <p>Nguyễn Thanh Tuyên</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="">Số điện thoại</label>
                            <p>012345678</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="">Địa chỉ</label>
                            <p>203 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="">CCCD/CMND</label>
                            <p>012345678</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="">Email</label>
                            <p>thanhtuyen@dpcargo.com</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="">Vai trò</label>
                            <p>Quản trị viên</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="">Đối tác</label>
                            <p>DP-CARGO</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="">Kho VN</label>
                            <p>DP-CARGO</p>
                        </Col>
                        <Col xs={12} className='text-center'>
                            <Button variant="primary">Đóng</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default ViewUser;
import { useState } from "react";
import { Row, Col, Button, Form, Breadcrumb } from "react-bootstrap";
import ViewUser from "./ViewUser";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import TableUser from "./TableUser";
// import Advanced from "../../components/TableAdvanced";


import './User.scss';

const listBreadCrumb = [
  {
    path: "/",
    label: "Home",
    active: false,
  },
  {
    path: "/",
    label: "Quản lý nhân viên",
    active: true,
  }
];

const listSelectFilter = [
  {
    label: "Tất cả",
    value: 0,
  },
  {
    label: "Đang vận chuyển về vn",
    value: 1,
  },
  {
    label: "Đã vận chuyển về vn",
    value: 2,
  },
  {
    label: "Đang khai thác",
    value: 3,
  },
  {
    label: "Đã khai thác",
    value: 4,
  },
];


const UserList = () => {
  const [viewUser, setViewUser] = useState(false);
  const [addUser, setAddUser] = useState(false);
  const [editUser, setEditUser] = useState(false);



  const handleViewUser = () => {
    setViewUser(!viewUser);
  }

  const handleAddUser = () => {
    setAddUser(!addUser);
  }

  const handleEditUser = () => {
    setEditUser(!editUser);
  }
  console.log(editUser, addUser, viewUser);

  const handleClosePopup = () => {
    if (viewUser) {
      setViewUser(!viewUser);
    }
    if (addUser) {
      setAddUser(!addUser);
    }
    if (editUser) {
      setEditUser(!editUser);
    }
  }

  // const handleClosePopup2 = () => {
  //   setEditUser(!editUser)
  // }

  // const handleClosePopup3 = () => {
  //   setAddUser(!addUser)
  // }


  return (
    <>
      <Row>
        <Col xs={12}>
          <div className="page-title-box">
            <div className="page-title-box-group">
              <Breadcrumb listProps={{ className: "m-0" }}>
                {(listBreadCrumb || []).map((item, index) => {
                  return item.active ? (
                    <Breadcrumb.Item active key={index}>
                      <i className="uil uil-file-alt"></i> {item.label}
                    </Breadcrumb.Item>
                  ) : (
                    <Breadcrumb.Item key={index} href={item.path}>
                      {item.label === 'Home' ? (<i className="uil uil-home-alt"></i>) : ''}
                    </Breadcrumb.Item>
                  );
                })}
              </Breadcrumb>
              <div className="page-title-right">
                <div className="mt-2 mt-md-0">
                  <Button variant="primary" className="mb-2 mb-sm-0" onClick={handleAddUser}>
                    <i className="uil uil-plus-square"></i> Thêm nhân viên
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <div className="page-title-box pt-0">
            <Form className="w-100">
              <Form.Group className="form-search-user">
                <Form.Control type="search" placeholder="Tìm kiếm" />
                <Form.Group className="styled-select">
                  <Form.Select>
                    {listSelectFilter.map((item, index) => {
                      return (
                        <option key={index} value={item.value}>{item.label}</option>
                      );
                    })}
                  </Form.Select>
                </Form.Group>
                <Button type="submit" className="btn-search">
                  <i className="uil uil-search"></i>
                </Button>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <div className="card card-custom">
            <div className="card-body">
              <div className="d-lg-flex align-items-center text-center table-user-bottom">
                <div className="d-inline-block me-3">
                  <span className="me-1">1-10 of 85 items</span>
                  <select className="form-select d-inline-block w-auto">
                    <option value="5">10 Item/page</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="14">All</option>
                  </select>
                </div>
                <ul className="pagination pagination-rounded d-inline-flex ms-auto mb-0">
                  <li className="page-item paginate_button previous disabled"><a className="page-link" href="/user/list"><i className="uil uil-angle-left"></i></a></li>
                  <li className="page-item d-none d-xl-inline-block active"><a className="page-link" href="/user/list">1</a></li>
                  <li className="page-item d-none d-xl-inline-block"><a className="page-link" href="/user/list">2</a></li>
                  <li className="page-item d-none d-xl-inline-block"><a className="page-link" href="/user/list">3</a></li>
                  <li className="page-item d-none d-xl-inline-block"><a className="page-link" href="/user/list">4</a></li>
                  <li className="page-item paginate_button next"><a className="page-link" href="/user/list"><i className="uil uil-angle-right"></i></a></li>
                </ul>
              </div>
              <div className="table-responsive">
                <table className="table table-user react-table">
                  <thead>
                    <tr role="row">
                      <th colSpan={1} className=""><span>#</span></th>
                      <th colSpan={1} className="sortable" title="Toggle SortBy">Mã nhân viên</th>
                      <th colSpan={1} className="sortable">Họ và tên</th>
                      <th colSpan={1} className="sortable">Số điện thoại</th>
                      <th colSpan={1} className="sortable" title="Toggle SortBy">Email</th>
                      <th colSpan={1}>Quyền</th>
                      <th colSpan={1} className="">Hành động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr role="row">
                      <td role="cell"><span>1</span></td>
                      <td role="cell">DPUS21062300087</td>
                      <td role="cell">Nguyễn Thanh Tuyền</td>
                      <td role="cell">012345678</td>
                      <td role="cell">thanhtuyen@dpcargo.vvn</td>
                      <td role="cell">Quản trị viên</td>
                      <td role="cell">
                        <div className="btn-wrap">
                          <button type="button" className="btn btn-outline-primary" onClick={handleViewUser}>
                            <i className="uil uil-eye"></i> Xem
                          </button>
                          <button type="button" className="btn btn-outline-primary" onClick={handleEditUser}>
                            <i className="uil uil-edit-alt"></i> Sửa
                          </button>
                          <button type="button" className="btn btn-outline-primary" onClick={handleViewUser}>
                            <i className="uil uil-times"></i> Xóa
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr role="row">
                      <td role="cell"><span>2</span></td>
                      <td role="cell">DPUS21062300087</td>
                      <td role="cell">Nguyễn Thanh Tuyền</td>
                      <td role="cell">012345678</td>
                      <td role="cell">thanhtuyen@dpcargo.vvn</td>
                      <td role="cell">Quản trị viên</td>
                      <td role="cell">
                        <div className="btn-wrap">
                          <button type="button" className="btn btn-outline-primary" onClick={handleViewUser}>
                            <i className="uil uil-eye"></i> Xem
                          </button>
                          <button type="button" className="btn btn-outline-primary" onClick={handleEditUser}>
                            <i className="uil uil-edit-alt"></i> Sửa
                          </button>
                          <button type="button" className="btn btn-outline-primary" onClick={handleViewUser}>
                            <i className="uil uil-times"></i> Xóa
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr role="row">
                      <td role="cell"><span>3</span></td>
                      <td role="cell">DPUS21062300087</td>
                      <td role="cell">Nguyễn Thanh Tuyền</td>
                      <td role="cell">012345678</td>
                      <td role="cell">thanhtuyen@dpcargo.vvn</td>
                      <td role="cell">Quản trị viên</td>
                      <td role="cell">
                        <div className="btn-wrap">
                          <button type="button" className="btn btn-outline-primary" onClick={handleViewUser}>
                            <i className="uil uil-eye"></i> Xem
                          </button>
                          <button type="button" className="btn btn-outline-primary" onClick={handleEditUser}>
                            <i className="uil uil-edit-alt"></i> Sửa
                          </button>
                          <button type="button" className="btn btn-outline-primary" onClick={handleViewUser}>
                            <i className="uil uil-times"></i> Xóa
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="d-lg-flex align-items-center text-center table-user-bottom">
                <div className="d-inline-block me-3">
                  <span className="me-1">1-10 of 85 items</span>
                  <select className="form-select d-inline-block w-auto">
                    <option value="5">10 Item/page</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="14">All</option>
                  </select>
                </div>
                <ul className="pagination pagination-rounded d-inline-flex ms-auto mb-0">
                  <li className="page-item paginate_button previous disabled"><a className="page-link" href="/user/list"><i className="uil uil-angle-left"></i></a></li>
                  <li className="page-item d-none d-xl-inline-block active"><a className="page-link" href="/user/list">1</a></li>
                  <li className="page-item d-none d-xl-inline-block"><a className="page-link" href="/user/list">2</a></li>
                  <li className="page-item d-none d-xl-inline-block"><a className="page-link" href="/user/list">3</a></li>
                  <li className="page-item d-none d-xl-inline-block"><a className="page-link" href="/user/list">4</a></li>
                  <li className="page-item paginate_button next"><a className="page-link" href="/user/list"><i className="uil uil-angle-right"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <TableUser />

      <div className={`panel-overlay ${addUser ? 'active' : ''} ${editUser ? 'active' : ''} ${viewUser ? 'active' : ''}`} onClick={handleClosePopup}></div>

      {
        (editUser && <EditUser isClass={'active'} />)
      }

      {
        (viewUser && <ViewUser isClass={'active'} />)
      }

      {
        (addUser && <AddUser isClass={'active'} />)
      }

    </>
  );
};

export default UserList;

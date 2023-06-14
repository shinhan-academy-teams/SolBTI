import { Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useLocation } from "react-router-dom";

function Header(props) {
  const [cookies, setCookie, removeCookie] = useCookies([
    "accessToken",
    "memCode",
  ]);
  const [memCode, setmemCode] = useState(cookies.memCode);

  const logout = () => {
    removeCookie("memCode");
    removeCookie("accessToken");
    window.location.reload();
  };

  const locationNow = useLocation();
  if (locationNow.pathname === "/welcome" || locationNow.pathname === "/")
    return null;
  return (
    <div>
      <div className="header-top">
        {/* before login */}
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {memCode ? (
                  <Nav.Link>
                    <Button color="inherit" onClick={logout}>
                      로그아웃
                    </Button>
                  </Nav.Link>
                ) : (
                  <>
                    <Nav.Link href="/auth/login">
                      <Button color="inherit">로그인</Button>
                    </Nav.Link>
                    <Nav.Link href="/auth/signup">
                      <Button color="inherit">회원가입</Button>
                    </Nav.Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="header-body">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/home">
              <img src="/img/Logo.png" alt="logo"></img>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">카드 TOP10</Nav.Link>
                <Nav.Link href="/cardlist">전체</Nav.Link>
                <Nav.Link href="#link">콘텐츠</Nav.Link>
                <NavDropdown title="My" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/mypage/0">
                    마이페이지
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/mypage/cards">
                    내 카드 조회
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/mypage/analyze">
                    카드 이용 내역
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/mypage/info">
                    내 정보 관리
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    실적 충족 현황
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Header;

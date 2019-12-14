import { useState } from "react";
import { useRouter } from "next/router";
import {
  Container,
  Dropdown,
  DropdownItem,
  DropdownItemProps,
  DropdownMenu,
  DropdownToggle
} from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faCoffee,
  faDotCircle,
  faCircle,
  faChartLine,
  faTachometerAlt,
  faChevronRight,
  faList,
  faReceipt,
  faBox,
  faBoxOpen,
  faCopyright,
  faEnvelope,
  faCog,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
// import {} from "@for"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "@fortawesome/fontawesome-svg-core/styles.css";
library.add(
  faCheckSquare,
  faCoffee,
  faDotCircle,
  faCircle,
  faChartLine,
  faTachometerAlt,
  faChevronRight,
  faList,
  faReceipt,
  faBoxOpen,
  faCopyright,
  faEnvelope,
  faCog,
  faSignOutAlt
  // fabStripeS
);

import SidebarListItem from "./sidebar-list-item";
import Link from "next/link";
import Head from "next/head";

export default function({ children }) {
  const router = useRouter();

  // console.log(router);
  return (
    <>
      <div className="page-wrapper toggled">
        <Head>
          <title>Dashboard | nextjs-boilerplate</title>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            crossOrigin="anonymous"
          />

          <link rel="stylesheet" href="../css/sidebar.css" />
          <link rel="stylesheet" href="/css/fontawesome.css" />
        </Head>

        <aside className="sidebar">
          <nav>
            <div
              className="nav-logo_wrapper sidebar-item d-flex justify-content-center align-items-center"
              style={{ color: "#fff" }}
            >
              <h2 style={{ color: "#fff", margin: 0, fontSize: "1.5rem" }}>
                Nextjs boilerplate
              </h2>
            </div>

            <div
              className="user_wrapper sidebar-item p-3 d-flex"
              style={{ color: "#fff" }}
            >
              <img
                src="../images/user.jpg"
                className="user-img mr-3"
                width="50"
              />
              <div className="user-info">
                <h4
                  className="mb-0"
                  style={{ fontSize: "1rem", fontWeight: "bold" }}
                >
                  Jaya Surya
                </h4>
                <small>Admin</small>
              </div>
            </div>
            <div className="sidebar-item sidebar-menu">
              <ul>
                <li className="sidebar-menu-header pt-3 pb-2 px-4">
                  <span style={{ opacity: 0.8 }}>Other</span>
                </li>
                <li className="sidebar-menu-item">
                  <SidebarListItem
                    icon="receipt"
                    title="Orders"
                    badge={<span className="badge badge-success">New</span>}
                    path="orders"
                    isDropdown={false}
                  />
                </li>
              </ul>
            </div>
            <div className="sidebar-item sidebar-menu">
              <ul>
                <li className="sidebar-menu-header pt-3 pb-2 px-4">
                  <span style={{ opacity: 0.8 }}>General</span>
                </li>
                <li className="sidebar-menu-item">
                  <SidebarListItem
                    icon="box-open"
                    title="Packages"
                    path="packages"
                    isDropdown={false}
                  />
                </li>
                <li className="sidebar-menu-item sidebar-dropdown">
                  <SidebarListItem
                    icon="copyright"
                    title="Categories"
                    badge={<span className="badge badge-info">Add</span>}
                    path="categories"
                    isDropdown={false}
                  />
                </li>

                <li className="sidebar-menu-item">
                  <SidebarListItem
                    icon="list"
                    title="Sub-categories"
                    path="sub-categories"
                    isDropdown={false}
                  />
                </li>
              </ul>
            </div>

            <div
              className="sidebar-footer position-absolute d-flex justify-content-around align-items-center"
              style={{
                bottom: 0,
                width: "100%",
                height: "50px",
                boxShadow: "0 0 5px -2px #000"
              }}
            >
              <MessagesDropdown />
              <SettingsDropdown />
              <Signoutbtn />
            </div>
          </nav>
        </aside>
        <Container fluid style={{ backgroundColor: "#ccc" }}></Container>
      </div>
      <style>
        {`
        .sidebar-menu{
          border-bottom:none
        }
        `}
      </style>
    </>
  );
}

function MessagesDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle tag="div" style={{ cursor: "pointer" }}>
        <FontAwesomeIcon icon="envelope" />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

function SettingsDropdown() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle tag="div" style={{ cursor: "pointer" }}>
        <FontAwesomeIcon icon="cog" />
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem disabled>Action (disabled)</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Foo Action</DropdownItem>
        <DropdownItem>Bar Action</DropdownItem>
        <DropdownItem>Quo Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

function Signoutbtn() {
  return (
    <span style={{ cursor: "pointer" }}>
      <FontAwesomeIcon icon="sign-out-alt" />
    </span>
  );
}

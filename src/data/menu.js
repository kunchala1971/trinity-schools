// src/data/menu.js
const menu = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: "🪙",
    roles: ["admin"],
    subMenu: [],
    page: "Dashboard",
  },
  {
    label: "Flash News",
    path: "/flash-news",
    icon: "📜",
    roles: ["admin"],
    subMenu: [],
    page: "FlashNews",
  },
    {
    label: "Scrolling Message",
    path: "/scrolling-message",
    icon: "📜",
    roles: ["admin"],
    subMenu: [],
    page: "ScrollingMessage",
  },
  {
    label: "Uploads",
    icon: "💰",
    roles: ["admin"],
    subMenu: [
      {
        label: "Home Page Data",
        path: "/dashboard/home-page-data",
        roles: ["admin"],
        page: "HomePageData",
      },
      {
        label: "Aboutus Data",
        path: "/dashboard/aboutus-data",
        roles: ["admin"],
        page: "AboutUsData",
      },
       {
        label: "Contact Us Data",
        path: "/dashboard/contact-us-data",
        roles: ["admin"],
        page: "ContactUsData",
      },
       {
        label: "Upload Photo",
        path: "/dashboard/upload-photo",
        roles: ["admin"],
        page: "UploadPhoto",
      },
       {
        label: "Upload PDF (LKG-5th Class)",
        path: "/dashboard/upload-pdf",
        roles: ["admin"],
        page: "UploadPDF",
      },
       {
        label: "Upload Links(6th-10th Class)",
        path: "/dashboard/upload-links",
        roles: ["admin"],
        page: "UploadLinks",
      },
       {
        label: "Upload News",
        path: "/dashboard/upload-news",
        roles: ["admin"],
        page: "UploadNews",
      },
       {
        label: "Upload Slide",
        path: "/dashboard/upload-slide",
        roles: ["admin"],
        page: "UploadSlide",
      },
       {
        label: "Upload Header Image",
        path: "/dashboard/upload-header-image",
        roles: ["admin"],
        page: "UploadHeaderImage",
      }

    ],
  },
  {
    label: "Delete Uploads",
    icon: "🎓",
    roles: ["admin"],
    subMenu: [
      {
        label: "Delete Photo",
        path: "/dashboard/delete-photo",
        roles: ["admin"],
        page: "DeletePhoto",
      },
      {
        label: "Delete News",
        path: "/dashboard/delete-news",
        roles: ["admin"],
        page: "DeleteNews",
      }
    ],
  }

 ];

export default menu;

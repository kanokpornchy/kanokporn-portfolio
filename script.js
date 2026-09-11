console.log("Portfolio website loaded");


// CLEAN URL PARAMETER
// ลบ ?utm_source=... หรือ query string ออกจาก URL
// โดยไม่ Reload หน้าเว็บ

if (window.location.search) {
  const cleanUrl =
    window.location.origin +
    window.location.pathname +
    window.location.hash;

  window.history.replaceState(
    {},
    document.title,
    cleanUrl
  );
}



// NAVBAR ACTIVE MENU

// หา Link ทั้งหมดใน Navbar
const navLinks = document.querySelectorAll(".nav-menu a");

// หา Section ทั้งหมด
const sections = document.querySelectorAll("section");


// ฟังก์ชันตรวจสอบ Section ปัจจุบัน
function updateActiveMenu() {
  let currentSection = "";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    // ตรวจสอบว่าตอนนี้ Scroll อยู่ใน Section ไหน
    if (
      window.scrollY >= sectionTop - 160 &&
      window.scrollY < sectionTop + sectionHeight - 160
    ) {
      currentSection = section.getAttribute("id");
    }
  });


  // ลบ active จากเมนูทั้งหมดก่อน
  navLinks.forEach(function (link) {
    link.classList.remove("active");

    // ถ้า href ตรงกับ Section ปัจจุบัน
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
}


// ตรวจตอน Scroll
window.addEventListener("scroll", updateActiveMenu);


// ตรวจทันทีตอนเปิดหน้าเว็บ
updateActiveMenu();



// PROJECT GALLERY

// เปิด Gallery
function openGallery(galleryId) {
  const gallery = document.getElementById(galleryId);

  if (!gallery) {
    console.log("Gallery not found:", galleryId);
    return;
  }

  gallery.classList.add("show");

  // ล็อก Scroll หน้าเว็บด้านหลัง
  document.body.style.overflow = "hidden";
}


// ปิด Gallery
function closeGallery(galleryId) {
  const gallery = document.getElementById(galleryId);

  if (!gallery) {
    return;
  }

  gallery.classList.remove("show");

  // ถ้าไม่มี Lightbox เปิดอยู่ ให้คืน Scroll
  if (!isLightboxOpen()) {
    document.body.style.overflow = "";
  }
}



// IMAGE LIGHTBOX

// เปิดรูปแบบเต็มจอ
function openImage(imageSrc, imageAlt = "Project Screenshot") {
  const lightbox = document.getElementById("image-lightbox");
  const lightboxImage = document.getElementById("lightbox-image");

  if (!lightbox || !lightboxImage) {
    return;
  }

  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageAlt;

  lightbox.classList.add("show");

  // ล็อก Scroll
  document.body.style.overflow = "hidden";
}


// ปิดรูปแบบเต็มจอ
function closeImage() {
  const lightbox = document.getElementById("image-lightbox");
  const lightboxImage = document.getElementById("lightbox-image");

  if (!lightbox) {
    return;
  }

  lightbox.classList.remove("show");

  // ล้างรูป
  if (lightboxImage) {
    lightboxImage.src = "";
    lightboxImage.alt = "Project Screenshot";
  }

  // ถ้าไม่มี Gallery เปิดอยู่ ให้คืน Scroll
  if (!isGalleryOpen()) {
    document.body.style.overflow = "";
  }
}



// CHECK OPEN STATE

// เช็กว่ามี Gallery เปิดอยู่หรือไม่
function isGalleryOpen() {
  return document.querySelector(".gallery-modal.show") !== null;
}


// เช็กว่า Lightbox เปิดอยู่หรือไม่
function isLightboxOpen() {
  const lightbox = document.getElementById("image-lightbox");

  return lightbox && lightbox.classList.contains("show");
}



// ESC KEY

// กด ESC เพื่อปิด
document.addEventListener("keydown", function (event) {
  if (event.key !== "Escape") {
    return;
  }

  // ถ้ารูปใหญ่เปิดอยู่ ให้ปิดรูปก่อน
  if (isLightboxOpen()) {
    closeImage();
    return;
  }

  // ถ้า Gallery เปิดอยู่ ให้ปิด
  const openGalleryElement =
    document.querySelector(".gallery-modal.show");

  if (openGalleryElement) {
    openGalleryElement.classList.remove("show");

    document.body.style.overflow = "";
  }
});



// CLICK OUTSIDE GALLERY

const galleryModals =
  document.querySelectorAll(".gallery-modal");


galleryModals.forEach(function (gallery) {
  gallery.addEventListener("click", function (event) {

    // ปิดเฉพาะตอนคลิกพื้นหลัง
    // ไม่ปิดตอนกดเนื้อหาด้านใน
    if (event.target === gallery) {
      gallery.classList.remove("show");

      document.body.style.overflow = "";
    }
  });
});



// CLICK OUTSIDE LIGHTBOX

const imageLightbox =
  document.getElementById("image-lightbox");


if (imageLightbox) {
  imageLightbox.addEventListener("click", function (event) {

    // คลิกพื้นที่มืดด้านนอกรูป
    if (event.target === imageLightbox) {
      closeImage();
    }
  });
}



// PREVENT IMAGE DRAG


// กันการลากรูปใน Gallery
const galleryImages =
  document.querySelectorAll(".gallery-item img");


galleryImages.forEach(function (image) {
  image.setAttribute("draggable", "false");
});
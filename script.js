
console.log("Portfolio website loaded");

// ==================================================
// TRANSLATIONS TH / EN
// ==================================================

const translations = {
  // NAVBAR
  "หน้าแรก": "Home",
  "เกี่ยวกับฉัน": "About Me",
  "ทักษะ": "Skills",
  "ผลงาน": "Projects",
  "ประสบการณ์": "Experience",
  "ติดต่อ": "Contact",

  // HOME
  "สวัสดีค่ะ ฉันคือ": "Hello, I'm",
  "นักศึกษาวิทยาการคอมพิวเตอร์": "Computer Science Student",
  "นักศึกษาวิทยาการคอมพิวเตอร์ สนใจฝึกงานตำแหน่ง Full Stack Developer โดยมีพื้นฐานและความสนใจหลักด้าน Front-end พร้อมพื้นฐาน Back-end และฐานข้อมูลจากโปรเจกต์รายวิชา ต้องการพัฒนาทักษะทั้งสองฝั่ง ผ่านการทำงานจริง":
    "Computer Science student seeking a Full Stack Developer internship, with a primary focus on Front-end development and foundational Back-end and database experience from academic projects. Eager to strengthen both Front-end and Back-end skills through real-world experience.",
  "ดูผลงาน": "View Projects",
  "ดาวน์โหลด CV": "Download CV",

  // ABOUT
  "ฉันเป็นใคร และสนใจงานด้านไหน?":
    "Who am I and what kind of work am I interested in?",
  "นักศึกษาสาขาวิทยาการคอมพิวเตอร์ มีความสนใจฝึกงานตำแหน่ง Full Stack Developer โดยมีพื้นฐานและความสนใจหลักด้าน Front-end":
    "I am a Computer Science student interested in a Full Stack Developer internship, with a primary focus on Front-end development.",
  "มีประสบการณ์จากโปรเจกต์รายวิชาในการวางแผน ออกแบบ และพัฒนา Web Application พร้อมพื้นฐานด้าน Back-end และ Database ในระดับเบื้องต้น และต้องการพัฒนาทักษะทั้งสองฝั่งผ่านการทำงานจริง":
    "I have academic project experience in planning, designing, and developing Web Applications, with foundational Back-end and database knowledge. I would like to strengthen both Front-end and Back-end skills through real-world work.",
  "พร้อมเรียนรู้เทคโนโลยีใหม่ ๆ ทำงานร่วมกับทีม และพัฒนาทักษะอย่างต่อเนื่อง โดยสามารถฝึกงานได้ในช่วง มกราคม – เมษายน 2570":
    "I am ready to learn new technologies, collaborate with a team, and continuously improve my skills. I am available for an internship from January to April 2027.",
  "พัฒนาเว็บไซต์และระบบ โดยมีพื้นฐานทั้ง Front-end, Back-end และ Database":
    "Develop websites and systems with foundations in Front-end, Back-end, and databases.",
  "ออกแบบหน้าเว็บด้วย Figma และพัฒนาให้เหมาะกับผู้ใช้งาน":
    "Design web interfaces with Figma and develop user-friendly experiences.",
  "วิเคราะห์ปัญหา และหาแนวทางแก้ไขอย่างเป็นระบบ":
    "Analyze problems and find systematic solutions.",

  // PROJECT INTRO
  "ผลงานที่แสดงกระบวนการวิเคราะห์ ออกแบบ และพัฒนาระบบ จากโจทย์และปัญหาที่แตกต่างกัน":
    "Projects demonstrating system analysis, design, and development across different requirements and problems.",

  // PROJECT 01 — FLOWER SHOP
  "ระบบร้านขายดอกไม้ออนไลน์": "Online Flower Shop System",
  "ระบบสำหรับลูกค้า": "Customer System",
  "ระบบจัดการหลังบ้าน": "Back-office Management",
  "ระบบฐานข้อมูล": "Database System",
  "ระบบร้านขายดอกไม้ออนไลน์ รองรับการทำงานทั้งฝั่งผู้ใช้งานและผู้ดูแลระบบ ตั้งแต่การเลือกสินค้า การสั่งซื้อ การชำระเงิน ไปจนถึงการจัดการข้อมูลสินค้า และสถานะคำสั่งซื้อ":
    "An online flower shop supporting both customers and administrators, from product selection, ordering, and payment to product and order-status management.",
  "ปัญหา": "Problem",
  "ต้องการสร้างระบบร้านค้าออนไลน์ ที่ช่วยให้ลูกค้าสามารถเลือกสินค้าและสั่งซื้อได้สะดวก พร้อมมีระบบสำหรับผู้ดูแลร้าน":
    "A convenient online store was needed so customers could browse and order products, with an administration system for store management.",
  "สิ่งที่สร้าง": "What I Built",
  "พัฒนาเว็บไซต์ร้านดอกไม้ออนไลน์ รองรับการเลือกสินค้า การสั่งซื้อ การชำระเงิน และระบบจัดการหลังบ้าน":
    "Developed an online flower shop supporting product selection, ordering, payment, and back-office management.",
  "บทบาทของฉัน": "My Role",
  "วิเคราะห์ Workflow ของระบบ ออกแบบฐานข้อมูล และพัฒนาการทำงานทั้งฝั่ง User และ Admin รวมถึงการจัดการสินค้าและคำสั่งซื้อ":
    "Analyzed the system workflow, designed the database, and developed User and Admin functions, including product and order management.",
  "ระบบสมาชิก": "User Accounts",
  "ระบบสินค้า": "Product Management",
  "ระบบสั่งซื้อ": "Ordering System",
  "ระบบชำระเงิน": "Payment System",
  "ระบบ Admin": "Admin System",
  "สิ่งที่ได้เรียนรู้": "What I Learned",
  "ได้เรียนรู้กระบวนการพัฒนา Web Application แบบครบ Workflow ตั้งแต่การวิเคราะห์ระบบ ออกแบบฐานข้อมูล ไปจนถึงการพัฒนาการทำงานทั้งฝั่ง User และ Admin":
    "Learned the complete Web Application workflow, from system analysis and database design to developing User and Admin functions.",

  // PROJECT 02 — SCAMGUARD AI
  "ระบบตรวจจับข้อความหลอกลวงด้วย AI":
    "AI Scam Message Detection System",
  "วิเคราะห์ข้อความ": "Text Analysis",
  "ตรวจจับความเสี่ยง": "Risk Detection",
  "วิเคราะห์ผลลัพธ์": "Result Analysis",
  "ระบบตรวจจับและวิเคราะห์ข้อความที่อาจมีความเสี่ยงเป็นข้อความหลอกลวง โดยประยุกต์ใช้ AI และการวิเคราะห์ข้อความ เพื่อช่วยประเมินความเสี่ยงและแสดงผลให้ผู้ใช้งานเข้าใจง่าย":
    "A system that detects and analyzes potentially fraudulent messages using AI and text analysis to assess risk and present easy-to-understand results.",
  "ผู้ใช้งานอาจไม่สามารถแยกแยะข้อความหลอกลวง หรือข้อความที่มีความเสี่ยงได้ทันที":
    "Users may not immediately recognize fraudulent or risky messages.",
  "ระบบรับข้อความจากผู้ใช้งาน วิเคราะห์รูปแบบและความเสี่ยง พร้อมแสดงผลและคำแนะนำให้ผู้ใช้งานเข้าใจง่าย":
    "The system accepts user messages, analyzes patterns and risk, and presents results with easy-to-understand guidance.",
  "ร่วมวิเคราะห์ Workflow ของระบบ ออกแบบขั้นตอนการตรวจสอบข้อความ และออกแบบการนำเสนอผลลัพธ์ให้เหมาะกับผู้ใช้งาน":
    "Contributed to workflow analysis, designed message-checking steps, and designed how results are presented to users.",
  "รับข้อความจากผู้ใช้งาน": "Receive User Messages",
  "วิเคราะห์รูปแบบข้อความ": "Analyze Message Patterns",
  "ประเมินความเสี่ยง": "Assess Risk",
  "แสดงผลการวิเคราะห์": "Display Analysis Results",
  "ให้คำแนะนำเกี่ยวกับ Scam": "Provide Scam-related Guidance",
  "ได้เรียนรู้การนำ AI และ NLP มาประยุกต์ใช้กับ Web Application รวมถึงการออกแบบ Workflow และการนำเสนอผลลัพธ์":
    "Learned how to apply AI and NLP to a Web Application, including workflow design and result presentation.",

  // PROJECT 03 — SLIDE TRUCK
  "ระบบบริหารจัดการบริการรถสไลด์":
    "Slide Truck Service Management System",
  "ระบบผู้ดูแล": "Admin System",
  "จัดการข้อมูลคนขับ": "Driver Management",
  "จัดการสถานะบริการ": "Service Status Management",
  "ระบบสำหรับผู้ดูแล ใช้บริหารจัดการข้อมูลผู้ใช้งาน ข้อมูลคนขับ สิทธิ์การใช้งาน และสถานะคำสั่งบริการ เพื่อช่วยให้การบริหารจัดการระบบหลังบ้านมีขั้นตอนที่ชัดเจนมากขึ้น":
    "An administration system for managing users, drivers, permissions, and service-order status, helping make back-office workflows clearer.",
  "การจัดการข้อมูลคนขับและคำสั่งบริการอาจเกิดความสับสน หากไม่มีระบบกลางสำหรับจัดเก็บข้อมูล กำหนดสิทธิ์ และติดตามสถานะ":
    "Driver and service-order management can become confusing without a central system for data storage, permissions, and status tracking.",
  "ระบบ Admin สำหรับบริหารข้อมูลผู้ใช้งาน คนขับรถ สิทธิ์การใช้งาน และติดตามสถานะคำสั่งบริการ":
    "An Admin system for managing users, drivers, access permissions, and service-order status.",
  "วิเคราะห์ Workflow และพัฒนาการทำงานในฝั่งผู้ดูแลระบบ รวมถึงการจัดการผู้ใช้งาน คนขับ รถ สิทธิ์การเข้าถึง และสถานะคำสั่งบริการ":
    "Analyzed the workflow and developed administrator functions, including user, driver, vehicle, permission, and service-status management.",
  "จัดการข้อมูลผู้ใช้งาน": "Manage Users",
  "จัดการข้อมูลรถ": "Manage Vehicles",
  "กำหนดสิทธิ์การใช้งาน": "Manage Permissions",
  "ตรวจสอบคำสั่งบริการ": "Review Service Orders",
  "ได้เรียนรู้การออกแบบระบบหลังบ้านที่มีหลายฟังก์ชัน การจัดการสิทธิ์ผู้ใช้งาน และการออกแบบ Workflow ให้สอดคล้องกับกระบวนการทำงานจริง":
    "Learned to design a multi-function back-office system, manage user permissions, and create workflows aligned with real work processes.",

  // EXPERIENCE
  "พนักงานบริการ": "Service Staff",
  "ให้บริการและดูแลลูกค้า": "Provided customer service",
  "ประสานงานกับทีม": "Coordinated with the team",
  "แก้ไขปัญหาเฉพาะหน้า": "Handled immediate problems",
  "ทำงานภายใต้สถานการณ์ที่ต้องการความรวดเร็ว":
    "Worked effectively in fast-paced situations",
  "รับรายการและตรวจสอบความถูกต้อง":
    "Took orders and checked their accuracy",
  "ประสานงานกับทีมที่เกี่ยวข้อง":
    "Coordinated with relevant team members",
  "ทำงานภายใต้ความกดดันได้":
    "Worked effectively under pressure",

  // CONTACT
  "เปิดรับโอกาสฝึกงานตำแหน่ง Full Stack Developer โดยเน้น Front-end และพร้อมพูดคุยเกี่ยวกับโปรเจกต์หรือโอกาสร่วมงาน":
    "Open to Full Stack Developer internship opportunities with a Front-end focus, and happy to discuss projects or potential collaboration.",

  // PROJECT BUTTONS
  "ดูภาพโปรเจกต์": "View Project Gallery",
  "ดูโค้ดบน GitHub": "View Code on GitHub",

  // GALLERIES
  "ตัวอย่างหน้าจอและการทำงานของระบบร้านขายดอกไม้ออนไลน์":
    "Examples of screens and features from the Online Flower Shop system.",
  "หน้า Home": "Home Page",
  "หน้าสินค้า": "Products Page",
  "จัดการสินค้า": "Product Management",
  "ตอบกลับรีวิว": "Review Responses",
  "วิเคราะห์รีวิว": "Review Analysis",
  "Staff จัดการสินค้า": "Staff Product Management",
  "Staff ตอบกลับรีวิว": "Staff Review Responses",
  "Marketing วิเคราะห์รีวิว": "Marketing Review Analysis",
  "หน้าแรก ScamGuard AI": "ScamGuard AI Home Page",
  "หน้ากรอกข้อความ": "Message Input Page",
  "กรอกข้อความตรวจสอบ": "Enter a Message to Check",
  "ตัวอย่างหน้าจอการตรวจจับและวิเคราะห์ข้อความหลอกลวง":
    "Examples of screens for scam-message detection and analysis.",
  "ตัวอย่างหน้าจอการทำงานของระบบฝั่ง Admin":
    "Examples of screens from the Admin system.",
  "หน้า Login": "Login Page",
  "จัดการข้อมูลผู้ใช้งาน": "User Management"
};


// ==================================================
// TEXT NORMALIZATION
// ==================================================

function normalizeText(text) {
  return String(text ?? "")
    .replace(/\s+/g, " ")
    .trim();
}


// ==================================================
// NORMALIZED TRANSLATION MAP
// ==================================================

const normalizedTranslations = new Map(
  Object.entries(translations).map(([key, value]) => [
    normalizeText(key),
    value
  ])
);


// ==================================================
// STORE ORIGINAL TEXT AND ATTRIBUTES
// ==================================================

const originalTextNodes = [];
const originalAttributes = [];

function rememberTranslatableContent() {
  originalTextNodes.length = 0;
  originalAttributes.length = 0;

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;

        if (!parent) {
          return NodeFilter.FILTER_REJECT;
        }

        if (
          parent.closest(
            "script, style, noscript, .language-switch"
          )
        ) {
          return NodeFilter.FILTER_REJECT;
        }

        if (!normalizeText(node.nodeValue)) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  let node;

  while ((node = walker.nextNode())) {
    originalTextNodes.push({
      node,
      original: node.nodeValue
    });
  }

  document
    .querySelectorAll("[title], [alt], [placeholder]")
    .forEach((element) => {
      ["title", "alt", "placeholder"].forEach((attribute) => {
        if (element.hasAttribute(attribute)) {
          originalAttributes.push({
            element,
            attribute,
            original: element.getAttribute(attribute)
          });
        }
      });
    });
}


// ==================================================
// TRANSLATE A TEXT VALUE
// ==================================================

function translateTextValue(original, language) {
  if (language === "th") {
    return original;
  }

  const normalized = normalizeText(original);
  const translated = normalizedTranslations.get(normalized);

  if (translated === undefined) {
    return original;
  }

  const leading = original.match(/^\s*/)?.[0] ?? "";
  const trailing = original.match(/\s*$/)?.[0] ?? "";

  return `${leading}${translated}${trailing}`;
}


// ==================================================
// PAGE LANGUAGE
// ==================================================

function updatePageLanguage(language) {
  const lang = language === "en" ? "en" : "th";

  originalTextNodes.forEach(({ node, original }) => {
    node.nodeValue = translateTextValue(original, lang);
  });

  originalAttributes.forEach(({ element, attribute, original }) => {
    element.setAttribute(
      attribute,
      translateTextValue(original, lang)
    );
  });

  document.documentElement.lang = lang;

  document.title =
    "Kanokporn Portfolio | Full Stack Developer Intern";

  const description = document.querySelector(
    'meta[name="description"]'
  );

  if (description) {
    description.setAttribute(
      "content",
      lang === "en"
        ? "Portfolio of Kanokporn Chaiyakhao, a Computer Science student seeking a Full Stack Developer internship with a Front-end focus and basic Back-end skills."
        : "Portfolio ของ Kanokporn Chaiyakhao นักศึกษาวิทยาการคอมพิวเตอร์ สนใจฝึกงานตำแหน่ง Full Stack Developer โดยเน้น Front-end และมีพื้นฐาน Back-end"
    );
  }

  document.querySelectorAll(".lang-btn").forEach((button) => {
    const active = button.dataset.lang === lang;

    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  try {
    localStorage.setItem("portfolioLanguage", lang);
  } catch (error) {
    console.warn("Unable to save language preference.", error);
  }
}


// ==================================================
// LANGUAGE SWITCH
// ==================================================

function createLanguageSwitch() {
  const container = document.getElementById(
    "language-switch-container"
  );

  if (!container) {
    return;
  }

  // Prevent duplicate buttons if initialized more than once.
  container.replaceChildren();

  const wrapper = document.createElement("div");
  wrapper.className = "language-switch";
  wrapper.setAttribute("aria-label", "Language switch");

  const thButton = document.createElement("button");
  thButton.type = "button";
  thButton.className = "lang-btn";
  thButton.dataset.lang = "th";
  thButton.textContent = "TH";
  thButton.setAttribute("aria-label", "ภาษาไทย");

  const enButton = document.createElement("button");
  enButton.type = "button";
  enButton.className = "lang-btn";
  enButton.dataset.lang = "en";
  enButton.textContent = "EN";
  enButton.setAttribute("aria-label", "English");

  wrapper.append(thButton, enButton);
  container.appendChild(wrapper);

  wrapper.addEventListener("click", (event) => {
    const button = event.target.closest(".lang-btn");

    if (!button || !wrapper.contains(button)) {
      return;
    }

    updatePageLanguage(button.dataset.lang);
  });
}


// ==================================================
// INITIALIZE LANGUAGE SYSTEM
// ==================================================

rememberTranslatableContent();
createLanguageSwitch();

let savedLanguage = "th";

try {
  savedLanguage = localStorage.getItem("portfolioLanguage") || "th";
} catch (error) {
  console.warn("Unable to read language preference.", error);
}

updatePageLanguage(savedLanguage);


// ==================================================
// CLEAN URL PARAMETERS
// ==================================================

if (window.location.search) {
  const cleanUrl =
    window.location.origin +
    window.location.pathname +
    window.location.hash;

  window.history.replaceState({}, document.title, cleanUrl);
}


// ==================================================
// NAVBAR ACTIVE MENU
// ==================================================

const navLinks = document.querySelectorAll(".nav-menu a");
const sections = document.querySelectorAll("section");

function updateActiveMenu() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop - 160 &&
      window.scrollY < sectionTop + sectionHeight - 160
    ) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${currentSection}`
    );
  });
}

window.addEventListener("scroll", updateActiveMenu, { passive: true });
window.addEventListener("resize", updateActiveMenu);
updateActiveMenu();


// ==================================================
// PROJECT GALLERY
// ==================================================

function openGallery(galleryId) {
  const gallery = document.getElementById(galleryId);

  if (!gallery) {
    console.warn("Gallery not found:", galleryId);
    return;
  }

  gallery.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeGallery(galleryId) {
  const gallery = document.getElementById(galleryId);

  if (!gallery) {
    return;
  }

  gallery.classList.remove("show");

  if (!isLightboxOpen() && !isGalleryOpen()) {
    document.body.style.overflow = "";
  }
}


// ==================================================
// IMAGE LIGHTBOX
// ==================================================

function openImage(imageSrc, imageAlt = "Project Screenshot") {
  const lightbox = document.getElementById("image-lightbox");
  const lightboxImage = document.getElementById("lightbox-image");

  if (!lightbox || !lightboxImage) {
    return;
  }

  lightboxImage.src = imageSrc;
  lightboxImage.alt = imageAlt;
  lightbox.classList.add("show");

  document.body.style.overflow = "hidden";
}

function closeImage() {
  const lightbox = document.getElementById("image-lightbox");
  const lightboxImage = document.getElementById("lightbox-image");

  if (!lightbox) {
    return;
  }

  lightbox.classList.remove("show");

  if (lightboxImage) {
    lightboxImage.src = "";
    lightboxImage.alt = "Project Screenshot";
  }

  if (!isGalleryOpen()) {
    document.body.style.overflow = "";
  }
}


// ==================================================
// CHECK OPEN STATE
// ==================================================

function isGalleryOpen() {
  return document.querySelector(".gallery-modal.show") !== null;
}

function isLightboxOpen() {
  const lightbox = document.getElementById("image-lightbox");

  return Boolean(lightbox?.classList.contains("show"));
}


// ==================================================
// ESCAPE KEY
// ==================================================

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  if (isLightboxOpen()) {
    closeImage();
    return;
  }

  const openGalleryElement = document.querySelector(
    ".gallery-modal.show"
  );

  if (openGalleryElement) {
    openGalleryElement.classList.remove("show");

    if (!isLightboxOpen() && !isGalleryOpen()) {
      document.body.style.overflow = "";
    }
  }
});


// ==================================================
// CLICK OUTSIDE GALLERY TO CLOSE
// ==================================================

document.querySelectorAll(".gallery-modal").forEach((gallery) => {
  gallery.addEventListener("click", (event) => {
    if (event.target === gallery) {
      gallery.classList.remove("show");

      if (!isLightboxOpen() && !isGalleryOpen()) {
        document.body.style.overflow = "";
      }
    }
  });
});


// ==================================================
// CLICK OUTSIDE LIGHTBOX TO CLOSE
// ==================================================

const imageLightbox = document.getElementById("image-lightbox");

if (imageLightbox) {
  imageLightbox.addEventListener("click", (event) => {
    if (event.target === imageLightbox) {
      closeImage();
    }
  });
}


// ==================================================
// PREVENT IMAGE DRAG
// ==================================================

document.querySelectorAll(".gallery-item img").forEach((image) => {
  image.setAttribute("draggable", "false");
});

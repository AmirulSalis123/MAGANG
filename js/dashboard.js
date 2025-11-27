const { useState, useEffect } = React;

// REGISTRY untuk semua konten
const contentRegistry = {
  beranda: null, // Akan diisi setelah beranda.js dimuat
};

// Default content untuk fallback
const DefaultContent = ({ section }) => {
  return React.createElement(
    "div",
    { className: "default-content" },
    React.createElement("h1", null, `Konten ${section}`),
    React.createElement(
      "p",
      null,
      `Halaman ${section} akan segera ditampilkan`
    ),
    React.createElement("div", { className: "loading-placeholder" })
  );
};

contentRegistry.default = DefaultContent;

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState(() => {
    return localStorage.getItem("lastActiveSection") || "beranda";
  });
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [userType, setUserType] = useState("guest");
  const [currentContent, setCurrentContent] = useState(null);
  const [contentLoaded, setContentLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);

  // Simpan activeSection ke localStorage
  useEffect(() => {
    localStorage.setItem("lastActiveSection", activeSection);
  }, [activeSection]);

  // SCROLL KE ATAS SETIAP BERPINDAH SECTION
  useEffect(() => {
    // Scroll ke atas ketika section berubah
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    // Juga scroll container main content ke atas (jika ada)
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  }, [activeSection]); // Trigger ketika activeSection berubah

  useEffect(() => {
    const savedUserType = localStorage.getItem("userType") || "guest";
    setUserType(savedUserType);

    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      // Jika berpindah dari mobile ke desktop, tutup sidebar
      if (!mobile && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Event listener untuk navigasi dari konten lain
    const handleNavigateTo = (event) => {
      setActiveSection(event.detail);
    };

    window.addEventListener("navigateTo", handleNavigateTo);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("navigateTo", handleNavigateTo);
    };
  }, [sidebarOpen]);

  // Load content berdasarkan activeSection
  useEffect(() => {
    if (activeSection && contentLoaded) {
      loadContent(activeSection);
    }
  }, [activeSection, contentLoaded]);

  // Load script konten dinamis
  useEffect(() => {
    loadContentScripts();
  }, []);

  // Set openSubmenu berdasarkan activeSection saat pertama kali load
  useEffect(() => {
    if (!isMobile) {
      // Cek apakah activeSection adalah bagian dari submenu
      const submenuMapping = {
        'visi-misi': 'profile',
        'sarana-prasana': 'profile', 
        'guru-staf': 'profile',
        'ekstrakulikuler': 'profile',
        'pembelajaran': 'akademik',
        'kelas': 'akademik',
        'anbk': 'akademik',
        'lomba': 'kegiatan',
        'mpls': 'kegiatan',
        'berita': 'informasi',
        'ppdb': 'informasi',
        'prestasi': 'informasi',
        'hubungi-kami': 'kontak',
        'pengaduan': 'kontak'
      };

      const correspondingSubmenu = submenuMapping[activeSection];
      if (correspondingSubmenu) {
        setOpenSubmenu(correspondingSubmenu);
      }
    }
  }, [isMobile, activeSection]);

  const loadContentScripts = () => {
    const scripts = [
      "js/contents/anbk.js",
      "js/contents/beranda.js",
      "js/contents/berita.js",
      "js/contents/ekstrakulikuler.js",
      "js/contents/galeri.js",
      "js/contents/guru-staf.js",
      "js/contents/hubungi-kami.js",
      "js/contents/kelas.js",
      "js/contents/lomba.js",
      "js/contents/mpls.js",
      "js/contents/pembelajaran.js",
      "js/contents/pengaduan.js",
      "js/contents/ppdb.js",
      "js/contents/prestasi.js",
      "js/contents/sarana-prasana.js",
      "js/contents/visi-misi.js",
    ];

    let loadedCount = 0;

    // Jika tidak ada script yang perlu dimuat
    if (scripts.length === 0) {
      setContentLoaded(true);
      return;
    }

    scripts.forEach((scriptSrc) => {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.onload = () => {
        loadedCount++;
        console.log(`✓ Berhasil memuat: ${scriptSrc}`);
        if (loadedCount === scripts.length) {
          setContentLoaded(true);
          registerContentComponents();
        }
      };
      script.onerror = () => {
        loadedCount++;
        console.error(`✗ Gagal memuat: ${scriptSrc}`);
        if (loadedCount === scripts.length) {
          setContentLoaded(true);
          registerContentComponents();
        }
      };
      document.head.appendChild(script);
    });
  };

  const registerContentComponents = () => {
    console.log("Mendaftarkan komponen konten...");

    // Registrasi komponen ANBK
    if (window.ANBKContent) {
      contentRegistry.anbk = React.createElement(window.ANBKContent);
      console.log("✓ ANBK content registered");
    }

    // Registrasi komponen beranda
    if (window.BerandaContent) {
      contentRegistry.beranda = React.createElement(window.BerandaContent);
      console.log("✓ Beranda content registered");
    }

    // Registrasi komponen berita
    if (window.BeritaContent) {
      contentRegistry.berita = React.createElement(window.BeritaContent);
      console.log("✓ Berita content registered");
    }

    // Registrasi komponen ekstrakulikuler
    if (window.EkstrakulikulerContent) {
      contentRegistry.ekstrakulikuler = React.createElement(
        window.EkstrakulikulerContent
      );
      console.log("✓ Ekstrakulikuler content registered");
    }

    // Registrasi komponen galeri (dari foto.js)
    if (window.GaleriContent) {
      contentRegistry.galeri = React.createElement(window.GaleriContent);
      console.log("✓ Galeri content registered");
    }

    // Registrasi komponen guru-staf
    if (window.GuruStafContent) {
      contentRegistry.guruStaf = React.createElement(window.GuruStafContent);
      console.log("✓ GuruStaf content registered");
    }

    // Registrasi komponen hubungi-kami
    if (window.HubungiKamiContent) {
      contentRegistry.hubungiKami = React.createElement(
        window.HubungiKamiContent
      );
      console.log("✓ HubungiKami content registered");
    }

    // Registrasi komponen kelas
    if (window.KelasContent) {
      contentRegistry.kelas = React.createElement(window.KelasContent);
    }

    // Registrasi komponen lomba
    if (window.LombaContent) {
      contentRegistry.lomba = React.createElement(window.LombaContent);
    }

    // Registrasi komponen mpls
    if (window.MPLSContent) {
      contentRegistry.mpls = React.createElement(window.MPLSContent);
    }

    // Registrasi komponen pembelajaran
    if (window.PembelajaranContent) {
      contentRegistry.pembelajaran = React.createElement(
        window.PembelajaranContent
      );
    }

    // Registrasi komponen pengaduan
    if (window.PengaduanContent) {
      contentRegistry.pengaduan = React.createElement(window.PengaduanContent);
    }

    // Registrasi komponen ppdb
    if (window.PPDBContent) {
      contentRegistry.ppdb = React.createElement(window.PPDBContent);
    }

    // Registrasi komponen prestasi
    if (window.PrestasiContent) {
      contentRegistry.prestasi = React.createElement(window.PrestasiContent);
    }

    // Registrasi komponen sarana-prasana
    if (window.SaranaPrasanaContent) {
      contentRegistry.saranaPrasana = React.createElement(
        window.SaranaPrasanaContent
      );
    }

    // Registrasi komponen visi-misi
    if (window.VisiMisiContent) {
      contentRegistry.visiMisi = React.createElement(window.VisiMisiContent);
      console.log("✓ VisiMisi content registered");
    }

    console.log(
      "Registrasi selesai. Keys yang tersedia:",
      Object.keys(contentRegistry)
    );

    // Set content awal setelah registrasi
    loadContent(activeSection);
  };

  const loadContent = (section) => {
    console.log("Loading content for:", section);

    // Mapping antara ID menu dan key di registry
    const sectionMapping = {
      beranda: "beranda",
      berita: "berita",
      "visi-misi": "visiMisi",
      "sarana-prasana": "saranaPrasana",
      "guru-staf": "guruStaf",
      ekstrakulikuler: "ekstrakulikuler",
      pembelajaran: "pembelajaran",
      kelas: "kelas",
      ppdb: "ppdb",
      lomba: "lomba",
      mpls: "mpls",
      galeri: "galeri",
      prestasi: "prestasi",
      "hubungi-kami": "hubungiKami",
      pengaduan: "pengaduan",
      lokasi: "lokasi",
      anbk: "anbk",
    };

    const registryKey = sectionMapping[section] || section;

    console.log("Mencari di registry dengan key:", registryKey);

    // Cek di registry dulu
    if (contentRegistry[registryKey]) {
      console.log("✓ Konten ditemukan di registry");
      setCurrentContent(contentRegistry[registryKey]);
      return;
    }

    // Jika tidak ada di registry, gunakan default
    console.log("✗ Konten tidak ditemukan, menggunakan default");
    setCurrentContent(
      React.createElement(contentRegistry.default, { section })
    );
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleSubmenu = (submenuType) => {
    const newSubmenuState = openSubmenu === submenuType ? null : submenuType;
    setOpenSubmenu(newSubmenuState);
  };

  const handleKeluar = () => {
    const confirmKeluar = confirm("Apakah Anda yakin ingin keluar?");

    if (confirmKeluar) {
      localStorage.clear();
      window.location.href = "login.html";
    }
    closeSidebar();
  };

  const handleGantiPassword = () => {
    window.location.href = "changepassword.html";
    closeSidebar();
  };

  const handleLogin = () => {
    localStorage.clear();
    window.location.href = "login.html";
  };

  // Handler untuk navigasi ke section
  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);
    if (isMobile) {
      closeSidebar();
    }
  };

  // Menu items - galeri sekarang menjadi menu biasa
  const menuItems = [
    { id: "beranda", label: "BERANDA" },
    { id: "profil", label: "PROFIL", hasSubmenu: true, submenuType: "profile" },
    {
      id: "akademik",
      label: "AKADEMIK",
      hasSubmenu: true,
      submenuType: "akademik",
    },
    {
      id: "kegiatan",
      label: "KEGIATAN",
      hasSubmenu: true,
      submenuType: "kegiatan",
    },
    { id: "galeri", label: "GALERI" },
    {
      id: "informasi",
      label: "INFORMASI",
      hasSubmenu: true,
      submenuType: "informasi",
    },
    { id: "kontak", label: "KONTAK", hasSubmenu: true, submenuType: "kontak" },
    {
      id: "account",
      label: "ACCOUNT",
      hasSubmenu: true,
      submenuType: "account",
    },
  ];

  const getSubmenuItems = (submenuType) => {
    const submenus = {
      profile: [
        { id: "visi-misi", label: "Visi Misi" },
        { id: "sarana-prasana", label: "Sarana Prasana" },
        { id: "guru-staf", label: "Guru dan Staf" },
        { id: "ekstrakulikuler", label: "Ekstrakulikuler" },
      ],
      akademik: [
        { id: "pembelajaran", label: "Pembelajaran" },
        { id: "kelas", label: "Kelas" },
        { id: "anbk", label: "ANBK" },
      ],
      kegiatan: [
        { id: "lomba", label: "Lomba" },
        { id: "mpls", label: "MPLS" },
      ],
      informasi: [
        { id: "berita", label: "Berita" },
        { id: "ppdb", label: "PPDB" },
        { id: "prestasi", label: "Prestasi" },
      ],
      kontak: [
        { id: "hubungi-kami", label: "Hubungi Kami" },
        { id: "pengaduan", label: "Pengaduan" },
      ],
      account: getAccountSubmenuItems(),
    };
    return submenus[submenuType] || [];
  };

  const getAccountSubmenuItems = () => {
    if (userType === "admin") {
      return [
        { id: "ganti-password", label: "Ganti Password" },
        { id: "keluar", label: "Keluar" },
      ];
    } else {
      return [{ id: "login", label: "Login" }];
    }
  };

  const handleSubmenuClick = (submenuType, itemId) => {
    if (itemId === "lokasi") {
      handleNavigateToMaps();
      return;
    }

    if (submenuType === "account") {
      if (itemId === "keluar") {
        handleKeluar();
      } else if (itemId === "ganti-password") {
        handleGantiPassword();
      } else if (itemId === "login") {
        handleLogin();
      }
    } else {
      handleNavigation(itemId);
    }
  };

  const isSubmenuOpen = (submenuType) => {
    return openSubmenu === submenuType;
  };

  // Fungsi untuk render menu item
  const renderMenuItem = (item) => {
    const isActive = activeSection === item.id;
    const hasSubmenuOpen = item.hasSubmenu && isSubmenuOpen(item.submenuType);

    return React.createElement(
      "div",
      { key: item.id, className: "menu-item-wrapper" },
      React.createElement(
        "li",
        {
          className: `nav-item ${isActive ? "active" : ""} ${
            hasSubmenuOpen ? "submenu-open" : ""
          }`,
          onClick: () => {
            if (item.hasSubmenu) {
              toggleSubmenu(item.submenuType);
            } else {
              handleNavigation(item.id);
            }
          },
        },
        item.label,
        item.hasSubmenu &&
          React.createElement(
            "span",
            {
              className: "submenu-arrow",
              style: { marginLeft: "auto", fontSize: "0.8rem" },
            },
            hasSubmenuOpen ? "▲" : "▼"
          )
      ),
      // SUBMENU (hanya untuk item yang punya submenu)
      item.hasSubmenu &&
        hasSubmenuOpen &&
        React.createElement(
          "div",
          { className: "submenu" },
          getSubmenuItems(item.submenuType).map((subItem) => {
            const isSubItemActive = activeSection === subItem.id;
            return React.createElement(
              "li",
              {
                key: subItem.id,
                className: `nav-item submenu-item ${
                  isSubItemActive ? "active" : ""
                } ${subItem.id === "keluar" ? "danger-item" : ""}`,
                onClick: () => handleSubmenuClick(item.submenuType, subItem.id),
              },
              subItem.label
            );
          })
        )
    );
  };

  // Handler untuk error gambar logo
  const handleLogoError = () => {
    console.error("Gambar logo tidak dapat dimuat");
    setLogoError(true);
  };

  // Komponen untuk logo/gambar sekolah dengan teks di samping
  const SchoolLogo = () => {
    if (logoError) {
      // Fallback ke teks jika gambar error
      return React.createElement(
        "div",
        {
          className: "school-logo",
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: isMobile ? "15px 0" : "20px 0",
            borderBottom: "1px solid #eee",
            textAlign: "center",
          },
        },
        React.createElement(
          "h1",
          {
            style: {
              fontSize: isMobile ? "1rem" : "1.2rem",
              color: "white",
              margin: 0,
              fontWeight: "bold",
            },
          },
          "SDN SAMPANGAN 01 SEMARANG"
        ),
        React.createElement("p", {
          style: {
            fontSize: isMobile ? "0.8rem" : "0.9rem",
            color: "#e0e0e0",
            margin: "5px 0 0 0",
          },
        })
      );
    }

    return React.createElement(
      "div",
      {
        className: "school-logo",
        style: {
          display: "flex",
          alignItems: "center",
          padding: isMobile ? "15px 1.5rem" : "20px 1.5rem",
          gap: "15px",
        },
      },
      React.createElement("img", {
        src: "imgs/ICON SDN SAMPANGAN 01.png",
        alt: "SDN SAMPANGAN 01",
        style: {
          width: isMobile ? "50px" : "60px",
          height: isMobile ? "50px" : "60px",
          objectFit: "contain",
          borderRadius: "8px",
        },
        onError: handleLogoError,
      }),
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
          },
        },
        React.createElement(
          "h1",
          {
            style: {
              fontSize: isMobile ? "1rem" : "1.1rem",
              color: "white",
              margin: 0,
              fontWeight: "bold",
              lineHeight: "1.2",
            },
          },
          "SDN SAMPANGAN 01 SEMARANG"
        ),
        React.createElement("p", {
          style: {
            fontSize: isMobile ? "0.7rem" : "0.8rem",
            color: "#e0e0e0",
            margin: "2px 0 0 0",
          },
        })
      )
    );
  };

  return React.createElement(
    "div",
    { className: "dashboard" },
    /* DESKTOP SIDEBAR - MENGGUNAKAN FIXED POSITION */
    !isMobile &&
      React.createElement(
        "aside",
        {
          className: "sidebar",
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            overflowY: "auto",
            zIndex: 1000,
          },
        },
        React.createElement(SchoolLogo),

        React.createElement(
          "div",
          { className: "sidebar-section" },
          React.createElement(
            "ul",
            { className: "nav-menu" },
            menuItems.map((item) => renderMenuItem(item))
          )
        )
      ),

    /* MOBILE OVERLAY */
    isMobile &&
      React.createElement("div", {
        className: `mobile-overlay ${sidebarOpen ? "active" : ""}`,
        onClick: closeSidebar,
      }),

    /* MOBILE SIDEBAR - TETAP NORMAL (NON-FIXED) */
    isMobile &&
      React.createElement(
        "aside",
        {
          className: `mobile-sidebar ${sidebarOpen ? "open" : ""}`,
        },
        React.createElement(
          "div",
          { className: "mobile-sidebar-header" },
          React.createElement(SchoolLogo),
          React.createElement(
            "button",
            {
              className: "close-sidebar",
              onClick: closeSidebar,
              style: {
                position: "absolute",
                top: "50px",
                right: "10px",
                background: "none",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "#ffffffff",
              },
            },
            "×"
          )
        ),

        React.createElement(
          "div",
          { className: "sidebar-section" },
          React.createElement(
            "ul",
            { className: "nav-menu" },
            menuItems.map((item) => renderMenuItem(item))
          )
        )
      ),

    /* MAIN CONTENT */
    React.createElement(
      "main",
      {
        className: "main-content",
        style: !isMobile
          ? {
              marginLeft: "280px",
              width: "calc(100% - 280px)",
            }
          : {},
      },
      isMobile &&
        React.createElement(
          "div",
          {
            className: "mobile-header",
            style: {
              display: "flex",
              alignItems: "center",
              padding: "0",
              borderBottom: "none",
              position: "static",
              backgroundColor: "transparent",
              boxShadow: "none",
              zIndex: 100,
              width: "100%",
              marginBottom: "10px",
            },
          },
          React.createElement(
            "button",
            {
              className: "menu-toggle",
              onClick: toggleSidebar,
              style: {
                fontSize: "1.5rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "10px",
                color: "#333",
              },
            },
            "☰"
          ),

          // Div kosong untuk memastikan tombol tetap di kiri
          React.createElement("div", { style: { flex: 1 } })
        ),

      // RENDER CONTENT DINAMIS
      !contentLoaded
        ? React.createElement(
            "div",
            { className: "loading-container" },
            React.createElement("div", { className: "loading-spinner" }),
            React.createElement("p", null, "Memuat konten...")
          )
        : currentContent ||
            React.createElement(contentRegistry.default, {
              section: activeSection,
            })
    )
  );
};

// Export registry agar bisa diakses oleh file lain
window.contentRegistry = contentRegistry;

ReactDOM.render(
  React.createElement(Dashboard),
  document.getElementById("root")
);
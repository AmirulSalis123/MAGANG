const { useState, useEffect } = React;

// REGISTRY untuk semua konten
const contentRegistry = {
  beranda: null,
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

// Komponen Footer dengan container yang lebih lebar
const Footer = () => {
  const handlePpdbClick = () => {
    // Navigasi ke section ppdb
    const event = new CustomEvent('navigateTo', { detail: 'ppdb' });
    window.dispatchEvent(event);
    
    // Scroll ke top jika di mobile
    if (window.innerWidth <= 768) {
      window.scrollTo(0, 0);
    }
  };

  return React.createElement(
    "div",
    { className: "footer-container" },
    React.createElement(
      "footer",
      { className: "footer" },
      React.createElement(
        "div",
        { className: "footer-content" },
        
        // Bagian Logo Sekolah - ICON BESAR SAJA
        React.createElement(
          "div",
          { className: "footer-section footer-logo" },
          React.createElement("img", {
            src: "imgs/ICON SDN SAMPANGAN 01.png",
            alt: "SDN Sampangan 01 Logo",
            style: {
              width: "150px", // LEBIH BESAR
              height: "150px", // LEBIH BESAR
              objectFit: "contain",
              borderRadius: "12px",
              padding: "10px",
              marginBottom: "10px"
            },
            onError: (e) => {
              console.error("Gambar footer tidak dapat dimuat");
              e.target.style.display = 'none';
              const parent = e.target.parentNode;
              const fallback = React.createElement(
                "div",
                {
                  style: {
                    width: "100px",
                    height: "100px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px"
                  }
                },
                React.createElement("span", {
                  style: { fontSize: "3rem", color: "white" } // ICON FALLBACK BESAR
                },)
              );
              const fallbackElement = document.createElement('div');
              ReactDOM.render(fallback, fallbackElement);
              parent.insertBefore(fallbackElement.firstChild, e.target);
            }
          })
        ),
        
        // Bagian About
        React.createElement(
          "div",
          { className: "footer-section footer-about" },
          React.createElement("h4", null, "Tentang Sekolah"),
          React.createElement("p", null, "SDN Sampangan 01 Semarang adalah lembaga pendidikan dasar yang berdedikasi untuk membentuk karakter dan mengembangkan potensi siswa melalui pendidikan berkualitas."),
          
          // MEDIA SOSIAL KOTAK SEMPURNA
          React.createElement(
            "div",
            {
              className: "social-media-icons",
              style: {
                marginTop: "1rem",
                display: "flex",
                gap: "0.8rem",
                alignItems: "center"
              }
            },
            
            // Facebook - KOTAK SEMPURNA (ANIMASI SCALE DOWN)
            React.createElement(
              "a",
              {
                href: "https://www.facebook.com/people/Esde-Samsatjos/pfbid02WfwvanmFRYeEzFD62szs5fcDybHJ6B7bRdnTqNUbC8emTTZW9vzcBuVxAikNpRk4l/",
                target: "_blank",
                rel: "noopener noreferrer",
                title: "Facebook SDN Sampangan 01",
                className: "social-icon facebook",
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "25px",
                  height: "25px",
                  borderRadius: "0",
                  backgroundColor: "#1877F2",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "0.9rem", // Diperkecil agar sesuai dengan ukuran 25px
                  transition: "all 0.2s ease",
                  transform: "scale(1)" // State awal
                },
                onMouseEnter: (e) => {
                  e.target.style.transform = "scale(0.85)"; // Mengecil 15%
                  e.target.style.opacity = "0.8";
                  e.target.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)";
                },
                onMouseLeave: (e) => {
                  e.target.style.transform = "scale(1)"; // Kembali ke ukuran normal
                  e.target.style.opacity = "1";
                  e.target.style.boxShadow = "none";
                },
                onMouseDown: (e) => {
                  e.target.style.transform = "scale(0.7)"; // Lebih kecil saat diklik
                  e.target.style.backgroundColor = "#0e5dc4"; // Warna lebih gelap
                },
                onMouseUp: (e) => {
                  e.target.style.transform = "scale(0.85)"; // Kembali ke hover state
                  e.target.style.backgroundColor = "#1877F2"; // Kembali ke warna asli
                }
              },
              React.createElement("i", { className: "fab fa-facebook-f" })
            ),
            
            // Instagram - KOTAK SEMPURNA (ANIMASI SCALE DOWN)
            React.createElement(
              "a",
              {
                href: "https://instagram.com/sdnsampangan01",
                target: "_blank",
                rel: "noopener noreferrer",
                title: "Instagram SDN Sampangan 01",
                className: "social-icon instagram",
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "25px",
                  height: "25px",
                  borderRadius: "0",
                  background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "all 0.2s ease",
                  transform: "scale(1)"
                },
                onMouseEnter: (e) => {
                  e.target.style.transform = "scale(0.85)";
                  e.target.style.opacity = "0.8";
                  e.target.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)";
                },
                onMouseLeave: (e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.opacity = "1";
                  e.target.style.boxShadow = "none";
                },
                onMouseDown: (e) => {
                  e.target.style.transform = "scale(0.7)";
                  e.target.style.background = "linear-gradient(45deg, #d0842b 0%, #cc562c 25%, #c22137 50%, #ac1f58 75%, #9c1468 100%)";
                },
                onMouseUp: (e) => {
                  e.target.style.transform = "scale(0.85)";
                  e.target.style.background = "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)";
                }
              },
              React.createElement("i", { className: "fab fa-instagram" })
            ),
            
            // YouTube - KOTAK SEMPURNA (ANIMASI SCALE DOWN)
            React.createElement(
              "a",
              {
                href: "https://www.youtube.com/channel/UCx09XyePbtwy6H1O3oB4uSA",
                target: "_blank",
                rel: "noopener noreferrer",
                title: "YouTube SDN Sampangan 01",
                className: "social-icon youtube",
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "25px",
                  height: "25px",
                  borderRadius: "0",
                  backgroundColor: "#FF0000",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "all 0.2s ease",
                  transform: "scale(1)"
                },
                onMouseEnter: (e) => {
                  e.target.style.transform = "scale(0.85)";
                  e.target.style.opacity = "0.8";
                  e.target.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)";
                },
                onMouseLeave: (e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.opacity = "1";
                  e.target.style.boxShadow = "none";
                },
                onMouseDown: (e) => {
                  e.target.style.transform = "scale(0.7)";
                  e.target.style.backgroundColor = "#cc0000";
                },
                onMouseUp: (e) => {
                  e.target.style.transform = "scale(0.85)";
                  e.target.style.backgroundColor = "#FF0000";
                }
              },
              React.createElement("i", { className: "fab fa-youtube" })
            ),
            
            // WhatsApp - KOTAK SEMPURNA (ANIMASI SCALE DOWN)
            React.createElement(
              "a",
              {
                href: "https://wa.me/6281325763067",
                target: "_blank",
                rel: "noopener noreferrer",
                title: "WhatsApp SDN Sampangan 01",
                className: "social-icon whatsapp",
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "25px",
                  height: "25px",
                  borderRadius: "0",
                  backgroundColor: "#25D366",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  transition: "all 0.2s ease",
                  transform: "scale(1)"
                },
                onMouseEnter: (e) => {
                  e.target.style.transform = "scale(0.85)";
                  e.target.style.opacity = "0.8";
                  e.target.style.boxShadow = "inset 0 2px 4px rgba(0, 0, 0, 0.2)";
                },
                onMouseLeave: (e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.opacity = "1";
                  e.target.style.boxShadow = "none";
                },
                onMouseDown: (e) => {
                  e.target.style.transform = "scale(0.7)";
                  e.target.style.backgroundColor = "#1da851";
                },
                onMouseUp: (e) => {
                  e.target.style.transform = "scale(0.85)";
                  e.target.style.backgroundColor = "#25D366";
                }
              },
              React.createElement("i", { className: "fab fa-whatsapp" })
            )
          )
        ),
        
        // Bagian Address
        React.createElement(
          "div",
          { className: "footer-section footer-address" },
          React.createElement("h4", null, "Alamat & Kontak"),
          React.createElement("p", null,
            React.createElement("span", { className: "icon-placeholder" }, "📍"),
            "Jl. Menoreh Tengah III No.23, Sampangan, Semarang"
          ),
          React.createElement("p", null,
            React.createElement("span", { className: "icon-placeholder" }, "📞"),
            "(024) 8319427"
          ),
          React.createElement("p", null,
            React.createElement("span", { className: "icon-placeholder" }, "✉️"),
            "sdnsampangan01gajahmungkur@gmail.com"
          ),
        ),
        
        // Bagian Info PPDB - VERSI SIMPEL
        React.createElement(
          "div",
          { className: "footer-section" },
          React.createElement("h4", null, "Info PPDB"),
          React.createElement(
            "div",
            { 
              className: "spmb-info-simple",
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "1rem"
              }
            },
            React.createElement(
              "div",
              { 
        className: "ppdb-text"
      },
              React.createElement("p", null, "Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2026/2027 dibuka mulai 1 Agustus 2025. Pendaftaran sewaktu-waktu ditutup apabila kuota yang tersedia telah terpenuhi.")
            ),
            React.createElement(
    "button",
    {
        onClick: () => {
            const event = new CustomEvent('navigateTo', { detail: 'ppdb' });
            window.dispatchEvent(event);
            
            if (window.innerWidth <= 768) {
                window.scrollTo(0, 0);
            }
        },
        className: "ppdb-button",
        style: {
            padding: "0.8rem 1.5rem",
            backgroundColor: "#FF0000", // Warna merah
            color: "white", // Font putih
            border: "none", // Border merah sama
            borderRadius: "50px",
            fontSize: "0.9rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            width: "100%",
             width: window.innerWidth <= 768 ? "50%" : "100%", // <-- PERUBAHAN DI SINI
            outline: "none",
            margin: window.innerWidth <= 768 ? "0 auto" : "0" // <-- Center di mobile
        },
        onMouseEnter: (e) => {
            // Saat hover: background putih, font merah
            e.target.style.backgroundColor = "white";
            e.target.style.color = "#FF0000";
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "none";
        },
        onMouseLeave: (e) => {
            // Kembali ke normal: background merah, font putih
            e.target.style.backgroundColor = "#FF0000";
            e.target.style.color = "white";
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "none";
        },
        onMouseDown: (e) => {
            // Saat diklik: background putih, font merah (lebih gelap)
            e.target.style.backgroundColor = "white";
            e.target.style.color = "#FF0000";
            e.target.style.borderColor = "#FF0000";
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "none";
        },
        onMouseUp: (e) => {
            // Kembali ke hover state
            e.target.style.backgroundColor = "white";
            e.target.style.color = "#FF0000";
            e.target.style.borderColor = "#FF0000";
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = "none";
        }
    },
    "CARI INFO PPDB"
)
          )
        )
      ),
      
      // Footer Bottom
      React.createElement(
        "div",
        { className: "footer-bottom" },
        React.createElement("p", null, `Copyright © ${new Date().getFullYear()} SDN Sampangan 01 Semarang`),
      )
    )
  );
};

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    localStorage.setItem("lastActiveSection", activeSection);
  }, [activeSection]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
  }, [activeSection]);

  useEffect(() => {
    const savedUserType = localStorage.getItem("userType") || "guest";
    setUserType(savedUserType);

    const checkScreenSize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      if (!mobile && sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    const handleNavigateTo = (event) => {
      setActiveSection(event.detail);
    };

    window.addEventListener("navigateTo", handleNavigateTo);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
      window.removeEventListener("navigateTo", handleNavigateTo);
    };
  }, [sidebarOpen]);

  useEffect(() => {
    if (activeSection && contentLoaded) {
      loadContent(activeSection);
    }
  }, [activeSection, contentLoaded]);

  useEffect(() => {
    loadContentScripts();
  }, []);

  useEffect(() => {
    if (!isMobile) {
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

  useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsScrolled(scrollTop > 10);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

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

    if (window.ANBKContent) {
      contentRegistry.anbk = React.createElement(window.ANBKContent);
      console.log("✓ ANBK content registered");
    }

    if (window.BerandaContent) {
      contentRegistry.beranda = React.createElement(window.BerandaContent);
      console.log("✓ Beranda content registered");
    }

    if (window.BeritaContent) {
      contentRegistry.berita = React.createElement(window.BeritaContent);
      console.log("✓ Berita content registered");
    }

    if (window.EkstrakulikulerContent) {
      contentRegistry.ekstrakulikuler = React.createElement(window.EkstrakulikulerContent);
      console.log("✓ Ekstrakulikuler content registered");
    }

    if (window.GaleriContent) {
      contentRegistry.galeri = React.createElement(window.GaleriContent);
      console.log("✓ Galeri content registered");
    }

    if (window.GuruStafContent) {
      contentRegistry.guruStaf = React.createElement(window.GuruStafContent);
      console.log("✓ GuruStaf content registered");
    }

    if (window.HubungiKamiContent) {
      contentRegistry.hubungiKami = React.createElement(window.HubungiKamiContent);
      console.log("✓ HubungiKami content registered");
    }

    if (window.KelasContent) {
      contentRegistry.kelas = React.createElement(window.KelasContent);
      console.log("✓ Kelas content registered");
    }

    if (window.LombaContent) {
      contentRegistry.lomba = React.createElement(window.LombaContent);
      console.log("✓ Lomba content registered");
    }

    if (window.MPLSContent) {
      contentRegistry.mpls = React.createElement(window.MPLSContent);
      console.log("✓ MPLS content registered");
    }

    if (window.PembelajaranContent) {
      contentRegistry.pembelajaran = React.createElement(window.PembelajaranContent);
      console.log("✓ Pembelajaran content registered");
    }

    if (window.PengaduanContent) {
      contentRegistry.pengaduan = React.createElement(window.PengaduanContent);
      console.log("✓ Pengaduan content registered");
    }

    if (window.PPDBContent) {
      contentRegistry.ppdb = React.createElement(window.PPDBContent);
      console.log("✓ PPDB content registered");
    }

    if (window.PrestasiContent) {
      contentRegistry.prestasi = React.createElement(window.PrestasiContent);
      console.log("✓ Prestasi content registered");
    }

    if (window.SaranaPrasanaContent) {
      contentRegistry.saranaPrasana = React.createElement(window.SaranaPrasanaContent);
      console.log("✓ SaranaPrasana content registered");
    }

    if (window.VisiMisiContent) {
      contentRegistry.visiMisi = React.createElement(window.VisiMisiContent);
      console.log("✓ VisiMisi content registered");
    }

    console.log("Registrasi selesai. Keys yang tersedia:", Object.keys(contentRegistry));
    loadContent(activeSection);
  };

  const loadContent = (section) => {
    console.log("Loading content for:", section);

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

    if (contentRegistry[registryKey]) {
      console.log("✓ Konten ditemukan di registry");
      setCurrentContent(contentRegistry[registryKey]);
      return;
    }

    console.log("✗ Konten tidak ditemukan, menggunakan default");
    setCurrentContent(React.createElement(contentRegistry.default, { section }));
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

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);
    if (isMobile) {
      closeSidebar();
    }
  };

  const menuItems = [
    { id: "beranda", label: "BERANDA" },
    { id: "profil", label: "PROFIL", hasSubmenu: true, submenuType: "profile" },
    { id: "akademik", label: "AKADEMIK", hasSubmenu: true, submenuType: "akademik" },
    { id: "kegiatan", label: "KEGIATAN", hasSubmenu: true, submenuType: "kegiatan" },
    { id: "galeri", label: "GALERI" },
    { id: "informasi", label: "INFORMASI", hasSubmenu: true, submenuType: "informasi" },
    { id: "kontak", label: "KONTAK", hasSubmenu: true, submenuType: "kontak" },
    { id: "account", label: "ACCOUNT", hasSubmenu: true, submenuType: "account" },
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

  const renderMenuItem = (item) => {
    const isActive = activeSection === item.id;
    const hasSubmenuOpen = item.hasSubmenu && isSubmenuOpen(item.submenuType);

    return React.createElement(
      "div",
      { key: item.id, className: "menu-item-wrapper" },
      React.createElement(
        "li",
        {
          className: `nav-item ${isActive ? "active" : ""} ${hasSubmenuOpen ? "submenu-open" : ""}`,
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
                className: `nav-item submenu-item ${isSubItemActive ? "active" : ""} ${subItem.id === "keluar" ? "danger-item" : ""}`,
                onClick: () => handleSubmenuClick(item.submenuType, subItem.id),
              },
              subItem.label
            );
          })
        )
    );
  };

  const handleLogoError = () => {
    console.error("Gambar logo tidak dapat dimuat");
    setLogoError(true);
  };

  const SchoolLogo = () => {
    if (logoError) {
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
    { className: "dashboard-with-footer" },
    
    /* DESKTOP SIDEBAR */
    !isMobile &&
      React.createElement(
        "aside",
        { className: "sidebar" },
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

    /* MOBILE SIDEBAR */
    isMobile &&
      React.createElement(
        "aside",
        { className: `mobile-sidebar ${sidebarOpen ? "open" : ""}` },
        React.createElement(
          "div",
          { className: "mobile-sidebar-header" },
          React.createElement(SchoolLogo),
          React.createElement(
            "button",
            {
              className: "close-sidebar",
              onClick: closeSidebar,
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

    /* WRAPPER UNTUK KONTEN + FOOTER */
    React.createElement(
      "div",
      { className: "main-content-wrapper" },
      /* MAIN CONTENT */
      React.createElement(
        "main",
        { className: "main-content" },
        isMobile &&
  React.createElement(
    "div",
    { 
      className: "mobile-header",
      style: {
        backgroundColor: isScrolled ? "white" : "transparent",
        boxShadow: isScrolled ? "0 2px 5px rgba(0,0,0,0.1)" : "none"
      }
    },
    React.createElement(
      "button",
      {
        className: "menu-toggle",
        onClick: toggleSidebar,
        style: {
          fontSize: "24px",
          color: "white", // Selalu putih
          cursor: "pointer",
          height: "40px",
          width: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          lineHeight: "1",
          userSelect: "none",
          WebkitTapHighlightColor: "transparent",
          backgroundColor: "#2a5298",
          borderRadius: "4px",
          transition: "all 0.3s ease",
          margin: "8px 8px 8px 25px",
          border: "none",
          padding: "0",
          fontWeight: "bold"
        }
      },
      "☰"
    ),
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
      ),
      
      /* FOOTER - DITEMPATKAN DI LUAR UNTUK LEBAR PENUH */
      React.createElement(Footer)
    )
  );
};

// Tambahkan di ATAS window.contentRegistry
const WhatsAppFloatingButton = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return React.createElement(
    "button",
    {
      title: "Hubungi WhatsApp",
      style: {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#25D366",
        color: "white",
        border: "none",
        borderRadius: isMobile ? "50%" : "50px",
        cursor: "pointer",
        zIndex: "10000",
        boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: isMobile ? "0" : "10px",
        padding: isMobile ? "0" : "0 25px 0 20px",
        height: isMobile ? "56px" : "60px",
        width: isMobile ? "56px" : "auto",
        transition: "all 0.3s ease",
        transform: "scale(1)",
        whiteSpace: "nowrap",
        minWidth: isMobile ? "56px" : "60px",
        overflow: "hidden"
      },
      onMouseEnter: (e) => {
        if (!isMobile) {
          e.target.style.transform = "scale(1.05)";
          e.target.style.boxShadow = "0 6px 20px rgba(37, 211, 102, 0.6)";
          e.target.style.background = "#128C7E";
        }
      },
      onMouseLeave: (e) => {
        if (!isMobile) {
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 4px 12px rgba(37, 211, 102, 0.4)";
          e.target.style.background = "#25D366";
        }
      },
      onMouseDown: (e) => {
        e.target.style.transform = "scale(0.95)";
      },
      onMouseUp: (e) => {
        e.target.style.transform = isMobile ? "scale(1)" : "scale(1.05)";
      },
      onClick: () => {
        const phoneNumber = "6281325763067";
        const message = "";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
      }
    },
    // Icon WhatsApp dari Font Awesome
    React.createElement(
      "i",
      {
        className: "fab fa-whatsapp",
        style: {
          fontSize: isMobile ? "1.6rem" : "1.8rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%"
        }
      }
    ),
    // Text "Kirim Pesan" - hanya tampil di desktop
    !isMobile && React.createElement(
      "span",
      {
        className: "whatsapp-text",
        style: {
          fontSize: "1rem",
          fontWeight: "600",
          letterSpacing: "0.3px"
        }
      },
      "Kirim Pesan"
    )
  );
};

window.contentRegistry = contentRegistry;

ReactDOM.render(
  React.createElement(
    "div",
    null,
    React.createElement(Dashboard),
    React.createElement(WhatsAppFloatingButton)
  ),
  document.getElementById("root")
);

window.contentRegistry = contentRegistry;

ReactDOM.render(
  React.createElement(DashboardWithWhatsApp),
  document.getElementById("root")
);
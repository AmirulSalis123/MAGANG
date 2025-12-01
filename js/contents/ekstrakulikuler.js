// ekstrakulikuler.js - KOMPONEN EKSTRAKULIKULER SDN SAMPANGAN 01 (SEDERHANA)
const EkstrakulikulerContent = () => {
  const { useEffect, useState } = React;

  // State untuk responsive design
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeFilter, setActiveFilter] = useState("semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedActivity, setSelectedActivity] = useState(null);

  // Effect untuk mendeteksi perubahan ukuran layar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Data Ekstrakurikuler SDN Sampangan 01
  const extracurricularData = {
    categories: [
      { id: "semua", name: "Semua", icon: "fas fa-star", count: 0 },
      { id: "olahraga", name: "Olahraga", icon: "fas fa-running", count: 4 },
      { id: "seni", name: "Seni & Budaya", icon: "fas fa-palette", count: 3 },
      { id: "keterampilan", name: "keterampilan", icon: "fas fa-book", count: 2 },
      {
        id: "keterampilan",
        name: "Keterampilan",
        icon: "fas fa-hands",
        count: 2,
      },
    ],

    activities: [
      // Olahraga
      {
        id: 1,
        name: "Sepak Bola",
        category: "olahraga",
        image: "imgs/ekstra_bola.jpg",
      },
      {
        id: 2,
        name: "Bulu Tangkis",
        category: "olahraga",
        image: "imgs/ekstra_bultang.jpg",
      },
      {
        id: 3,
        name: "Pencak Silat",
        category: "olahraga",
        image: "imgs/ekstra_silat.jpg",
      },
      // Seni
      {
        id: 4,
        name: "Musik",
        category: "seni",
        image: "imgs/ekstra_musik.jpg",
      },
      {
        id: 5,
        name: "Tari Tradisional",
        category: "seni",
        image: "imgs/ekstra_tari.jpeg",
      },
      // Keterampilan
      {
        id: 6,
        name: "Melukis",
        category: "keterampilan",
        image: "imgs/ekstra_melukis.png",
      },
    ],
  };

  // Hitung total activities untuk setiap kategori
  extracurricularData.categories.forEach((category) => {
    if (category.id === "semua") {
      category.count = extracurricularData.activities.length;
    } else {
      category.count = extracurricularData.activities.filter(
        (activity) => activity.category === category.id
      ).length;
    }
  });

  // Filter activities berdasarkan kategori dan pencarian
  const filteredActivities = extracurricularData.activities.filter(
    (activity) => {
      const matchesCategory =
        activeFilter === "semua" || activity.category === activeFilter;
      const matchesSearch =
        activity.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }
  );

  // Komponen Activity Card (SEDERHANA)
  const ActivityCard = ({ activity }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return React.createElement(
      "div",
      {
        className: "activity-card",
        style: {
          background: "white",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
        onMouseEnter: (e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.15)";
          }
        },
        onMouseLeave: (e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
          }
        },
        onClick: () => setSelectedActivity(activity),
      },
      // Activity Image (tidak bisa diklik)
      React.createElement(
        "div",
        {
          style: {
            position: "relative",
            height: "200px",
            overflow: "hidden",
            background: "#f8f9fa",
            cursor: "default",
          },
          onClick: (e) => {
            e.stopPropagation();
          }
        },
        !imageLoaded &&
          !imageError &&
          React.createElement(
            "div",
            {
              style: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#6c757d",
              },
            },
            React.createElement("i", { className: "fas fa-image fa-2x" })
          ),

        imageError
          ? React.createElement(
              "div",
              {
                style: {
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#e9ecef",
                  color: "#6c757d",
                },
              },
              React.createElement(
                "div",
                {
                  style: {
                    textAlign: "center",
                  },
                },
                React.createElement("i", {
                  className: "fas fa-running fa-3x",
                  style: { marginBottom: "10px" },
                }),
                React.createElement(
                  "p",
                  { style: { margin: 0, fontSize: "0.9rem" } },
                  "Gambar tidak tersedia"
                )
              )
            )
          : React.createElement("img", {
              src: activity.image,
              alt: activity.name,
              style: {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: imageLoaded ? "block" : "none",
                cursor: "default",
              },
              onLoad: () => setImageLoaded(true),
              onError: () => setImageError(true),
              onClick: (e) => e.stopPropagation(),
            })
      ),

      // Activity Content (HANYA JUDUL)
      React.createElement(
        "div",
        {
          style: {
            padding: isMobile ? "20px" : "25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "80px",
          },
        },
        // HANYA Nama Ekstrakurikuler (rata tengah)
        React.createElement(
          "h3",
          {
            style: {
              fontSize: isMobile ? "1.1rem" : "1.3rem",
              fontWeight: "700",
              color: "#1e3c72",
              margin: "0",
              lineHeight: "1.3",
              textAlign: "center",
            },
          },
          activity.name
        )
      )
    );
  };

  // Komponen ActivityDetailModal (SEDERHANA)
  const ActivityDetailModal = ({ activity, onClose }) => {
    return React.createElement(
      "div",
      {
        style: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
          padding: "20px",
        },
        onClick: onClose,
      },
      React.createElement(
        "div",
        {
          style: {
            background: "white",
            borderRadius: "12px",
            padding: "30px",
            maxWidth: "400px",
            width: "100%",
            maxHeight: "90vh",
            overflow: "auto",
            position: "relative",
            textAlign: "center",
          },
          onClick: (e) => e.stopPropagation(),
        },
        React.createElement(
          "h2",
          {
            style: {
              color: "#1e3c72",
              marginBottom: "20px",
            },
          },
          activity.name
        ),
        
        // Tombol tutup
        React.createElement(
          "button",
          {
            onClick: onClose,
            style: {
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "8px",
              fontSize: "0.9rem",
              fontWeight: "600",
              cursor: "pointer",
              width: "100%",
              transition: "all 0.3s ease",
            },
            onMouseEnter: (e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
            },
            onMouseLeave: (e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            },
          },
          "Tutup"
        )
      )
    );
  };

  return React.createElement(
    "div",
    {
      className: "ekstrakulikuler-content",
      style: {
        padding: isMobile ? "15px" : "30px",
        maxWidth: "1200px",
        margin: "0 auto",
      },
    },
    // Header Section
    React.createElement(
      "div",
      {
        style: {
          textAlign: "center",
          marginBottom: isMobile ? "30px" : "50px",
          padding: isMobile ? "25px 20px" : "40px",
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          borderRadius: "12px",
          color: "white",
          position: "relative",
          overflow: "hidden",
        },
      },
      React.createElement("div", {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
                        radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)
                    `,
          pointerEvents: "none",
        },
      }),

      React.createElement(
        "h1",
        {
          style: {
            fontSize: isMobile ? "1.8rem" : "2.5rem",
            fontWeight: "800",
            margin: "0 0 15px 0",
            color: "white",
            position: "relative",
            zIndex: 2,
          },
        },
        "Ekstrakurikuler"
      ),

      React.createElement(
        "p",
        {
          style: {
            fontSize: isMobile ? "1rem" : "1.2rem",
            opacity: "0.9",
            margin: "0",
            fontWeight: "300",
            position: "relative",
            zIndex: 2,
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.5",
          },
        },
        "Pilih dan daftar ekstrakurikuler sesuai minat dan bakat Anda"
      )
    ),

    // Activities Grid
    React.createElement(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(300px, 1fr))",
          gap: isMobile ? "20px" : "30px",
        },
      },
      filteredActivities.length > 0
        ? filteredActivities.map((activity) =>
            React.createElement(ActivityCard, {
              key: activity.id,
              activity: activity,
            })
          )
        : // Empty State
          React.createElement(
            "div",
            {
              style: {
                gridColumn: "1 / -1",
                textAlign: "center",
                padding: "60px 20px",
                background: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              },
            },
            React.createElement("i", {
              className: "fas fa-search fa-3x",
              style: {
                color: "#e9ecef",
                marginBottom: "20px",
              },
            }),
            React.createElement(
              "h3",
              {
                style: {
                  fontSize: "1.3rem",
                  color: "#6c757d",
                  margin: "0 0 10px 0",
                },
              },
              "Kegiatan tidak ditemukan"
            ),
            React.createElement(
              "p",
              {
                style: {
                  color: "#999",
                  margin: 0,
                },
              },
              "Coba ubah kata kunci pencarian atau pilih kategori lain"
            )
          )
    ),

    // Modal Detail Aktivitas
    selectedActivity &&
      React.createElement(ActivityDetailModal, {
        activity: selectedActivity,
        onClose: () => setSelectedActivity(null),
      })
  );
};

// Register ke window object agar bisa diakses oleh dashboard
window.EkstrakulikulerContent = EkstrakulikulerContent;
console.log("EkstrakulikulerContent loaded and registered to window");
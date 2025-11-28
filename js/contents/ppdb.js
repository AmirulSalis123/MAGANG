const PPDBContent = () => {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [activePhase, setActivePhase] = React.useState(0);

  // External links
  const externalLinks = {
    ppdbPortal: "https://ppd.semarangkota.go.id/",
    guidePdf:
      "https://drive.google.com/file/d/1yKwQlzIr2ZRI_yR01i4pa6COIR9FgsiQ/view",
    tutorialVideo: "https://www.youtube.com/watch?v=tS8WyoBwyA8",
  };

  const ppdbSchedule = [
    {
      phase: "Gelombang 1",
      period: "1 - 15 Juni 2025",
      activities: [
        "Pendaftaran online",
        "Verifikasi dokumen",
        "Pengumuman hasil",
      ],
      quota: "40 siswa",
      status: "Akan Datang",
      icon: "🎯",
      color: "#4f46e5",
    },
    {
      phase: "Gelombang 2",
      period: "16 - 30 Juni 2025",
      activities: [
        "Pendaftaran online",
        "Verifikasi dokumen",
        "Pengumuman hasil",
      ],
      quota: "30 siswa",
      status: "Akan Datang",
      icon: "⚡",
      color: "#059669",
    },
    {
      phase: "Gelombang 3",
      period: "1 - 10 Juli 2025",
      activities: [
        "Pendaftaran online (sisa kuota)",
        "Verifikasi dokumen",
        "Pengumuman hasil",
      ],
      quota: "20 siswa",
      status: "Akan Datang",
      icon: "🔥",
      color: "#dc2626",
    },
  ];

  const requirements = [
    {
      category: "📄 Dokumen Wajib",
      items: [
        "Fotokopi akta kelahiran",
        "Fotokopi kartu keluarga",
        "Pas foto 3x4 (2 lembar)",
        "Surat keterangan sehat dari dokter",
        "Fotokopi ijazah TK/PAUD",
      ],
      icon: "📋",
    },
    {
      category: "📝 Persyaratan Umum",
      items: [
        "Usia minimal 6 tahun per 1 Juli 2025",
        "Berdomisili di wilayah sekitar sekolah",
        "Mengisi formulir pendaftaran",
        "Membayar biaya pendaftaran (jika ada)",
        "Mengikuti tes kemampuan dasar",
      ],
      icon: "✅",
    },
  ];

  const registrationSteps = [
    {
      step: 1,
      title: "Pendaftaran Online",
      description:
        "Isi formulir pendaftaran melalui website PPDB Kota Semarang",
      icon: "💻",
      color: "#3b82f6",
      link: externalLinks.ppdbPortal,
    },
    {
      step: 2,
      title: "Verifikasi Dokumen",
      description:
        "Verifikasi kelengkapan dan keaslian dokumen yang diserahkan",
      icon: "📋",
      color: "#8b5cf6",
    },
    {
      step: 3,
      title: "Tes Kemampuan Dasar",
      description: "Tes membaca, menulis, dan berhitung untuk calon siswa",
      icon: "✏️",
      color: "#f59e0b",
    },
    {
      step: 4,
      title: "Pengumuman Hasil",
      description:
        "Pengumuman siswa yang diterima melalui website dan papan pengumuman",
      icon: "📢",
      color: "#10b981",
    },
    {
      step: 5,
      title: "Daftar Ulang",
      description:
        "Pembayaran dan pengisian berkas lengkap untuk siswa yang diterima",
      icon: "✅",
      color: "#ef4444",
    },
  ];

  const stats = [
    { number: "50", label: "Kuota Siswa", icon: "👨‍🎓" },
    { number: "3", label: "Gelombang", icon: "🔄" },
    { number: "2", label: "Kelas", icon: "🏫" },
    { number: "20", label: "Guru Berpengalaman", icon: "👩‍🏫" },
  ];

  const resourceLinks = [
    {
      title: "Panduan Pendaftaran",
      description: "Download buku panduan lengkap proses pendaftaran PPDB",
      icon: "📖",
      link: externalLinks.guidePdf,
      buttonText: "Download PDF",
      color: "#10b981",
    },
    {
      title: "Tutorial Video",
      description: "Tonton video tutorial cara melakukan pendaftaran online",
      icon: "🎬",
      link: externalLinks.tutorialVideo,
      buttonText: "Tonton Video",
      color: "#ef4444",
    },
  ];

  // Function to handle external link clicks
  const handleExternalLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Function to scroll to steps section
  const scrollToSteps = () => {
    document.querySelector(".steps-section").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return React.createElement(
    "div",
    { className: "ppdb-container" },
    // Hero Section
    React.createElement(
      "div",
      { className: "ppdb-hero" },
      React.createElement(
        "div",
        { className: "hero-background" },
        React.createElement("div", { className: "hero-overlay" })
      ),
      React.createElement(
        "div",
        { className: "hero-content" },
        React.createElement(
          "div",
          { className: "hero-text" },
          React.createElement("div", { className: "badge" }, "PPDB 2025/2026"),
          React.createElement(
            "h1",
            null,
            "Selamat Datang Calon Siswa Baru ",
            React.createElement(
              "span",
              { className: "highlight" },
              "SDN Sampangan 01"
            )
          ),
          React.createElement(
            "p",
            null,
            "Membuka pendaftaran siswa baru untuk tahun ajaran 2025/2026. " +
              "Dengan sistem yang transparan dan berkeadilan, kami siap menerima " +
              "putra-putri terbaik bangsa."
          ),
          React.createElement(
            "div",
            { className: "hero-actions" },
            React.createElement(
              "button",
              {
                className: "btn-primary",
                onClick: scrollToSteps,
              },
              React.createElement("span", { className: "btn-icon" }, "📝"),
              "Daftar Sekarang"
            ),
            React.createElement(
              "button",
              {
                className: "btn-secondaryy",
                onClick: () =>
                  document
                    .querySelector(".resources-section")
                    .scrollIntoView({ behavior: "smooth" }),
              },
              React.createElement("span", { className: "btn-icon" }, "📋"),
              "Lihat Panduan"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "hero-stats" },
          stats.map((stat, index) =>
            React.createElement(
              "div",
              {
                key: index,
                className: "stat-card",
              },
              React.createElement("div", { className: "stat-icon" }, stat.icon),
              React.createElement(
                "div",
                { className: "stat-content" },
                React.createElement(
                  "div",
                  { className: "stat-numberr" },
                  stat.number
                ),
                React.createElement(
                  "div",
                  { className: "stat-labell" },
                  stat.label
                )
              )
            )
          )
        )
      )
    ),

    // Resources Section
    React.createElement(
      "section",
      { className: "section resources-section" },
      React.createElement(
        "div",
        { className: "section-header" },
        React.createElement("div", { className: "section-icon" }, "🔗"),
        React.createElement("h2", null, "Link & Sumber Daya")
      ),
      React.createElement(
        "div",
        { className: "resources-grid" },
        resourceLinks.map((resource, index) =>
          React.createElement(
            "div",
            {
              key: index,
              className: "resource-card",
              style: { "--card-color": resource.color },
            },
            React.createElement(
              "div",
              { className: "resource-header" },
              React.createElement(
                "div",
                { className: "resource-icon" },
                resource.icon
              ),
              React.createElement("h3", null, resource.title)
            ),
            React.createElement(
              "p",
              { className: "resource-description" },
              resource.description
            ),
            React.createElement(
              "button",
              {
                className: "resource-btn",
                onClick: () => handleExternalLink(resource.link),
              },
              React.createElement(
                "span",
                { className: "btn-icon" },
                getButtonIcon(resource.title)
              ),
              resource.buttonText
            )
          )
        )
      )
    ),

    // Schedule Section
    React.createElement(
      "section",
      { className: "section schedule-section" },
      React.createElement(
        "div",
        { className: "section-header" },
        React.createElement("div", { className: "section-icon" }, "📅"),
        React.createElement("h2", null, "Jadwal PPDB 2025")
      ),
      React.createElement(
        "div",
        { className: "schedule-tabs" },
        ppdbSchedule.map((phase, index) =>
          React.createElement(
            "button",
            {
              key: index,
              className: `tab-btn ${activePhase === index ? "active" : ""}`,
              onClick: () => setActivePhase(index),
              style: { "--accent-color": phase.color },
            },
            React.createElement("span", { className: "tab-icon" }, phase.icon),
            React.createElement("span", { className: "tab-text" }, phase.phase)
          )
        )
      ),
      React.createElement(
        "div",
        { className: "schedule-content" },
        React.createElement(
          "div",
          {
            className: "phase-card",
            style: { "--accent-color": ppdbSchedule[activePhase].color },
          },
          React.createElement(
            "div",
            { className: "phase-header" },
            React.createElement(
              "div",
              { className: "phase-info" },
              React.createElement("h3", null, ppdbSchedule[activePhase].phase),
              React.createElement(
                "p",
                { className: "phase-period" },
                ppdbSchedule[activePhase].period
              )
            ),
            React.createElement(
              "div",
              { className: "phase-badges" },
              React.createElement(
                "div",
                { className: "quota-badge" },
                ppdbSchedule[activePhase].quota
              ),
              React.createElement(
                "div",
                { className: "status-badge" },
                ppdbSchedule[activePhase].status
              )
            )
          ),
          React.createElement(
            "div",
            { className: "phase-activities" },
            React.createElement("h4", null, "Aktivitas:"),
            React.createElement(
              "ul",
              { className: "activities-list" },
              ppdbSchedule[activePhase].activities.map((activity, actIndex) =>
                React.createElement(
                  "li",
                  { key: actIndex },
                  React.createElement(
                    "span",
                    { className: "activity-icon" },
                    "✓"
                  ),
                  activity
                )
              )
            )
          )
        )
      )
    ),

    // Requirements Section
    React.createElement(
      "section",
      { className: "section requirements-section" },
      React.createElement(
        "div",
        { className: "section-header" },
        React.createElement("div", { className: "section-icon" }, "📋"),
        React.createElement("h2", null, "Persyaratan Pendaftaran")
      ),
      React.createElement(
        "div",
        { className: "requirements-grid" },
        requirements.map((req, index) =>
          React.createElement(
            "div",
            {
              key: index,
              className: "requirement-card",
            },
            React.createElement(
              "div",
              { className: "req-header" },
              React.createElement("div", { className: "req-icon" }, req.icon),
              React.createElement("h3", null, req.category)
            ),
            React.createElement(
              "ul",
              { className: "req-list" },
              req.items.map((item, itemIndex) =>
                React.createElement(
                  "li",
                  { key: itemIndex },
                  React.createElement("span", { className: "check-icon" }, "✓"),
                  item
                )
              )
            )
          )
        )
      )
    ),

    // Steps Section
    React.createElement(
      "section",
      { className: "section steps-section" },
      React.createElement(
        "div",
        { className: "section-header" },
        React.createElement("div", { className: "section-icon" }, "🚀"),
        React.createElement("h2", null, "Tahapan Pendaftaran"),
        React.createElement(
          "p",
          null,
          "Ikuti langkah-langkah berikut untuk memulai proses pendaftaran"
        )
      ),
      React.createElement(
        "div",
        { className: "steps-container" },
        React.createElement(
          "div",
          { className: "steps-progress" },
          React.createElement("div", {
            className: "progress-bar",
            style: {
              width: `${
                ((currentStep - 1) / (registrationSteps.length - 1)) * 100
              }%`,
            },
          })
        ),
        React.createElement(
          "div",
          { className: "steps-content" },
          registrationSteps.map((step, index) =>
            React.createElement(
              "div",
              {
                key: index,
                className: `step-item ${
                  currentStep === step.step ? "active" : ""
                } ${currentStep > step.step ? "completed" : ""}`,
                onClick: () =>
                  step.link
                    ? handleExternalLink(step.link)
                    : setCurrentStep(step.step),
              },
              React.createElement(
                "div",
                {
                  className: "step-indicator",
                  style: { "--step-color": step.color },
                },
                React.createElement(
                  "div",
                  { className: "step-number" },
                  step.step
                ),
                React.createElement(
                  "div",
                  { className: "step-icon" },
                  step.icon
                )
              ),
              React.createElement(
                "div",
                { className: "step-info" },
                React.createElement("h3", null, step.title),
                React.createElement("p", null, step.description),
                step.link &&
                  React.createElement(
                    "div",
                    { className: "step-link" },
                    "Klik untuk mengakses portal pendaftaran"
                  )
              ),
              step.link &&
                React.createElement("div", { className: "step-arrow" }, "→")
            )
          )
        )
      ),
      React.createElement(
        "div",
        { className: "steps-navigation" },
        React.createElement(
          "button",
          {
            className: "nav-btn prev-btn",
            disabled: currentStep === 1,
            onClick: () => setCurrentStep((prev) => prev - 1),
          },
          React.createElement("span", { className: "btn-icon" }, "←"),
          "Sebelumnya"
        ),
        React.createElement(
          "button",
          {
            className: "nav-btn next-btn",
            disabled: currentStep === 5,
            onClick: () => setCurrentStep((prev) => prev + 1),
          },
          "Selanjutnya",
          React.createElement("span", { className: "btn-icon" }, "→")
        )
      )
    ),

    // CTA Section
    React.createElement(
      "section",
      { className: "cta-section" },
      React.createElement(
        "div",
        { className: "cta-content" },
        React.createElement(
          "h2",
          null,
          "Siap Bergabung dengan SDN Sampangan 01?"
        ),
        React.createElement(
          "p",
          null,
          "Jangan lewatkan kesempatan untuk menjadi bagian dari keluarga besar SDN Sampangan 01. " +
            "Daftar sekarang dan raih masa depan yang cerah!"
        ),
        React.createElement(
          "div",
          { className: "cta-actions" },
          React.createElement(
            "button",
            {
              className: "cta-btn primary",
              onClick: () => handleExternalLink(externalLinks.ppdbPortal),
            },
            React.createElement("span", { className: "btn-icon" }, "🎓"),
            "Mulai Pendaftaran Online"
          ),
          React.createElement(
            "button",
            {
              className: "cta-btn secondary",
              onClick: () => handleExternalLink(externalLinks.guidePdf),
            },
            React.createElement("span", { className: "btn-icon" }, "📖"),
            "Download Panduan"
          )
        )
      )
    )
  );

  // Helper function to get button icons
  function getButtonIcon(title) {
    switch (title) {
      case "Portal PPDB Semarang":
        return "🌐";
      case "Panduan Pendaftaran":
        return "📥";
      case "Tutorial Video":
        return "▶️";
      default:
        return "🔗";
    }
  }
};

// Register ke window object
window.PPDBContent = PPDBContent;
console.log("PPDBContent loaded and registered to window");

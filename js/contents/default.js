const { useState } = React;

const DefaultContent = ({ section }) => {
    const [count, setCount] = useState(0);
    
    const sectionTitles = {
        'visi-misi': 'Visi & Misi SDN Sampangan 01',
        'sarana-prasana': 'Sarana dan Prasarana',
        'anbk': 'Asesmen Nasional Berbasis Komputer (ANBK)',
    };

    const title = sectionTitles[section] || `Halaman ${section}`;

    return React.createElement('div', { className: 'default-content' },
        React.createElement('h1', null, title),
        React.createElement('p', null, `Halaman ${section} sedang dalam pengembangan.`),
        React.createElement('div', { 
            style: { 
                background: '#f5f5f5', 
                padding: '20px', 
                borderRadius: '10px',
                margin: '20px 0',
                textAlign: 'center'
            } 
        },
            React.createElement('p', null, 'Fitur ini akan segera tersedia!'),
            React.createElement('button', {
                onClick: () => setCount(count + 1),
                style: {
                    background: '#2c6e49',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginTop: '10px'
                }
            }, `Klik saya! ${count}`)
        ),
        React.createElement('p', { 
            style: { 
                fontSize: '0.9rem', 
                color: '#666',
                textAlign: 'center'
            } 
        }, 'Terima kasih atas pengertiannya.')
    );
};

// Export komponen Default
window.DefaultContent = DefaultContent;
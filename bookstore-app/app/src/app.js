// Home Page - Travel Website UI
app.get('/', (req, res) => {
  const html = `
    <html><head><title>✈️ यात्रा अन्वेषक</title><style>
      body{font-family:Arial;margin:0;background:linear-gradient(to bottom,#3a7bd5,#3a6073);color:#fff}
      .header{background:#2ee8cc;color:white;text-align:center;padding:40px 20px}
      .header h1{margin:0;font-size:40px;color:#ff6b35}
      .header p{margin:10px 0 0;font-size:18px}
      .packages{display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:20px;padding:30px}
      .package{background:white;border-radius:12px;overflow:hidden;box-shadow:0 4px 10px rgba(0,0,0,0.1);transition:transform .2s}
      .package:hover{transform:translateY(-5px)}
      .package img{width:100%;height:200px;object-fit:cover}
      .info{padding:15px}
      .info h3{margin:0;font-size:22px}
      .info p{font-size:14px;color:#666}
      .price{color:#e74c3c;font-weight:bold;font-size:20px;margin-top:10px}
      .category{background:#ff7f50;color:white;padding:5px 10px;border-radius:20px;font-size:12px;display:inline-block;margin-top:8px}
    </style></head><body>
      <div class="header">
        <h1>✈️ यात्रा अन्वेषक</h1>
        <p>आपके सपनों की मंज़िलें, प्यार के साथ चुनी गई ❤️</p>
      </div>
      <div class="packages">
        ${travelPackages.map(p => `
          <div class="package">
            <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/300x200?text=Travel'">
            <div class="info">
              <h3>${p.name}</h3>
              <p>${p.description}</p>
              <div class="price">\$${p.price}</div>
              <span class="category">${p.category}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </body></html>
  `;
  res.send(html);
});

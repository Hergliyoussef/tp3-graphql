const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('✅ Serveur Express fonctionne.');
});

app.listen(5000, () => {
  console.log('🚀 Serveur lancé sur http://localhost:5000');
});

// =====================================================================
//  TEAM-BEREICH der Website – nur vom Team bearbeiten
//  Namen und Rollen zwischen den Anführungszeichen ändern,
//  Fotos in den Ordner "bilder" hochladen (team1.jpg … team6.jpg, betreuung.jpg).
//  Fehlt ein Foto, erscheinen automatisch die Initialen.
// =====================================================================
var TEAM = [
  { name: 'Benjamin', rolle: 'Software, Webdesign', foto: 'bilder/team1.jpg' },
  { name: 'Constantin', rolle: 'Software', foto: 'bilder/team2.jpg' },
  { name: 'Kaspar', rolle: 'Hardware', foto: 'bilder/team3.jpg' },
  { name: 'Lukas', rolle: 'Hardware', foto: 'bilder/team4.jpg' },
  { name: 'Mateo', rolle: 'Sponsorensuche', foto: 'bilder/team5.jpg' },
  { name: 'Olin', rolle: 'Bericht, Hardware', foto: 'bilder/team6.jpg' }
];
var BETREUUNG = [
  { name: 'Dominik Wind', rolle: 'Betreuung und Tutor', foto: 'bilder/betreuung.jpg' }
];
// ======================= ENDE DES BEREICHS ===========================

(function () {
  function esc(t) { var e = document.createElement('span'); e.textContent = t || ''; return e.innerHTML; }
  function initialen(n) {
    return (n || '').split(/\s+/).filter(Boolean).slice(0, 2)
      .map(function (w) { return w[0]; }).join('').toUpperCase();
  }
  function personen(ziel, liste, label) {
    var box = document.getElementById(ziel);
    if (!box) return;
    liste.forEach(function (p) {
      var d = document.createElement('div');
      d.className = 'person';
      d.innerHTML = '<div class="avatar">' + esc(initialen(p.name)) + '</div><p class="label">' + label +
        '</p><h3>' + esc(p.name) + '</h3><p>' + esc(p.rolle) + '</p>';
      if (p.foto) {
        var img = new Image();
        img.alt = 'Foto: ' + (p.name || '');
        img.onload = function () { var a = d.querySelector('.avatar'); a.textContent = ''; a.appendChild(img); a.classList.add('foto'); };
        img.src = p.foto;
      }
      box.appendChild(d);
    });
  }
  personen('team', TEAM, 'Teammitglied');
  personen('betreuung', BETREUUNG, 'Betreuung');
})();

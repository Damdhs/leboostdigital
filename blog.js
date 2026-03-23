/**
 * LE BOOST DIGITAL — BLOG & ACTUALITES
 * Pour ajouter un article, copiez un bloc et modifiez-le !
 *
 * CATEGORIES : indigo, cyan, purple, green, pink, orange
 */

var BLOG_ARTICLES = [

  {
    id: 1,
    emoji: "Robot",
    categorie: "Automatisation IA",
    couleur: "indigo",
    titre: "Comment un restaurant a economise 3h par jour grace aux agents IA",
    extrait: "Confirmations de reservation, rappels clients, demandes d'avis Google... Un restaurateur a tout automatise en une semaine. Resultat : plus de temps, plus d'avis positifs, zero oubli.",
    date: "Mars 2025",
    lecture: "5 min",
    image: "blog/blog-resto-og.jpg",
    lien: "blog/automatisation-restaurant.html",
    publie: true
  },

  {
    id: 2,
    emoji: "Marteau",
    categorie: "Artisans & Terrain",
    couleur: "orange",
    titre: "Artisans : chaque appel manque est un chantier perdu",
    extrait: "Vous etes sur chantier, votre telephone sonne, vous ne repondez pas. Ce client ne rappellera pas. Decouvrez comment stopper cette fuite de clients silencieuse.",
    date: "23 mars 2025",
    lecture: "4 min",
    image: "blog/blog-artisan-og.jpg",
    lien: "blog/artisans-appels-manques.html",
    publie: true
  },

  {
    id: 3,
    emoji: "Ecran",
    categorie: "Site Web",
    couleur: "cyan",
    titre: "Pourquoi votre site web ne vous ramene aucun client",
    extrait: "Un site web invisible sur Google, c'est comme une vitrine dans une ruelle sans passants. Les 3 erreurs les plus courantes et comment les corriger.",
    date: "Fevrier 2025",
    lecture: "4 min",
    lien: "blog/pourquoi-site-web-ne-ramene-pas-clients.html",
    publie: false
  }

];

// NE PAS MODIFIER EN DESSOUS

var EMOJIS_BLOG = {
  "Robot": "🤖", "Ecran": "💻", "Graphique": "📈",
  "Loupe": "🔍", "Diplome": "🎓", "Eclair": "⚡",
  "Telephone": "📲", "Etoile": "⭐", "Fleche": "🚀",
  "Marteau": "🔨"
};

var COULEURS_BLOG = {
  indigo: { bg: "rgba(99,102,241,.15)",  color: "#818cf8", border: "rgba(99,102,241,.3)" },
  cyan:   { bg: "rgba(6,182,212,.15)",   color: "#06b6d4", border: "rgba(6,182,212,.3)" },
  purple: { bg: "rgba(168,85,247,.15)",  color: "#a855f7", border: "rgba(168,85,247,.3)" },
  green:  { bg: "rgba(34,197,94,.15)",   color: "#22c55e", border: "rgba(34,197,94,.3)" },
  pink:   { bg: "rgba(236,72,153,.15)",  color: "#ec4899", border: "rgba(236,72,153,.3)" },
  orange: { bg: "rgba(251,146,60,.15)",  color: "#fb923c", border: "rgba(251,146,60,.3)" }
};

function renderBlog() {
  var container = document.getElementById('blog-dynamic');
  if (!container) return;

  var articles = BLOG_ARTICLES.filter(function(a) { return a.publie; });
  if (!articles.length) {
    container.innerHTML = '<p style="text-align:center;color:#64748b;padding:40px;">Articles bientot disponibles.</p>';
    return;
  }

  var html = '';
  articles.forEach(function(a) {
    var col   = COULEURS_BLOG[a.couleur] || COULEURS_BLOG.indigo;
    var emoji = EMOJIS_BLOG[a.emoji] || a.emoji || '📝';
    var imgBlock = a.image
      ? '<a href="' + a.lien + '" style="display:block;overflow:hidden;border-radius:14px 14px 0 0;"><img src="' + a.image + '" alt="' + a.titre + '" style="width:100%;height:180px;object-fit:cover;display:block;" loading="lazy"></a>'
      : '';
    html +=
      '<article class="blog-card reveal" style="' + (a.image ? 'padding:0;' : '') + '">' +
        imgBlock +
        '<div style="' + (a.image ? 'padding:20px 24px 24px;' : '') + '">' +
        '<div class="blog-cat" style="background:' + col.bg + ';color:' + col.color + ';border:1px solid ' + col.border + ';"> ' + emoji + ' ' + a.categorie + '</div>' +
        '<h3 class="blog-title">' + a.titre + '</h3>' +
        '<p class="blog-excerpt">' + a.extrait + '</p>' +
        '<div class="blog-footer">' +
          '<span class="blog-date">📅 ' + a.date + '</span>' +
          '<span class="blog-read">' + a.lecture + ' de lecture</span>' +
        '</div>' +
        '<a href="' + a.lien + '" class="blog-link">Lire l&#39;article →</a>' +
        '</div>' +
      '</article>';
  });
  container.innerHTML = html;

  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  container.querySelectorAll('.reveal').forEach(function(el) { obs.observe(el); });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderBlog);
} else {
  renderBlog();
}

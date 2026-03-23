/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║         LE BOOST DIGITAL — BLOG & ACTUALITÉS            ║
 * ║  Pour ajouter un article, copie un bloc et modifie-le ! ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * CATÉGORIES DISPONIBLES :
 *   Automatisation  → couleur: "indigo"
 *   Site Web        → couleur: "cyan"
 *   Réseaux Sociaux → couleur: "purple"
 *   SEO             → couleur: "green"
 *   Formation       → couleur: "pink"
 *   Actualité       → couleur: "orange"
 *
 * INSTRUCTIONS POUR AJOUTER UN ARTICLE :
 *  1. Copie le fichier TEMPLATE_ARTICLE.html dans le dossier blog/
 *  2. Renomme-le : blog/mon-titre-darticle.html
 *  3. Remplis le contenu dans le fichier HTML
 *  4. Ajoute un bloc ici avec le même nom de fichier dans "lien"
 *  5. Upload les deux fichiers sur GitHub
 *  6. C'est tout !
 */

var BLOG_ARTICLES = [

  // ─── ARTICLE 1 ───────────────────────────────────────────
  {
    id: 1,
    emoji: "Robot",
    categorie: "Automatisation",
    couleur: "indigo",
    titre: "Comment un restaurant a economise 3h par jour grace a l'automatisation",
    extrait: "Confirmations de reservation, rappels clients, demandes d'avis Google... Un restaurateur a tout automatise en une semaine. Resultat : plus de temps, plus d'avis positifs, zero oubli.",
    date: "Mars 2025",
    lecture: "5 min",
    image: "blog/blog-resto-og.jpg",
    lien: "blog/automatisation-restaurant.html",
    publie: true
  },

  // ─── ARTICLE 2 ───────────────────────────────────────────
  {
    id: 2,
    emoji: "Ecran",
    categorie: "Site Web",
    couleur: "cyan",
    titre: "Pourquoi votre site web ne vous ramene aucun client",
    extrait: "Un site web invisible sur Google, c'est comme une vitrine dans une ruelle sans passants. Les 3 erreurs les plus courantes et comment les corriger.",
    date: "Fevrier 2025",
    lecture: "4 min",
    lien: "blog/pourquoi-site-web-ne-ramene-pas-clients.html",
    publie: false
  },

  // ─── ARTICLE 3 ───────────────────────────────────────────
  {
    id: 3,
    emoji: "Graphique",
    categorie: "Reseaux Sociaux",
    couleur: "purple",
    titre: "Comment publier sur Instagram et Facebook sans y passer 2h par jour",
    extrait: "La regularite sur les reseaux sociaux est la cle mais qui a le temps ? Planifiez un mois de contenu en une seule session grace a l'IA.",
    date: "Janvier 2025",
    lecture: "6 min",
    lien: "blog/publier-reseaux-sociaux-sans-perdre-temps.html",
    publie: false
  },

  // ─── AJOUTEZ VOS ARTICLES ICI ────────────────────────────
  // Etape 1 : Copiez TEMPLATE_ARTICLE.html dans le dossier blog/
  // Etape 2 : Renommez-le et remplissez le contenu
  // Etape 3 : Copiez ce bloc et adaptez-le :
  /*
  {
    id: 4,
    emoji: "Loupe",
    categorie: "SEO",
    couleur: "green",
    titre: "Titre de votre article",
    extrait: "Description courte — 2 phrases max.",
    date: "Avril 2025",
    lecture: "4 min",
    lien: "blog/nom-du-fichier.html",
    publie: true
  },
  */

];

// ═══════════════════════════════════════════════════════════
// NE PAS MODIFIER EN DESSOUS DE CETTE LIGNE
// ═══════════════════════════════════════════════════════════

var EMOJIS_BLOG = {
  "Robot": "🤖", "Ecran": "💻", "Graphique": "📈",
  "Loupe": "🔍", "Diplome": "🎓", "Eclair": "⚡",
  "Telephone": "📲", "Etoile": "⭐", "Fleche": "🚀"
};

var COULEURS_BLOG = {
  indigo: { bg: "rgba(99,102,241,.15)",  color: "#818cf8", border: "rgba(99,102,241,.3)" },
  cyan:   { bg: "rgba(6,182,212,.15)",   color: "#06b6d4", border: "rgba(6,182,212,.3)" },
  purple: { bg: "rgba(168,85,247,.15)",  color: "#a855f7", border: "rgba(168,85,247,.3)" },
  green:  { bg: "rgba(34,197,94,.15)",   color: "#22c55e", border: "rgba(34,197,94,.3)" },
  pink:   { bg: "rgba(236,72,153,.15)",  color: "#ec4899", border: "rgba(236,72,153,.3)" },
  orange: { bg: "rgba(251,146,60,.15)",  color: "#fb923c", border: "rgba(251,146,60,.3)" },
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
    var imgHtml = a.image 
      ? '<a href="' + a.lien + '" style="display:block;border-radius:12px 12px 0 0;overflow:hidden;margin:-0px;"><img src="' + a.image + '" alt="' + a.titre + '" style="width:100%;height:180px;object-fit:cover;display:block;" loading="lazy"></a>'
      : '';
    html +=
      '<article class="blog-card reveal" style="padding:' + (a.image ? '0' : '28px') + '">' +
        imgHtml +
        '<div style="padding:20px 24px 24px;">' +
        '<div class="blog-cat" style="background:' + col.bg + ';color:' + col.color + ';border:1px solid ' + col.border + ';"> ' + emoji + ' ' + a.categorie + '</div>' +
        '<h3 class="blog-title">' + a.titre + '</h3>' +
        '<p class="blog-excerpt">' + a.extrait + '</p>' +
        '<div class="blog-footer">' +
          '<span class="blog-date">Publie le ' + a.date + '</span>' +
          '<span class="blog-read">' + a.lecture + ' de lecture</span>' +
        '</div>' +
        '<a href="' + a.lien + '" class="blog-link">Lire l\'article →</a>' +
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

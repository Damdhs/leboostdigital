/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║         LE BOOST DIGITAL — BLOG & ACTUALITÉS            ║
 * ║  Pour ajouter un article, copie un bloc et modifie-le ! ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * CATÉGORIES DISPONIBLES :
 *   🤖 Automatisation    → couleur: "indigo"
 *   💻 Site Web          → couleur: "cyan"
 *   📈 Réseaux Sociaux   → couleur: "purple"
 *   🔍 SEO               → couleur: "green"
 *   🎓 Formation         → couleur: "pink"
 *   ⚡ Actualité         → couleur: "orange"
 *
 * INSTRUCTIONS :
 *  1. Copie un article existant
 *  2. Change les champs (titre, date, texte...)
 *  3. Sauvegarde et upload sur GitHub
 *  4. C'est tout ! Le site se met à jour automatiquement.
 */

var BLOG_ARTICLES = [

  // ─── ARTICLE 1 ───────────────────────────────────────────
  {
    id: 1,
    emoji: "🤖",
    categorie: "Automatisation",
    couleur: "indigo",
    titre: "5 tâches que vous pouvez automatiser cette semaine sans aucune compétence technique",
    extrait: "Répondre aux emails, confirmer des rendez-vous, relancer des clients... Ces tâches répétitives vous coûtent des heures chaque semaine. Voici comment les déléguer à des outils intelligents.",
    date: "Mars 2025",
    lecture: "5 min",
    lien: "#audit",           // lien vers section du site ou URL externe
    publie: true              // false = article masqué
  },

  // ─── ARTICLE 2 ───────────────────────────────────────────
  {
    id: 2,
    emoji: "💻",
    categorie: "Site Web",
    couleur: "cyan",
    titre: "Pourquoi votre site web ne vous ramène aucun client (et comment y remédier)",
    extrait: "Un site web invisible sur Google, c'est comme une vitrine dans une ruelle sans passants. Découvrez les 3 erreurs les plus courantes et les solutions concrètes pour être enfin trouvé.",
    date: "Février 2025",
    lecture: "4 min",
    lien: "#audit",
    publie: true
  },

  // ─── ARTICLE 3 ───────────────────────────────────────────
  {
    id: 3,
    emoji: "📈",
    categorie: "Réseaux Sociaux",
    couleur: "purple",
    titre: "Comment publier sur Instagram et Facebook sans y passer 2h par jour",
    extrait: "La régularité sur les réseaux sociaux est la clé — mais qui a le temps ? Je vous explique comment planifier un mois de contenu en une seule session grâce à l'IA.",
    date: "Janvier 2025",
    lecture: "6 min",
    lien: "#audit",
    publie: true
  },

  // ─── AJOUTEZ VOS ARTICLES ICI ────────────────────────────
  // Copiez le bloc ci-dessous et remplissez les champs :
  /*
  {
    id: 4,
    emoji: "🔍",
    categorie: "SEO",
    couleur: "green",
    titre: "Titre de votre article",
    extrait: "Description courte de l'article — 2 à 3 phrases max pour donner envie de lire.",
    date: "Avril 2025",
    lecture: "4 min",
    lien: "#audit",           // ou "https://lien-externe.fr" pour un article complet
    publie: true
  },
  */

];

// ═══════════════════════════════════════════════════════════
// NE PAS MODIFIER EN DESSOUS DE CETTE LIGNE
// ═══════════════════════════════════════════════════════════

var COULEURS_BLOG = {
  indigo: { bg: "rgba(99,102,241,.15)", color: "#818cf8", border: "rgba(99,102,241,.3)" },
  cyan:   { bg: "rgba(6,182,212,.15)",  color: "#06b6d4", border: "rgba(6,182,212,.3)" },
  purple: { bg: "rgba(168,85,247,.15)", color: "#a855f7", border: "rgba(168,85,247,.3)" },
  green:  { bg: "rgba(34,197,94,.15)",  color: "#22c55e", border: "rgba(34,197,94,.3)" },
  pink:   { bg: "rgba(236,72,153,.15)", color: "#ec4899", border: "rgba(236,72,153,.3)" },
  orange: { bg: "rgba(251,146,60,.15)", color: "#fb923c", border: "rgba(251,146,60,.3)" },
};

function renderBlog() {
  var container = document.getElementById('blog-dynamic');
  if (!container) return;

  var articles = BLOG_ARTICLES.filter(function(a) { return a.publie; });
  if (!articles.length) { container.innerHTML = '<p style="text-align:center;color:#64748b;">Aucun article publié pour le moment.</p>'; return; }

  var html = '';
  articles.forEach(function(a) {
    var col = COULEURS_BLOG[a.couleur] || COULEURS_BLOG.indigo;
    html +=
      '<article class="blog-card reveal">' +
        '<div class="blog-cat" style="background:' + col.bg + ';color:' + col.color + ';border:1px solid ' + col.border + ';">' + a.emoji + ' ' + a.categorie + '</div>' +
        '<h3 class="blog-title">' + a.titre + '</h3>' +
        '<p class="blog-excerpt">' + a.extrait + '</p>' +
        '<div class="blog-footer">' +
          '<span class="blog-date">📅 ' + a.date + '</span>' +
          '<span class="blog-read">' + a.lecture + ' de lecture</span>' +
        '</div>' +
        '<a href="' + a.lien + '" class="blog-link">Lire l\'article →</a>' +
      '</article>';
  });
  container.innerHTML = html;

  // Re-trigger reveal animation
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  container.querySelectorAll('.reveal').forEach(function(el) { obs.observe(el); });
}

// Auto-render when DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderBlog);
} else {
  renderBlog();
}

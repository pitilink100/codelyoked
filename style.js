function toggleComments() {
    // Récupère tous les éléments <span> contenant des commentaires
    var commentSpans = document.querySelectorAll('.token.comment');
  
    // Pour chaque élément <span>
    commentSpans.forEach(function(span) {
      // Si l'élément est actuellement caché
      if (span.style.display === 'none') {
        // Affiche l'élément
        span.style.display = 'inline';
      } else {
        // Masque l'élément
        span.style.display = 'none';
      }
    });
  }
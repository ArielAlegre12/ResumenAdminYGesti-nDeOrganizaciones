const botones = document.querySelectorAll('.tema-btn');

botones.forEach(btn => {
  btn.addEventListener('click', () => {
    const tema = btn.parentElement;

    // cerrar los otros
    document.querySelectorAll('.tema').forEach(t => {
      if (t !== tema) t.classList.remove('activo');
    });

    // abrir / cerrar el actual
    tema.classList.toggle('activo');
  });
});
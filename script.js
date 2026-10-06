// ===== EDITE AQUI =====
var LINK_AGENDA = "#";   // link da agenda do Moreira
var LINK_CURSO = "#";   // página de venda do curso Método M
var MEDIA = {
  video: "",      // vídeo curto do hero (sem som, em loop)
  poster: "",     // imagem de capa do vídeo
  moreira: "img/SAM00096.jpg",    // foto do Moreira
  barbearia: "",   // foto da barbearia
  moreiraPng: "", // foto do Moreira em PNG (sem fundo)
};
// ======================
document.querySelectorAll('[data-link]').forEach(function (a) {
  var u = a.dataset.link === 'agenda' ? LINK_AGENDA : LINK_CURSO;
  if (u !== "#") { a.href = u; a.target = "_blank"; a.rel = "noopener" }
  else if (a.dataset.link === 'curso') { a.href = "#metodo" }
});
if (MEDIA.video) {
  var v = document.createElement('video');
  v.src = MEDIA.video; if (MEDIA.poster) v.poster = MEDIA.poster;
  v.muted = true; v.loop = true; v.autoplay = true; v.playsInline = true; v.setAttribute('playsinline', ''); v.setAttribute('aria-hidden', 'true');
  document.getElementById('vid').appendChild(v);
  var p = v.play(); if (p && p.catch) p.catch(function () { });
}
document.querySelectorAll('[data-slot]').forEach(function (el) {
  var s = MEDIA[el.dataset.slot];
  if (s) { var i = new Image(); i.src = s; i.alt = el.dataset.alt || 'Barbearia do Moreira'; i.loading = 'lazy'; el.innerHTML = ''; el.appendChild(i) }
});
var dock = document.getElementById('dock');
if ('IntersectionObserver' in window) {
  new IntersectionObserver(function (e) { dock.classList.toggle('show', !e[0].isIntersecting) }, { threshold: .6 }).observe(document.getElementById('hero'));
  var els = document.querySelectorAll('.rv');
  var io = new IntersectionObserver(function (e) { e.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target) } }) }, { threshold: .1 });
  els.forEach(function (e) { io.observe(e) });
} else { dock.classList.add('show'); document.querySelectorAll('.rv').forEach(function (e) { e.classList.add('in') }) }

(function () {
  'use strict';

  var EMAIL = 'hong@example.com';

  var header = document.querySelector('.site-header');
  var nav = document.getElementById('main-nav');
  var toggle = document.getElementById('menu-toggle');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  var sections = ['home', 'about', 'projects', 'contact']
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);

  /* ---------- 1. 모바일 메뉴 열기/닫기 ---------- */
  function setMenu(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
    toggle.querySelector('.material-symbols-outlined').textContent = open ? 'close' : 'menu';
  }

  toggle.addEventListener('click', function () {
    setMenu(!nav.classList.contains('is-open'));
  });

  document.addEventListener('click', function (e) {
    if (nav.classList.contains('is-open') && !header.contains(e.target)) setMenu(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setMenu(false);
      toggle.focus();
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) setMenu(false);
  });

  /* ---------- 2. 메뉴 클릭 시 해당 영역으로 부드럽게 이동 ---------- */
  document.querySelectorAll('a[data-nav][href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      setMenu(false);

      var top = target.id === 'home'
        ? 0
        : target.getBoundingClientRect().top + window.pageYOffset - header.offsetHeight;
      window.scrollTo({ top: top, behavior: 'smooth' });
      history.replaceState(null, '', '#' + target.id);
    });
  });

  /* ---------- 3. 스크롤 위치에 따라 현재 메뉴 강조 ---------- */
  function updateActiveNav() {
    var probe = window.pageYOffset + header.offsetHeight + window.innerHeight * 0.3;
    var current = sections[0].id;

    sections.forEach(function (section) {
      if (section.offsetTop <= probe) current = section.id;
    });
    // 페이지 맨 아래에 닿으면 마지막 섹션(Contact)을 강조
    if (window.innerHeight + window.pageYOffset >= document.documentElement.scrollHeight - 2) {
      current = sections[sections.length - 1].id;
    }

    navLinks.forEach(function (link) {
      var active = link.getAttribute('href') === '#' + current;
      link.classList.toggle('is-active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      updateActiveNav();
      ticking = false;
    });
  }, { passive: true });
  updateActiveNav();

  /* ---------- 4. 프로젝트 카드 클릭 시 관련 링크로 이동 ---------- */
  document.querySelectorAll('.project-card[data-href]').forEach(function (card) {
    function openLink() {
      window.open(card.dataset.href, '_blank', 'noopener');
    }
    card.addEventListener('click', function (e) {
      // 텍스트를 드래그해서 선택한 경우에는 이동하지 않음
      if (window.getSelection && String(window.getSelection())) return;
      e.preventDefault();
      openLink();
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLink();
      }
    });
  });

  /* ---------- 5. 이메일 복사 버튼 ---------- */
  var copyBtn = document.getElementById('copy-email');
  var feedback = document.getElementById('copy-feedback');
  var feedbackTimer;

  function showFeedback(msg) {
    feedback.textContent = msg;
    feedback.classList.add('is-visible');
    clearTimeout(feedbackTimer);
    feedbackTimer = setTimeout(function () { feedback.classList.remove('is-visible'); }, 2000);
  }

  copyBtn.addEventListener('click', function () {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(EMAIL).then(
        function () { showFeedback('이메일 주소가 클립보드에 복사되었습니다!'); },
        fallbackCopy
      );
    } else {
      fallbackCopy();
    }
  });

  function fallbackCopy() {
    var ta = document.createElement('textarea');
    ta.value = EMAIL;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
    document.body.removeChild(ta);
    showFeedback(ok ? '이메일 주소가 클립보드에 복사되었습니다!' : '복사에 실패했습니다. 직접 선택해 복사해 주세요.');
  }

  /* ---------- 6. 문의 폼 → 메일 작성창 열기 ---------- */
  var form = document.getElementById('contact-form');
  var formError = document.getElementById('form-error');
  var submitBtn = document.getElementById('submit-btn');
  var submitLabel = submitBtn.querySelector('.btn-label');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var fields = Array.prototype.slice.call(form.querySelectorAll('input, textarea'));
    var firstInvalid = null;
    fields.forEach(function (f) {
      var bad = !f.checkValidity() || !f.value.trim();
      f.classList.toggle('is-invalid', bad);
      if (bad && !firstInvalid) firstInvalid = f;
    });

    if (firstInvalid) {
      formError.textContent = firstInvalid.type === 'email' && firstInvalid.value.trim()
        ? '올바른 이메일 주소를 입력해 주세요.'
        : '모든 항목을 입력해 주세요.';
      firstInvalid.focus();
      return;
    }
    formError.textContent = '';

    function val(id) { return document.getElementById(id).value.trim(); }
    var name = val('name');
    var email = val('contact-email');
    var subject = val('subject');
    var message = val('message');
    var body = '성함: ' + name + '\n이메일: ' + email + '\n\n' + message;

    window.location.href = 'mailto:' + EMAIL +
      '?subject=' + encodeURIComponent('[포트폴리오 문의] ' + subject) +
      '&body=' + encodeURIComponent(body);

    submitLabel.textContent = '메일 작성창을 열었습니다';
    submitBtn.classList.add('is-sent');
    setTimeout(function () {
      submitLabel.textContent = '메시지 보내기';
      submitBtn.classList.remove('is-sent');
    }, 3000);
  });

  form.addEventListener('input', function (e) {
    if (e.target.classList.contains('is-invalid') && e.target.checkValidity() && e.target.value.trim()) {
      e.target.classList.remove('is-invalid');
    }
  });

  /* ---------- 기타 ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();

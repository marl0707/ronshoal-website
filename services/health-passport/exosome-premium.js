// タブ機能
document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // すべてのタブとコンテンツを非アクティブにする
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanes.forEach(pane => pane.classList.remove('active'));
      
      // クリックしたタブとコンテンツをアクティブにする
      this.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
    });
  });

  // アコーディオン機能
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const accordionItem = this.parentElement;
      
      // 他のアコーディオンを閉じる
      document.querySelectorAll('.accordion-item').forEach(item => {
        if (item !== accordionItem) {
          item.classList.remove('active');
        }
      });
      
      // クリックしたアコーディオンをトグル
      accordionItem.classList.toggle('active');
    });
  });

  // スクロールトップボタン
  const scrollToTopButton = document.getElementById('scrollToTop');
  
  // スクロール時の表示/非表示
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopButton.style.display = 'flex';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
  
  // クリック時のスクロールトップ
  scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // CTAボタンのクリックイベント
  const ctaButtons = document.querySelectorAll('.btn-primary');
  ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // LINE URLや電話番号に変更する場合はここで処理
      if (this.textContent.includes('資料請求') || this.textContent.includes('申し込む')) {
        e.preventDefault();
        // LINE URLに遷移
        window.open('https://lin.ee/YOUR_LINE_ID', '_blank');
      }
    });
  });

  const phoneButtons = document.querySelectorAll('.btn-outline');
  phoneButtons.forEach(button => {
    if (button.textContent.includes('電話')) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        // 電話番号に発信
        window.location.href = 'tel:0120-123-456';
      });
    }
  });

  // タブバーのナビゲーション
  const tabBarItems = document.querySelectorAll('.tab-bar-item');
  tabBarItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      switch(index) {
        case 0: // ホーム
          window.location.href = '../../index.html';
          break;
        case 1: // 製品情報
          document.querySelector('.comparison-container').scrollIntoView({ behavior: 'smooth' });
          break;
        case 2: // 医師紹介
          document.querySelector('.testimonials').scrollIntoView({ behavior: 'smooth' });
          break;
        case 3: // お問い合わせ
          window.location.href = '../../contact.html';
          break;
      }
    });
  });

  // 画像の遅延読み込み
  const images = document.querySelectorAll('img');
  const imageOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px 50px 0px'
  };

  const imageObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  }, imageOptions);

  images.forEach(img => {
    if (img.dataset.src) {
      imageObserver.observe(img);
    }
  });
});
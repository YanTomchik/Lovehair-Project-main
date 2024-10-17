// Поиск по сайту

const searchInput = document.getElementById('search-input');
  const resultsDiv = document.getElementById('search-results');
  console.log(searchInput)
  const searchInputContainer = document.querySelector('.search-input-result-container');
  
  if(searchInput){
    searchInput.addEventListener('input', function () {
      const query = searchInput.value;
      if(query.length > 2){
        searchInputContainer.style.display = 'block'
      }
      
      // Если поле пустое, очищаем результаты
      if (!query) {
          resultsDiv.innerHTML = '';
          return;
      }

      fetch(`${ajaxurl}?action=search_pods_posts&search=${query}`)
          .then(response => response.json())
          .then(data => {
              if (data.success) {
                  resultsDiv.innerHTML = data.data; // Вставляем HTML-код
              } else {
                  resultsDiv.innerHTML = data.data; // Сообщение "Ничего не найдено"
              }
              
          })
          .catch(error => console.error('Ошибка:', error));
  });
  }


document.querySelectorAll('.dropdown-content a').forEach(function (option) {
    option.addEventListener('click', function (event) {
        event.preventDefault(); // предотвратить переход по ссылке
        const selectedLang = event.target.getAttribute('data-lang');
        // Добавьте свою логику для смены языка здесь
        console.log('Выбранный язык:', selectedLang);
    });
});


window.addEventListener('scroll', function() {
  const header = document.getElementsByTagName('header')[0];
  if (window.scrollY > 100) { // Если прокрутка больше 50px
      header.classList.add('scrolled');
      header.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.2)';
  } else {
      header.classList.remove('scrolled');
      header.style.boxShadow = 'none';
  }
});

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay-body');
const body = document.body;

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('no-scroll'); // Блокируем/разблокируем прокрутку
});

overlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    burger.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('no-scroll');
});

const searchIcon = document.querySelector('.search-icon');
const searchIconClose = document.querySelector('.close-btn-search');

if(searchIcon){
  searchIcon.addEventListener('click', () => {
    const query = searchInput.value.trim(); // Получаем текущий поисковый запрос
  
    if (query.length > 2) {
        // Редиректим на страницу поиска, передавая параметр запроса
        window.location.href = `${window.location.origin}/search-results?search=${encodeURIComponent(query)}`;
    } else {
        searchInput.classList.add('active');
        searchIcon.classList.add('active');
        searchIconClose.classList.add('active');
        searchInput.focus(); 
    }
  });
}



searchIconClose.addEventListener('click', () => {
  searchInput.classList.toggle('active'); // Показываем/скрываем поле поиска
  searchIcon.classList.toggle('active'); // Изменяем иконку на крестик
  searchIconClose.classList.toggle('active')
  const searchInputContainer = document.querySelector('.search-input-result-container');
  searchInputContainer.style.display = 'none'
  if (searchInput.classList.contains('active')) {
      searchInput.focus(); // Устанавливаем фокус на поле при его открытии
  } else {
      searchInput.value = ''; // Очищаем поле при его закрытии
  }
});

const publicationsNavMenu = document.querySelector('.publications-navmenu-sort-main');
if(publicationsNavMenu){
  publicationsNavMenu.addEventListener('click', function() {
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
  });
}

const dropdownItems = document.querySelectorAll('.dropdown-item');

if(dropdownItems){
  dropdownItems.forEach(function(item) {
    item.addEventListener('click', function() {
        const selectedText = this.textContent;
        document.querySelector('.regular-h3-raleway').textContent = selectedText;
        document.querySelector('.dropdown-menu').style.display = 'none'; // Закрываем меню после выбора
    });
  });
}

const publicationsNavmenuSortWrapper = document.querySelector('.publications-navmenu-sort-wrapper')
// Закрытие дропдауна при клике вне его
if(publicationsNavmenuSortWrapper){
  document.addEventListener('click', function(event) {
    const isClickInside = publicationsNavmenuSortWrapper.contains(event.target);
    if (!isClickInside) {
        document.querySelector('.dropdown-menu').style.display = 'none';
    }
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const videoContainer = document.getElementById('video-container');
  const mainContent = document.getElementById('main-content');
  const letters = document.querySelectorAll('.letter');

  // Ожидание завершения анимации для всех букв
  let animationsFinished = 0;
  letters.forEach(letter => {
    letter.addEventListener('animationend', () => {
      animationsFinished++;
      if (animationsFinished === letters.length) {
        // Когда все анимации завершены, плавно скрыть лоадер
        videoContainer.style.opacity = 0;
        videoContainer.style.zIndex = -1;

        // Показываем основной контент с плавным появлением
        setTimeout(() => {
          // videoContainer.style.display = 'none'; 
          mainContent.style.opacity = 1; // Плавно делаем основной контент видимым
        }, 500); // Задержка для завершения анимации исчезновения
      }
    });
  });
});




const popupOverlay = document.getElementById('popupOverlay');
const closePopupBtn = document.getElementById('closePopupBtn');


function copyLink(event) {
  const link = event.target.getAttribute('data-link');
  
  
  const tempInput = document.createElement('input');
  tempInput.value = link;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);

  popupOverlay.style.display = 'flex'; 
}

if(closePopupBtn){
  closePopupBtn.addEventListener('click', function() {
    popupOverlay.style.display = 'none'; 
  });
}
if(popupOverlay){
  popupOverlay.addEventListener('click', function(event) {
    if (event.target === popupOverlay) {
      popupOverlay.style.display = 'none'; 
    }
  });
}

const buttonsCopy = document.querySelectorAll('.copy-link');
      
if(buttonsCopy){
  buttonsCopy.forEach(function(button) {
    button.addEventListener('click', copyLink);
  });
}


$(document).ready(function(){
  $('.main-banner-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,  // Включаем кастомные стрелки
    prevArrow: $('.main-banner-arrow-item.left'), // Левую стрелку
    nextArrow: $('.main-banner-arrow-item.right'), // Правую стрелку
    dots: false,  // Убираем точки навигации
    fade: true,   // Плавный переход между слайдами
    cssEase: 'linear'
  });
});










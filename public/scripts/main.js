// document.addEventListener("DOMContentLoaded", function () {
//   const video = document.getElementById("preloader-video");
//   const preloader = document.getElementById("preloader");
//   const mainContent = document.getElementById("main-content");

//   // Функция для скрытия прелоадера и показа основного контента
//   function hidePreloader() {
//     preloader.style.display = 'none';  // Скрываем прелоадер
//     mainContent.style.display = 'block';  // Показываем основной контент
//     video.pause();  // Останавливаем видео
//   }

//   // Если страница загружена, сразу скрываем прелоадер
//   window.onload = function () {
//     hidePreloader();
//   };

//   // На случай если видео закончилось до загрузки страницы
//   video.onended = function () {
//     hidePreloader();
//   };
// });



// PAGINATION
const pages = document.querySelectorAll('.pagination .page');
pages.forEach(page => {
  page.addEventListener('click', function(e) {
    e.preventDefault();
    pages.forEach(p => p.classList.remove('active'));  // Remove active class from all pages
    this.classList.add('active');  // Add active class to the clicked page
  });
});

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

// Функция для загрузки JSON с переводами
async function loadTranslations() {
  try {
      const response = await fetch('../../public/scripts/translations.json');
      const translations = await response.json();
      return translations;
  } catch (error) {
      console.error("Ошибка при загрузке переводов:", error);
  }
}

// Функция смены языка
function changeLanguage(language, translations) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((element) => {
      const key = element.getAttribute("data-key");
      element.textContent = translations[language][key];
  });
}

// Инициализация и смена языка
document.addEventListener("DOMContentLoaded", async function () {
  const translations = await loadTranslations();

  // Слушатель для смены языка
  document.querySelectorAll(".dropdown-content a").forEach((link) => {
      link.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector('.language-button').textContent = this.textContent
          const language = this.getAttribute("data-lang");
          changeLanguage(language, translations);
      });
  });

  // Устанавливаем язык по умолчанию
  changeLanguage('ru', translations);
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
const searchInput = document.querySelector('.search-input');
const searchIconClose = document.querySelector('.close-btn-search');

searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('active'); // Показываем/скрываем поле поиска
    searchIcon.classList.toggle('active'); // Изменяем иконку на крестик
    searchIconClose.classList.toggle('active')
    if (searchInput.classList.contains('active')) {
        searchInput.focus(); // Устанавливаем фокус на поле при его открытии
    } else {
        searchInput.value = ''; // Очищаем поле при его закрытии
    }
});


searchIconClose.addEventListener('click', () => {
  searchInput.classList.toggle('active'); // Показываем/скрываем поле поиска
  searchIcon.classList.toggle('active'); // Изменяем иконку на крестик
  searchIconClose.classList.toggle('active')
  if (searchInput.classList.contains('active')) {
      searchInput.focus(); // Устанавливаем фокус на поле при его открытии
  } else {
      searchInput.value = ''; // Очищаем поле при его закрытии
  }
});


document.querySelector('.publications-navmenu-sort-main').addEventListener('click', function() {
  const dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.dropdown-item').forEach(function(item) {
  item.addEventListener('click', function() {
      const selectedText = this.textContent;
      document.querySelector('.regular-h3-raleway').textContent = selectedText;
      document.querySelector('.dropdown-menu').style.display = 'none'; // Закрываем меню после выбора
  });
});

// Закрытие дропдауна при клике вне его
document.addEventListener('click', function(event) {
  const isClickInside = document.querySelector('.publications-navmenu-sort-wrapper').contains(event.target);
  if (!isClickInside) {
      document.querySelector('.dropdown-menu').style.display = 'none';
  }
});







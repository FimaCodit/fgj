let page = 1,
    pending = false; //ожидание ответа сервера на запрос

var searchArea = document.getElementById('search-area'),
    tag = searchArea.value;
document.addEventListener("DOMContentLoaded",loadImages); //ОТОБРАЖЕНИЕ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
document.querySelector('#search-button').addEventListener('click', searchImages); //ПОИСК И ОТОБРАЖЕНИЕ ПРИ КЛИКЕ НА КНОПКУ
window.addEventListener("scroll", function() { // ОТОБРАЖЕНИЕ ПРИ СКРОЛЛЕ
  let currentHeight = document.body.scrollHeight;   //высота body
  let viewportHeight = window.innerHeight; //высота области просмотра
  let currentScroll = window.pageYOffset; //текущий скролл, по верхней границе окна
  let bottomScrollBorder = currentScroll + viewportHeight;  //текущая высота страницы с учетом прокрутки
  let marginFromBottom = 100; //ОТСТУП ОТ НИЖНЕЙ ГРАНИЦЫ, ПРИ КОТОРОМ НАЧНЕТСЯ ЗАГРУЗКА КАРТИНОК
  let whenDownload = currentHeight - marginFromBottom;  //при достижении этой высоты начнется загрузка картинок 
  let downloadIsAllowed = whenDownload < bottomScrollBorder; //булева, отвечающая за разрешение загрузки картинок
  if (!pending && downloadIsAllowed) {
   loadImages();
  }
});
function searchImages(){
  //Удаление предыдущих картинок
 var main = document.getElementById('main');
 var images = main.children;
 for(i=images.length - 1; i >=0; i--){
   main.removeChild(images[i]);
 }
  tag = searchArea.value;
 loadImages();
}

function loadImages() {
  const API_KEY = "6540687-047841adf1fa11824e90f8857";
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(
    tag
  )}`;

  let pending = true;
  var people =[];
  var obj = {};
  let request = $.getJSON(URL, {
      page: page,
      per_page: 20,
      order: "latest"
    }) 
    .done(function (data) {
      console.log(data);
      if (parseInt(data.totalHits) > 0) {
        $.each(data.hits, (i, hit) => {
          const img = document.createElement("div");
          img.classList.add("image");
          img.style.backgroundImage = `url(${hit.webformatURL})`;
          main.appendChild(img);
          //Конец добавление картинок

          let wordArr = hit.tags.split(', ');
          for (let i = 0; i < wordArr.length; i++) {
            obj[wordArr[i]] = 1;
          }
          var  input = document.getElementById('search-area'),
          results;
          //close autocomplete
       // functions
        function autocomplete(val) {
        var people_return = [];

        for (i = 0; i < people.length; i++) {
          if (val === people[i].slice(0, val.length)) {
            people_return.push(people[i]);
          }
        }
        return people_return;
      }
      //Событие начал автодоп.
      input.onkeyup = function(e) {
        input_val = this.value; // updates the variable on each ocurrence
      
        if (input_val.length > 0) {
          var hits = [];
          
          autocomplete_results = document.getElementById("autocomplete-results");
          autocomplete_results.innerHTML = '';
          hits = autocomplete(input_val);
          
          for (i = 0; i < hits.length; i++) {
            autocomplete_results.innerHTML += '<li class="item-search">' + hits[i] + '</li>';
          }
          autocomplete_results.addEventListener('click', handleClickOnList);
          function handleClickOnList(event) {
            if (event.target.className === 'item-search') {
              document.querySelector("#search-area").value = event.target.textContent;
            }
          }  
          autocomplete_results.style.display = 'block';
         } else {
          hits = [];
          autocomplete_results.innerHTML = '';
        }
      }
        });
        for (var key in obj) {
          people.push(key);
        }
        page += 1;
        //выключается режим ожидания картинок
        pending = false;
      } else {
        //выключается режим ожидания картинок
        pending = false;
        console.log("No hits");
      }
    })
    .fail(function(data) {
      console.log(data);
    })
}
function tagExComp(){
  var aText = document.getElementsByTagName('a');
  searchArea.value = 'computer';
  console.log(aText.text);
  searchImages();
}


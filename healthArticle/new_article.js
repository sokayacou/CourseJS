var xhr = new XMLHttpRequest();
var url = './new_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';
var articles = xhr.response.articles;
var articlesDiv = document.getElementById('articles');


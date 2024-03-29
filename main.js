//Основная логика сайта. Если используем функции, переменные или другие элементы с других файлов, импорт элемента прописываем так: import {название элемента(функции/переменной)} from 'путь'.
//Пример: import{btn} from './vars.js'.

//П.с.: если несколько переменных или несколько функций хотим импортировать, то название можно указать через запятую в {}.
//Пример импорта переменных: import{btn, container} from './vars.js'
//Пример импорта функций import{one, two} from './function.js'
// Важно! Не смешиваем переменные и функции. Функции с функциями, переменные с переменными

import './src';
import './src/index/createcardtours';
import './src/index/date';
import './src/index/createinfocompany'
import './src/index/createTravekIdeas'

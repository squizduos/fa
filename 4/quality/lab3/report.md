# Отчёт по лабораторной работе 3

## Цель работы

Целью данной работы является создание и документирование набора тест-кейсов для веб-приложения Trello. Эти тест-кейсы могут быть применены в поддержке веб-приложения, а также в разработке аналогичного приложения, для личных нужд, нужд компании.

## Описание тестируемого приложения

Trello — это веб-приложение для управления проектами и задачами, которое позволяет пользователям организовывать работу с помощью досок, списков и карточек. Приложение предлагает визуальный подход к управлению задачами, где каждая доска представляет собой проект, списки — этапы или категории, а карточки — отдельные задачи или элементы работы. Пользователи могут легко перемещать карточки между списками, добавлять комментарии, вложения, метки и сроки выполнения, что делает Trello гибким инструментом для любых задач.

## Тестовая документация


| ID | Пользователь | Приоритет | Заголовок                                 | Список тест-кейсов                                                                                                                                                                                                                                                   |
| ---- | -------------------------- | :------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1  | @squizduos               | High               | Smoke-тестирование                     | Открытие главной страницы, Открытие списка досок                                                                                                                                                                                           |
| 2  | @squizduos               | High               | Тестирование навигации        | Переход на страницу создания доски, Переход на страницу конкретной доски                                                                                                                                               |
| 3  | @squizduos               | High               | Тестирование ввода данных   | Создание новой доски, Создание доски с пустым названием, Создание нового списка задач, Создание новой задачи, Создание новой задачи с пустым названием |
| 4  | @squizduos               | High               | Тестирование бизнес-логики | Перемещение задачи между списками, Изменение статуса задачи                                                                                                                                                                      |

Таблица с тест-кейсами приведена ниже


| ID  | Описание                                                                                      | Тип               | Шаги                                                                                                                                                                                                                                                                                                                   | Ожидаемый результат                                                                                                                                                  |
| ----- | ------------------------------------------------------------------------------------------------------- | :--------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.1 | Открытие главной страницы                                                      | Позитивный | 1. Перейти на главную страницу приложения                                                                                                                                                                                                                                                | Главная страница загружается без ошибок, все основные элементы интерфейса отображаются корректно. |
| 1.2 | Открытие страницы с досками                                                   | Позитивный | 1. Перейти на страницу "Доски"                                                                                                                                                                                                                                                                       | Страница "Доски" загружается, отображаются все созданные доски пользователя.                                          |
| 2.1 | Переход с главной страницы на страницу создания доски   | Позитивный | 1.На главной странице нажать кнопку "Создать" -> пункт "Создайте доску".                                                                                                                                                                                             | Открывается страница создания новой доски.                                                                                                        |
| 2.2 | Переход со страницы досок на страницу конкретной доски | Позитивный | 1. На странице "Мои доски" выбрать любую доску.                                                                                                                                                                                                                                         | Открывается выбранная доска с отображением всех списков и задач на ней.                                                    |
| 3.1 | Создание новой доски                                                                | Позитивный | 1. Перейти на страницу "Создайте доску". 2. Ввести название доски. 3. Нажать кнопку "Создать".                                                                                                                                                         | Доска создается и отображается на странице "Мои доски".                                                                                   |
| 3.2 | Создание доски с пустым названием                                        | Негативный | 1. Перейти на страницу "Создайте доску". 2. Оставить название доски пустым. 3. Нажать кнопку "Создать".                                                                                                                                        | Появляется сообщение об ошибке, доска не создается.                                                                                         |
| 3.3 | Создание нового списка задач                                                 | Позитивный | 1. Перейти на страницу конкретной доски. 2. Нажать кнопку "Добавьте еще одну колонку". 3. Ввести название списка. 4. Нажать кнопку "Добавить список".                                                      | Список задач создаётся и отображается на доске                                                                                                 |
| 3.4 | Создание новой задачи                                                              | Позитивный | 1. Перейти на страницу конкретной доски. 2. В выбранном списке задач нажать кнопку "Добавить карточку". 3. Ввести название задачи. 4. Нажать кнопку "Добавить карточку".                  | Задача создается и отображается в списке задач.                                                                                                |
| 3.5 | Создание новой задачи с пустым названием                           | Негативный | 1. Перейти на страницу конкретной доски. 2. В выбранном списке задач нажать кнопку "Добавить карточку". 3. Оставить название задачи пустым. 4. Нажать кнопку "Добавить карточку". | Появляется сообщение об ошибке, задача не создается.                                                                                       |
| 4.1 | Перемещение задачи между списками                                       | Позитивный | 1. Перейти на страницу конкретной доски. 2. Переместить задачу из одного списка в другой с помощью перетаскивания мышью.                                                                                                  | Задача перемещается в другой список и отображается там.                                                                                 |
| 4.2 | Изменение статуса задачи                                                        | Позитивный | 1. Перейти на страницу конкретной доски. 2. В выбранной задаче изменить статус (например, с "В процессе" на "Завершено").                                                                                                       | Статус задачи изменяется и отображается корректно.                                                                                         |

## Выводы

Разработка и прописывание тест-кейсов и тест-сьюитов позволяет полностью смоделировать ожидаемую схему работы приложения, облегчить задачу тестировщикам, а также чётко указать все пограничные случаи работы и возможные проблемы, на которые будет обращено особое внимание при разработке.
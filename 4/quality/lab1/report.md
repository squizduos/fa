# Отчёт по лабораторной работе 1

Ссылка на исходную документацию: [ТРПО - КР - Бочкарев.docx](https://github.com/squizduos/fa/blob/main/4/quality/lab1/%D0%A2%D0%A0%D0%9F%D0%9E%20-%20%D0%9A%D0%A0%20-%20%D0%91%D0%BE%D1%87%D0%BA%D0%B0%D1%80%D0%B5%D0%B2.docx)

## Цель работы.

Целью работы по тестированию документации программного обеспечения «ReadMangaDownloaderGUI» является обеспечение высокого уровня качества и полезности документации для конечных пользователей и разработчиков. Это включает в себя проверку полноты, точности, ясности, консистентности и доступности документации, чтобы гарантировать, что пользователи могут эффективно установить, настроить, использовать и поддерживать программное обеспечение для скачивания комиксов с сервисов онлайн-чтения.

## Описание тестируемой документации

Тестируемая документация представляет собой пояснительную записку по разработке программного обеспечения для скачивания комиксов с сервисов онлайн-чтения «ReadMangaDownloaderGUI». Пояснительная записка описывает полный цикл проектирования и разработки программного обеспечения, включая разработку технического задания, проектирование программного обеспечения, разработку и тестирование ПО. Также тестируемая документация включает в себя перечень критериев приемки программного обеспечения.

## Описание критериев качества тестируемой документации

Для оценки качества программного обеспечения будет применяться пять развернутых критериев, каждый из которых будет включать в себя один или несколько подпунктов. Критерий считается выполненным, если все подпункты критерия выполнены. В случае несоответствия хотя бы одному подпункту критерий считается невыполненным.

1.	Полнота:
    1.	Документация должна охватывать все аспекты программного продукта, включая установку, конфигурацию, использование, технические характеристики, требования, архитектуру, и устранение неполадок.
    2.	Включение примеров использования, сценариев, и часто задаваемых вопросов (FAQ) для полного понимания.
2.	Точность:
    1.	Информация в документации должна быть точной и актуальной, отражая текущую версию программного обеспечения.
    2.	Все технические термины и инструкции должны быть проверены на соответствие реальному поведению и функциональности продукта.
3.	Ясность:
    1.	Язык документации должен быть понятным и доступным для целевой аудитории, избегая излишней технической терминологии, если это не требуется.
    2.	Использование четкой структуры, заголовков, подзаголовков, списков и таблиц для улучшения читаемости и навигации.
4.	Консистентность:
    1.	Документация должна быть последовательной в использовании терминов, стиля и формата на протяжении всего текста.
    2.	Согласованность между различными частями документации, чтобы избежать противоречивой информации.
5.	Доступность:
    1.	Документация должна быть легко доступной для всех заинтересованных сторон, включая разработчиков, пользователей и администраторов.
    2.	Предоставление документации в различных форматах (PDF, HTML, Markdown) и на различных платформах (онлайн, оффлайн).
    3.	Возможность поиска по содержимому документации для быстрого нахождения нужной информации.

## Описание и обоснование метода тестирования документации

Для тестирования документации могут применяться следующие методы:
- Рецензирование разными группами специалистов
- Пробное создание тест-кейсов (сценариев тестирования)
- Обсуждение на основе проектов и прототипов

В нашем случае, поскольку тестирование производится одним человеком без возможности привлечения специалистов различного профиля, а прототипа ПО в наличии нет, то будет применяться метод пробного создания тест-кейсов. Для каждого критерия (подпункта критерия) будет создан положительный тест-кейс, отрицательный тест-кейс.

## Список несоответствий в документации критериям качества с указанием номеров пунктов исходной документации, цитированием части документации и конкретными рекомендациями к исправлению

1. Полнота
    1. Пункты про установку и устранение неполадок отсутствуют в исходной документации. Необходимо добавить детальный раздел про эксплуатацию ПО.
    2. Примеры использования отсутствуют в исходной документации. Необходимо добавить их после раздела про тестирование.
2. Точность
    1. Сведения в документации неточные. В документации приведены домены сайтов, по которым осуществляется работа ПО: 
    ```
    Список поддерживаемых сервисов:
    •	ReadManga (https://readmanga.io)
    •	MintManga (https://mintmanga.live)
    •	SelfManga (https://selfmanga.live)
    ```
    Из перечисленных доменов два неактуальны. Домен https://readmanga.io должен быть заменён на https://readmanga.live, домен https://mintmanga.live должен быть заменён на https://24.mintmanga.one.
3. Ясность
    1. Отсутствует глоссарий или список заданных терминов. По всему тексту употребляются термины как из мира манги, так и из технического мира, без должного разъяснения.
    2. В тексте употребляется термин "парсинг", который не является корректным.
4. Констистентность
    1. Отсутствует констистентность по названию продукта, с которым работает ПО. Во введении оно обозначается "комиксом", в интерфейсе продукта и в разделе документации оно обозначается "мангой". Нигде не указывается, что такое манга, и является ли манга комиксом.
5. Доступность
    1. Документация доступна только в формате Microsoft Word (.docx), для открытия которого требуется Microsoft Office. Документация не представлена ни в каком другом формате. Без установки офисного пакета Microsoft Office открытие документации в исходном виде невозможно.
    2. Часть содержимого документации представлена скриншотами (в частности, регулярные выражения). Поиск по ним невозможен. 

## Выводы по работе

К качеству анализируемой документации есть серьезные вопросы, в исходном виде она представляет разве что исторический интерес и не может быть использована для разработки, поддержки или эксплуатации продукта. Ни один из критериев качества документации не выполнен. Для дальнейшей эксплуатации продукта документацию требуется серьезно перерабатывать и приводить в соответствие с критериями, как минимум, согласно приведённому списку недочётов.

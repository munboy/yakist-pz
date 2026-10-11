# Example of Unit-testing in MS Visual Studio 2022 (C++)

## 📌 Загальна інформація про матеріал
- **Курс:** Якість програмного забезпечення та тестування
- **Джерело / Відео:** https://www.youtube.com/watch?v=zwf_fAzkqkE
- **Тривалість / Обсяг:** 10:53 (660 сек)

## 🎯 Синопсис та ключова мета
Наочний англомовний приклад налаштування та запуску модульних тестів C++ у новітньому середовищі Visual Studio 2022. Розглядається робота з шаблоном C++ Unit Test, зв'язування файлів через властивості проекту, написання позитивних та негативних перевірок за допомогою вбудованого фреймворку `Microsoft::VisualStudio::CppUnitTestFramework`.

## ⏱ Детальний структурований конспект за темами та таймлайном
### `[00:00:02 - 00:03:00]` Огляд інтерфейсу Visual Studio 2022 та створення тестового проекту
- Вибір шаблону `Native Unit Test Project` у Visual Studio 2022.
- Базова структура згенерованого коду з простором імен `Microsoft::VisualStudio::CppUnitTestFramework`.

### `[00:03:00 - 00:07:00]` Лінкування коду та налаштування компілятора
- Додавання залежностей проекту та налагодження шляхів компіляції.
- Виправлення типових помилок лінкувальника (LNK2019 Unresolved External Symbol) шляхом додавання `.obj` файлу в `Linker -> Input -> Additional Dependencies`.

### `[00:07:00 - 00:10:53]` Практичний запуск та аналіз помилок
- Написання декількох тестових методів на різні вхідні умови.
- Запуск тестів, відображення стеку викликів при падінні тесту, виправлення помилки в коді та повторний успішний запуск.

## 💡 Важливі акценти, правила викладачки та типові помилки
- Якщо виникає LNK2019, обов'язково перевірте, чи скомпільовано основний проект і чи додано посилання на його `.obj` файл у властивостях лінкувальника тесту.

---
## 📜 Повна стенограма промови / субтитри з таймкодами
> Нижче наведено повний текст промови викладачки з таймкодами. Жоден фрагмент не пропущено.

`[00:00:02]` let's consider an example of formit in C+ language step one let's create a new project in C++ langage step two add an elements that contain the entry point to the project

`[00:01:03]` and right our code for function that old main after that we add a model to the project which will for test we add a new class as the model for tasting and describe methods in this

`[00:01:53]` class this will be the Constructor and method for testing for provide the access to this method we use key public this is the Constructor of our

`[00:02:23]` class and now we add um method for testing uh this method is called is even and uh this method checks if the number is even let going to write as a quote for these methods

`[00:03:08]` and change the body of uh these metals after that re build the project let's go to the next step in this step let's create a unit test project for testing this project test number

`[00:03:54]` project at new project uh choose type for this project there is test and Native unit test project for this new unit test project add new reference on Project V model

`[00:04:31]` for project one the model to this unit test project after that create a connection between the unit test project and object file of the project being

`[00:05:22]` tested for this let's go to the property of unit test project choose then option in and add additional dependences for this project write the

`[00:05:51]` title of this project and uh file with as model this number after that I go to General option and add additional Library

`[00:06:38]` dors we go to the directory with our project and find in this directory op file for test number model working this is pass and CR it here what is it write the test

`[00:07:20]` method we add um a input data and actual and expected rues e

`[00:08:40]` after that we use some CL asset this CL Compares Theo value with expected value choose it meod and write the parameters compare after that run the unit test

`[00:09:19]` project for this let's go to the main menu and choose our test option test explore run all test in you and we can see uh in this project we have one unit test and um

`[00:09:47]` this test is first let's create the second test method if input Val will be not one and the expected value will be FSE after that let's find uh these meths now we can see we have two methods and

`[00:10:38]` all all unit test methods and all test is pass are pass Z are good results for our work thank you for your attention

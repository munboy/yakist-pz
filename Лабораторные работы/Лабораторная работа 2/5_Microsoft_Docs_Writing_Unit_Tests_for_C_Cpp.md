# Microsoft Docs: Створення модульних тестів для C/C++ у Visual Studio

## 📌 Загальна інформація про матеріал
- **Курс:** Якість програмного забезпечення та тестування
- **Джерело / Відео:** https://learn.microsoft.com/en-us/visualstudio/test/writing-unit-tests-for-c-cpp?view=vs-2019
- **Тривалість / Обсяг:** Офіційна технічна документація Microsoft

## 🎯 Синопсис та ключова мета
Структурований довідник на основі офіційної документації Microsoft Learn щодо юніт-тестування мовами C/C++ у Visual Studio 2019/2022. Охоплює вибір фреймворків тестування (Microsoft Native Unit Test, Google Test, Boost.Test, CTest), роботу з вікном Test Explorer, налаштування файлів конфігурації `.runsettings`, збір аналізу покриття коду (Code Coverage) та інтеграцію тестів у збірки.

## ⏱ Детальний структурований конспект за темами та таймлайном
### `[Розділ 1]` Підтримувані фреймворки модульного тестування C++ у Visual Studio
- **Microsoft Native Unit Test Framework:** вбудований за замовчуванням, не вимагає сторонніх пакетів, використовує макроси `TEST_CLASS`, `TEST_METHOD`.
- **Google Test (gtest):** популярний кросплатформний фреймворк, встановлюється через інсталятор Visual Studio (робоче навантаження «Розробка класичних програм на C++»).
- **Boost.Test:** підтримується через розширення Test Adapter for Boost.Test.
- **CTest:** інтеграція з проектами на основі CMake.

### `[Розділ 2]` Основні підходи до організації тестового проекту
- **Підхід 1 (Тести в окремому проекті в тому самому рішенні — РЕКОМЕНДОВАНО):**
  1. Створюється окремий проект `Native Unit Test Project`.
  2. Додається посилання на основний проект (`Add Reference`).
  3. У `Additional Include Directories` додається шлях до заголовків основного проекту.
  4. Для експорту функцій використовується або експорт `__declspec(dllexport)` (якщо DLL), або додавання відповідного `.obj` файлу в `Linker -> Input -> Additional Dependencies`.
- **Підхід 2 (Тести всередині того самого проекту):** тестові файли компілюються умовними директивами `#ifdef _DEBUG`.

### `[Розділ 3]` Робота з Test Explorer та аналіз покриття коду
- Відкриття: `Test -> Test Explorer` (Ctrl+E, T).
- Групування тестів за класами, тривалістю, результатом або проектом.
- Налагодження тесту: правою кнопкою миші `Debug Selected Tests` з точками зупинки (breakpoints).
- Аналіз покриття коду (Code Coverage) у версіях Enterprise/Professional.

## 💡 Важливі акценти, правила викладачки та типові помилки
- Для лабораторних робіт викладачка рекомендує або Native Unit Test (C++), або значно простіший MSTest у C#.

---
## 📖 Довідковий матеріал Microsoft Documentation
> Матеріал сформовано на основі офіційного керівництва Microsoft Learn: 'Write unit tests for C/C++ in Visual Studio'.

### Покрокова інструкція створення C++ Unit Test у Visual Studio:

1. **Створення проекту тестування:**
   У Solution Explorer: `Add -> New Project -> C++ -> Native Unit Test Project`.

2. **Налаштування посилань на тестований проект:**
   У тестовому проекті: `References -> Add Reference` -> обрати основний проект C++.

3. **Налаштування шляхів до заголовків (`.h`):**
   `Properties -> C/C++ -> General -> Additional Include Directories` -> додати відносний шлях `$(SolutionDir)MyProject`.

4. **Лінкування об'єктних файлів:**
   Якщо тестовані функції не експортуються через `__declspec(dllexport)`, у властивостях тестового проекту додати:
   `Linker -> Input -> Additional Dependencies` -> `$(SolutionDir)MyProject\$(Configuration)\MyCode.obj`.

5. **Синтаксис тестового методу:**
```cpp
#include "CppUnitTest.h"
#include "MyCode.h"

using namespace Microsoft::VisualStudio::CppUnitTestFramework;

namespace MyTests
{
    TEST_CLASS(CalculationTests)
    {
    public:
        TEST_METHOD(Test_Sum_ValidInput_ReturnsCorrect)
        {
            int a = 5;
            int b = 10;
            int result = Sum(a, b);
            Assert::AreEqual(15, result);
        }
    };
}
```

6. **Запуск через Test Explorer:** `Test -> Run All Tests` (Ctrl+R, A).
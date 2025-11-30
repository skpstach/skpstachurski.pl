# SKP Stachurski - Statyczna Strona Internetowa

Statyczna wersja strony internetowej Stacji Kontroli Pojazdów w Nowym Żmigrodzie, zoptymalizowana pod kątem GitHub Pages.

## 📋 Zawartość

- ✅ 6 stron HTML (strona główna, kontakt, O stacji, promocje, galeria, stacja kontroli)
- ✅ Responsywny design (mobile-first)
- ✅ Zoptymalizowane SEO
- ✅ Google Analytics (gotowe do konfiguracji)
- ✅ System zgód na cookies zgodny z RODO
- ✅ Slider zdjęć z automatycznym przewijaniem
- ✅ Galeria z lightbox
- ✅ Lazy loading obrazów
- ✅ Schema.org markup
- ✅ Sitemap.xml i robots.txt

## 🚀 Wdrożenie na GitHub Pages

### Krok 1: Utwórz repozytorium

1. Zaloguj się na GitHub
2. Utwórz nowe repozytorium:
   - Nazwa: `skpstachurski.pl` (lub dowolna inna)
   - Ustaw jako **Public**
   - **NIE** inicjalizuj z README

### Krok 2: Wgraj pliki

```bash
# W katalogu z projektem wykonaj:
git init
git add .
git commit -m "Initial commit - statyczna wersja strony SKP"
git branch -M main
git remote add origin https://github.com/TWOJA_NAZWA_UZYTKOWNIKA/skpstachurski.pl.git
git push -u origin main
```

### Krok 3: Aktywuj GitHub Pages

1. W repozytorium przejdź do **Settings**
2. W menu bocznym wybierz **Pages**
3. W sekcji "Source" wybierz:
   - Branch: `main`
   - Folder: `/ (root)`
4. Kliknij **Save**

Strona będzie dostępna pod adresem: `https://TWOJA_NAZWA_UZYTKOWNIKA.github.io/skpstachurski.pl/`

### Krok 4: Własna domena (opcjonalnie)

Jeśli chcesz użyć własnej domeny (skpstachurski.pl):

1. W ustawieniach GitHub Pages dodaj **Custom domain**: `skpstachurski.pl`
2. U swojego dostawcy domeny dodaj rekord DNS:
   - Typ: **CNAME**
   - Host: `@` lub `www`
   - Wartość: `TWOJA_NAZWA_UZYTKOWNIKA.github.io`
3. Ewentualnie dodaj również rekord A wskazujący na serwery GitHub:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

## ⚙️ Konfiguracja Google Analytics

1. Otwórz plik `js/main.js`
2. Znajdź linię z `GA_ID = 'G-XXXXXXXXXX'`
3. Zamień `G-XXXXXXXXXX` na swój prawdziwy ID Google Analytics
4. Zapisz i wgraj zmiany na GitHub

## 📱 Funkcje strony

### Responsywność
- Automatyczne dostosowanie do ekranów mobilnych, tabletów i komputerów
- Mobilne menu hamburger
- Zoptymalizowane obrazy

### SEO
- Meta tagi dla każdej strony
- Open Graph dla mediów społecznościowych
- Schema.org markup dla Google
- Sitemap.xml
- Canonical URLs
- Alt teksty dla wszystkich obrazów

### Cookies & RODO
- Banner zgody na cookies
- Wybór: wszystkie cookies lub tylko niezbędne
- Przechowywanie zgody w localStorage
- Google Analytics ładowane tylko po akceptacji

### Optymalizacja wydajności
- Lazy loading obrazów
- Minimalny CSS/JS
- Brak zewnętrznych zależności (poza Google Analytics)
- Szybkie ładowanie

## 📁 Struktura katalogów

```
skpstachurski-static/
├── index.html              # Strona główna
├── kontakt.html           # Kontakt
├── o-stacji.html          # O stacji
├── promocje.html          # Promocje
├── galeria.html           # Galeria
├── stacja-kontroli.html   # Stacja Kontroli Pojazdów
├── robots.txt             # Dla robotów wyszukiwarek
├── sitemap.xml            # Mapa strony
├── css/
│   └── style.css          # Główny plik CSS
├── js/
│   └── main.js            # Główny plik JavaScript
└── images/
    ├── 2015/11/           # Zdjęcia z 2015
    └── 2016/             # Zdjęcia z 2016
```

## 🔧 Customizacja

### Zmiana kolorów
Edytuj plik `css/style.css`, sekcja `:root`:
```css
:root {
    --primary-color: #c41e3a;     /* Kolor główny (czerwony) */
    --secondary-color: #1a1a1a;   /* Kolor drugorzędny (czarny) */
    --text-color: #333;           /* Kolor tekstu */
}
```

### Zmiana treści
Po prostu edytuj odpowiednie pliki HTML i wgraj zmiany na GitHub.

### Dodanie nowych zdjęć
1. Dodaj zdjęcia do katalogu `images/`
2. Edytuj odpowiedni plik HTML
3. Wgraj zmiany na GitHub

## 📊 Analityka

Po skonfigurowaniu Google Analytics będziesz mógł śledzić:
- Liczbę odwiedzin
- Źródła ruchu
- Najpopularniejsze strony
- Czas spędzony na stronie
- Współczynnik odrzuceń

## 🆘 Wsparcie

W razie problemów:
- Sprawdź logi w zakładce **Actions** w repozytorium GitHub
- Upewnij się, że wszystkie pliki zostały wgrane
- Sprawdź konfigurację DNS (dla własnej domeny)

## 📝 Licencja

© 2025 SKP Stachurski. Wszelkie prawa zastrzeżone.

## 🔄 Aktualizacje

Aby zaktualizować stronę:

```bash
# Wprowadź zmiany w plikach
git add .
git commit -m "Opis zmian"
git push origin main
```

Strona zaktualizuje się automatycznie w ciągu kilku minut.

## ✨ Dodatkowe funkcje do rozważenia w przyszłości

- [ ] Blog z aktualnościami
- [ ] System rezerwacji online
- [ ] Formularze kontaktowe
- [ ] Chat na żywo
- [ ] Panel klienta
- [ ] Integracja z systemem rezerwacji

---

**Powodzenia z nową stroną! 🚗💨**

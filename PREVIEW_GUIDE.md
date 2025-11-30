# 👀 Jak podejrzeć stronę przed wdrożeniem?

## Opcja 1: Bezpośrednio w przeglądarce (najłatwiej)

1. Otwórz katalog ze stroną w eksploratorze plików
2. Znajdź plik `index.html`
3. Kliknij prawym przyciskiem myszy
4. Wybierz "Otwórz za pomocą" → Twoja przeglądarka (Chrome, Firefox, Edge)

**Gotowe!** Możesz przeglądać wszystkie strony.

### ⚠️ Uwaga:
Niektóre funkcje (jak Google Analytics) nie zadziałają w trybie lokalnym - to normalne.
Wszystko będzie działać poprawnie po wdrożeniu na GitHub Pages.

## Opcja 2: Lokalny serwer (zalecane dla testów)

Lokalne otwieranie plików HTML może nie pokazywać niektórych elementów poprawnie.
Lepiej użyć lokalnego serwera.

### Windows - Python (jeśli masz zainstalowany Python):

```bash
# Otwórz terminal/PowerShell w katalogu ze stroną
cd ŚCIEŻKA_DO_KATALOGU

# Uruchom serwer
python -m http.server 8000
```

Otwórz: http://localhost:8000

### macOS/Linux - Python:

```bash
# Otwórz terminal w katalogu ze stroną
cd ŚCIEŻKA_DO_KATALOGU

# Uruchom serwer (Python 3)
python3 -m http.server 8000
```

Otwórz: http://localhost:8000

### Node.js - http-server (jeśli masz Node.js):

```bash
# Zainstaluj http-server globalnie (raz)
npm install -g http-server

# W katalogu ze stroną:
http-server -p 8000
```

Otwórz: http://localhost:8000

### VS Code - Live Server:

Jeśli używasz VS Code:

1. Zainstaluj rozszerzenie "Live Server"
2. Kliknij prawym na `index.html`
3. Wybierz "Open with Live Server"

## Opcja 3: Upload na GitHub i podgląd

Po wgraniu na GitHub:

```
https://TWOJA_NAZWA.github.io/NAZWA_REPO/
```

## 📝 Co sprawdzić przed wdrożeniem?

### ✅ Checklist testowania:

#### Funkcjonalność:
- [ ] Wszystkie linki w menu działają
- [ ] Slider na stronie głównej przewija się
- [ ] Lightbox w galerii otwiera się po kliknięciu
- [ ] Mobilne menu rozwija się i zwija
- [ ] Wszystkie obrazy się ładują
- [ ] Banner cookies pokazuje się i zamyka

#### Responsywność (testuj w różnych rozmiarach):
- [ ] Desktop (1920px, 1366px)
- [ ] Tablet (768px)
- [ ] Mobile (375px, 414px)

**Jak testować responsywność?**
- Chrome/Firefox: F12 → Tryb responsywny
- Lub zmniejszaj okno przeglądarki

#### Treść:
- [ ] Wszystkie teksty są poprawne
- [ ] Numery telefonu działają (kliknięcie = dzwonienie)
- [ ] Email działa (kliknięcie = otwiera program pocztowy)
- [ ] Linki do Facebook działają
- [ ] Zdjęcia mają sensowne nazwy alt

#### SEO:
- [ ] Każda strona ma unikalny tytuł
- [ ] Każda strona ma meta description
- [ ] Sitemap.xml jest dostępny
- [ ] Robots.txt jest dostępny

## 🔍 Narzędzia do testowania

### 1. Chrome DevTools (F12)
- Console - sprawdź czy nie ma błędów (czerwone komunikaty)
- Network - sprawdź czy wszystkie zasoby się ładują
- Lighthouse - audyt wydajności i SEO

### 2. Responsywność online:
- https://responsivedesignchecker.com
- https://www.browserstack.com/responsive (darmowy trial)

### 3. SEO online:
- https://pagespeed.web.dev/ - PageSpeed Insights
- https://search.google.com/test/mobile-friendly - Mobile-Friendly Test

### 4. Walidatory HTML:
- https://validator.w3.org/ - Sprawdź poprawność HTML
- https://jigsaw.w3.org/css-validator/ - Sprawdź poprawność CSS

## 🐛 Najczęstsze problemy

### Problem: Obrazy się nie ładują
**Rozwiązanie:** Sprawdź ścieżki w HTML. Ścieżka powinna być `images/2015/11/NAZWA.jpg`

### Problem: Slider nie działa
**Rozwiązanie:** Otwórz Console (F12) i sprawdź czy są błędy JavaScript

### Problem: Style się nie aplikują
**Rozwiązanie:** Sprawdź czy plik CSS jest w katalogu `css/style.css`

### Problem: Menu mobilne nie działa
**Rozwiązanie:** Sprawdź czy plik JS jest w `js/main.js` i czy się załadował

### Problem: Banner cookies nie znika po kliknięciu
**Rozwiązanie:** To normalne w trybie lokalnym. Po wdrożeniu będzie działać.

## 📱 Testowanie na prawdziwych urządzeniach

### Android:
1. Wgraj stronę na GitHub Pages
2. Otwórz link na telefonie
3. Dodaj do ekranu głównego dla szybkiego dostępu

### iOS:
1. Wgraj stronę na GitHub Pages
2. Otwórz w Safari
3. Przycisk "Udostępnij" → "Dodaj do ekranu początkowego"

## 🎨 Screenshoty dla klienta

Jeśli chcesz pokazać klientowi jak wygląda strona:

1. **Full Page Screenshot:**
   - Chrome: F12 → Cmd/Ctrl + Shift + P → "Capture full size screenshot"
   - Firefox: F12 → ... menu → "Take a screenshot of the entire page"

2. **Responsywne:**
   - F12 → Tryb responsywny → Wybierz urządzenie → Screenshot

## 💡 Wskazówki

### Przed wdrożeniem na produkcję:
1. Przetestuj na minimum 3 przeglądarkach (Chrome, Firefox, Safari)
2. Przetestuj na telefonie i tablecie
3. Sprawdź wszystkie linki
4. Zweryfikuj poprawność danych kontaktowych
5. Uruchom Lighthouse audit

### Po wdrożeniu:
1. Sprawdź na produkcji czy wszystko działa
2. Przetestuj ponownie na urządzeniach mobilnych
3. Sprawdź czy Google Analytics zbiera dane
4. Zweryfikuj czy sitemap jest dostępny

## ✅ Gotowy do wdrożenia?

Jeśli wszystko działa poprawnie lokalnie:
1. Przejdź do **README.md** - instrukcje wdrożenia GitHub Pages
2. Lub **START_HERE.md** - szybki start

---

**Miłego testowania! 🧪**

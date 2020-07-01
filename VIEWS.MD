# Dashboard

- `/`
  - Today's order statistic / statystyki dzisiejszych zamówień (remote and local/ zdalne i lokalne)
  - Reservation and events list / lista rezerwacji i zaplanowanych eventów na dzisiaj

# Login / Logowanie

- `/login`
  - login and password inputs / pola na login i hasło
  - login button / guzik zalogowania (link to dashboard)


# Available tables view / dostępność stolików

- `/tables`
  - date an hour choice / wybór daty i godziny
  - array with resarvation and events / tabela z listą rezerwacji oraz wydarzeń
    - every each column = 1 table / każda kolumna = 1 stolik
    - every each command = 30 min / każdy wiersz = 30 minut
    - is to resemble Google Calendar view, where in the columns there are different tables instead of days /
      ma przypominać widok kalendarzu Google, gdzie w kolumnach zamiast dni są różne stoliki
    - after click reservation or events, we are going to detalist page / po kliknięciu rezerwacji lub eventu przechodzimy na strone szczegółów
- `/tables/booking/:id`
  - must contain all information aboput reservation / musi zawierać wszystkie informacje dotyczące rezerwacji
  - allows edition and save changes / umożliwia edycje i zapisanie zmian
- `/tables/booking/new`
  - analogous to the above, without initial information / analogicznie do powyższej, bez początkowych informacji
- `/tables/events/:id`
  - analogous to the above, for events, without initial information / analogicznie do powyższej, dla eventów, bez początkowych informacji
- `/tables/events/new`
  - analogous to the above, for events, without initial information / analogicznie do powyższej, dla eventów, bez początkowych informacji


# Waiter view / widok kelnera

- `/waiter`
  - array / tabela
    - in command tables /  w wierszach stoliki
    - in columns different information (staus, last activity) / w kolumnach różne rodzaje informacji (status, czas ostatniej aktywności)
    - in the last column available actions of selectes table / w ostatniej kolumnie dostępne akcje wybranego stolika
- `/waiter/order/new`
  - table number (editable) / numer stolika (edytowalny)
  - product menu / menu produktów
  - selected table options / opcje wybranego produktu
  - order (ordered products with options and price) / zamówienie (zamówione produkty z opcjami i ceną)
  - order price / kwota zamówienia
- `/waiter/order/:id
  - as above / jak powyższa

# Kitchen view / widok kuchni

- `/kitchen`
  - display order list which they were submitted/ wyświetlać listę zamówieni w kolejności ich złożenia
  - list must have / lista musi zawierać
    - table number (or remote number) / numer stolika (lub zamówienia zdalengo)
    - all information about ordered dishes / pełne informacje dot. zamówionych dań
  - list must have option marking the order as completed  / na liście musi być możliwość oznaczenia zamówienia jako zrealizowane

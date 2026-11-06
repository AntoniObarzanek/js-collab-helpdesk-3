<h1>TESTY</h1>

<p><b>1. Sprawdzenie tytułów o określonych</b>
<u>Oczekiwany wynik:</u> Tytuły o długości nie mieszczącej się w przedziale <3;80> powinny zostać nie dopuszczone do wyświetlenia.
<u>Otrzymany wynik:</u> Użytkownik podający tytuły inne niż z przedziału zostaje poinformowany o ich niepoprawności poprzez czerwony tekst "Tytuł musi miec od 3 do 80 znaków!" pod oknem formularza, a jego rekord nie jest wyświetlany.
</p>

<p><b>2. Dwa takie same tytuły</b>
<u>Oczekiwany wynik: Oba rekordy powinny zostać przyjęte.</u>
<u>Otrzymany wynik: Dzięki losowo generowanym id poszczególnych tasków oba zadania zostają wyświetlone.</u> 
</p>

<p><b>3. Wszystkie statusy</b>
<u>Oczekiwany wynik: Statusy powinny określać aktualny stan w jakim jest zadanie. Rotacja ich w zadaniu powinna być dowolna.</u> 
<u>Otrzymany wynik:</u> Program posiada takie statusy jak: new, doing i done. Odzwierciedlają one na jakim etapie jest każdy task i można zmieniać status zadania dowolnie.
</p>

<p><b>4. Pusty filtr</b>
<u>Oczekiwany wynik:</u> W momencie gdy nie ustawimy żadnego z filtrów powinna pokazać się jakaś swojego rodzaju informacja o tym, aby użytkownik mógł odnaleźć się w sytuacji.
<u>Otrzymany wynik:</u> W naszym programie nie istnieje możliwość pustego filtra, ponieważ w przypadku gdy użytkownik odznaczy każdy z nich automatycznie zaznacza się checkbox "all". Jest on również zaznaczony przy pierwszym uruchomieniu programu.
</p>

<p><b>5. Teskt HTML wpisany w tytule</b>
<u>Oczekiwany wynik:</u> Znaczniki HTML wpływają na treść tytułu.
<u>Otrzymany wynik:</u> Dzięki możliwości personalizowania tytułów użytkownik może dodawać np. symbole.
</p>

<p><b>6. Dodawanie rekordu klwaiszem</b>
<u>Oczekiwany wynik:</u> Klawisz enter powinien pełnić funkcję równoważną do fukcji przycisku "Prześlij".
<u>Otrzymany wynik:</u> Klawiszem enter można dodawać taski, gdy tytuł nie mieści się w przedziale to za pomocą przycisku również nie da się go dodać.
</p>

<p><b>7. Odświeżanie strony</b>
<u>Oczekiwany wynik:</u> Po odświeżeniu strony rekordy powinny zostać wyczyszczone.
<u>Otrzymany wynik:</u> W naszym programie zostają tylko rekordy zakodowane na stałe, są one tylko przejściowe i zostaną usunięte przed finalną wersją.
</p>

<p><b>8. Liczba zadań ponad limit</b>
<u>Oczekiwany wynik:</u> Program nie powinien przyjmować więcej zadań niż limit (1000).
<u>Otrzymany wynik:</u> Po dodaniu ostatniego możliwego taska więcej nie będzie wypsywanych.
 </p>


<p>Testy wykonał: <em>Adrian Kramarz</em></p>
<h1>TESTY</h1>

<p><b>1. Sprawdzenie tytułów o określonych</b> </br>
<ins>Oczekiwany wynik:</ins> Tytuły o długości nie mieszczącej się w przedziale <3;80> powinny zostać nie dopuszczone do wyświetlenia. </br>
<ins>Otrzymany wynik:</ins> Użytkownik podający tytuły inne niż z przedziału zostaje poinformowany o ich niepoprawności poprzez czerwony tekst "Tytuł musi miec od 3 do 80 znaków!" pod oknem formularza, a jego rekord nie jest wyświetlany. </br>
</p>

<p><b>2. Dwa takie same tytuły</b> </br>
<ins>Oczekiwany wynik:</ins> Oba rekordy powinny zostać przyjęte. </br>
<ins>Otrzymany wynik:</ins> Dzięki losowo generowanym id poszczególnych tasków oba zadania zostają wyświetlone.</u> </br>
</p>

<p><b>3. Wszystkie statusy</b> </br>
<ins>Oczekiwany wynik:</ins> Statusy powinny określać aktualny stan w jakim jest zadanie. Rotacja ich w zadaniu powinna być dowolna. </br>
<ins>Otrzymany wynik:</ins> Program posiada takie statusy jak: new, doing i done. Odzwierciedlają one na jakim etapie jest każdy task i można zmieniać status zadania dowolnie.
</p>

<p><b>4. Pusty filtr</b> </br>
<ins>Oczekiwany wynik:</ins> W momencie gdy nie ustawimy żadnego z filtrów powinna pokazać się jakaś swojego rodzaju informacja o tym, aby użytkownik mógł odnaleźć się w sytuacji. </br>
<ins>Otrzymany wynik:</ins> W naszym programie nie istnieje możliwość pustego filtra, ponieważ w przypadku gdy użytkownik odznaczy każdy z nich automatycznie zaznacza się checkbox "all". Jest on również zaznaczony przy pierwszym uruchomieniu programu.
</p>

<p><b>5. Tekst HTML wpisany w tytule</b> </br>
<ins>Oczekiwany wynik:</ins> Znaczniki HTML wpływają na treść tytułu. </br>
<ins>Otrzymany wynik:</ins> Dzięki możliwości personalizowania tytułów użytkownik może dodawać np. symbole. </br>
</p>

<p><b>6. Dodawanie rekordu klwaiszem</b> </br>
<ins>Oczekiwany wynik:</ins> Klawisz enter powinien pełnić funkcję równoważną do fukcji przycisku "Prześlij". </br>
<ins>Otrzymany wynik:</ins> Klawiszem enter można dodawać taski, gdy tytuł nie mieści się w przedziale to za pomocą przycisku również nie da się go dodać.
</p>

<p><b>7. Odświeżanie strony</b> </br>
<ins>Oczekiwany wynik:</ins> Po odświeżeniu strony rekordy powinny zostać wyczyszczone. </br>
<ins>Otrzymany wynik:</ins> W naszym programie zostają tylko rekordy zakodowane na stałe, są one tylko przejściowe i zostaną usunięte przed finalną wersją.
</p>

<p><b>8. Liczba zadań ponad limit</b> </br>
<ins>Oczekiwany wynik:</ins> Program nie powinien przyjmować więcej zadań niż limit (1000). </br>
<ins>Otrzymany wynik:</ins> Po dodaniu ostatniego możliwego taska więcej nie będzie wypsywanych. </br>
 </p>


<p>Testy wykonał: <em>Adrian Kramarz</em></p>

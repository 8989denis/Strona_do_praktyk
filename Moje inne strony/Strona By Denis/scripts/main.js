
function zmiana(z) {
    var legenda = document.getElementById('legend')
    var edit = document.getElementById('edit')
    if(z == 1)
    {
        legenda.innerHTML="Co to jest Scrum?";
        edit.innerHTML='<h4>Lepszy sposób tworzenia produktów</h4>Okładka przewodnika ScrumScrum to ramy, w ramach których ludzie mogą rozwiązywać złożone problemy adaptacyjne, jednocześnie produktywnie i kreatywnie dostarczając produkty o najwyższej możliwej wartości.<br><br>Scrum to lekki framework, który pomaga ludziom, zespołom i organizacjom generować wartość poprzez adaptacyjne rozwiązania dla złożonych problemów. Współtwórcy Scruma, Ken Schwaber i Jeff Sutherland, napisali The Scrum Guide, aby wyjaśnić Scrum w jasny i zwięzły sposób. Ten przewodnik zawiera definicję Scruma. Ta definicja składa się z odpowiedzialności Scruma, zdarzeń, artefaktów i reguł, które je łączą.<br><br>Krótko mówiąc, Scrum wymaga od Scrum Mastera wspierania środowiska, w którym: <ol><li>Właściciel produktu zleca pracę nad złożonym problemem w Backlogu Produktu.</li><li>Zespół Scrumowy przekształca wybór pracy w Przyrost wartości podczas Sprintu.</li><li>Zespół Scrumowy i jego interesariusze sprawdzają wyniki i dostosowują się do następnego Sprintu.</li></ol> źródło ~ scrum.org';
    }
    if(z == 2)
    {
        legenda.innerHTML="Słownik Scruma";
        edit.innerHTML='<q>Scrum Słownik ma stanowić przegląd terminów związanych Scrum. Niektóre z wymienionych terminów nie są obowiązkowe w Scrumie, ale zostały dodane, ponieważ są powszechnie używane w Scrumie. <br><br> Aby dowiedzieć się więcej na temat ram Scrum, aby określić, który z tych terminów są wymagane elementy Scrum i zrozumieć, w jaki sposób wspomniane elementy są połączone, zalecamy odwołać The  Scrum Guide . Aby dowiedzieć się więcej o terminach specyficznych dla zespołów programistycznych używających Scrum i zwinnych technik tworzenia oprogramowania, zapoznaj się z  glosariuszem Professional Scrum Developer .</q> ~ scrum.org';
    }
    if(z == 3)
    {
        legenda.innerHTML="Scrum Framework";
        edit.innerHTML="<q>Scrum jest prosty. Stanowi przeciwieństwo dużego zbioru przeplatanych obowiązkowych elementów. Scrum nie jest  metodologią . Scrum wdraża naukową  metodę  empiryzmu. Scrum zastępuje programowane podejście algorytmiczne podejściem heurystycznym, z szacunkiem dla ludzi i samoorganizacją w celu radzenia sobie z nieprzewidywalnością i rozwiązywania złożonych problemów. Poniższa grafika przedstawia Scrum w działaniu zgodnie z opisem Kena Schwabera i Jeffa Sutherlanda w ich książce Software in 30 Days, która zabiera nas od planowania do dostarczania oprogramowania .</q> ~ scrum.org";
    }
    if(z == 4)
    {
        legenda.innerHTML="Partnerstwo";
        edit.innerHTML=`<h3>Wspólne udoskonalenie profesjonalizmu dostarczania oprogramowania</h3>
        <h4>Dla klientów Scrum.org<h4>
        Globalna sieć Scrum.org odgrywa kluczową rolę w naszych wysiłkach na rzecz doskonalenia zawodu programisty. Zdajemy sobie sprawę, że sami nie możemy liczyć na osiągnięcie naszej misji. Trwała poprawa jest realizowana poprzez znaczącą współpracę z szeregiem niezwykłych ludzi i organizacji. To właśnie dzięki wykorzystaniu mocnych stron tej sieci współpracy jesteśmy w stanie osiągnąć nasze największe sukcesy.
        <br><br>
        <h4>Dla partnerów Scrum.org<h4>
        Program partnerski Scrum.org zapewnia partnerom zasoby i możliwości doskonalenia umiejętności, budowania większej liczby odbiorców i wywierania większego wpływu na zawód dostawcy oprogramowania. Są częścią większej globalnej społeczności Scrum.org, która obejmuje pracowników Scrum.org, profesjonalnych trenerów Scruma, menedżerów ds. Zaangażowania i innych partnerów z całego świata. <br><br> ~ scrum.org`;
    }
    if(z == 5)
    {
        alert("Zapoznaj sie z ich stroną i zasobami. Powodzenia!!!")
    }
}
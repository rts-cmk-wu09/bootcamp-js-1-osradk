 const citatBlok=document.querySelector("blockquote");
 const citater = ["Alt, hvad jeg ved, er, at jeg intet ved.(Sokrates)", 
 "Det har jeg aldrig gjort før, så det klarer jeg helt sikkert.(Pippi Langstrømpe)", 
 "Find ikke fejl, find en løsning.(Henry Ford)", 
 "Vær dig selv, alle andre er alligevel optaget.(Oscar Wilde)", 
 "Når du står i lort til halsen, er alt, hvad du kan gøre, at synge.", 
 "Du misser 100 procent af de skud, du ikke tager.", 
 "Kend reglerne, så du ved, hvordan du bryder dem ordentligt.", 
 "Ingen kan få dig til at føle dig mindreværdig uden din", 
 "Man genkender ikke sit livs vigtige øjeblikke, før det er for sent.", 
 "Det er min erfaring, at mennesker uden laster heller ikke har"];


 const ran = Math.floor(Math.random() * 10);;
 citatBlok.textContent = citater[ran];
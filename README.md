
## Vad är tjänsten?

Denna Tjänst är en webbapplikation som låter dig översätta tal mellan olika språk i realtid. Du spelar in ditt tal direkt i appen, och tjänsten omvandlar det inspelade ljudet till text. Denna text översätts sedan automatiskt till det språk du har valt. Slutligen förvandlas den översatta texten tillbaka till tal, som spelas upp för dig direkt. På så sätt kan du enkelt kommunicera på andra språk utan att behöva skriva eller läsa. Allt sker automatiskt och smidigt genom appen.


## Vilka är målgruppen?

Målgruppen för denna tjänst inkluderar:
   - Resenärer som behöver kommunicera på olika språk i realtid.
   - Affärsproffs som interagerar med internationella klienter och kollegor.
   - Personer i mångkulturella miljöer som behöver överbrygga språkbarriärer.
   - Alla som behöver en snabb och enkel lösning för talöversättning på språng.


## Om Etik och säker använding. 

Vi använder oss av OpenAI Whisper för transkribering och textdata från det skickas till Google Clouds översättnings API för att översätta inspelningen. Denna tjänst använder röstinspelningar endast för omedelbar bearbetning. Ingen personlig data eller ljudinspelningar sparas permanent.

Viktigt att tänka på är att detta är en AI tjänst. Den kan innehålla fel översättningar eller missförstånd. Tjänsten bör inte användas där felaktiv översättning kan leda till skada eller farlig missförstånd. Om det är viktigt bör du anställa en äkta översättare.

Denna tjänst är gjord för att underlätta positiv kommunikation över språkbarriärer. Men användare kan missbruka den genom att spela in konversationer på andra utan deras samtycke eller översätta innehåll som är olagligt, stötande eller kränkande. 
Det gäller att användaren själv har en moralisk kompass och inser att man inte bör använda en översättningstjänst för såna aktiviter.

## Andra väsentliga avvägningar som gjorts vid utvecklingen

Hela projektet är byggt med typescript, react och node för att skapa något som är robust och skalbart.
Tjänsten är gjord för Mobile first och är responsiv till alla möjliga skärmstorlekar. Användare har tillgång en omfattande språklista som dom kan översätta till. Designen är enkel att förstå med tydlig navigering för att göra tjänsten lättanvänd.

Hela tjänsten är byggd på 3 APIer som jobbar ihop för att kunna översätta tal i realtid. 
- Whisper används för att transkribera användarens inspelade tal till text. 
- Google Cloud translation API används för att översätta texten till det valda språket.
- OpenAI text to speech api används för att omvandla texten till tal igen som spelas upp för användaren.



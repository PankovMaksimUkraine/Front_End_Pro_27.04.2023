const question1 = +prompt('Скільки тобі років?');
const question2 = prompt('У якому місті він живеш?');
const question3 = prompt('Який улюблений вид спорту?');

if(question1 > 0) {
     option = `Тобі ${question1} років.`}
else if(question1 === null)  {
     option = "Шкода, що Ви не захотіли ввести свій вік. "
} else {
    option = `Ти не  правильно вів свій вік. `
}
switch(question2) {
    case "Київ":
        capital = `Ти живеш у столиці України, у місті ${question2}. `
    break
    case "Вашингтон" :
        capital =  `Ти живеш у столиці США, у місті ${question2}. `
    break
    case "Лондон" :
        capital = `Ти живеш у столиці Великобританії, у місті ${question2}. `
    break
    case null :
        capital = "Шкода, що Ви не захотіли ввести свою країну. "
    break
    default :
    capital =  `Ти живеш  у місті ${question2}.`
}
 switch(question3) {
    case "Футбол": 
         sport = `Ти вказав ${question3}. Круто! Хочеш стати як Зинедин Зидан? `
    break
    case "Щахмати" : 
         sport = `Ти вказав ${question3}. Круто! Хочеш стати як Гаррі Каспаров? `
    break 
    case "Біг"  : 
         sport = `Ти вказав ${question3}. Круто! Хочеш стати як Усейн Сент-Лео Болт? `
    break 
    case null  : 
         sport = "Шкода, що Ви не захотіли ввести свій улюблений спорт."
    break 
    default :
         sport = `Твій улюблений спорт ${question3}. `
 }
alert(option + capital + sport)
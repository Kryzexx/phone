let hour = new Date() // ამით იგებ რა დროა ეხლა შენ ქვეყანაში


document.querySelector('.hour span').textContent = `${hour.getHours()}:${hour.getMinutes()}`
// - document.querySelector('.hour span')'ით წვდები hour -ის ტექსტს და textContent ით არედაქტირებ მაგის ტექსტს
// = hour.getHours() ით იგებ საათს და hour.getMinutes() ზუსტ წუთს და ეგ გამოაქ textContent ის საშუალებით საიტზე

document.querySelector('.date span').textContent = `${hour.getMonth() + 1}/${hour.getDate()}/${hour.getFullYear()}`

// აქაც ზუსტად იგივეს შვება. იქ + 1 იმიტო მიწერია რო getMonth() აბრუნებს 1 თვით უკან ანუ მაისის დროს დააბრუნებდა აპრილს
// და ამ + 1 მაისს ვაბრუნებიბენ

let isLocked = true
// ეს იმისთვისაა რო როცა ჩაიტვირთება საიტი isLocked გახდება true ანუ დალოქილი იქნება ტელეფონი


document.querySelector('.phone-img').addEventListener("mouseleave", () => {
    if(isLocked == true) { // თუ დალოქილია გამოჩნდეს ესენი 
        document.querySelector('.applications').classList.add('show')
        document.querySelector('.downapps').classList.add('show')
        document.querySelector('.swipe').classList.add('hide')
        isLocked = false // აქ ვუწერ რო დალოქილი აღარაა და ყოველ მაუსის დატოვებაზე თავიდან არ გამოაჩინოს
    }
})

// addEventListener("mouseleave") - ნიშნავს იმას რო როცა მაუსი დატოვებს ტელეფონს გამოჩნდეს უკვე აპლიკაციები
// classlist.add ით კლასს უმატებ "show" ზე css ში მაქ გაწერილი რო გამოჩნდეს


function emitApp(appid) {
    cef.emit('tel:app', appid)
    /* appid - შეიძლება იყოს:
    call - darekva
    mobbank - mobile bank
    gps - gaxsnis gps's
    toprich - gaxsnis toprich's
    quest - gaxsni questebs
    report - gaxsni reports
    advertisement - gaxsni reklamis gasagzavn dialogs
    familymenu - gaxsnis family menius
    skills - gaxsni iaragis skillebs
    messages - gaxsni mesijebs 
    spotify - gaxsni musikis chasawers
    camera - gaxsni kameras
    
    დანარჩენს პავნოში ისე გააკეთებ როგორც Spawn-choose ვქენით
    */
}

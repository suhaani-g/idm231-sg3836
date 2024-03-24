
const catBreedsAsZodiacSigns = [
    "Aries: Bengal - Bengals are energetic, adventurous, and bold, much like the pioneering spirit of Aries. They love to play and explore, embodying the dynamic and courageous nature of this fire sign.",
    "Taurus: British Shorthair - Known for their calm and relaxed demeanor, British Shorthairs are the perfect match for the stable and comfort-loving Taurus. They enjoy the finer things in life, such as cozy naps and being pampered.",
    "Gemini: Sphynx - The curious and sociable Sphynx, with its unique appearance and playful nature, mirrors the dual personality and intellectual curiosity of Gemini. They're known for their love of interaction and communication.",
    "Cancer: Ragdoll - Ragdolls, known for their gentle and affectionate nature, align well with the nurturing and home-loving Cancer. They form deep bonds with their families and love to be cuddled.",
    "Leo: Maine Coon - The regal and charismatic Maine Coon, with its impressive mane and commanding presence, suits the bold and royal nature of Leo. They're natural leaders, confident and sociable.",
    "Virgo: Siamese - The intelligent and meticulous Siamese cat, known for its communicative meows and problem-solving skills, resonates with the analytical and detail-oriented Virgo. They thrive on mental stimulation.",
    "Libra: Persian - The elegant and charming Persian, with its luxurious coat and serene demeanor, embodies the beauty-loving and harmonious Libra. They enjoy peaceful environments and companionship.",
    "Scorpio: Bombay - The mysterious and intense Bombay cat, with its sleek black coat and penetrating gaze, mirrors the enigmatic and passionate nature of Scorpio. They are known for their loyalty and depth of character.",
    "Sagittarius: Abyssinian - The adventurous and energetic Abyssinian, always in search of the next adventure, matches the explorative and optimistic spirit of Sagittarius. They're known for their playful and outgoing nature.",
    "Capricorn: Scottish Fold - The pragmatic and disciplined Scottish Fold, with its unique ear shape and calm temperament, aligns with the responsible and traditional Capricorn. They appreciate routine and are very loyal.",
    "Aquarius: Devon Rex - The quirky and unconventional Devon Rex, with its unusual looks and intelligent, playful behavior, suits the innovative and eccentric Aquarius. They're known for their friendly and social nature.",
    "Pisces: Turkish Angora - The intuitive and sensitive Turkish Angora, with its graceful appearance and empathetic nature, reflects the imaginative and compassionate Pisces. They are often seen as mystical and enchanting."
    ];

var zodiacIndex=0;
var imageName="";
var sound;
const date1=document.querySelector('.date1');
const middleImage=document.querySelector('.middleimage');
const dateButton=document.querySelector('.submiticon');
var catName=document.querySelector('.welcome-title');
const pageDiv=document.querySelector('.pagediv');
const images = document.querySelectorAll('.image2');

images.forEach(image => {
    image.addEventListener('click', handleImageClicks);
});


dateButton.addEventListener('click',function(event){

  if(date1.value){
    const birthdate = date1.value;
    const date = new Date(birthdate);
    var month = date.getMonth() + 1; 
    var day = date.getDate();
    var zodiacSign = getZodiacSign(month, day);
    catName.innerHTML = catBreedByZodiac(zodiacSign);
    document.querySelector(".desc").textContent=catBreedsAsZodiacSigns[zodiacIndex];
    middleImage.src="img/"+imageName;
    sound.play();
  }
});

function handleImageClicks(event) {
    
    imageName=event.target.src;
    var sound;
    switch (event.target.id){
        case "bengal":
            document.querySelector(".desc").textContent=catBreedsAsZodiacSigns[0];
            middleImage.src=imageName;
            catName.innerHTML = "Bengal";
            console.log(catName.innerHTML)
            sound = document.getElementById('sbengal');
            sound.play();
            break;
        case "british":
            document.querySelector(".desc").textContent=catBreedsAsZodiacSigns[1];
            middleImage.src=imageName;
            catName.innerHTML ="British Shorthair" ;
            sound = document.getElementById('sbritish');
            sound.play();
            break;            
        case "spyhnx":
            document.querySelector(".desc").textContent=catBreedsAsZodiacSigns[2];
            middleImage.src=imageName;
            catName.innerHTML="Spyhnx";
            sound = document.getElementById('sspyhnx');
            sound.play();
            break;
        case "ragdoll":
            document.querySelector(".desc").textContent=catBreedsAsZodiacSigns[3];
            middleImage.src=imageName;
            catName.innerHTML="RagDoll";
            sound = document.getElementById('mragdoll');
            sound.play();
            break;
        case "maine":
            document.querySelector(".desc").textContent=catBreedsAsZodiacSigns[4];
            middleImage.src=imageName;
            catName.innerHTML="Maine Doll";
            sound = document.getElementById('smaine');
            sound.play();
            break;
        case "siamese":
            document.querySelector(".desc").textContent=catBreedsAsZodiacSigns[5];
            middleImage.src=imageName;
            catName.innerHTML="Siamese";
            sound = document.getElementById('ssiamese');
            sound.play();
            break;
        case "persian":
            document.querySelector(".desc").textContent=catBreedsAsZodiacSigns[6];
            middleImage.src=imageName;
            catName.innerHTML="Persian";
            sound = document.getElementById('spersian');
            sound.play();
            break;            
        case "bombay":
            document.querySelector(".desc").textContent=catBreedsAsZodiacSigns[7];
            middleImage.src=imageName;
            catName.innerHTML="Bombay";
            sound = document.getElementById('sbombay');
            sound.play();
            break;
        case "abyssinian":
            document.querySelector(".desc").textContent=catBreedsAsZodiacSigns[8];
            middleImage.src=imageName;
            catName.innerHTML="Abyssinian";
            sound = document.getElementById('sabyssinian');
            sound.play();
            break;
        case "scottish":
            document.querySelector(".desc").textContent=catBreedsAsZodiacSigns[9];
            middleImage.src=imageName;
            catName.innerHTML="Scottish Fold";
            sound = document.getElementById('sscottish');
            sound.play();
            break;
        case "devon":
            document.querySelector(".desc").textContent=catBreedsAsZodiacSigns[10];
            middleImage.src=imageName;
            catName.innerHTML="Devon Rex";
            sound = document.getElementById('sdevon');
            sound.play();
            break;
        case "turkish":
            document.querySelector(".desc").textContent=catBreedsAsZodiacSigns[11];
            middleImage.src=imageName;
            catName.innerHTML="Turkish Van";
            sound = document.getElementById('sturkish');
            sound.play();
            break;
                    
                            
    }

}

function getZodiacSign(month, day) {
    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) return 'Capricorn';
    if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) return 'Aquarius';
    if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) return 'Pisces';
    if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) return 'Aries';
    if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) return 'Taurus';
    if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) return 'Gemini';
    if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) return 'Cancer';
    if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) return 'Leo';
    if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) return 'Virgo';
    if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) return 'Libra';
    if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) return 'Scorpio';
    if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) return 'Sagittarius';
}


function catBreedByZodiac(zodiac) {
    switch (zodiac) {
        case "Aries":
            zodiacIndex=0;
            imageName="bengal.png";
            sound = document.getElementById('sbengal')
            return "Bengal";
        case "Taurus":
            zodiacIndex=1;
            imageName="british.png";
            sound = document.getElementById('sbritish')
            return "British Shorthair";
        case "Gemini":
            zodiacIndex=2;
            imageName="sphynx.png";
            sound = document.getElementById('sspyhnx')
            return "Spyhnx";          
        case "Cancer":
            zodiacIndex=3
            imageName="ragdoll.png";
            sound = document.getElementById('mragdoll')
            return "Ragdoll";
        case "Leo":
            zodiacIndex=4
            imageName="maine.png";
            sound = document.getElementById('smaine')
            return "Maine Coon";
        case "Virgo":
            zodiacIndex=5;
            imageName="siamese.png";
            sound = document.getElementById('ssiamese')
            return "Siamese";
           
        case "Libra":
            zodiacIndex=6;
            imageName="persian.png";
            sound = document.getElementById('spersian')
            return "Persian";
        case "Scorpio":
            zodiacIndex=7;
            imageName="Bombay.png";
            sound = document.getElementById('sbombay')
            return "Bombay";
        case "Sagittarius":
            zodiacIndex=8;
            imageName="abyssinian.png";
            sound = document.getElementById('sabyssinian')
            return "Abyssinian";
        case "Capricorn":
            zodiacIndex=9;
            imageName="scottish.png";
            sound = document.getElementById('sscottish')
            return "Scottish Fold";
        case "Aquarius":
            zodiacIndex=10;
            imageName="devon.png";
            sound = document.getElementById('sdevon')
            return "Devon Rex";
        case "Pisces":
            zodiacIndex=11;
            imageName="turkish.png";
            sound = document.getElementById('sturkish')
            return "Turkish Van";
        default:
            return "Unknown";
    }
}



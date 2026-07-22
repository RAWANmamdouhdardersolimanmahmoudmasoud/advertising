/* ==========================================
   BALLOON POP EXPLOSION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    createBalloonExplosion();

    // بعد الانفجار نبدأ إخفاء الـ Overlay
    setTimeout(() => {

        const confettiOverlay = document.getElementById("confetti");

        confettiOverlay.classList.add("hidden");

        // بعد انتهاء الـ fade تظهر البطاقة
        setTimeout(() => {

            const card = document.querySelector(".card");

            card.style.display = "block";

        }, 800);

    }, 2000);

    initButton();
    initParallax();

});


/* ==========================================
   CREATE BALLOON EXPLOSION
========================================== */

function createBalloonExplosion(){

    const container = document.getElementById("confetti");

    // عدد قطع الانفجار
    const pieces = 100;

    for(let i = 0; i < pieces; i++){

        const piece = document.createElement("div");

        piece.classList.add("explosion-piece");

        // حجم عشوائي
        const size = random(6, 18);

        piece.style.width = size + "px";
        piece.style.height = size + "px";

        // كل القطع تبدأ من مركز الشاشة
        piece.style.left = "50%";
        piece.style.top = "50%";

        // لون من هوية TalkVerse
        const color = COLORS[
            random(0, COLORS.length - 1)
        ];

        piece.style.background = color;

        // شكل عشوائي
        const shape = random(1, 3);

        if(shape === 1){

            // مربع
            piece.style.borderRadius = "3px";

        }

        else if(shape === 2){

            // دائرة
            piece.style.borderRadius = "50%";

        }

        else{

            // شكل ماسي
            piece.style.borderRadius = "2px";

            piece.style.transform =
                "rotate(45deg)";

        }

        // اتجاه الانفجار
        const angle =
            Math.random() * Math.PI * 2;

        // المسافة التي ستتحركها القطعة
        const distance =
            random(250, 700);

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        // دوران نهائي
        const rotation =
            random(-720, 720);

        // Custom CSS Variables
        piece.style.setProperty(
            "--x",
            x + "px"
        );

        piece.style.setProperty(
            "--y",
            y + "px"
        );

        piece.style.setProperty(
            "--rotation",
            rotation + "deg"
        );

        // سرعة مختلفة لكل قطعة
        piece.style.animationDuration =
            random(900, 1700) + "ms";

        // تأخير بسيط جدًا
        piece.style.animationDelay =
            Math.random() * 80 + "ms";

        container.appendChild(piece);

    }

}


/* ==========================================
   COLORS
========================================== */

const COLORS = [

    "#D4A017",
    "#F7D774",
    "#14284B",
    "#1E3A68",
    "#FFFFFF"

];


/* ==========================================
   HELPERS
========================================== */

function random(min, max){

    return Math.floor(
        Math.random() *
        (max - min + 1)
    ) + min;

}


/* ==========================================
   BUTTON SHINE
========================================== */

function initButton(){

    const btn =
        document.getElementById("surveyBtn");

    if(!btn) return;

    btn.addEventListener(
        "mousemove",
        (e) => {

            const rect =
                btn.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            btn.style.setProperty(
                "--x",
                x + "px"
            );

            btn.style.setProperty(
                "--y",
                y + "px"
            );

        }
    );

}


/* ==========================================
   PARALLAX
========================================== */

function initParallax(){

    document.addEventListener(
        "mousemove",
        (e) => {

            const card =
                document.querySelector(".card");

            if(!card) return;

            const x =
                (window.innerWidth / 2 -
                e.clientX) / 40;

            const y =
                (window.innerHeight / 2 -
                e.clientY) / 40;

            card.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );

}
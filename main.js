function handleMouseOver(event) {
	const popup = event.currentTarget.querySelector('.popup');

	// CHAT GPT Added this but it wasn't enough to fix
	// my problem
	popup.style.display = 'block';

	const rect = popup.getBoundingClientRect();

	popup.style.left = '50%';
    popup.style.right = 'auto';
    popup.style.transform = 'translateX(-50%)';
    
	if (rect.left < 0) {
		popup.style.left = 'auto';
        popup.style.right = '0';
        popup.style.transform = 'translateX(50%)';
	}
    popup.style.display = 'block';
}

function handleMouseOut(event) {
    const popup = event.currentTarget.querySelector('.popup');
    //-----------------------------------------
    // This code right here is what I implemented after still
    // having the same problem. Please understand  future
    // me, because we will get better with this if we do
    popup.style.left = '50%';
    popup.style.right = 'auto';
    popup.style.transform = 'translateX(-50%)';
    //-----------------------------------------

    popup.style.display = 'none';
}

const kanjiElements = document.querySelectorAll('.kanji-to-hiragana');

kanjiElements.forEach(function(item) {
    // Add the mouseover event listener to each element
    item.addEventListener('mouseover', handleMouseOver);
    // Add the mouseout event listener to each element
    item.addEventListener('mouseout', handleMouseOut);
});

//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------
//------------------------------------------------------------

const lesson1 = document.querySelector("#button_lesson1");
const lesson2 = document.querySelector("#button_lesson2");
const lesson3 = document.querySelector("#button_lesson3");
const lesson4 = document.querySelector("#button_lesson4");
const lesson5 = document.querySelector("#button_lesson5");
const lesson6 = document.querySelector("#button_lesson6");
const lesson7 = document.querySelector("#button_lesson7");
const lesson8 = document.querySelector("#button_lesson8");
const lesson9 = document.querySelector("#button_lesson9");
const lesson10 = document.querySelector("#button_lesson10");
const lesson11 = document.querySelector("#button_lesson11");
const lesson12 = document.querySelector("#button_lesson12");

const all_Lessons = document.querySelectorAll(".dialogue-content");
const genkiAmountOfLessons = all_Lessons.length;

const true_lesson1 = document.querySelector(".lesson1");
const true_lesson2 = document.querySelector(".lesson2");
const true_lesson3 = document.querySelector(".lesson3");
const true_lesson4 = document.querySelector(".lesson4");
const true_lesson5 = document.querySelector(".lesson5");
const true_lesson6 = document.querySelector(".lesson6");
const true_lesson7 = document.querySelector(".lesson7");
const true_lesson8 = document.querySelector(".lesson8");
const true_lesson9 = document.querySelector(".lesson9");
const true_lesson10 = document.querySelector(".lesson10");
const true_lesson11 = document.querySelector(".lesson11");
const true_lesson12 = document.querySelector(".lesson12");

function controlForLesson1(event) {
    for (let i = 0; i < genkiAmountOfLessons; i++) {
        let computedStyle = window.getComputedStyle(all_Lessons[i]);
        if (computedStyle.display === "block") {
            switch (i + 1) {
            case 1:
                true_lesson1.style.display = "none";
                true_lesson1.style.display = "block";
                break;
            case 2:
                true_lesson2.style.display = "none";
                true_lesson1.style.display = "block";
                break;
            case 3:
                true_lesson3.style.display = "none";
                true_lesson1.style.display = "block";
                break;
            case 4:
                true_lesson4.style.display = "none";
                true_lesson1.style.display = "block";
                break;
            case 5:
                true_lesson5.style.display = "none";
                true_lesson1.style.display = "block";
                break;
            case 6:
                true_lesson6.style.display = "none";
                true_lesson1.style.display = "block";
                break;
            case 7:
                true_lesson7.style.display = "none";
                true_lesson1.style.display = "block";
                break;
            case 8:
                true_lesson8.style.display = "none";
                true_lesson1.style.display = "block";
                break;
            case 9:
                true_lesson9.style.display = "none";
                true_lesson1.style.display = "block";
                break;
            case 10:
                true_lesson10.style.display = "none";
                true_lesson1.style.display = "block";
                break;
            case 11:
                true_lesson11.style.display = "none";
                true_lesson1.style.display = "block";
                break;
            case 12:
                true_lesson12.style.display = "none";
                true_lesson1.style.display = "block";
                break;
            }
        }
    }
}

function controlForLesson2(event) {
    for (let i = 0; i < genkiAmountOfLessons; i++) {
        let computedStyle = window.getComputedStyle(all_Lessons[i]);
        if (computedStyle.display === "block") {
            switch (i + 1) {
            case 1:
                true_lesson1.style.display = "none";
                true_lesson2.style.display = "block";
                break;
            case 2:
                true_lesson2.style.display = "none";
                true_lesson2.style.display = "block";
                break;
            case 3:
                true_lesson3.style.display = "none";
                true_lesson2.style.display = "block";
                break;
            case 4:
                true_lesson4.style.display = "none";
                true_lesson2.style.display = "block";
                break;
            case 5:
                true_lesson5.style.display = "none";
                true_lesson2.style.display = "block";
                break;
            case 6:
                true_lesson6.style.display = "none";
                true_lesson2.style.display = "block";
                break;
            case 7:
                true_lesson7.style.display = "none";
                true_lesson2.style.display = "block";
                break;
            case 8:
                true_lesson8.style.display = "none";
                true_lesson2.style.display = "block";
                break;
            case 9:
                true_lesson9.style.display = "none";
                true_lesson2.style.display = "block";
                break;
            case 10:
                true_lesson10.style.display = "none";
                true_lesson2.style.display = "block";
                break;
            case 11:
                true_lesson11.style.display = "none";
                true_lesson2.style.display = "block";
                break;
            case 12:
                true_lesson12.style.display = "none";
                true_lesson2.style.display = "block";
                break;
            }
        }
    }
}

function controlForLesson3(event) {
    for (let i = 0; i < genkiAmountOfLessons; i++) {
        let computedStyle = window.getComputedStyle(all_Lessons[i]);
        if (computedStyle.display === "block") {
            switch (i + 1) {
            case 1:
                true_lesson1.style.display = "none";
                true_lesson3.style.display = "block";
                break;
            case 2:
                true_lesson2.style.display = "none";
                true_lesson3.style.display = "block";
                break;
            case 3:
                true_lesson3.style.display = "none";
                true_lesson3.style.display = "block";
                break;
            case 4:
                true_lesson4.style.display = "none";
                true_lesson3.style.display = "block";
                break;
            case 5:
                true_lesson5.style.display = "none";
                true_lesson3.style.display = "block";
                break;
            case 6:
                true_lesson6.style.display = "none";
                true_lesson3.style.display = "block";
                break;
            case 7:
                true_lesson7.style.display = "none";
                true_lesson3.style.display = "block";
                break;
            case 8:
                true_lesson8.style.display = "none";
                true_lesson3.style.display = "block";
                break;
            case 9:
                true_lesson9.style.display = "none";
                true_lesson3.style.display = "block";
                break;
            case 10:
                true_lesson10.style.display = "none";
                true_lesson3.style.display = "block";
                break;
            case 11:
                true_lesson11.style.display = "none";
                true_lesson3.style.display = "block";
                break;
            case 12:
                true_lesson12.style.display = "none";
                true_lesson3.style.display = "block";
                break;
            }
        }
    }
}

function controlForLesson4(event) {
    for (let i = 0; i < genkiAmountOfLessons; i++) {
        let computedStyle = window.getComputedStyle(all_Lessons[i]);
        if (computedStyle.display === "block") {
            switch (i + 1) {
            case 1:
                true_lesson1.style.display = "none";
                true_lesson4.style.display = "block";
                break;
            case 2:
                true_lesson2.style.display = "none";
                true_lesson4.style.display = "block";
                break;
            case 3:
                true_lesson3.style.display = "none";
                true_lesson4.style.display = "block";
                break;
            case 4:
                true_lesson4.style.display = "none";
                true_lesson4.style.display = "block";
                break;
            case 5:
                true_lesson5.style.display = "none";
                true_lesson4.style.display = "block";
                break;
            case 6:
                true_lesson6.style.display = "none";
                true_lesson4.style.display = "block";
                break;
            case 7:
                true_lesson7.style.display = "none";
                true_lesson4.style.display = "block";
                break;
            case 8:
                true_lesson8.style.display = "none";
                true_lesson4.style.display = "block";
                break;
            case 9:
                true_lesson9.style.display = "none";
                true_lesson4.style.display = "block";
                break;
            case 10:
                true_lesson10.style.display = "none";
                true_lesson4.style.display = "block";
                break;
            case 11:
                true_lesson11.style.display = "none";
                true_lesson4.style.display = "block";
                break;
            case 12:
                true_lesson12.style.display = "none";
                true_lesson4.style.display = "block";
                break;
            }
        }
    }
}

function controlForLesson5(event) {
    for (let i = 0; i < genkiAmountOfLessons; i++) {
        let computedStyle = window.getComputedStyle(all_Lessons[i]);
        if (computedStyle.display === "block") {
            switch (i + 1) {
            case 1:
                true_lesson1.style.display = "none";
                true_lesson5.style.display = "block";
                break;
            case 2:
                true_lesson2.style.display = "none";
                true_lesson5.style.display = "block";
                break;
            case 3:
                true_lesson3.style.display = "none";
                true_lesson5.style.display = "block";
                break;
            case 4:
                true_lesson4.style.display = "none";
                true_lesson5.style.display = "block";
                break;
            case 5:
                true_lesson5.style.display = "none";
                true_lesson5.style.display = "block";
                break;
            case 6:
                true_lesson6.style.display = "none";
                true_lesson5.style.display = "block";
                break;
            case 7:
                true_lesson7.style.display = "none";
                true_lesson5.style.display = "block";
                break;
            case 8:
                true_lesson8.style.display = "none";
                true_lesson5.style.display = "block";
                break;
            case 9:
                true_lesson9.style.display = "none";
                true_lesson5.style.display = "block";
                break;
            case 10:
                true_lesson10.style.display = "none";
                true_lesson5.style.display = "block";
                break;
            case 11:
                true_lesson11.style.display = "none";
                true_lesson5.style.display = "block";
                break;
            case 12:
                true_lesson12.style.display = "none";
                true_lesson5.style.display = "block";
                break;
            }
        }
    }
}

function controlForLesson6(event) {
    for (let i = 0; i < genkiAmountOfLessons; i++) {
        let computedStyle = window.getComputedStyle(all_Lessons[i]);
        if (computedStyle.display === "block") {
            switch (i + 1) {
            case 1:
                true_lesson1.style.display = "none";
                true_lesson6.style.display = "block";
                break;
            case 2:
                true_lesson2.style.display = "none";
                true_lesson6.style.display = "block";
                break;
            case 3:
                true_lesson3.style.display = "none";
                true_lesson6.style.display = "block";
                break;
            case 4:
                true_lesson4.style.display = "none";
                true_lesson6.style.display = "block";
                break;
            case 5:
                true_lesson5.style.display = "none";
                true_lesson6.style.display = "block";
                break;
            case 6:
                true_lesson6.style.display = "none";
                true_lesson6.style.display = "block";
                break;
            case 7:
                true_lesson7.style.display = "none";
                true_lesson6.style.display = "block";
                break;
            case 8:
                true_lesson8.style.display = "none";
                true_lesson6.style.display = "block";
                break;
            case 9:
                true_lesson9.style.display = "none";
                true_lesson6.style.display = "block";
                break;
            case 10:
                true_lesson10.style.display = "none";
                true_lesson6.style.display = "block";
                break;
            case 11:
                true_lesson11.style.display = "none";
                true_lesson6.style.display = "block";
                break;
            case 12:
                true_lesson12.style.display = "none";
                true_lesson6.style.display = "block";
                break;
            }
        }
    }
}

function controlForLesson7(event) {
    for (let i = 0; i < genkiAmountOfLessons; i++) {
        let computedStyle = window.getComputedStyle(all_Lessons[i]);
        if (computedStyle.display === "block") {
            switch (i + 1) {
            case 1:
                true_lesson1.style.display = "none";
                true_lesson7.style.display = "block";
                break;
            case 2:
                true_lesson2.style.display = "none";
                true_lesson7.style.display = "block";
                break;
            case 3:
                true_lesson3.style.display = "none";
                true_lesson7.style.display = "block";
                break;
            case 4:
                true_lesson4.style.display = "none";
                true_lesson7.style.display = "block";
                break;
            case 5:
                true_lesson5.style.display = "none";
                true_lesson7.style.display = "block";
                break;
            case 6:
                true_lesson6.style.display = "none";
                true_lesson7.style.display = "block";
                break;
            case 7:
                true_lesson7.style.display = "none";
                true_lesson7.style.display = "block";
                break;
            case 8:
                true_lesson8.style.display = "none";
                true_lesson7.style.display = "block";
                break;
            case 9:
                true_lesson9.style.display = "none";
                true_lesson7.style.display = "block";
                break;
            case 10:
                true_lesson10.style.display = "none";
                true_lesson7.style.display = "block";
                break;
            case 11:
                true_lesson11.style.display = "none";
                true_lesson7.style.display = "block";
                break;
            case 12:
                true_lesson12.style.display = "none";
                true_lesson7.style.display = "block";
                break;
            }
        }
    }
}

function controlForLesson8(event) {
    for (let i = 0; i < genkiAmountOfLessons; i++) {
        let computedStyle = window.getComputedStyle(all_Lessons[i]);
        if (computedStyle.display === "block") {
            switch (i + 1) {
            case 1:
                true_lesson1.style.display = "none";
                true_lesson8.style.display = "block";
                break;
            case 2:
                true_lesson2.style.display = "none";
                true_lesson8.style.display = "block";
                break;
            case 3:
                true_lesson3.style.display = "none";
                true_lesson8.style.display = "block";
                break;
            case 4:
                true_lesson4.style.display = "none";
                true_lesson8.style.display = "block";
                break;
            case 5:
                true_lesson5.style.display = "none";
                true_lesson8.style.display = "block";
                break;
            case 6:
                true_lesson6.style.display = "none";
                true_lesson8.style.display = "block";
                break;
            case 7:
                true_lesson7.style.display = "none";
                true_lesson8.style.display = "block";
                break;
            case 8:
                true_lesson8.style.display = "none";
                true_lesson8.style.display = "block";
                break;
            case 9:
                true_lesson9.style.display = "none";
                true_lesson8.style.display = "block";
                break;
            case 10:
                true_lesson10.style.display = "none";
                true_lesson8.style.display = "block";
                break;
            case 11:
                true_lesson11.style.display = "none";
                true_lesson8.style.display = "block";
                break;
            case 12:
                true_lesson12.style.display = "none";
                true_lesson8.style.display = "block";
                break;
            }
        }
    }
}

function controlForLesson9(event) {
    for (let i = 0; i < genkiAmountOfLessons; i++) {
        let computedStyle = window.getComputedStyle(all_Lessons[i]);
        if (computedStyle.display === "block") {
            switch (i + 1) {
            case 1:
                true_lesson1.style.display = "none";
                true_lesson9.style.display = "block";
                break;
            case 2:
                true_lesson2.style.display = "none";
                true_lesson9.style.display = "block";
                break;
            case 3:
                true_lesson3.style.display = "none";
                true_lesson9.style.display = "block";
                break;
            case 4:
                true_lesson4.style.display = "none";
                true_lesson9.style.display = "block";
                break;
            case 5:
                true_lesson5.style.display = "none";
                true_lesson9.style.display = "block";
                break;
            case 6:
                true_lesson6.style.display = "none";
                true_lesson9.style.display = "block";
                break;
            case 7:
                true_lesson7.style.display = "none";
                true_lesson9.style.display = "block";
                break;
            case 8:
                true_lesson8.style.display = "none";
                true_lesson9.style.display = "block";
                break;
            case 9:
                true_lesson9.style.display = "none";
                true_lesson9.style.display = "block";
                break;
            case 10:
                true_lesson10.style.display = "none";
                true_lesson9.style.display = "block";
                break;
            case 11:
                true_lesson11.style.display = "none";
                true_lesson9.style.display = "block";
                break;
            case 12:
                true_lesson12.style.display = "none";
                true_lesson9.style.display = "block";
                break;
            }
        }
    }
}

function controlForLesson10(event) {
    for (let i = 0; i < genkiAmountOfLessons; i++) {
        let computedStyle = window.getComputedStyle(all_Lessons[i]);
        if (computedStyle.display === "block") {
            switch (i + 1) {
            case 1:
                true_lesson1.style.display = "none";
                true_lesson10.style.display = "block";
                break;
            case 2:
                true_lesson2.style.display = "none";
                true_lesson10.style.display = "block";
                break;
            case 3:
                true_lesson3.style.display = "none";
                true_lesson10.style.display = "block";
                break;
            case 4:
                true_lesson4.style.display = "none";
                true_lesson10.style.display = "block";
                break;
            case 5:
                true_lesson5.style.display = "none";
                true_lesson10.style.display = "block";
                break;
            case 6:
                true_lesson6.style.display = "none";
                true_lesson10.style.display = "block";
                break;
            case 7:
                true_lesson7.style.display = "none";
                true_lesson10.style.display = "block";
                break;
            case 8:
                true_lesson8.style.display = "none";
                true_lesson10.style.display = "block";
                break;
            case 9:
                true_lesson9.style.display = "none";
                true_lesson10.style.display = "block";
                break;
            case 10:
                true_lesson10.style.display = "none";
                true_lesson10.style.display = "block";
                break;
            case 11:
                true_lesson11.style.display = "none";
                true_lesson10.style.display = "block";
                break;
            case 12:
                true_lesson12.style.display = "none";
                true_lesson10.style.display = "block";
                break;
            }
        }
    }
}

function controlForLesson11(event) {
    for (let i = 0; i < genkiAmountOfLessons; i++) {
        let computedStyle = window.getComputedStyle(all_Lessons[i]);
        if (computedStyle.display === "block") {
            switch (i + 1) {
            case 1:
                true_lesson1.style.display = "none";
                true_lesson11.style.display = "block";
                break;
            case 2:
                true_lesson2.style.display = "none";
                true_lesson11.style.display = "block";
                break;
            case 3:
                true_lesson3.style.display = "none";
                true_lesson11.style.display = "block";
                break;
            case 4:
                true_lesson4.style.display = "none";
                true_lesson11.style.display = "block";
                break;
            case 5:
                true_lesson5.style.display = "none";
                true_lesson11.style.display = "block";
                break;
            case 6:
                true_lesson6.style.display = "none";
                true_lesson11.style.display = "block";
                break;
            case 7:
                true_lesson7.style.display = "none";
                true_lesson11.style.display = "block";
                break;
            case 8:
                true_lesson8.style.display = "none";
                true_lesson11.style.display = "block";
                break;
            case 9:
                true_lesson9.style.display = "none";
                true_lesson11.style.display = "block";
                break;
            case 10:
                true_lesson10.style.display = "none";
                true_lesson11.style.display = "block";
                break;
            case 11:
                true_lesson11.style.display = "none";
                true_lesson11.style.display = "block";
                break;
            case 12:
                true_lesson12.style.display = "none";
                true_lesson11.style.display = "block";
                break;
            }
        }
    }
}

function controlForLesson12(event) {
    for (let i = 0; i < genkiAmountOfLessons; i++) {
        let computedStyle = window.getComputedStyle(all_Lessons[i]);
        if (computedStyle.display === "block") {
            switch (i + 1) {
            case 1:
                true_lesson1.style.display = "none";
                true_lesson12.style.display = "block";
                break;
            case 2:
                true_lesson2.style.display = "none";
                true_lesson12.style.display = "block";
                break;
            case 3:
                true_lesson3.style.display = "none";
                true_lesson12.style.display = "block";
                break;
            case 4:
                true_lesson4.style.display = "none";
                true_lesson12.style.display = "block";
                break;
            case 5:
                true_lesson5.style.display = "none";
                true_lesson12.style.display = "block";
                break;
            case 6:
                true_lesson6.style.display = "none";
                true_lesson12.style.display = "block";
                break;
            case 7:
                true_lesson7.style.display = "none";
                true_lesson12.style.display = "block";
                break;
            case 8:
                true_lesson8.style.display = "none";
                true_lesson12.style.display = "block";
                break;
            case 9:
                true_lesson9.style.display = "none";
                true_lesson12.style.display = "block";
                break;
            case 10:
                true_lesson10.style.display = "none";
                true_lesson12.style.display = "block";
                break;
            case 11:
                true_lesson11.style.display = "none";
                true_lesson12.style.display = "block";
                break;
            case 12:
                true_lesson12.style.display = "none";
                true_lesson12.style.display = "block";
                break;
            }
        }
    }
}

lesson1.addEventListener("click", controlForLesson1);
lesson2.addEventListener("click", controlForLesson2);
lesson3.addEventListener("click", controlForLesson3);
lesson4.addEventListener("click", controlForLesson4);
lesson5.addEventListener("click", controlForLesson5);
lesson6.addEventListener("click", controlForLesson6);
lesson7.addEventListener("click", controlForLesson7);
lesson8.addEventListener("click", controlForLesson8);
lesson9.addEventListener("click", controlForLesson9);
lesson10.addEventListener("click", controlForLesson10);
lesson11.addEventListener("click", controlForLesson11);
lesson12.addEventListener("click", controlForLesson12);

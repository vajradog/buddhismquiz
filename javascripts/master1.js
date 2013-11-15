// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Master Section 1: Historical Masters",
        "main":    "<p>You can always search the internet for answers and learn in the process!</p>",
        "results": "<h5>Learn More: checkout the resource section at the home page.</h5>",
       "level1":  "Lama sent a message; he said you should proceed to the next section.",
        "level2":  "Lama is happy, he said you may proceed to the next section.",
        "level3":  "Lama thinks you can do better, why don't you take the test again?",
        "level4":  "Lama laughed so hard. Try again.",
        "level5":  "Lama left, didn't say anything." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "He is one of the six great commentators (Six Ornament) on the Buddha's Teachings.",
            "a": [
                {"option": "Guru Rinpoche",      "correct": false},
                {"option": "Nagarjuna",     "correct": true},
                {"option": "Patrul Rinpoche",      "correct": false},
                {"option": "Dharmakirti",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Correct. Nagarjuna along with Aryadeva, Asanga, Vasubandhu, Dignaga and Dhamakirti were the great Indian commentators on the Buddha's teachings. They were known as the Six Ornaments.</p>",
            "incorrect": "<p><span>Uhh O.</span> The correct answer is Nagarjuna who along with Aryadeva, Asanga, Vasubandhu, Dignaga and Dhamakirti were the great Indian commentators on the Buddha's teachings. They were known as the Six Ornaments.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "He was the Buddha's cousin who later became his attendant. He remembered all the sutra teachings of the Buddha and recited them at the first council. He was the second of the seven patriarchs. He was also Nanda's elder brother. Who was he?",
            "a": [
                {"option": "Ananda",        "correct": true},
                {"option": "Shantideva",   "correct": false},
                {"option": "Kalidas",               "correct": false},
                {"option": "Dhitika", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> You got that right.</p>",
            "incorrect": "<p><span>Hmmm.</span> I don't know if you should be taking the masters quiz.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The thirty-eighth king of Tibet, second of the three great religious kings and one of the main disciples of Guru Rinpoche. It was due to his efforts that the great masters Shantarakshita and Guru Padmasambhava came from India and established Buddhism firmly in Tibet. Whom am I referring to?",
            "a": [
                {"option": "Mutri Tsenpo",        "correct": false},
                {"option": "King Songtsen Gampo",   "correct": false},
                {"option": "King Trisong Detsen",               "correct": true},
                {"option": "King Tri Ralpachen", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Brilliant!</span> You are simply amazing!</p>",
            "incorrect": "<p><span>Not Quite.</span> The correct answer is King Trisong Detsen, the thirty-eighth king of Tibet.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "She was one of the five principal consorts of Guru Rinpoche, she was an emanation of Dhatvishvari and a princess of Zahor. Who was she?",
            "a": [
                {"option": "Yeshe Tsogyal",  "correct": false},
                {"option": "Khandro Pumo",  "correct": false},
                {"option": "Shakyadevi",  "correct": false},
                  {"option": "Kalasiddhi",  "correct": false},
                {"option": "Mandarava",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius. Mandarava (Tib. མནྡཱ་ར་བཱ་) (8th cent.) aka Machik Drubpai Gyalmo — one of the five principal consorts of Guru Rinpoche, she was an emanation of Dhatvishvari and a princess of Zahor. After leaving the palace out of disgust for samsara, and joining a nunnery, she met Guru Rinpoche who gave her teachings. When the king found out, he cast her into a pit of thorns and tried to burn Guru Rinpoche alive. But through his magical powers, Guru Rinpoche transformed the pyre into a lake. When the king had repented his actions and granted them pardon, Mandarava accompanied Guru Rinpoche to the Maratika cave, where through their accomplishment of long-life practice, they saw the Buddha Amitabha face to face and attained the level of a vidyadhara with power over life. </p>",
            "incorrect": "<p><span>ERRRR!</span> You got that wrong.</span> The correct answer is Mandarava. Mandarava (Skt. Mandāravā, Tib. མནྡཱ་ར་བཱ་) (8th cent.) aka Machik Drubpai Gyalmo — one of the five principal consorts of Guru Rinpoche, she was an emanation of Dhatvishvari and a princess of Zahor. After leaving the palace out of disgust for samsara, and joining a nunnery, she met Guru Rinpoche who gave her teachings. When the king found out, he cast her into a pit of thorns and tried to burn Guru Rinpoche alive. But through his magical powers, Guru Rinpoche transformed the pyre into a lake. When the king had repented his actions and granted them pardon, Mandarava accompanied Guru Rinpoche to the Maratika cave, where through their accomplishment of long-life practice, they saw the Buddha Amitabha face to face and attained the level of a vidyadhara with power over life.</p>" // no comma here
        },
        { // Question 5
            "q": "He was a great Indian master and scholar, and author of many texts including the Lamp for the Path of Awakening. One of the main teachers at the famous university of Vikramashila, he was also a strict follower of the monastic rule and was widely acclaimed for the purity of his teaching. He spent the last ten years of his life in Tibet, teaching and translating texts, and was instrumental in reinvigorating Buddhism there after a period of persecution. His disciples founded the Kadampa school. Who was he?",
            "a": [
                {"option": "Jetsün Taranatha",    "correct": false},
                {"option": "Tathagata Rakshita",    "correct": false},
                {"option": "Chandrakirti",    "correct": false},
                {"option": "Naropa",    "correct": false},
                {"option": "Atisha Dipamkara Shrijñana",     "correct": true}
                
            ],
            "correct": "<p><span>Correct!</span> Awesome. You are a learned person.</p>",
            "incorrect": "<p><span>Wrong answer.</span> The correct answer is Atisha Dipamkara Shrijñana.</p>" // no comma here
        }
        


    ]
};

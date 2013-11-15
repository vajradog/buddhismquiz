// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Student Section 1: General",
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
            "q": "This was taught by Buddha Shakyamuni as the central theme of the so-called first turning of the wheel of the Dharma after his attainment of enlightenment.",
            "a": [
                {"option": "The Four Noble Truths",      "correct": true},
                {"option": "The Four Schools",     "correct": false},
                {"option": "The Six Perfection",      "correct": false},
                {"option": "The Five Paths",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The Four Noble Truths (Tib. འཕགས་པའི་བདེན་པ་བཞི་) or the Four Realities of the Aryas. The Four Noble Truths were taught by Buddha Shakyamuni as the central theme of the so-called first turning of the wheel of the Dharma after his attainment of enlightenment. They are: 'the truth (or reality) of suffering' (Tib. སྡུག་བསྔལ་གྱི་བདེན་པ་, Skt. duḥkha-satya) which is to be understood, 'the truth (or reality) of the origin of suffering' (Tib. ཀུན་འབྱུང་བའི་བདེན་པ་, Skt. samudaya-satya), which is to be abandoned, 'the truth (or reality) of cessation' (Tib. འགོག་པའི་བདེན་པ་, Skt. nirodha-satya), which is to be actualized, and 'the truth (or reality) of the path' (Tib. ལམ་གྱི་བདེན་པ་, Skt. mārga-satya), which is to be relied upon.</p>",
            "incorrect": "<p><span>Uhh O.</span> The correct answer is The Four Noble Truths (Tib. འཕགས་པའི་བདེན་པ་བཞི་) or the Four Realities of the Aryas. The Four Noble Truths were taught by Buddha Shakyamuni as the central theme of the so-called first turning of the wheel of the Dharma after his attainment of enlightenment. They are: 'the truth (or reality) of suffering' (Tib. སྡུག་བསྔལ་གྱི་བདེན་པ་, Skt. duḥkha-satya) which is to be understood, 'the truth (or reality) of the origin of suffering' (Tib. ཀུན་འབྱུང་བའི་བདེན་པ་, Skt. samudaya-satya), which is to be abandoned, 'the truth (or reality) of cessation' (Tib. འགོག་པའི་བདེན་པ་, Skt. nirodha-satya), which is to be actualized, and 'the truth (or reality) of the path' (Tib. ལམ་གྱི་བདེན་པ་, Skt. mārga-satya), which is to be relied upon.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Among the four noble truths which is to be abandoned?",
            "a": [
                {"option": "the truth (or reality) of suffering ",        "correct": false},
                {"option": "the truth (or reality) of cessation",   "correct": false},
                {"option": "the truth (or reality) of the origin of suffering",  "correct": true},
                {"option": "the truth (or reality) of the path", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>You are a genius!</span> Among the four noble truths, 'the second truth; the truth (or reality) of the origin of suffering' (Tib. ཀུན་འབྱུང་བའི་བདེན་པ་, Skt. samudaya-satya), is to be abandoned. It consists of karma and destructive emotions.</p>",
            "incorrect": "<p><span>Sorry, wrong answer.</span> Among the four noble truths, the second truth; 'the truth (or reality) of the origin of suffering' (Tib. ཀུན་འབྱུང་བའི་བདེན་པ་, Skt. samudaya-satya), is to be abandoned. It consists of karma and destructive emotions.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The fourth noble truth; 'the truth of the path' is the spiritual journey, which must be followed in order to attain the result. What is the ultimate result?",
            "a": [
                {"option": "Egolessness",        "correct": false},
                {"option": "Enlightenment",   "correct": true},
                {"option": "Reincarnation",               "correct": false},
                {"option": "The path luminosity", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Brilliant!</span> Path (Skt. marga; Tib. & Wyl. lam) — the spiritual journey, which must be followed in order to attain the result, which is enlightenment. The Buddha spoke of the path in his first teaching on the four noble truths as the noble eightfold path. Alexander Berzin translates 'lam' as 'pathway mind' or 'pathway of mind' and gives the following definition for lam: 'A level or state of mind that acts or functions as a pathway toward liberation or enlightenment. Some translators render this term as 'path,' but it refers to mental states, not to a series of spiritual practices.</p>",
            "incorrect": "<p><span>Not Quite.</span> The correct answer is Enlightenment. Path (Skt. marga; Tib. & Wyl. lam) — the spiritual journey, which must be followed in order to attain the result, which is enlightenment. The Buddha spoke of the path in his first teaching on the four noble truths as the noble eightfold path. Alexander Berzin translates 'lam' as 'pathway mind' or 'pathway of mind' and gives the following definition for lam: 'A level or state of mind that acts or functions as a pathway toward liberation or enlightenment. Some translators render this term as 'path,' but it refers to mental states, not to a series of spiritual practices.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is Renunciation?",
            "a": [
                {"option": "the determination to study a particular sutra",  "correct": false},
                {"option": "the determination to stop all bad habits.", "correct": false},
                {"option": "the determination to be free from bad friends", "correct": false},
                {"option": "the determination to be free from samsara.", "correct": true},
                 // no comma here
            ],
            "correct": "<p><span>Wonderful!</span> Renunciation is the determination to be free from samsara. In Tibetan it's called Ngé jung, Sogyal Rinpoche writes in The Tibetan Book of Living and Dying: Ngé means 'actually' or 'definitely,' and jung means to 'come out,' 'emerge,' or 'be born.' The fruit of frequent and deep reflection on death will be that you will find yourself 'emerging,' often with a sense of disgust, from your habitual patterns. You will find yourself increasingly ready to let go of them, and in the end you will be able to free yourself from them as smoothly, the masters say, 'as drawing a hair from a slab of butter.' This renunciation that you will come to has both sadness and joy in it: sadness because you realize the futility of your old ways, and joy because of the greater vision that begins to unfold when you are able to let go of them. This is no ordinary joy. It is a joy that gives birth to a new and profound strength, a confidence, an abiding inspiration that comes from the realization that you are not condemned to your habits, that you can indeed emerge from them, that you can change, and grow more and more free. </p>",
            "incorrect": "<p><span>Wrong!</span> The correct answer is Renunciation, the determination to be free from samsara. In Tibetan it's called Ngé jung, Sogyal Rinpoche writes in The Tibetan Book of Living and Dying: Ngé means 'actually' or 'definitely,' and jung means to 'come out,' 'emerge,' or 'be born.' The fruit of frequent and deep reflection on death will be that you will find yourself 'emerging,' often with a sense of disgust, from your habitual patterns. You will find yourself increasingly ready to let go of them, and in the end you will be able to free yourself from them as smoothly, the masters say, 'as drawing a hair from a slab of butter.' This renunciation that you will come to has both sadness and joy in it: sadness because you realize the futility of your old ways, and joy because of the greater vision that begins to unfold when you are able to let go of them. This is no ordinary joy. It is a joy that gives birth to a new and profound strength, a confidence, an abiding inspiration that comes from the realization that you are not condemned to your habits, that you can indeed emerge from them, that you can change, and grow more and more free.</p>" // no comma here
        }
        


    ]
};

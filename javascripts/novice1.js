// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Novice Section 1: General",
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
            "q": "What is Dharma?",
            "a": [
                {"option": "Dharma was a student of Buddha",      "correct": false},
                {"option": "It refers to the teachings of the Buddha",     "correct": true},
                {"option": "It refers to the nature of mind",      "correct": false},
                {"option": "Dharma means sciptures",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Dharma is the word used to refer to the teachings of the Buddha (Skt. Buddhadharma). It has many shades of meaning, including ‘the spiritual path’, or ‘spirituality’ in general. It also refers to phenomena, meaning things and events.</p>",
            "incorrect": "<p><span>Uhh O.</span> You should <em>really</em> go back to study. I can show you the answer here but I want you to try harder.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Who was Gautama Siddhartha?",
            "a": [
                {"option": "He was a Tibetan Hermit",        "correct": false},
                {"option": "He was the King of Nepal",   "correct": false},
                {"option": "He was the Prince of Kapilavastu.",               "correct": true},
                {"option": "He was the father of Buddha", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> Usually referred to as Shakyamuni Buddha, the Indian prince Gautama Siddhartha, reached enlightenment in the sixth century B.C., and taught the spiritual path followed by millions all over Asia, known today as Buddhism.</p>",
            "incorrect": "<p><span>Hmmm.</span> I have doubts, are you paying attention?</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Where was Gautam Buddha born?",
            "a": [
                {"option": "Boudha, Nepal",        "correct": false},
                {"option": "Magadha, India",   "correct": false},
                {"option": "Lumbini, Nepal",               "correct": true},
                {"option": "Kumbum, Tibet", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Brilliant!</span> Gautam Buddha was born in Lumbini. It is situated in Rumindei, in the Terai province of Nepal.</p>",
            "incorrect": "<p><span>Not Quite.</span> Gautam Buddha was actually born in Lumbini. It is situated in present day Rumindei, in the Terai province of Nepal.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "So was Buddha a God? and therefore we worship his idol?",
            "a": [
                {"option": "Yes",  "correct": false},
                {"option": "No",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius. Buddha was not, nor did he claim to be a God. He was a man who taught a path to enlightenment from his own experience. Buddhists sometimes pay respect to images of the Buddha, not in worship, nor to ask for favours. A statue of the Buddha with hands rested gently in its lap and a compassionate smile reminds us to strive to develop peace and love within ourselves. Bowing to the statue is an expression of gratitude for the teaching. </p>",
            "incorrect": "<p><span>ERRRR!</span> You got that wrong.</span> Buddha was not, nor did he claim to be a God. He was a man who taught a path to enlightenment from his own experience. Buddhists sometimes pay respect to images of the Buddha, not in worship, nor to ask for favours. A statue of the Buddha with hands rested gently in its lap and a compassionate smile reminds us to strive to develop peace and love within ourselves. Bowing to the statue is an expression of gratitude for the teaching.</p>" // no comma here
        },
        { // Question 5
            "q": "Karma means a preordained fate",
            "a": [
                {"option": "Yes",    "correct": false},
                {"option": "I don't think so",     "correct": true}
                
            ],
            "correct": "<p><span>Correct!</span> Contrary to what is accepted in contemporary society, the Buddhist interpretation of karma does not refer to preordained fate. <strong> Karma (Skt.; Tib. ལས་, lé; Wyl. las)</strong> literally means 'action' but it also refers to the process of cause and effect whereby positive actions result in happiness and negative, harmful actions lead to suffering. The real message of the teachings on karma is responsibility.</p>",
            "incorrect": "<p><span>Wrong answer.</span> Contrary to what is accepted in contemporary society, the Buddhist interpretation of karma does not refer to preordained fate. <strong> Karma (Skt.; Tib. ལས་, lé; Wyl. las)</strong> literally means 'action' but it also refers to the process of cause and effect whereby positive actions result in happiness and negative, harmful actions lead to suffering. The real message of the teachings on karma is responsibility.</p>" // no comma here
        }
        


    ]
};

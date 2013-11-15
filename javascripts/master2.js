// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Master Section 2: Buddhas and Dieties",
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
            "q": "Which among them is also known as The Buddha of Boundless Life and is particularly associated with longevity?",
            "a": [
                {"option": "Amitabha",      "correct": false},
                {"option": "Amitayus",     "correct": true},
                {"option": "Chakrasamvara",      "correct": false},
                {"option": "Tara",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Correct. Amitayus (Tib. ཚེ་དཔག་མེད་, Tsepakmé), 'The Buddha of Boundless Life' — a sambhogakaya aspect of Amitabha, particularly associated with longevity. He is mostly depicted sitting and holding in his hands a vessel containing the nectar of immortality. Amitayus is also one of the three deities of long life.</p>",
            "incorrect": "<p><span>Uhh O.</span> The correct answer is Amitayus (Tib. ཚེ་དཔག་མེད་, Tsepakmé), 'The Buddha of Boundless Life' — a sambhogakaya aspect of Amitabha, particularly associated with longevity. He is mostly depicted sitting and holding in his hands a vessel containing the nectar of immortality. Amitayus is also one of the three deities of long life.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Buddha Shakyamuni personally selected the Arhats from amongst his disciples and requested them to remain in the world, protecting the Dharma for as long as beings are capable of benefitting from the teachings. How many Arhats did he select?",
            "a": [
                {"option": "21",        "correct": false},
                {"option": "108",   "correct": false},
                {"option": "8",               "correct": false},
                {"option": "16", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> You got that right. Sixteen Arhats or Sthaviras, they vowed at the time of the Buddha's parinirvana to remain in the world and maintain the Dharma until the time of the future Buddha Maitreya. To visualize the Buddha Shakyamuni surrounded by the Sixteen Arhats and an assembly of bodhisattvas generates great merit and quickly develops insight into the teachings of the Buddha.</p>",
            "incorrect": "<p><span>Hmmm.</span> I don't know if you should be taking the masters quiz.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Sogyal Rinpoche says, _______ 'represents our pure nature and symbolizes the transmutation of desire, the predominant emotion of the human realm. More intrinsically, _______ is the limitless, luminous nature of our mind. Which Buddha is he referring to?",
            "a": [
                {"option": "Buddha Maitreya",        "correct": false},
                {"option": "Buddha Samantabhadra",   "correct": false},
                {"option": "Buddha Amitabha",               "correct": true},
                {"option": "Buddha of Medicine", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Brilliant!</span> You are simply amazing!</p>",
            "incorrect": "<p><span>Not Quite.</span> The correct answer is Buddha Amitabha.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "The four dignities are ancient symbols that represent qualities of the windhorse. The four dignities are Garuda, Dragon, Snow Lion and ?",
            "a": [
                {"option": "Deer",  "correct": false},
                {"option": "Eagle",  "correct": false},
                {"option": "Dog",  "correct": false},
                  {"option": "Monkey",  "correct": false},
                {"option": "Tiger",          "correct": true} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius. </p>",
            "incorrect": "<p><span>ERRRR!</span> You got that wrong.</span> The correct answer is Tiger.</p>" // no comma here
        },
        { // Question 5
            "q": "Dzambhala (Skt. jambhala; Tib. ཛམ་བྷ་ལ་) is a protective deity associated with wealth and prosperity. He is usually depicted in what colour?",
            "a": [
                {"option": "Silver",    "correct": false},
                {"option": "Blue",    "correct": false},
                {"option": "Red",    "correct": false},
                {"option": "Green",    "correct": false},
                {"option": "Yellow",     "correct": true}
                
            ],
            "correct": "<p><span>Correct!</span> Awesome. You are a learned person.</p>",
            "incorrect": "<p><span>Wrong answer.</span> The correct answer is Yellow.</p>" // no comma here
        }
        


    ]
};

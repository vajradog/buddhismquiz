// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Master Section 3: Sutras",
        "main":    "<p>You can always search the internet for answers and learn in the process!</p>",
        "results": "<h5>Learn More: checkout the resource section at the home page.</h5>",
        "level1":  "Your knowledge is vast.",
        "level2":  "Lama is happy, Great job!",
        "level3":  "Lama thinks you can do better, why don't you take the test again?",
        "level4":  "Lama laughed so hard. Try again.",
        "level5":  "Lama left, didn't say anything." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Heart Sutra (Skt. prajñāpāramitā hṛdaya; Tib. ཤེས་རབ་ཀྱི་ཕ་རོལ་ཏུ་ཕྱིན་པའི་སྙིང་པོ་), aka The Twenty-Five Verses on the Perfection of Wisdom is the most popular sutra of the prajñaparamita collection and indeed of the mahayana as a whole. The sutra primarily consists of a dialogue between the great bodhisattva Avalokiteshvara and whom?",
            "a": [
                {"option": "Rahula",      "correct": false},
                {"option": "Shariputra",     "correct": true},
                {"option": "Mahakalika",      "correct": false},
                {"option": "Shribhadra",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Correct. Although the sutra primarily consists of a dialogue between Shariputra and the great bodhisattva Avalokiteshvara, their words are inspired by the blessings of the Buddha, who remains absorbed in samadhi meditation until the end of the discussion. As with all the prajñaparamita sutras, the teaching took place at Vulture's Peak near Rajagriha.</p>",
            "incorrect": "<p><span>Uhh O.</span> The correct answer is Shariputra, although the sutra primarily consists of a dialogue between Shariputra and the great bodhisattva Avalokiteshvara, their words are inspired by the blessings of the Buddha, who remains absorbed in samadhi meditation until the end of the discussion. As with all the prajñaparamita sutras, the teaching took place at Vulture's Peak near Rajagriha.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Amitabhavyuha Sutra (Skt. Amitābhavyūhasūtra), which is also known as the longer Sukhavativyuha Sutra (Skt. Sukhāvatīvyūhasūtra), gives a detailed description of the Sukhavati pure realm of Buddha Amitabha. The teaching takes place near Rajagriha, but where?.",
            "a": [
                {"option": "at Bodhgaya",        "correct": false},
                {"option": "at the Tigers Nest",   "correct": false},
                {"option": "in Deer Park",               "correct": false},
                {"option": "on Vulture's Peak Mountain", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> That was right.</p>",
            "incorrect": "<p><span>Hmmm.</span> The correct answer is on Vulture's Peak Mountain.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Sutra of the Wise and the Foolish (Skt. Damamūka-nidāna-sūtra, Tib. མདོ་མཛངས་བླུན།), sometimes called Ocean of Narratives, consists of Jataka stories, tracing the causes of present tragedy in human lives to events which took place in former lifetimes. How many chapters are there in the sutra?",
            "a": [
                {"option": "22",        "correct": false},
                {"option": "108",   "correct": false},
                {"option": "51",               "correct": true},
                {"option": "39", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Brilliant!</span> You are simply amazing! The theme of each narrative of the sutra is the same: the tragedy of the human condition, the reason for this tragedy and the possibility of transcending it. For centuries, it has been a source of inspiration, instruction and pleasure for all who have read it. The history of this unusual scripture is still uncertain. Legend has it that the tales were heard in Khotan by Chinese monks, who translated them into Chinese. In the caves of Dunhuang there are many wall paintings illustrating stories from the Sutra of the Wise and the Foolish, as well as painted scrolls on the same theme. The text was translated into Mongolian from Tibetan. The version available in English is translated from the Mongolian.</p>",
            "incorrect": "<p><span>Not Quite.</span> The correct answer is 51. The theme of each narrative is the same: the tragedy of the human condition, the reason for this tragedy and the possibility of transcending it. For centuries, it has been a source of inspiration, instruction and pleasure for all who have read it. The history of this unusual scripture is still uncertain. Legend has it that the tales were heard in Khotan by Chinese monks, who translated them into Chinese. In the caves of Dunhuang there are many wall paintings illustrating stories from the Sutra of the Wise and the Foolish, as well as painted scrolls on the same theme. The text was translated into Mongolian from Tibetan. The version available in English is translated from the Mongolian.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "The King of Samadhi Sutra (Skt. Samādhirāja Sūtra; Wyl. ting nge 'dzin gyi rgyal po'i mdo) aka the Moon Lamp Sutra is a famous mahayana sutra that is frequently cited in Madhyamika treatises, as well as teachings on Mahamudra. Where can this sutra be found?",
            "a": [
                {"option": "Tengyur",  "correct": false},
                {"option": "Kagyur",  "correct": true}
               
            ],
            "correct": "<p><span>Brilliant!</span> You're seriously a genius. This sutra can be found in the Kangyur (Derge edition), Volume 55, folios 1r. to 170v., where the full Tibetan title is: (Wyl.) 'phags pa chos thams cad kyi rang bzhin mnyam pa nyid rnam par spros pa ting nge 'dzin gyi rgyal po zhes bya ba theg pa chen po'i mdo/ </p>",
            "incorrect": "<p><span>ERRRR!</span> You got that wrong.</span> The correct answer is Kagyur. This sutra can be found in the Kangyur (Derge edition), Volume 55, folios 1r. to 170v., where the full Tibetan title is: (Wyl.) 'phags pa chos thams cad kyi rang bzhin mnyam pa nyid rnam par spros pa ting nge 'dzin gyi rgyal po zhes bya ba theg pa chen po'i mdo/.</p>" // no comma here
        },
        { // Question 5
            "q": "Form is emptiness; emptiness also is form. Emptiness is no other than form, Form is no other than emptiness. Which sutra is this famous quotation from?",
            "a": [
                {"option": "White Lotus of Compassion Sutra",    "correct": false},
                {"option": "Ten sutras that teach the sugatagarbha",    "correct": false},
                {"option": "Lalitavistara Sutra ",    "correct": false},
                {"option": "Heart Sutra",     "correct": true}
                
            ],
            "correct": "<p><span>Correct!</span> Awesome. You are a learned person.</p>",
            "incorrect": "<p><span>Wrong answer.</span> The correct answer is Heart Sutra.</p>" // no comma here
        }
        


    ]
};

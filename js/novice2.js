// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Novice Section 2: Contemporary Teachers",
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
            "q": "In early June, 2011, Rinpoche left his monastery in Bodhgaya, India to begin a period of extended solitary retreat. Which Rinpoche am I talking about?",
            "a": [
                {"option": "Tsoknyi Rinpoche",      "correct": false},
                {"option": "Mingyur Rinpoche",     "correct": true},
                {"option": "Lama Zopa Rinpoche",      "correct": false},
                {"option": "Dzogchen Ponlop Rinpoche",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Rinpoche left a letter saying “Though I do not claim to be like the great masters of times past, I am now embarking on this journey as a mere reflection of these teachers, as a faithful imitation of the example they set. For a number of years, my training will consist of simply leaving behind my connections, so please do not be upset with my decision.” He urged his students to continue practicing in his absence and not to worry about him. Mingyur Rinpoche is expected to wander for three to five years, possibly longer, and to come back in the same way he left. Without warning.</p>",
            "incorrect": "<p><span>Uhh O.</span> The correct answer is Mingyur Rinpoche. Rinpoche left a letter saying “Though I do not claim to be like the great masters of times past, I am now embarking on this journey as a mere reflection of these teachers, as a faithful imitation of the example they set. For a number of years, my training will consist of simply leaving behind my connections, so please do not be upset with my decision.” He urged his students to continue practicing in his absence and not to worry about him. Mingyur Rinpoche is expected to wander for three to five years, possibly longer, and to come back in the same way he left. Without warning. </p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Who among them is the daughter of Kyabje Minling Trichen Rinpoche?",
            "a": [
                {"option": "Tare Lhamo",        "correct": false},
                {"option": "Khandro Pema Dechen",   "correct": false},
                {"option": "Khandro Rinpoche Tsering Paldrön",  "correct": true},
                {"option": "Chagdud Khadro", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Absolutely correct!</span> Khandro Rinpoche Tsering Paldrön (Tib. ཚེ་རིང་དཔལ་སྒྲོན་, Wyl. tshe ring dpal sgron) (b.1967) is the daughter of Kyabjé Minling Trichen Rinpoche. She was recognized at the age of two by His Holiness the 16th Karmapa as the reincarnation of the great dakini of Tsurphu, Khandro Ugyen Tsomo, one of the most renowned female masters of her time. The present Khandro Rinpoche holds the lineages of both the Nyingma and Kagyü traditions.</p>",
            "incorrect": "<p><span>Sorry, wrong answer.</span> The correct answer is Khandro Rinpoche Tsering Paldrön (Tib. ཚེ་རིང་དཔལ་སྒྲོན་, Wyl. tshe ring dpal sgron) (b.1967) who is the daughter of Kyabjé Minling Trichen Rinpoche. She was recognized at the age of two by His Holiness the 16th Karmapa as the reincarnation of the great dakini of Tsurphu, Khandro Ugyen Tsomo, one of the most renowned female masters of her time. The present Khandro Rinpoche holds the lineages of both the Nyingma and Kagyü traditions.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Who is the author of the highly-acclaimed and ground breaking book, The Tibetan Book of Living and Dying?",
            "a": [
                {"option": "Khenpo Namdrol",        "correct": false},
                {"option": "Sogyal Rinpoche",   "correct": true},
                {"option": "H.H the Dalai Lama",               "correct": false},
                {"option": "Chogyam Trungpa", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Brilliant!</span> Sogyal Rinpoche is the author of the highly-acclaimed and ground breaking book, The Tibetan Book of Living and Dying. Two million copies of this spiritual classic have been sold in 29 languages and 56 countries. It has been adopted by colleges, groups and institutions, both medical and religious, and is used extensively by nurses, doctors and health care professionals.</p>",
            "incorrect": "<p><span>Not Quite.</span> Master says he won't give you the answer and that you should find it out right now.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "Who directed the film Milarepa?",
            "a": [
                {"option": "Dzongsar Khyentse Rinpoche",  "correct": false},
                {"option": "Tulku Urgyen Yangsi Rinpoche.", "correct": false},
                {"option": "Chokling Tersar.", "correct": false},
                {"option": "Neten Chokling Rinpoche.", "correct": true},
                 // no comma here
            ],
            "correct": "<p><span>Wonderful!</span> Neten Chokling Rinpoche directed the film Milarepa and he also acted in Dzongsar Khyentse Rinpoche's film The Cup. </p>",
            "incorrect": "<p><span>Wrong!</span> Neten Chokling Rinpoche directed the film Milarepa and he also acted in Dzongsar Khyentse Rinpoche's film The Cup.</p>" // no comma here
        }

        


    ]
};

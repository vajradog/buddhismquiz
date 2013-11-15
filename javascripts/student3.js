// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Student Section 3: Mantras",
        "main":    "<p>You can always search the internet for answers and learn in the process!</p>",
        "results": "<h5>Learn More: checkout the resource section at the home page.</h5>",
       "level1":  "Lama sent a message; he said you should proceed to the next level.",
        "level2":  "Lama is happy, he said you may proceed to the next level.",
        "level3":  "Lama thinks you can do better, why don't you take the test again?",
        "level4":  "Lama laughed so hard. Try again.",
        "level5":  "Lama left, didn't say anything." // no comma here
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "oṃ mani padme hūṃ is the mantra of?",
            "a": [
                {"option": "Avalokiteshvara",      "correct": true},
                {"option": "Green Tara",     "correct": false},
                {"option": "Guru Padmasambhava",      "correct": false},
                {"option": "Buddha Shakyamuni",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The Mani mantra is the six syllable mantra of Avalokiteshvara: oṃ mani padme hūṃ (pronounced by om mani pémé hung by Tibetans). In the terma tradition, Avalokiteshvara's seed syllable hrīḥ is added to the end of the mantra, making seven syllables.</p>",
            "incorrect": "<p><span>Wrong answer.</span> The Mani mantra is the six syllable mantra of Avalokiteshvara: oṃ mani padme hūṃ (pronounced by om mani pémé hung by Tibetans). In the terma tradition, Avalokiteshvara's seed syllable hrīḥ is added to the end of the mantra, making seven syllables.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "The mantra of Guru Padmasambhava is:",
            "a": [
                {"option": "oṃ āḥ hūṃ vajra guru padma siddhi hūṃ",        "correct": true},
                {"option": "oṃ muni muni mahāmuni śākyamuni svāhā",   "correct": false},
                {"option": "oṃ a kṣo bhya hūṃ",               "correct": false},
                {"option": "oṃ mai tri ma hā mai tri mai tri ye svā hā", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> Sogyal Rinpoche says: The Vajra Guru Mantra is the very heart essence of Padmasambhava. It is also the mantra of all the masters, buddhas, yidams, dakas, dakinis, and protectors. When you chant it, you are invoking the very embodiment of Padmasambhava.</p>",
            "incorrect": "<p><span>Incorrect.</span> The correct answer is oṃ āḥ hūṃ vajra guru padma siddhi hūṃ. Sogyal Rinpoche says: The Vajra Guru Mantra is the very heart essence of Padmasambhava. It is also the mantra of all the masters, buddhas, yidams, dakas, dakinis, and protectors. When you chant it, you are invoking the very embodiment of Padmasambhava.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Which among them is the mantra of the perfection of wisdom, or the Heart Sutra Mantra?",
            "a": [
                 {"option": "oṃ āḥ hūṃ vajra guru padma siddhi hūṃ",        "correct": false},
                {"option": "oṃ muni muni mahāmuni śākyamuni svāhā",   "correct": false},
                {"option": "oṃ a kṣo bhya hūṃ",               "correct": false},
                {"option": "tadyatha (om) gate gate paragate parasamgate bodhi svaha", "correct": true} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Brilliant!</span> That is the right answer.</p>",
            "incorrect": "<p><span>Not Quite.</span> tadyatha (om) gate gate paragate parasamgate bodhi svaha is the right answer.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "What is Dharani (Tib. གཟུངས་, zung) ?",
            "a": [
                {"option": "long mantras, which are placed inside sacred statues and stupas.",  "correct": true},
                {"option": "is a special kind of rosary used by high lamas.",  "correct": false},
                {"option": "the special color that is applied to the face of the stutue of Buddha",  "correct": false},
                {"option": "the offering of fruits and flowers to the statue of Buddha",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> Your answer is correct! </p>",
            "incorrect": "<p><span>Wrong answer!</span> Dharani or zung in Tibetan are long mantras, which are placed inside sacred statues and stupas </p>" // no comma here
        }
        
    ]
};

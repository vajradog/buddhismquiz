// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Student Section 2: Tibetan Buddhist Masters",
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
            "q": "After leaving Tibet, Jamyang Khyentse Chökyi Lodrö; considered the most outstanding Tibetan master of the twentieth century took up residence in:",
            "a": [
                {"option": "Kalimpong, West Bengal, India",      "correct": false},
                {"option": "Gangtok, Sikkim, India",     "correct": true},
                {"option": "Dharamsala, HP, India",      "correct": false},
                {"option": "Kathmnadu, Nepal",     "correct": false} // no comma here
            ],
            "correct": "<p><span>That's right!</span> Jamyang Khyentse Chökyi Lodrö (Tib. འཇམ་དབྱངས་མཁྱེན་བརྩེ་ཆོས་ཀྱི་བློ་གྲོས་) (1893-1959) is considered the most outstanding Tibetan master of the twentieth century. Authority on all traditions and holder of all lineages, he was the heart of the Rimé (ecumenical) movement in Tibet. At the invitation of the King of Sikkim, he took up residence in the Palace Monastery in Gangtok, Sikkim. In the final four years of his life, the Palace Temple where he resided became a spiritual center. By this time he was known as a Master of masters, and his presence attracted many lamas from Tibet, who came to receive transmissions from him. </p>",
            "incorrect": "<p><span>Uhh O.</span> The correct answer is Gangtok, Sikkim, India. Jamyang Khyentse Chökyi Lodrö (Tib. འཇམ་དབྱངས་མཁྱེན་བརྩེ་ཆོས་ཀྱི་བློ་གྲོས་) (1893-1959) is considered the most outstanding Tibetan master of the twentieth century. Authority on all traditions and holder of all lineages, he was the heart of the Rimé (ecumenical) movement in Tibet. At the invitation of the King of Sikkim, he took up residence in the Palace Monastery in Gangtok, Sikkim. In the final four years of his life, the Palace Temple where he resided became a spiritual center. By this time he was known as a Master of masters, and his presence attracted many lamas from Tibet, who came to receive transmissions from him.  </p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Rinpoche was the master of masters, His Holiness the Dalai Lama considers him as his main teacher of Dzogchen. He passed away in Bhutan in 1991, who is the Rinpoche I am referring to?",
            "a": [
                {"option": "The Sixteenth Karmapa, Rangjung Rigpé Dorje",   "correct": false},
                {"option": "Jamgon Kongtrul Rinpoche",   "correct": false},
                {"option": "Dilgo Khyentse Rinpoche",  "correct": true},
                {"option": "Khunu Lama Tenzin Gyaltsen ", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Absolutely correct!</span> When he left Tibet and went into exile, Dilgo Khyentse Rinpoche travelled all over the Himalayas, India, southeast Asia, Europe and North America, transmitting and explaining the teachings to his many disciples. He was not only a principal holder of the Longchen Nyingtik lineage of Dzogchen, but a lineage holder of teachings from all schools of Tibetan Buddhism. This, together with his exemplary activity within the non-sectarian Rimé movement, meant that there was hardly a practitioner in the Himalayas who did not receive teachings from him. He was the master of masters — His Holiness the Dalai Lama considers him as his main teacher of Dzogchen — and also became spiritual advisor to the royal family of Bhutan. He passed away in Bhutan in 1991.</p>",
            "incorrect": "<p><span>Sorry, wrong answer.</span> The correct answer is Dilgo Khyentse Rinpoche who travelled all over the Himalayas, India, southeast Asia, Europe and North America, transmitting and explaining the teachings to his many disciples. He was not only a principal holder of the Longchen Nyingtik lineage of Dzogchen, but a lineage holder of teachings from all schools of Tibetan Buddhism. This, together with his exemplary activity within the non-sectarian Rimé movement, meant that there was hardly a practitioner in the Himalayas who did not receive teachings from him. He was the master of masters — His Holiness the Dalai Lama considers him as his main teacher of Dzogchen — and also became spiritual advisor to the royal family of Bhutan. He passed away in Bhutan in 1991.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "A foremost scholar of Sanskrit and Tibetan, He traveled widely in Tibet and India disseminating essential teachings of Buddhist philosophy. His students include the Fourteenth Dalai Lama of Tibet. Among several teachings that the Dalai Lama received from him was the celebrated Bodhicaryavatara of Shantideva. Who am referring to?",
            "a": [
                {"option": "Venerable Tenzin Priyadarshi",        "correct": false},
                {"option": "Khunu Lama Tenzin Gyaltsen",   "correct": true},
                {"option": "Katok Situ Chökyi Gyatso",               "correct": false},
                {"option": "Kushok Bakula Rinpoche", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Brilliant!</span> Khunu Lama Tenzin Gyaltsen (1895–1977), known also as Tenzin Gyaltsen Negi, Khunu Rinpoche and Negi Lama, was born in the late 19th century in the Khunu region of Kinnaur valley in India. He is renowned as one of the influential teachers in the rimé (non-sectarian) movement within Tibetan Buddhism. A foremost scholar of Sanskrit and Tibetan, Khunu Rinpoche traveled widely in Tibet and India disseminating essential teachings of Buddhist philosophy. His students include the Fourteenth Dalai Lama of Tibet. Among several teachings that the Dalai Lama received from Khunu Rinpoche was the celebrated Bodhicaryavatara of Shantideva. He passed away at Shashul Monastery, in Lahoul (82 years of age) on February 23, 1977.</p>",
            "incorrect": "<p><span>Not Quite.</span> The correct answer is Khunu Lama Tenzin Gyaltsen (1895–1977). Khunu Lama known also as Tenzin Gyaltsen Negi, Khunu Rinpoche and Negi Lama, was born in the late 19th century in the Khunu region of Kinnaur valley in India. He is renowned as one of the influential teachers in the rimé (non-sectarian) movement within Tibetan Buddhism. A foremost scholar of Sanskrit and Tibetan, Khunu Rinpoche traveled widely in Tibet and India disseminating essential teachings of Buddhist philosophy. His students include the Fourteenth Dalai Lama of Tibet. Among several teachings that the Dalai Lama received from Khunu Rinpoche was the celebrated Bodhicaryavatara of Shantideva. He passed away at Shashul Monastery, in Lahoul (82 years of age) on February 23, 1977.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "Considered to be the living representative of Padmasambhava, he was a great revealer of the ‘treasures’ (terma) concealed by Padmasambhava. A prolific author and meticulous scholar, Rinpoche wrote more than forty volumes, one of the best known of which is his monumental 'The Nyingma School of Tibetan Buddhism: Its Fundamentals and History'. Over the last decade of his life he spent much time teaching in the West, where he helped to establish the Nyingma tradition, founding major centres in France and the United States. Who am I referring to?",
            "a": [
                {"option": "Minling Trichen Rinpoche",  "correct": false},
                {"option": "Chögyam Trungpa Rinpoche.", "correct": false},
                {"option": "His Holiness the 16th Karmapa.", "correct": false},
                {"option": "Dudjom Rinpoche.", "correct": true}
                 // no comma here
            ],
            "correct": "<p><span>Superb!</span> You know a lot about Dudjom Rinpoche!. </p>",
            "incorrect": "<p><span>Wrong!</span> The correct answer is Dudjom Rinpoche.</p>" // no comma here
        },
        { // Question 5 - Multiple Choice, Multiple True Answers, Select All
            "q": "Rinpoche was the teacher of His Holiness the Fourteenth Dalai Lama",
            "a": [
                {"option": "Kyabjé Trijang Rinpoche",  "correct": true},
                {"option": "Kyabjé Trulshik Rinpoche", "correct": true},
                {"option": "Tadrak Rinpoche Ngawang Sungrab", "correct": true},
                {"option": "Khunu Lama Tenzin Gyaltsen", "correct": true},
                {"option": "Kyabjé Ling Rinpoche", "correct": true}
                 // no comma here
            ],
            "correct": "<p><span>Superb! Did you had to think a lot on this one? </span> Actually all of them, Kyabjé Ling Rinpoche (senior tutor), Kyabjé Trijang Rinpoche, Tadrak Rinpoche, Khunu Lama Tenzin Gyaltsen and Kyabjé Trulshik Rinpoche were the teachers of His Holiness the Fourteenth Dalai Lama Tenzin Gyatso. </p>",
            "incorrect": "<p><span>Superb! Did you had to think a lot on this one? </span> Actually all of them, Kyabjé Ling Rinpoche (senior tutor), Kyabjé Trijang Rinpoche, Tadrak Rinpoche, Khunu Lama Tenzin Gyaltsen and Kyabjé Trulshik Rinpoche were the teachers of His Holiness the Fourteenth Dalai Lama Tenzin Gyatso.</p>" // no comma here
        }
        


    ]
};

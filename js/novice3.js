// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Novice Section 3: Schools of Tibetan Buddhism",
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
            "q": "Who is the head of Gelug tradition of Tibetan Buddhism?",
            "a": [
                {"option": "H.H. the Dalai Lama",      "correct": false},
                {"option": "Panchen Lama",     "correct": false},
                {"option": "Sharpa Choje",      "correct": false},
                {"option": "Ganden Tripa",     "correct": true} // no comma here
            ],
            "correct": "<p><span>That's right!</span> The Ganden Tripa, is the seniormost scholar and head of the Gelugpa School, and the direct successor of Je Tsongkhapa. The route to the position of Ganden Tripa is a democratic one, as expressed in the Tibetan proverb: “if a mother's son has the right qualifications, then the Ganden throne is open to him”. The present Ganden Tripa is Thubten Nyima Lungtok Tenzin Norbu (Wyl. thub bstan nyi ma lung rtogs bstan 'dzin nor bu), aka Rizong Rinpoche, the 102nd Ganden Tripa.</p>",
            "incorrect": "<p><span>Wrong answer.</span> The Ganden Tripa, is the seniormost scholar and head of the Gelugpa School, and the direct successor of Je Tsongkhapa. The route to the position of Ganden Tripa is a democratic one, as expressed in the Tibetan proverb: “if a mother's son has the right qualifications, then the Ganden throne is open to him”. The present Ganden Tripa is Thubten Nyima Lungtok Tenzin Norbu (Wyl. thub bstan nyi ma lung rtogs bstan 'dzin nor bu), aka Rizong Rinpoche, the 102nd Ganden Tripa.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Who is the head of the Sakya School?",
            "a": [
                {"option": "Sakya Trizin",        "correct": true},
                {"option": "Arik Rinpoche",   "correct": false},
                {"option": "Sakya Dagchen Rinpoche",               "correct": false},
                {"option": "Öntö Khyenrab Chökyi Özer", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Nice!</span> His Holiness Sakya Trizin, born in 1945, is the present head of the Sakya school, and the 41st in succession. He is renowned as an emanation of both Manjushri and Mahasiddha Virupa, the founder of the Lamdré teachings, and also as an incarnation of Apang Tertön.</p>",
            "incorrect": "<p><span>Incorrect.</span> His Holiness Sakya Trizin, born in 1945, is the present head of the Sakya school, and the 41st in succession. He is renowned as an emanation of both Manjushri and Mahasiddha Virupa, the founder of the Lamdré teachings, and also as an incarnation of Apang Tertön.</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Who is the present head of the Nyingmapa?",
            "a": [
                {"option": "Jedrung Trinlé Jampa Jungné",        "correct": false},
                {"option": "Taklung Tsetrul Rinpoche",   "correct": true},
                {"option": "Alak Zenkar Pema Ngödrup Rolwé Dorje",               "correct": false},
                {"option": "Nyoshul Lungtok Tenpé Nyima", "correct": false} // no comma here
            ],
            "select_any": true,
            "correct": "<p><span>Brilliant!</span> The Supreme Head of the Nyingmapa is a position that was established, primarily for administrative purposes, only while in exile in India. In Tibet no one served as the head of this school. First this title was given by H.H. the XIV Dalai Lama to Dudjom Rinpoche. Then it passed on to Dilgo Khyentse Rinpoche, Penor Rinpoche and in 2001, to Minling Trichen Rinpoche. In 2010 Kyabjé Trulshik Rinpoche accepted the position, and in 2012 the title passed to Taklung Tsetrul Rinpoche.</p>",
            "incorrect": "<p><span>Not Quite.</span> The Supreme Head of the Nyingmapa is a position that was established, primarily for administrative purposes, only while in exile in India. In Tibet no one served as the head of this school. First this title was given by H.H. the XIV Dalai Lama to Dudjom Rinpoche. Then it passed on to Dilgo Khyentse Rinpoche, Penor Rinpoche and in 2001, to Minling Trichen Rinpoche. In 2010 Kyabjé Trulshik Rinpoche accepted the position, and in 2012 the title passed to Taklung Tsetrul Rinpoche.</p>" // no comma here
        },
        { // Question 4 - Multiple Choice, Multiple True Answers, Select All
            "q": "Who is the current head of the Karma Kagyu Tradition of Tibetan Buddhism?",
            "a": [
                {"option": "His Holiness the 17th Karmapa Ogyen Trinley Dorje",  "correct": true},
                {"option": "Mikyö Dorje",  "correct": false},
                {"option": "Düsum Khyenpa",  "correct": false},
                {"option": "Situ Panchen Chökyi Jungné",          "correct": false} // no comma here
            ],
            "correct": "<p><span>Brilliant!</span> Ogyen Trinley Dorje (Wyl. o rgyan 'phrin las rdo rje) (b. 26 June 1985), His Holiness the 17th Karmapa, is the current spiritual leader and head of the Karma Kagyü tradition of Tibetan Buddhism, one of the four major lineages of Tibet. The 17th Karmapa has been personally appointed by His Holiness the Dalai Lama to continue his vision into the twenty-first century. Following in the footsteps of His Holiness, he has participated in the creation of a new ethic, relevant to all cultures and all religions of the twenty-first century, using the values of tolerance, reconciliation, solidarity and compassion for all sentient beings. </p>",
            "incorrect": "<p><span>ERRRR!</span> Ogyen Trinley Dorje (Wyl. o rgyan 'phrin las rdo rje) (b. 26 June 1985), His Holiness the 17th Karmapa, is the current spiritual leader and head of the Karma Kagyü tradition of Tibetan Buddhism, one of the four major lineages of Tibet. The 17th Karmapa has been personally appointed by His Holiness the Dalai Lama to continue his vision into the twenty-first century. Following in the footsteps of His Holiness, he has participated in the creation of a new ethic, relevant to all cultures and all religions of the twenty-first century, using the values of tolerance, reconciliation, solidarity and compassion for all sentient beings.</p>" // no comma here
        },
        { // Question 5
            "q": "His Holiness the Fourteenth Dalai Lama is Tibet's spiritual leader and the seniormost figure in the Tibetan Buddhist tradition.",
            "a": [
                {"option": "True",    "correct": true},
                {"option": "False",     "correct": false}
                
            ],
            "correct": "<p><span>Correct!</span> His Holiness the Fourteenth Dalai Lama Tenzin Gyatso (Tib. ཏ་ལཻ་བླ་མ་བསྟན་འཛིན་རྒྱ་མཚོ་, Wyl. ta lai bla ma bstan ‘dzin rgya mtsho) (b. 1935) is Tibet's spiritual leader and the seniormost figure in the Tibetan Buddhist tradition. His Holiness was born in Amdo, in the north-east of Tibet in 1935. He left Tibet in 1959 following the Chinese invasion which began some years earlier. Since then, His Holiness has resided in Dharamsala, India, the site of the Tibetan government-in-exile. He was awarded the Nobel Peace Prize in 1989.</p>",
            "incorrect": "<p><span>Wrong answer.</span> His Holiness the Fourteenth Dalai Lama Tenzin Gyatso (Tib. ཏ་ལཻ་བླ་མ་བསྟན་འཛིན་རྒྱ་མཚོ་, Wyl. ta lai bla ma bstan ‘dzin rgya mtsho) (b. 1935) is Tibet's spiritual leader and the seniormost figure in the Tibetan Buddhist tradition. His Holiness was born in Amdo, in the north-east of Tibet in 1935. He left Tibet in 1959 following the Chinese invasion which began some years earlier. Since then, His Holiness has resided in Dharamsala, India, the site of the Tibetan government-in-exile. He was awarded the Nobel Peace Prize in 1989.</p>" // no comma here
        }     
    ]
};

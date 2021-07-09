const express = require("express");
const cors = require("cors");
const roleModels =require('./db.json')

const app = express();

app.use(express.json()); 
app.use(cors());


app.get('/api/rolemodels', (req, res) => {
  console.log('BACKEND : ', roleModels)
  res.status(200).send(roleModels)
})
app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  
  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortune', (req, res) => { 
  const fortunes = ["From now on your kindness will lead you to success", 
                    "He who knows he has enough is rich.", 
                    "Imagination rules the world."
  ];

    let fortuneIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[fortuneIndex];

    res.status(200).send(randomFortune)

});


app.listen(4000, () => console.log("Server running on 4000"));

const express = require("express");
const cors = require("cors");
const ctrl = require('./controller')

const app = express();

app.use(express.json()); 
app.use(cors());

// responses for buttons
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

// responses for role models exported to controller.js

app.get('http://localhost:4000/api/rolemodel', ctrl.getAllModels);
app.post('http://localhost:4000/api/rolemodel/:id', ctrl.createModel);
app.delete('http://localhost:4000/api/rolemodel', ctrl.deleteModel);
app.put('http://localhost:4000/api/rolemodel:id', ctrl.updateModel);


app.listen(4000, () => console.log("Server running on 4000"));

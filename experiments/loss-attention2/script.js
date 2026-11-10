// Generated from loss-attention2.json by tools/labjs-export.mjs — do not edit by hand.
// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "full_study",
      "plugins": [
        {
          "type": "fullscreen",
          "message": "",
          "hint": "",
          "path": "lab.plugins.Fullscreen"
        }
      ],
      "content": [
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "click #Continue": "Continue"
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
// ["blue", "orange", "yellow"]
// ["blue", "yellow", "orange"]

// ["orange", "yellow", "blue"]
// ["orange", "blue", "yellow"]

// ["yellow", "blue", "orange"]
// ["yellow", "orange", "blue"]

colors = this.random.shuffle(["yellow", "orange", "blue"])

this.state.gain_color = colors[0]
this.state.loss_color = colors[1]
this.state.neutral_color = colors[2]

this.state.upper_gain_color = colors[0].slice(0,1).toUpperCase().concat(colors[0].slice(1))
this.state.upper_loss_color = colors[1].slice(0,1).toUpperCase().concat(colors[1].slice(1))
this.state.upper_neutral_color = colors[2].slice(0,1).toUpperCase().concat(colors[2].slice(1))

this.state.n_trials = 24 //24
trials_practice = 6 // web demo (original: 26)
trials_mixed_prc = 6 // web demo (original: 12)

get_rest_of_1 = function(number) {
  l = String(number).length
  return (1 - number).toFixed(l-2);
}

}
          },
          "title": "welcome",
          "content": "<main class=\"content-vertical-space-around content-horizontal-center\">\r\n\r\n  <div class=\"w-m text-justify\">\r\n    <p>\r\n      Welcome to our experiment and thank you for participating! \r\n    </p>\r\n  </div>\r\n</main>\r\n<footer class=\"content-horizontal-right\">\r\n  <button id=\"Continue\">Continue &rarr;</button>\r\n</footer>\r\n",
          "plugins": []
        },
        {
          "type": "lab.html.Form",
          "content": "<header>\n\n  <div class=\"images\">\n      <img src= \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/TU_Muenchen_Logo.svg/500px-TU_Muenchen_Logo.svg.png\" alt=\"Muenchen\" style=\"margin:30px;width:25%\">\n      <img src= \"https://decision.uib.es/wp-content/uploads/2021/06/lgouib1_400.png\" alt=\"UIB\" style=\"margin:30px;width:25%\">\n      <img src= \"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Universit%C3%A4t_Z%C3%BCrich_logo.svg/500px-Universit%C3%A4t_Z%C3%BCrich_logo.svg.png\" alt=\"Zurich\" style=\"margin:30px;width:25%\">\n  </div>\n\n  <h2 align=\"topleft\">\n      Study Information and Statement of Informed Consent\n  </h2>\n\n\n</header>\n\n<main class= \"text-left\">\n    <p class= \"text-left\">Thank you for your interest in participating in our study on decision making. Please read the following text carefully. By checking the box at the bottom of this page and proceeding further you indicate that you have read the information below and that you consent to participate in the study</p><br>\n    <b>1. Aim of the study</b>\n    <p class= \"text-left\">In this study, we want to investigate how people make decisions between different options after learning about these options.</p><br>\n    <b>2. Procedure and content of the study</b>\n    <p class= \"text-left\">You will have to choose between several options. First, you will make some practice choices. Then you will complete 10 blocks of 24 choices each, for a total of 240 choices. If you need to, you will be able to take short breaks between blocks. </p><br>\n    <b>3. Are there any risks involved?</b>\n    <p class= \"text-left\">There are no risks involved in participation.</p><br>\n    <b>4. What will happen to the information and data collected?</b>\n    <p class= \"text-left\">This study is a joint research project of the University of Balearic Islands, the University of Zurich, and the Technical University of Munich (responsible researcher: carlos.rey@uib.es). The data collected will be used for research purposes only.</p>\n    <b>5. Participation is voluntary</b>\n    <p class= \"text-left\">Participation in this study is voluntary. You may withdraw from the study at any time without giving any reason and without any negative consequences. If you withdraw from the study before completing it, you will not receive the compensation or bonus payment.</p><br>\n    <b>6. Data</b>\n    <p class= \"text-left\"> This experiment is a research project. Collected data will be analyzed for research purposes only. Experiment data may be shared for collaborative analysis. In addition, they can be publicly accessible if the article is published in a scientific journal. This allows the results to be reproduced by other researchers and promotes the quality of scientific practice. The data can also be used for new research questions that go beyond the goals of today's study. In any case, the experiment data is only transferred or published without personal contact data.\n\n\n      </p><br>\n    <b>7. Consent</b>\n    <p class= \"text-left\">This document has informed you about participation in the study on decision making. The study involves an experiment of approximately 20-25 minutes. If you complete the study, you will receive a compensation that could range from 3 GBP to 7 GBP. <b>If you do not consent by clicking the box below, you will not be able to participate in the study and you will not receive compensation. In this case, please return your submission by closing the respective tab of your browser.</b></p>\n<form>\n <br>\n <div>\n   <table>\n     <tbody>\n       <tr>\n         <td style=\"border: none; background-color: #f2f2f2;\">\n           <input type=\"checkbox\" name=\"consent\" id=\"consent\" required>\n           <label for=\"consent\"><b>I have read and understood the conditions outlined above. I consent to participate in the study and agree to the collection, storage, and use of my data as described above.</b></label><br>\n          </td>\n        </tr>\n        \n      </tbody>\n    </table>\n  </div>\n  <br>\n  <br>\n\n<footer class=\"content-horizontal-right\">\n  <button id=\"Continue\" type=\"submit\">Continue &rarr;</button>\n</footer>\n</form>\n</main>\n",
          "scrollTop": true,
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "consent"
        },
        {
          "type": "lab.html.Form",
          "content": "<header>\n  <h2>Prolific ID</h2>\n</header>\n\n\n<main class=\"content-vertical-space-around content-horizontal-center\">\n\n  <div class=\"w-m text-justify\">\n  <p>\n    Please type in (or copy-paste) your Prolific ID here:\n  </p>\n  </div>\n<body>\n  <form id=\"prolific_id\">\n    <table>\n      <tr>\n        <th>\n          <label for=\"prolific_id\">Prolific ID</label>\n        </th>\n        <td>\n           <input type=\"text\" name=\"prolific_id\"\n           placeholder=\"Enter Prolific ID...\" required/>\n          <input type=\"submit\">\n        </td>\n      </tr>\n    </table>\n  </form>\n</body>\n    <p>\n    You can exit full screen mode to copy and paste. The full screen mode will be applied again automatically on the next screen.\n    </p>\n  </main>",
          "scrollTop": true,
          "files": {},
          "responses": {
            "click #Continue": "Continue"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "ProlificID",
          "plugins": []
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "full_study2",
          "plugins": [
            {
              "type": "fullscreen",
              "message": "",
              "hint": "",
              "path": "lab.plugins.Fullscreen"
            }
          ],
          "content": [
            {
              "type": "lab.html.Form",
              "content": "<main class=\"content-vertical-space-around content-horizontal-center\">\n  <div class=\"w-m text-justify\">\n    <p>This study tests how you choose between boxes that have pixels (little dots) <b> that differ in value, depending on their color</b>. Pixels can be <b>${ state.gain_color }, ${ state.loss_color }, or ${ state.neutral_color }</b> where ${ state.gain_color } represents gains, ${ state.loss_color } represents losses, and ${ state.neutral_color } represents neutral: </p>\n  </div>\n  <div class=\"w-l text-center\">\n    <img src=\"https://raw.githubusercontent.com/carero2/loss-perception/main/matrices/blue-orange/0.455blue1orangeb%3D1w%3D100v%3D1.png\" style=\"width: 50%\">\n  </div>\n\n <div class=\"w-m text-justify\">\n    <p style=\"background-color: #D3D3D3; text-align:center\">\n    <span style=\"color:${ state.gain_color }\">${ state.upper_gain_color } pixels represent gains. <br></span>\n    <span style=\"color:${ state.loss_color }\"> ${ state.upper_loss_color } pixels represent losses. <br></span>\n    <span style=\"color:${ state.neutral_color }\">${ state.upper_neutral_color } pixels represent null or zeros. </span> </p>\n \n     <p>You will see two boxes (like the box above) on the screen. Press the <kbd>F-key</kbd> to pick the <b>left box</b>, or <kbd>J-key</kbd> to pick the <b>right box</b>. One pixel from your chosen box will be randomly selected to determine your payoff.</p>\n     <br>\n    <p><font size=\"+1\"><b>In this task, you start with an initial amount of 5 GBP. Importantly, depending on your choices, this amount will increase or decrease. You can gain or lose real money.</b></font></p>\n    <br>\n    <p>First, you will do some practice choices that do not affect your money and where you will get feedback about your choice. Then, you will do 10 blocks of real choices that <b>do</b> affect your money. <b>After each block, we will randomly pick one of your choices from that block and add or subtract the payoff of that choice from your money.</b></p>\n    <p> Please respond quickly and carefully.</p>\n    <hr>\n  </div>\n  <div class=\"w-m text-justify\">\n  </div>\n  <form>\n<footer class=\"content-horizontal-right\">\n  <button id=\"Continue\" type=\"submit\">Continue &rarr;</button>\n</footer>\n</form>\n</main>\n",
              "scrollTop": true,
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {

// Initialize variables
this.state.totalPoints = 5
this.state.reward_points = 0.25
sentence_reward = ""
this.state.pointsBlock = 0
this.state.block_order = 0
even = [2,4,6,8,10]
odd = [1,3,5,7,9]

}
              },
              "title": "instructions",
              "plugins": []
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "domain": "pract pure loss"
                },
                {
                  "domain": "pract pure gain"
                },
                {
                  "domain": "pract pure mixed"
                },
                {
                  "domain": "pract mixed gain"
                }
              ],
              "sample": {
                "mode": "sequential",
                "n": "4"
              },
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "before:prepare": function anonymous(
) {
pre_sentence = "The selected pixel is "
this.state.totalPoints_practice = 200;
}
              },
              "title": "randomize pract blocks",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.state.pointsPrcBlock = 0
}
                },
                "title": "practice blocks",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 260,
                        "angle": 0,
                        "width": 160.09,
                        "height": 16.95,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Press space to continue",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "15",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -50,
                        "angle": 0,
                        "width": 860.94,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "In the next block, both boxes have loss (${ state.loss_color })\nand neutral (${ state.neutral_color }) pixels",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -250,
                        "angle": 0,
                        "width": 232.98,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Practice choices",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": "space"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "loss screen",
                    "tardy": true,
                    "skip": "${ this.parameters.domain != \"pract pure loss\"}"
                  },
                  {
                    "type": "lab.flow.Loop",
                    "templateParameters": [
                      {
                        "left_side": "0.51",
                        "right_side": "0.03",
                        "domain": "pract_pure_loss",
                        "above_below_05": "prc",
                        "optimal_side": "prc"
                      },
                      {
                        "left_side": "0.53",
                        "right_side": "0.7525",
                        "domain": "pract_pure_loss",
                        "above_below_05": "prc",
                        "optimal_side": "prc"
                      },
                      {
                        "left_side": "0.53",
                        "right_side": "0.485",
                        "domain": "pract_pure_loss",
                        "above_below_05": "prc",
                        "optimal_side": "prc"
                      }
                    ],
                    "sample": {
                      "mode": "draw",
                      "n": "${ trials_practice }"
                    },
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "pure loss block",
                    "skip": "${ this.parameters.domain != \"pract pure loss\"}",
                    "shuffleGroups": [],
                    "template": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "trial",
                      "content": [
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "line",
                              "left": "0",
                              "top": 0,
                              "angle": 0,
                              "width": 50,
                              "height": 0,
                              "stroke": "black",
                              "strokeWidth": 10,
                              "fill": "rgb(0,0,0)"
                            },
                            {
                              "type": "line",
                              "left": 0,
                              "top": 0,
                              "angle": "90",
                              "width": 50,
                              "height": 0,
                              "stroke": "black",
                              "strokeWidth": 10,
                              "fill": "rgb(0,0,0)"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "run": function anonymous(
) {
// In this pure loss domain, left and right parameters store actual percentage of loss color for each matrix.
actual_left = this.parameters['left_side']
actual_right = this.parameters['right_side']

version_left = this.random.range(1, 101);
version_right = this.random.range(1, 101);

source_pictures = "https://raw.githubusercontent.com/carero2/loss-perception/main/matrices/"


// As matrices are called by name and these names are constructed by the percentage of both colors, for obtaining some we have to rest. For example, for 0.455blue1orange matrix, if we have orange as loss color and want to present 0.455 prop of losses we have to search for 0.545blue1orange matrix (1-0.455)

if ((this.state.loss_color === "blue" && this.state.neutral_color === "orange") ||(this.state.loss_color === "orange" && this.state.neutral_color === "blue")){
   
   folder = "blue-orange/"
   link = "blue1orangeb%3D1w%3D100v%3D"


   if(this.state.loss_color === "orange" && this.state.neutral_color === "blue"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

if ((this.state.loss_color === "blue" && this.state.neutral_color === "yellow") ||(this.state.loss_color === "yellow" && this.state.neutral_color === "blue")){

   folder = "blue-yellow/"
   link = "blue1yellowb%3D1w%3D100v%3D"

   if(this.state.loss_color === "yellow" && this.state.neutral_color === "blue"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

if ((this.state.loss_color === "orange" && this.state.neutral_color === "yellow") ||(this.state.loss_color === "yellow" && this.state.neutral_color === "orange")){
   
   folder = "orange-yellow/"
   link = "orange1yellowb%3D1w%3D100v%3D"

   if(this.state.loss_color === "yellow" && this.state.neutral_color === "orange"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

//source_pictures = source_pictures.concat(folder, "")

picture_left = source_pictures.concat(folder, actual_left, link, version_left, ".png")
picture_right = source_pictures.concat(folder, actual_right, link, version_right, ".png")

// Save variables to parameters to store in csv
this.options.parameters['left'] = actual_left;
this.options.parameters['right'] = actual_right;

this.options.parameters['picture_left'] = picture_left;
this.options.parameters['picture_right'] = picture_right;

}
                          },
                          "title": "fixation",
                          "timeout": "500",
                          "tardy": true
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "image",
                              "left": -200,
                              "top": 0,
                              "angle": 0,
                              "width": 251.5,
                              "height": 251.5,
                              "stroke": null,
                              "strokeWidth": 0,
                              "fill": "black",
                              "src": "${ picture_left }"
                            },
                            {
                              "type": "image",
                              "left": 200,
                              "top": 0,
                              "angle": 0,
                              "width": 251.5,
                              "height": 251.5,
                              "stroke": null,
                              "strokeWidth": 0,
                              "fill": "black",
                              "src": "${ picture_right }"
                            },
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": -190,
                              "angle": 0,
                              "width": 384.23,
                              "height": 36.16,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "black",
                              "text": "Which box do you choose?",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": 32,
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {
                            "keypress(f, F)": "f",
                            "keypress(j, J)": "j"
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.events['keypress'] = (e) => {
  if (e.key.toLowerCase() === 'f' || e.key.toLowerCase() === 'j') {
    this.state.responded = true;
    if (e.key.toLowerCase() === 'f'){
      position = -200;
      no_position = 200;
      respuesta = 'f';
      this.data.response = "f";
    } else if (e.key.toLowerCase() === 'j') {
      position = 200;
      no_position = -200;
      respuesta = 'j';
      this.data.response = "j";
    }
  }
}
}
                          },
                          "title": "stimulus",
                          "tardy": true
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "rect",
                              "left": "0",
                              "top": 245,
                              "angle": 0,
                              "width": "470",
                              "height": 50,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "#dddddd"
                            },
                            {
                              "type": "rect",
                              "left": -200,
                              "top": 0,
                              "angle": 0,
                              "width": 228.53,
                              "height": 228.53,
                              "stroke": "#000000",
                              "strokeWidth": 1,
                              "fill": "#ffffff"
                            },
                            {
                              "type": "rect",
                              "left": 200,
                              "top": 0,
                              "angle": 0,
                              "width": 228.53,
                              "height": 228.53,
                              "stroke": "#000000",
                              "strokeWidth": 1,
                              "fill": "#ffffff"
                            },
                            {
                              "type": "rect",
                              "left": "${ position }",
                              "top": 0,
                              "angle": 0,
                              "width": 228.53,
                              "height": 228.53,
                              "stroke": "#000000",
                              "strokeWidth": 10,
                              "fill": ""
                            },
                            {
                              "type": "image",
                              "left": -200,
                              "top": 0,
                              "angle": 0,
                              "width": 251.5,
                              "height": 251.5,
                              "stroke": null,
                              "strokeWidth": 0,
                              "fill": "black",
                              "src": "${ picture_left }"
                            },
                            {
                              "type": "image",
                              "left": 200,
                              "top": 0,
                              "angle": 0,
                              "width": 251.5,
                              "height": 251.5,
                              "stroke": null,
                              "strokeWidth": 0,
                              "fill": "black",
                              "src": "${ picture_right }"
                            },
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": 175,
                              "angle": 0,
                              "width": 186.83,
                              "height": 36.16,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "black",
                              "text": "${ sentence }",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": 32,
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            },
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": 245,
                              "angle": 0,
                              "width": 279.33,
                              "height": 36.16,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "${ color_points }",
                              "text": "${ points_to_show }",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": 32,
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {
                            "0.47blue1yellowb=1w=100v=1.png": "embedded/bca01ebdf5bed5e5574066a2d7e64c0d7379f8d35ceca7f9c60d2586fc882de4.png"
                          },
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.state.ended_on === 'timeout'){
  this.state.responded = false;
  respuesta = 'timeout';
  this.data.response = "timeout";
  position = 0;
  no_position = 0;
}


losses_left = this.parameters['left_side']
gains_left = 0
neutral_left = 1-this.parameters['left_side']
losses_right = this.parameters['right_side']
gains_right = 0
neutral_right = 1-this.parameters['right_side']


if (respuesta === 'f'){
  choice_losses = losses_left
  choice_gains = gains_left
  choice_neutral = neutral_left
  not_choice_losses = losses_right
  not_choice_gains = gains_right
  not_choice_neutral = neutral_right
}
else if (respuesta === 'j') {
  choice_losses = losses_right
  choice_gains = gains_right
  choice_neutral = neutral_right
  not_choice_losses = losses_left
  not_choice_gains = gains_left
  not_choice_neutral = neutral_left
}

this.options.parameters['choice_losses'] = choice_losses;
this.options.parameters['choice_gains'] = choice_gains;
this.options.parameters['choice_neutral'] = choice_neutral;
this.options.parameters['not_choice_losses'] = not_choice_losses;
this.options.parameters['not_choice_gains'] = not_choice_gains;
this.options.parameters['not_choice_neutral'] = not_choice_neutral;


this.options.parameters['losses_left'] = losses_left
this.options.parameters['gains_left'] = gains_left
this.options.parameters['neutral_left'] = neutral_left
this.options.parameters['losses_right'] = losses_right
this.options.parameters['gains_right'] = gains_right
this.options.parameters['neutral_right'] = neutral_right

this.options.parameters['ev_choice'] = (choice_losses*-this.state.reward_points) + (choice_gains*this.state.reward_points)
this.options.parameters['ev_not_choice'] = (not_choice_losses*-this.state.reward_points) + (not_choice_gains*this.state.reward_points)


if (this.state.responded){
  this.options.parameters['random_value'] = this.random.random();
  reward = -this.state.reward_points
  if (this.parameters['random_value'] > this.parameters['choice_losses']){
    reward = 0
  }
  this.state.points = reward;
} 


pre_sentence = "The selected pixel is "
if (this.state.points < 0){
  sentence = pre_sentence.concat(String(this.state.loss_color))
  points_to_show = "You would have lost ".concat(-(this.state.points * 100), " pennies")
  color_points = this.state.loss_color
} else {
  sentence = pre_sentence.concat((String(this.state.neutral_color)))
  points_to_show = "You would not have won or lost"
  color_points = this.state.neutral_color
}

this.state.pointsPrcBlock = this.state.pointsPrcBlock + this.state.points;
this.state.totalPoints_practice = this.state.totalPoints_practice + this.state.points;
}
                          },
                          "title": "choice",
                          "timeout": "3000",
                          "tardy": true
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "ITI",
                          "timeout": "500"
                        }
                      ]
                    }
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 260,
                        "angle": 0,
                        "width": 160.09,
                        "height": 16.95,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Press space to continue",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "15",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -50,
                        "angle": 0,
                        "width": 850.34,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "In the next block, both boxes have gain (${state.gain_color})\nand neutral (${state.neutral_color}) pixels",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -250,
                        "angle": 0,
                        "width": 187.53,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Let's practice",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": "space"
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "gain screen",
                    "tardy": true,
                    "skip": "${ this.parameters.domain != \"pract pure gain\"}"
                  },
                  {
                    "type": "lab.flow.Loop",
                    "templateParameters": [
                      {
                        "left_side": "0.51",
                        "right_side": "0.03",
                        "domain": "pract_pure_gain",
                        "above_below_05": "prc",
                        "optimal_side": "prc"
                      },
                      {
                        "left_side": "0.53",
                        "right_side": "0.7525",
                        "domain": "pract_pure_gain",
                        "above_below_05": "prc",
                        "optimal_side": "prc"
                      },
                      {
                        "left_side": "0.53",
                        "right_side": "0.485",
                        "domain": "pract_pure_gain",
                        "above_below_05": "prc",
                        "optimal_side": "prc"
                      }
                    ],
                    "sample": {
                      "mode": "draw",
                      "n": "${ trials_practice }"
                    },
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "pure gain block",
                    "skip": "${ this.parameters.domain != \"pract pure gain\"}",
                    "shuffleGroups": [],
                    "template": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "trial",
                      "content": [
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "line",
                              "left": "0",
                              "top": 0,
                              "angle": 0,
                              "width": 50,
                              "height": 0,
                              "stroke": "black",
                              "strokeWidth": 10,
                              "fill": "rgb(0,0,0)"
                            },
                            {
                              "type": "line",
                              "left": 0,
                              "top": 0,
                              "angle": "90",
                              "width": 50,
                              "height": 0,
                              "stroke": "black",
                              "strokeWidth": 10,
                              "fill": "rgb(0,0,0)"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "run": function anonymous(
) {
// In this pure gain domain, left and right parameters store actual percentage of gain color for each matrix.
actual_left = this.parameters['left_side']
actual_right = this.parameters['right_side']


version_left = this.random.range(1, 101);
version_right = this.random.range(1, 101);

source_pictures = "https://raw.githubusercontent.com/carero2/loss-perception/main/matrices/"


// As matrices are called by name and these names are constructed by the percentage of both colors, for obtaining some we have to rest. For example, for 0.455blue1orange matrix, if we have orange as gain color and want to present 0.455 prop of gains we have to search for 0.545blue1orange matrix (1-0.455)

if ((this.state.gain_color === "blue" && this.state.neutral_color === "orange") ||(this.state.gain_color === "orange" && this.state.neutral_color === "blue")){
   
   folder = "blue-orange/"
   link = "blue1orangeb%3D1w%3D100v%3D"


   if(this.state.gain_color === "orange" && this.state.neutral_color === "blue"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

if ((this.state.gain_color === "blue" && this.state.neutral_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.neutral_color === "blue")){

   folder = "blue-yellow/"
   link = "blue1yellowb%3D1w%3D100v%3D"

   if(this.state.gain_color === "yellow" && this.state.neutral_color === "blue"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

if ((this.state.gain_color === "orange" && this.state.neutral_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.neutral_color === "orange")){
   
   folder = "orange-yellow/"
   link = "orange1yellowb%3D1w%3D100v%3D"

   if(this.state.gain_color === "yellow" && this.state.neutral_color === "orange"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

source_pictures = source_pictures.concat(folder, "")

picture_left = source_pictures.concat(actual_left, link, version_left, ".png")
picture_right = source_pictures.concat(actual_right, link, version_right, ".png")

// Save variables to parameters to store in csv
this.options.parameters['left'] = actual_left;
this.options.parameters['right'] = actual_right;

this.options.parameters['picture_left'] = picture_left;
this.options.parameters['picture_right'] = picture_right;
}
                          },
                          "title": "fixation",
                          "timeout": "500",
                          "tardy": true
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "image",
                              "left": -200,
                              "top": 0,
                              "angle": 0,
                              "width": 251.5,
                              "height": 251.5,
                              "stroke": null,
                              "strokeWidth": 0,
                              "fill": "black",
                              "src": "${ picture_left }"
                            },
                            {
                              "type": "image",
                              "left": 200,
                              "top": 0,
                              "angle": 0,
                              "width": 251.5,
                              "height": 251.5,
                              "stroke": null,
                              "strokeWidth": 0,
                              "fill": "black",
                              "src": "${ picture_right }"
                            },
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": -190,
                              "angle": 0,
                              "width": 384.23,
                              "height": 36.16,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "black",
                              "text": "Which box do you choose?",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": 32,
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {
                            "keypress(f, F)": "f",
                            "keypress(j, J)": "j"
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.events['keypress'] = (e) => {
  if (e.key.toLowerCase() === 'f' || e.key.toLowerCase() === 'j') {
    this.state.responded = true;
    if (e.key.toLowerCase() === 'f'){
      position = -200;
      no_position = 200;
      respuesta = 'f';
      this.data.response = "f";
    } else if (e.key.toLowerCase() === 'j') {
      position = 200;
      no_position = -200;
      respuesta = 'j';
      this.data.response = "j";
    }
  }
}
}
                          },
                          "title": "stimulus",
                          "tardy": true
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "rect",
                              "left": -200,
                              "top": 0,
                              "angle": 0,
                              "width": 228.53,
                              "height": 228.53,
                              "stroke": "#000000",
                              "strokeWidth": 1,
                              "fill": "#ffffff"
                            },
                            {
                              "type": "rect",
                              "left": 200,
                              "top": 0,
                              "angle": 0,
                              "width": 228.53,
                              "height": 228.53,
                              "stroke": "#000000",
                              "strokeWidth": 1,
                              "fill": "#ffffff"
                            },
                            {
                              "type": "rect",
                              "left": "${ position }",
                              "top": 0,
                              "angle": 0,
                              "width": 228.53,
                              "height": 228.53,
                              "stroke": "#000000",
                              "strokeWidth": 10,
                              "fill": ""
                            },
                            {
                              "type": "image",
                              "left": -200,
                              "top": 0,
                              "angle": 0,
                              "width": 251.5,
                              "height": 251.5,
                              "stroke": null,
                              "strokeWidth": 0,
                              "fill": "black",
                              "src": "${ picture_left }"
                            },
                            {
                              "type": "image",
                              "left": 200,
                              "top": 0,
                              "angle": 0,
                              "width": 251.5,
                              "height": 251.5,
                              "stroke": null,
                              "strokeWidth": 0,
                              "fill": "black",
                              "src": "${ picture_right }"
                            },
                            {
                              "type": "rect",
                              "left": "0",
                              "top": 245,
                              "angle": 0,
                              "width": 470,
                              "height": 50,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "#dddddd"
                            },
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": 175,
                              "angle": 0,
                              "width": 186.83,
                              "height": 36.16,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "black",
                              "text": "${ sentence }",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": 32,
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            },
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": 245,
                              "angle": 0,
                              "width": 279.33,
                              "height": 36.16,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "${ color_points }",
                              "text": "${ points_to_show }",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": 32,
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {
                            "0.47blue1yellowb=1w=100v=1.png": "embedded/bca01ebdf5bed5e5574066a2d7e64c0d7379f8d35ceca7f9c60d2586fc882de4.png"
                          },
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.state.ended_on === 'timeout'){
  this.state.responded = false;
  respuesta = 'timeout';
  this.data.response = "timeout";
  position = 0;
  no_position = 0;
}

gains_left = this.parameters['left_side']
losses_left = 0
neutral_left = 1-this.parameters['left_side']
gains_right = this.parameters['right_side']
losses_right = 0
neutral_right = 1-this.parameters['right_side']


if (respuesta === 'f'){
  choice_losses = losses_left
  choice_gains = gains_left
  choice_neutral = neutral_left
  not_choice_losses = losses_right
  not_choice_gains = gains_right
  not_choice_neutral = neutral_right
}
else if (respuesta === 'j') {
  choice_losses = losses_right
  choice_gains = gains_right
  choice_neutral = neutral_right
  not_choice_losses = losses_left
  not_choice_gains = gains_left
  not_choice_neutral = neutral_left
}

this.options.parameters['choice_losses'] = choice_losses;
this.options.parameters['choice_gains'] = choice_gains;
this.options.parameters['choice_neutral'] = choice_neutral;
this.options.parameters['not_choice_losses'] = not_choice_losses;
this.options.parameters['not_choice_gains'] = not_choice_gains;
this.options.parameters['not_choice_neutral'] = not_choice_neutral;

this.options.parameters['losses_left'] = losses_left
this.options.parameters['gains_left'] = gains_left
this.options.parameters['neutral_left'] = neutral_left
this.options.parameters['losses_right'] = losses_right
this.options.parameters['gains_right'] = gains_right
this.options.parameters['neutral_right'] = neutral_right

this.options.parameters['ev_choice'] = (choice_losses*-this.state.reward_points) + (choice_gains*this.state.reward_points)
this.options.parameters['ev_not_choice'] = (not_choice_losses*-this.state.reward_points) + (not_choice_gains*this.state.reward_points)


if (this.state.responded){
  this.options.parameters['random_value'] = this.random.random();
  reward = this.state.reward_points
  if (this.parameters['random_value'] > this.parameters['choice_gains']){
    reward = 0
  }
  this.state.points = reward;
} 


if (this.state.points > 0){
  sentence = pre_sentence.concat(String(this.state.gain_color))
  points_to_show = "You would have won ".concat(String(this.state.points * 100), " pennies")
  color_points = this.state.gain_color
} else {
  sentence = pre_sentence.concat(String(this.state.neutral_color))
  points_to_show = "You would not have won or lost"
  color_points = this.state.neutral_color
}

this.state.pointsPrcBlock = this.state.pointsPrcBlock + this.state.points;
this.state.totalPoints_practice = this.state.totalPoints_practice + this.state.points;
}
                          },
                          "title": "choice",
                          "timeout": "2000",
                          "tardy": true
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "ITI",
                          "timeout": "500"
                        }
                      ]
                    }
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 260,
                        "angle": 0,
                        "width": 160.09,
                        "height": 16.95,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Press space to continue",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "15",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -50,
                        "angle": 0,
                        "width": 843.16,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "In the next block, both boxes have loss (${state.loss_color})\nand gain (${state.gain_color}) pixels",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -250,
                        "angle": 0,
                        "width": 187.53,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Let's practice",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": "space"
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
this.options.parameters.true_domain = "mixed"
}
                    },
                    "title": "mixed screen",
                    "tardy": true,
                    "skip": "${ this.parameters.domain != \"pract pure mixed\"}"
                  },
                  {
                    "type": "lab.flow.Loop",
                    "templateParameters": [
                      {
                        "left_side": "0.51",
                        "right_side": "0.03",
                        "domain": "pract_pure_mixed",
                        "above_below_05": "prc",
                        "optimal_side": "prc"
                      },
                      {
                        "left_side": "0.53",
                        "right_side": "0.7525",
                        "domain": "pract_pure_mixed",
                        "above_below_05": "prc",
                        "optimal_side": "prc"
                      },
                      {
                        "left_side": "0.53",
                        "right_side": "0.485",
                        "domain": "pract_pure_mixed",
                        "above_below_05": "prc",
                        "optimal_side": "prc"
                      }
                    ],
                    "sample": {
                      "mode": "draw",
                      "n": "${ trials_practice }"
                    },
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "pure mixed block",
                    "skip": "${ this.parameters.domain != \"pract pure mixed\"}",
                    "shuffleGroups": [],
                    "template": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "trial",
                      "content": [
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "line",
                              "left": "0",
                              "top": 0,
                              "angle": 0,
                              "width": 50,
                              "height": 0,
                              "stroke": "black",
                              "strokeWidth": 10,
                              "fill": "rgb(0,0,0)"
                            },
                            {
                              "type": "line",
                              "left": 0,
                              "top": 0,
                              "angle": "90",
                              "width": 50,
                              "height": 0,
                              "stroke": "black",
                              "strokeWidth": 10,
                              "fill": "rgb(0,0,0)"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "run": function anonymous(
) {
// In this pure mixed domain, left and right parameters store actual percentage of gain color for each matrix.
actual_left = this.parameters['left_side']
actual_right = this.parameters['right_side']

version_left = this.random.range(1, 101);
version_right = this.random.range(1, 101);

source_pictures = "https://raw.githubusercontent.com/carero2/loss-perception/main/matrices/"


// As matrices are called by name and these names are constructed by the percentage of both colors, for obtaining some we have to rest. For example, for 0.455blue1orange matrix, if we have orange as gain color and want to present 0.455 prop of gains we have to search for 0.545blue1orange matrix (1-0.455)

if ((this.state.gain_color === "blue" && this.state.loss_color === "orange") ||(this.state.gain_color === "orange" && this.state.loss_color === "blue")){
   
   folder = "blue-orange/"
   link = "blue1orangeb%3D1w%3D100v%3D"


   if(this.state.gain_color === "orange" && this.state.loss_color === "blue"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

if ((this.state.gain_color === "blue" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "blue")){

   folder = "blue-yellow/"
   link = "blue1yellowb%3D1w%3D100v%3D"

   if(this.state.gain_color === "yellow" && this.state.loss_color === "blue"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

if ((this.state.gain_color === "orange" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "orange")){
   
   folder = "orange-yellow/"
   link = "orange1yellowb%3D1w%3D100v%3D"

   if(this.state.gain_color === "yellow" && this.state.loss_color === "orange"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

source_pictures = source_pictures.concat(folder, "")

picture_left = source_pictures.concat(actual_left, link, version_left, ".png")
picture_right = source_pictures.concat(actual_right, link, version_right, ".png")

// Save variables to parameters to store in csv
this.options.parameters['left'] = actual_left;
this.options.parameters['right'] = actual_right;

this.options.parameters['picture_left'] = picture_left;
this.options.parameters['picture_right'] = picture_right;

}
                          },
                          "title": "fixation",
                          "timeout": "500",
                          "tardy": true
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "image",
                              "left": -200,
                              "top": 0,
                              "angle": 0,
                              "width": 251.5,
                              "height": 251.5,
                              "stroke": null,
                              "strokeWidth": 0,
                              "fill": "black",
                              "src": "${ picture_left }"
                            },
                            {
                              "type": "image",
                              "left": 200,
                              "top": 0,
                              "angle": 0,
                              "width": 251.5,
                              "height": 251.5,
                              "stroke": null,
                              "strokeWidth": 0,
                              "fill": "black",
                              "src": "${ picture_right }"
                            },
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": -190,
                              "angle": 0,
                              "width": 384.23,
                              "height": 36.16,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "black",
                              "text": "Which box do you choose?",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": 32,
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {
                            "keypress(f, F)": "f",
                            "keypress(j, J)": "j"
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.events['keypress'] = (e) => {
  if (e.key.toLowerCase() === 'f' || e.key.toLowerCase() === 'j') {
    this.state.responded = true;
    if (e.key.toLowerCase() === 'f'){
      position = -200;
      no_position = 200;
      respuesta = 'f';
      this.data.response = "f";
    } else if (e.key.toLowerCase() === 'j') {
      position = 200;
      no_position = -200;
      respuesta = 'j';
      this.data.response = "j";
    }
  }
}
}
                          },
                          "title": "stimulus",
                          "tardy": true
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "rect",
                              "left": -200,
                              "top": 0,
                              "angle": 0,
                              "width": 228.53,
                              "height": 228.53,
                              "stroke": "#000000",
                              "strokeWidth": 1,
                              "fill": "#ffffff"
                            },
                            {
                              "type": "rect",
                              "left": 200,
                              "top": 0,
                              "angle": 0,
                              "width": 228.53,
                              "height": 228.53,
                              "stroke": "#000000",
                              "strokeWidth": 1,
                              "fill": "#ffffff"
                            },
                            {
                              "type": "rect",
                              "left": "${ position }",
                              "top": 0,
                              "angle": 0,
                              "width": 228.53,
                              "height": 228.53,
                              "stroke": "#000000",
                              "strokeWidth": 10,
                              "fill": ""
                            },
                            {
                              "type": "image",
                              "left": -200,
                              "top": 0,
                              "angle": 0,
                              "width": 251.5,
                              "height": 251.5,
                              "stroke": null,
                              "strokeWidth": 0,
                              "fill": "black",
                              "src": "${ picture_left }"
                            },
                            {
                              "type": "rect",
                              "left": "0",
                              "top": "245",
                              "angle": 0,
                              "width": "470",
                              "height": 50,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "#dddddd"
                            },
                            {
                              "type": "image",
                              "left": 200,
                              "top": 0,
                              "angle": 0,
                              "width": 251.5,
                              "height": 251.5,
                              "stroke": null,
                              "strokeWidth": 0,
                              "fill": "black",
                              "src": "${ picture_right }"
                            },
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": 245,
                              "angle": 0,
                              "width": 279.33,
                              "height": 36.16,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "${ color_points }",
                              "text": "${ points_to_show }",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": 32,
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            },
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": 175,
                              "angle": 0,
                              "width": 186.83,
                              "height": 36.16,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "black",
                              "text": "${ sentence }",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": 32,
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {
                            "0.47blue1yellowb=1w=100v=1.png": "embedded/bca01ebdf5bed5e5574066a2d7e64c0d7379f8d35ceca7f9c60d2586fc882de4.png"
                          },
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.state.ended_on === 'timeout'){
  this.state.responded = false;
  respuesta = 'timeout';
  this.data.response = "timeout";
  position = 0;
  no_position = 0;
}

gains_left = this.parameters['left_side']
losses_left = 1-this.parameters['left_side']
neutral_left = 0
gains_right = this.parameters['right_side']
losses_right = 1-this.parameters['right_side']
neutral_right = 0

if (respuesta === 'f'){
  choice_losses = losses_left
  choice_gains = gains_left
  choice_neutral = neutral_left
  not_choice_losses = losses_right
  not_choice_gains = gains_right
  not_choice_neutral = neutral_right
}
else if (respuesta === 'j') {
  choice_losses = losses_right
  choice_gains = gains_right
  choice_neutral = neutral_right
  not_choice_losses = losses_left
  not_choice_gains = gains_left
  not_choice_neutral = neutral_right
}

this.options.parameters['choice_losses'] = choice_losses;
this.options.parameters['choice_gains'] = choice_gains;
this.options.parameters['choice_neutral'] = choice_neutral;
this.options.parameters['not_choice_losses'] = not_choice_losses;
this.options.parameters['not_choice_gains'] = not_choice_gains;
this.options.parameters['not_choice_neutral'] = not_choice_neutral;


this.options.parameters['losses_left'] = losses_left
this.options.parameters['gains_left'] = gains_left
this.options.parameters['neutral_left'] = neutral_left
this.options.parameters['losses_right'] = losses_right
this.options.parameters['gains_right'] = gains_right
this.options.parameters['neutral_right'] = neutral_right

this.options.parameters['ev_choice'] = (choice_losses*-this.state.reward_points) + (choice_gains*this.state.reward_points)
this.options.parameters['ev_not_choice'] = (not_choice_losses*-this.state.reward_points) + (not_choice_gains*this.state.reward_points)

if (this.state.responded){
  this.options.parameters['random_value'] = this.random.random();
  reward = this.state.reward_points
  if (this.parameters['random_value'] > this.parameters['choice_gains']){
    reward = -this.state.reward_points
  }
  this.state.points = reward;
} 



if (this.state.points > 0){
  sentence = pre_sentence.concat(String(this.state.gain_color))
  points_to_show = "You would have won ".concat(String(this.state.points * 100), " pennies")
  color_points = this.state.gain_color
} else {
  sentence = pre_sentence.concat(String(this.state.loss_color))
  points_to_show = "You would have lost ".concat(-(this.state.points * 100), " pennies")
  color_points = this.state.loss_color
}

this.state.pointsPrcBlock = this.state.pointsPrcBlock + this.state.points;
this.state.totalPoints_practice = this.state.totalPoints_practice + this.state.points;
}
                          },
                          "title": "choice",
                          "timeout": "2000",
                          "tardy": true
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "ITI",
                          "timeout": "500"
                        }
                      ]
                    }
                  },
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 260,
                        "angle": 0,
                        "width": 160.09,
                        "height": 16.95,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Press space to continue",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "15",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 10,
                        "top": -50,
                        "angle": 0,
                        "width": 948.16,
                        "height": 120.05,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "In the next block, one box has loss (${state.loss_color}) and\ngain (${state.gain_color}) pixels, and the other box has\ngain (${state.gain_color}) and neutral (${state.neutral_color}) pixels",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": -250,
                        "angle": 0,
                        "width": 187.53,
                        "height": 36.16,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Let's practice",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": 32,
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      }
                    ],
                    "viewport": [
                      800,
                      600
                    ],
                    "files": {},
                    "responses": {
                      "keypress(Space)": "space"
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
this.options.parameters.true_domain = "mixed"
}
                    },
                    "title": "mixed gain screen",
                    "skip": "${ this.parameters.domain != \"pract mixed gain\"}"
                  },
                  {
                    "type": "lab.flow.Loop",
                    "templateParameters": [
                      {
                        "left_side": "0.51",
                        "right_side": "0.03",
                        "domain": "pract_mixed_gain",
                        "above_below_05": "prc",
                        "mixed_side": "left"
                      },
                      {
                        "left_side": "0.53",
                        "right_side": "0.7525",
                        "domain": "pract_mixed_gain",
                        "above_below_05": "prc",
                        "mixed_side": "left"
                      },
                      {
                        "left_side": "0.53",
                        "right_side": "0.485",
                        "domain": "pract_mixed_gain",
                        "above_below_05": "prc",
                        "mixed_side": "right"
                      }
                    ],
                    "sample": {
                      "mode": "draw",
                      "n": "${trials_mixed_prc}"
                    },
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "mixed gain block",
                    "tardy": true,
                    "skip": "${ this.parameters.domain != \"pract mixed gain\"}",
                    "shuffleGroups": [],
                    "template": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {},
                      "title": "trial",
                      "content": [
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "line",
                              "left": "0",
                              "top": 0,
                              "angle": 0,
                              "width": 50,
                              "height": 0,
                              "stroke": "black",
                              "strokeWidth": 10,
                              "fill": "rgb(0,0,0)"
                            },
                            {
                              "type": "line",
                              "left": 0,
                              "top": 0,
                              "angle": "90",
                              "width": 50,
                              "height": 0,
                              "stroke": "black",
                              "strokeWidth": 10,
                              "fill": "rgb(0,0,0)"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "run": function anonymous(
) {
// In this mixed gain domain, left and right parameters store actual percentage of gain color for each matrix.
actual_left = this.parameters['left_side']
actual_right = this.parameters['right_side']


left_version = this.random.range(1, 101);
right_version = this.random.range(1, 101);

source_pictures = "https://raw.githubusercontent.com/carero2/loss-perception/main/matrices/"


// As matrices are called by name and these names are constructed by the percentage of both colors, for obtaining some we have to rest. For example, for 0.455blue1orange matrix, if we have orange as loss color and want to present 0.455 prop of losses we have to search for 0.545blue1orange matrix (1-0.455)

if (this.parameters.mixed_side === "right"){

  // We create the mixed matrix in the right variable

  if ((this.state.gain_color === "blue" && this.state.loss_color === "orange") ||(this.state.gain_color === "orange" && this.state.loss_color === "blue")){
    right_folder = "blue-orange/"
    right_link = "blue1orangeb%3D1w%3D100v%3D"


    if(this.state.gain_color === "orange" && this.state.loss_color === "blue"){
      actual_right = get_rest_of_1(actual_right)
    }
  }

  if ((this.state.gain_color === "blue" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "blue")){

    right_folder = "blue-yellow/"
    right_link = "blue1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.loss_color === "blue"){
      actual_right = get_rest_of_1(actual_right)
    }
  }

  if ((this.state.gain_color === "orange" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "orange")){
    
    right_folder = "orange-yellow/"
    right_link = "orange1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.loss_color === "orange"){
      actual_right = get_rest_of_1(actual_right)
    }
  }

  // We create the gain matrix in the left position
  if ((this.state.gain_color === "blue" && this.state.neutral_color === "orange") ||(this.state.gain_color === "orange" && this.state.neutral_color === "blue")){
    
    left_folder = "blue-orange/"
    left_link = "blue1orangeb%3D1w%3D100v%3D"


    if(this.state.gain_color === "orange" && this.state.neutral_color === "blue"){
      actual_left = get_rest_of_1(actual_left)
    }
  }

  if ((this.state.gain_color === "blue" && this.state.neutral_color === "yellow") || (this.state.gain_color === "yellow" && this.state.neutral_color === "blue")){

    left_folder = "blue-yellow/"
    left_link = "blue1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.neutral_color === "blue"){
      actual_left = get_rest_of_1(actual_left)
    }
  }

  if ((this.state.gain_color === "orange" && this.state.neutral_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.neutral_color === "orange")){
    
    left_folder = "orange-yellow/"
    left_link = "orange1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.neutral_color === "orange"){
      actual_left = get_rest_of_1(actual_left)
    }
  }
}

if (this.parameters.mixed_side === "left"){
  // We create the left mixed matrix
  if ((this.state.gain_color === "blue" && this.state.loss_color === "orange") ||(this.state.gain_color === "orange" && this.state.loss_color === "blue")){
    left_folder = "blue-orange/"
    left_link = "blue1orangeb%3D1w%3D100v%3D"


    if(this.state.gain_color === "orange" && this.state.loss_color === "blue"){
      actual_left = get_rest_of_1(actual_left)
    }
  }

  if ((this.state.gain_color === "blue" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "blue")){

    left_folder = "blue-yellow/"
    left_link = "blue1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.loss_color === "blue"){
      actual_left = get_rest_of_1(actual_left)
    }
  }

  if ((this.state.gain_color === "orange" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "orange")){
    
    left_folder = "orange-yellow/"
    left_link = "orange1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.loss_color === "orange"){
      actual_left = get_rest_of_1(actual_left)
    }
  }

  // We create the right gain matrix
  if ((this.state.gain_color === "blue" && this.state.neutral_color === "orange") ||(this.state.gain_color === "orange" && this.state.neutral_color === "blue")){
    
    right_folder = "blue-orange/"
    right_link = "blue1orangeb%3D1w%3D100v%3D"


    if(this.state.gain_color === "orange" && this.state.neutral_color === "blue"){
      actual_right = get_rest_of_1(actual_right)
    }
  }

  if ((this.state.gain_color === "blue" && this.state.neutral_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.neutral_color === "blue")){

    right_folder = "blue-yellow/"
    right_link = "blue1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.neutral_color === "blue"){
      actual_right = get_rest_of_1(actual_right)
    }
  }

  if ((this.state.gain_color === "orange" && this.state.neutral_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.neutral_color === "orange")){
    
    right_folder = "orange-yellow/"
    right_link = "orange1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.neutral_color === "orange"){
      actual_right = get_rest_of_1(actual_right)
    }
  }
}



picture_left = source_pictures.concat(left_folder, String(actual_left), left_link, left_version, ".png")
picture_right = source_pictures.concat(right_folder, String(actual_right), right_link, right_version, ".png")


// Save variables to parameters to store in csv
this.options.parameters['left'] = actual_left;
this.options.parameters['right'] = actual_right;

this.options.parameters['picture_left'] = picture_left;
this.options.parameters['picture_right'] = picture_right;

}
                          },
                          "title": "fixation",
                          "timeout": "500",
                          "tardy": true
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "image",
                              "left": -200,
                              "top": 0,
                              "angle": 0,
                              "width": 251.5,
                              "height": 251.5,
                              "stroke": null,
                              "strokeWidth": 0,
                              "fill": "black",
                              "src": "${ picture_left }"
                            },
                            {
                              "type": "image",
                              "left": 200,
                              "top": 0,
                              "angle": 0,
                              "width": 251.5,
                              "height": 251.5,
                              "stroke": null,
                              "strokeWidth": 0,
                              "fill": "black",
                              "src": "${ picture_right }"
                            },
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": -190,
                              "angle": 0,
                              "width": 384.23,
                              "height": 36.16,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "black",
                              "text": "Which box do you choose?",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": 32,
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {
                            "keypress(f, F)": "f",
                            "keypress(j, J)": "j"
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.events['keypress'] = (e) => {
  if (e.key.toLowerCase() === 'f' || e.key.toLowerCase() === 'j') {
    this.state.responded = true;
    if (e.key.toLowerCase() === 'f'){
      position = -200;
      no_position = 200;
      respuesta = 'f';
      this.data.response = "f";
    } else if (e.key.toLowerCase() === 'j') {
      position = 200;
      no_position = -200;
      respuesta = 'j';
      this.data.response = "j";
    }
  }
}
}
                          },
                          "title": "stimulus",
                          "tardy": true
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [
                            {
                              "type": "rect",
                              "left": -200,
                              "top": 0,
                              "angle": 0,
                              "width": 228.53,
                              "height": 228.53,
                              "stroke": "#000000",
                              "strokeWidth": 1,
                              "fill": "#ffffff"
                            },
                            {
                              "type": "rect",
                              "left": 200,
                              "top": 0,
                              "angle": 0,
                              "width": 228.53,
                              "height": 228.53,
                              "stroke": "#000000",
                              "strokeWidth": 1,
                              "fill": "#ffffff"
                            },
                            {
                              "type": "rect",
                              "left": "${ position }",
                              "top": 0,
                              "angle": 0,
                              "width": 228.53,
                              "height": 228.53,
                              "stroke": "#000000",
                              "strokeWidth": 10,
                              "fill": ""
                            },
                            {
                              "type": "image",
                              "left": -200,
                              "top": 0,
                              "angle": 0,
                              "width": 251.5,
                              "height": 251.5,
                              "stroke": null,
                              "strokeWidth": 0,
                              "fill": "black",
                              "src": "${ picture_left }"
                            },
                            {
                              "type": "rect",
                              "left": 0,
                              "top": "245",
                              "angle": 0,
                              "width": "470",
                              "height": 50,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "#dddddd"
                            },
                            {
                              "type": "image",
                              "left": 200,
                              "top": 0,
                              "angle": 0,
                              "width": 251.5,
                              "height": 251.5,
                              "stroke": null,
                              "strokeWidth": 0,
                              "fill": "black",
                              "src": "${ picture_right }"
                            },
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": 175,
                              "angle": 0,
                              "width": 186.83,
                              "height": 36.16,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "black",
                              "text": "${ sentence }",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": 32,
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            },
                            {
                              "type": "i-text",
                              "left": 0,
                              "top": 245,
                              "angle": 0,
                              "width": 279.33,
                              "height": 36.16,
                              "stroke": null,
                              "strokeWidth": 1,
                              "fill": "${ color_points }",
                              "text": "${ points_to_show }",
                              "fontStyle": "normal",
                              "fontWeight": "normal",
                              "fontSize": 32,
                              "fontFamily": "sans-serif",
                              "lineHeight": 1.16,
                              "textAlign": "center"
                            }
                          ],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {
                            "0.47blue1yellowb=1w=100v=1.png": "embedded/bca01ebdf5bed5e5574066a2d7e64c0d7379f8d35ceca7f9c60d2586fc882de4.png"
                          },
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.state.ended_on === 'timeout'){
  this.state.responded = false;
  respuesta = 'timeout';
  this.data.response = "timeout";
  position = 0;
  no_position = 0;
}


if (this.parameters.mixed_side === "right"){
  gains_left = this.parameters['left_side']
  losses_left = 0
  neutral_left = 1-this.parameters['left_side']
  gains_right = this.parameters['right_side']
  losses_right = 1-this.parameters['right_side']
  neutral_right = 0
}
if (this.parameters.mixed_side === "left"){
  gains_left = this.parameters['left_side']
  losses_left = 1-this.parameters['left_side']
  neutral_left = 0
  gains_right = this.parameters['right_side']
  losses_right = 0
  neutral_right = 1-this.parameters['right_side']
}

mixed_selected = false

if (respuesta === 'f'){
  if (this.parameters.mixed_side === "left"){
    mixed_selected = true
  }
  choice_losses = losses_left
  choice_gains = gains_left
  choice_neutral = neutral_left
  not_choice_losses = losses_right
  not_choice_gains = gains_right
  not_choice_neutral = neutral_right
  }
else if (respuesta === 'j') {
  if (this.parameters.mixed_side === "right"){
    mixed_selected = true
  }
  choice_losses = losses_right
  choice_gains = gains_right
  choice_neutral = neutral_right
  not_choice_losses = losses_left
  not_choice_gains = gains_left
  not_choice_neutral = neutral_left
}

this.options.parameters['choice_losses'] = choice_losses;
this.options.parameters['choice_gains'] = choice_gains;
this.options.parameters['choice_neutral'] = choice_neutral;
this.options.parameters['not_choice_losses'] = not_choice_losses;
this.options.parameters['not_choice_gains'] = not_choice_gains;
this.options.parameters['not_choice_neutral'] = not_choice_neutral;


this.options.parameters['ev_choice'] = (choice_losses*-this.state.reward_points) + (choice_gains*this.state.reward_points)
this.options.parameters['ev_not_choice'] = (not_choice_losses*-this.state.reward_points) + (not_choice_gains*this.state.reward_points)


this.options.parameters['losses_left'] = losses_left
this.options.parameters['gains_left'] = gains_left
this.options.parameters['neutral_left'] = neutral_left
this.options.parameters['losses_right'] = losses_right
this.options.parameters['gains_right'] = gains_right
this.options.parameters['neutral_right'] = neutral_right



if (this.state.responded){
  this.options.parameters['random_value'] = this.random.random();

  if (mixed_selected){
    reward = this.state.reward_points
    if (this.parameters['random_value'] > this.parameters['choice_gains']){
      reward = -this.state.reward_points
      }
    }
  else if(!mixed_selected){
    reward = this.state.reward_points
    if (this.parameters['random_value'] > this.parameters['choice_gains']){
      reward = 0
      }
  }
  this.state.points = reward;
}




if (this.state.points > 0){
  sentence = pre_sentence.concat(String(this.state.gain_color))
  points_to_show = "You would have won ".concat(String(this.state.points * 100), " pennies")
  color_points = this.state.gain_color
} else if (this.state.points < 0) {
  sentence = pre_sentence.concat(String(this.state.loss_color))
  points_to_show = "You would have lost ".concat(-(this.state.points * 100), " pennies")
  color_points = this.state.loss_color
} else {
  sentence = pre_sentence.concat(String(this.state.neutral_color))
  points_to_show = "You would not have won or lost"
  color_points = this.state.neutral_color
}

this.state.pointsPrcBlock = this.state.pointsPrcBlock + this.state.points;
this.state.totalPoints_practice = this.state.totalPoints_practice + this.state.points;
}
                          },
                          "title": "choice",
                          "timeout": "1000",
                          "tardy": true
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "ITI",
                          "timeout": "500"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "",
                  "content": "Please answer these questions about the experiment."
                },
                {
                  "required": true,
                  "type": "radio",
                  "label": "Which color represents gains?",
                  "options": [
                    {
                      "label": "Yellow",
                      "coding": "yellow"
                    },
                    {
                      "label": "Blue",
                      "coding": "blue"
                    },
                    {
                      "label": "Orange",
                      "coding": "orange"
                    }
                  ],
                  "shuffle": false,
                  "name": "attention_gains"
                },
                {
                  "required": true,
                  "type": "radio",
                  "label": "Which color represents neutral?",
                  "options": [
                    {
                      "label": "Yellow",
                      "coding": "yellow"
                    },
                    {
                      "label": "Blue",
                      "coding": "blue"
                    },
                    {
                      "label": "Orange",
                      "coding": "orange"
                    }
                  ],
                  "shuffle": false,
                  "name": "attention_neutral"
                },
                {
                  "required": true,
                  "type": "radio",
                  "label": "Which color represents losses?",
                  "options": [
                    {
                      "label": "Yellow",
                      "coding": "yellow"
                    },
                    {
                      "label": "Blue",
                      "coding": "blue"
                    },
                    {
                      "label": "Orange",
                      "coding": "orange"
                    }
                  ],
                  "shuffle": false,
                  "name": "attention_losses"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Attention check",
              "tardy": true
            },
            {
              "type": "lab.canvas.Screen",
              "content": [],
              "viewport": [
                800,
                600
              ],
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {
                "commit": function anonymous(
) {
if ((this.state.attention_gains === this.state.gain_color) && (this.state.attention_losses === this.state.loss_color) && (this.state.attention_neutral === this.state.neutral_color)){
  this.state.correct_attention = true
} else {
  this.state.correct_attention = false
}
}
              },
              "title": "blank screen",
              "timeout": "400",
              "tardy": true
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "repeat",
              "tardy": true,
              "skip": "${ this.state.correct_attention === true }",
              "content": [
                {
                  "type": "lab.html.Screen",
                  "files": {},
                  "responses": {
                    "click #Continue": "Continue"
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "repeat task",
                  "tardy": true,
                  "content": "<main class=\"content-vertical-space-around content-horizontal-center\">\r\n\r\n  <div class=\"w-m text-justify\">\r\n\r\n    <p>\r\n       You did not answer the questions about the colors correctly. \r\n    </p>\r\n    <p>\r\n      Let's try the practice block again to make sure you understand your task.\r\n    </p>\r\n    \r\n    <p>\r\n    Click <kbd>continue</kbd>.\r\n    </p>\r\n  </div>\r\n</main>\r\n\r\n<footer class=\"content-horizontal-right\">\r\n  <button id=\"Continue\">Continue &rarr;</button>\r\n</footer>"
                },
                {
                  "type": "lab.html.Form",
                  "content": "<main class=\"content-vertical-space-around content-horizontal-center\">\n  <div class=\"w-m text-justify\">\n    <p>This study tests how you choose between boxes that have pixels (little dots) <b> that differ in value, depending on their color</b>. Pixels can be <b>${ state.gain_color }, ${ state.loss_color }, or ${ state.neutral_color }</b> where ${ state.gain_color } represents gains, ${ state.loss_color } represents losses, and ${ state.neutral_color } represents neutral: </p>\n  </div>\n  <div class=\"w-l text-center\">\n    <img src=\"https://raw.githubusercontent.com/carero2/loss-perception/main/matrices/blue-orange/0.455blue1orangeb%3D1w%3D100v%3D1.png\" style=\"width: 50%\">\n  </div>\n\n <div class=\"w-m text-justify\">\n    <p style=\"background-color: #D3D3D3; text-align:center\">\n    <span style=\"color:${ state.gain_color }\">${ state.upper_gain_color } pixels represent gains. <br></span>\n    <span style=\"color:${ state.loss_color }\"> ${ state.upper_loss_color } pixels represent losses. <br></span>\n    <span style=\"color:${ state.neutral_color }\">${ state.upper_neutral_color } pixels represent null or zeros. </span> </p>\n \n     <p>You will see two boxes (like the box above) on the screen. Press the <kbd>F-key</kbd> to pick the <b>left box</b>, or <kbd>J-key</kbd> to pick the <b>right box</b>. One pixel from your chosen box will be randomly selected to determine your payoff.</p>\n     <br>\n    <p><font size=\"+1\"><b>In this task, you start with an initial amount of 5 GBP. Importantly, depending on your choices, this amount will increase or decrease. You can gain or lose real money.</b></font></p>\n    <br>\n    <p>First, you will do some practice choices that do not affect your money and where you will get feedback about your choice. Then, you will do 10 blocks of real choices that <b>do</b> affect your money. <b>After each block, we will randomly pick one of your choices from that block and add or subtract the payoff of that choice from your money.</b></p>\n    <p> Please respond quickly and carefully.</p>\n    <hr>\n  </div>\n  <div class=\"w-m text-justify\">\n  </div>\n  <form>\n<footer class=\"content-horizontal-right\">\n  <button id=\"Continue\" type=\"submit\">Continue &rarr;</button>\n</footer>\n</form>\n</main>\n",
                  "scrollTop": true,
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "instructions repeat",
                  "plugins": [],
                  "tardy": true
                },
                {
                  "type": "lab.flow.Loop",
                  "templateParameters": [
                    {
                      "domain": "pract pure loss"
                    },
                    {
                      "domain": "pract pure gain"
                    },
                    {
                      "domain": "pract pure mixed"
                    },
                    {
                      "domain": "pract mixed gain"
                    }
                  ],
                  "sample": {
                    "mode": "sequential",
                    "n": "4"
                  },
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {
                    "before:prepare": function anonymous(
) {
pre_sentence = "The selected pixel is "
this.state.totalPoints_practice = 200;
}
                  },
                  "title": "randomize pract blocks",
                  "shuffleGroups": [],
                  "template": {
                    "type": "lab.flow.Sequence",
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {
                      "before:prepare": function anonymous(
) {
this.state.pointsPrcBlock = 0
}
                    },
                    "title": "practice blocks",
                    "content": [
                      {
                        "type": "lab.canvas.Screen",
                        "content": [
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": 260,
                            "angle": 0,
                            "width": 160.09,
                            "height": 16.95,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "Press space to continue",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": "15",
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          },
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": -50,
                            "angle": 0,
                            "width": 860.94,
                            "height": 78.11,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "In the next block, both boxes have loss (${ state.loss_color })\nand neutral (${ state.neutral_color }) pixels",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": 32,
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          },
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": -250,
                            "angle": 0,
                            "width": 232.98,
                            "height": 36.16,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "Practice choices",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": 32,
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          }
                        ],
                        "viewport": [
                          800,
                          600
                        ],
                        "files": {},
                        "responses": {
                          "keypress(Space)": "space"
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "loss screen",
                        "tardy": true,
                        "skip": "${ this.parameters.domain != \"pract pure loss\"}"
                      },
                      {
                        "type": "lab.flow.Loop",
                        "templateParameters": [
                          {
                            "left_side": "0.51",
                            "right_side": "0.03",
                            "domain": "pract_pure_loss",
                            "above_below_05": "prc",
                            "optimal_side": "prc"
                          },
                          {
                            "left_side": "0.53",
                            "right_side": "0.7525",
                            "domain": "pract_pure_loss",
                            "above_below_05": "prc",
                            "optimal_side": "prc"
                          },
                          {
                            "left_side": "0.53",
                            "right_side": "0.485",
                            "domain": "pract_pure_loss",
                            "above_below_05": "prc",
                            "optimal_side": "prc"
                          }
                        ],
                        "sample": {
                          "mode": "draw",
                          "n": "${ trials_practice }"
                        },
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "pure loss block",
                        "skip": "${ this.parameters.domain != \"pract pure loss\"}",
                        "shuffleGroups": [],
                        "template": {
                          "type": "lab.flow.Sequence",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "trial",
                          "content": [
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "line",
                                  "left": "0",
                                  "top": 0,
                                  "angle": 0,
                                  "width": 50,
                                  "height": 0,
                                  "stroke": "black",
                                  "strokeWidth": 10,
                                  "fill": "rgb(0,0,0)"
                                },
                                {
                                  "type": "line",
                                  "left": 0,
                                  "top": 0,
                                  "angle": "90",
                                  "width": 50,
                                  "height": 0,
                                  "stroke": "black",
                                  "strokeWidth": 10,
                                  "fill": "rgb(0,0,0)"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "run": function anonymous(
) {
// In this pure loss domain, left and right parameters store actual percentage of loss color for each matrix.
actual_left = this.parameters['left_side']
actual_right = this.parameters['right_side']

version_left = this.random.range(1, 101);
version_right = this.random.range(1, 101);

source_pictures = "https://raw.githubusercontent.com/carero2/loss-perception/main/matrices/"


// As matrices are called by name and these names are constructed by the percentage of both colors, for obtaining some we have to rest. For example, for 0.455blue1orange matrix, if we have orange as loss color and want to present 0.455 prop of losses we have to search for 0.545blue1orange matrix (1-0.455)

if ((this.state.loss_color === "blue" && this.state.neutral_color === "orange") ||(this.state.loss_color === "orange" && this.state.neutral_color === "blue")){
   
   folder = "blue-orange/"
   link = "blue1orangeb%3D1w%3D100v%3D"


   if(this.state.loss_color === "orange" && this.state.neutral_color === "blue"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

if ((this.state.loss_color === "blue" && this.state.neutral_color === "yellow") ||(this.state.loss_color === "yellow" && this.state.neutral_color === "blue")){

   folder = "blue-yellow/"
   link = "blue1yellowb%3D1w%3D100v%3D"

   if(this.state.loss_color === "yellow" && this.state.neutral_color === "blue"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

if ((this.state.loss_color === "orange" && this.state.neutral_color === "yellow") ||(this.state.loss_color === "yellow" && this.state.neutral_color === "orange")){
   
   folder = "orange-yellow/"
   link = "orange1yellowb%3D1w%3D100v%3D"

   if(this.state.loss_color === "yellow" && this.state.neutral_color === "orange"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

//source_pictures = source_pictures.concat(folder, "")

picture_left = source_pictures.concat(folder, actual_left, link, version_left, ".png")
picture_right = source_pictures.concat(folder, actual_right, link, version_right, ".png")

// Save variables to parameters to store in csv
this.options.parameters['left'] = actual_left;
this.options.parameters['right'] = actual_right;

this.options.parameters['picture_left'] = picture_left;
this.options.parameters['picture_right'] = picture_right;

}
                              },
                              "title": "fixation",
                              "timeout": "500",
                              "tardy": true
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "image",
                                  "left": -200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 251.5,
                                  "height": 251.5,
                                  "stroke": null,
                                  "strokeWidth": 0,
                                  "fill": "black",
                                  "src": "${ picture_left }"
                                },
                                {
                                  "type": "image",
                                  "left": 200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 251.5,
                                  "height": 251.5,
                                  "stroke": null,
                                  "strokeWidth": 0,
                                  "fill": "black",
                                  "src": "${ picture_right }"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": -190,
                                  "angle": 0,
                                  "width": 384.23,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "Which box do you choose?",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "keypress(f, F)": "f",
                                "keypress(j, J)": "j"
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "before:prepare": function anonymous(
) {
this.options.events['keypress'] = (e) => {
  if (e.key.toLowerCase() === 'f' || e.key.toLowerCase() === 'j') {
    this.state.responded = true;
    if (e.key.toLowerCase() === 'f'){
      position = -200;
      no_position = 200;
      respuesta = 'f';
      this.data.response = "f";
    } else if (e.key.toLowerCase() === 'j') {
      position = 200;
      no_position = -200;
      respuesta = 'j';
      this.data.response = "j";
    }
  }
}
}
                              },
                              "title": "stimulus",
                              "tardy": true
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "rect",
                                  "left": "0",
                                  "top": 245,
                                  "angle": 0,
                                  "width": "470",
                                  "height": 50,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "#dddddd"
                                },
                                {
                                  "type": "rect",
                                  "left": -200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 228.53,
                                  "height": 228.53,
                                  "stroke": "#000000",
                                  "strokeWidth": 1,
                                  "fill": "#ffffff"
                                },
                                {
                                  "type": "rect",
                                  "left": 200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 228.53,
                                  "height": 228.53,
                                  "stroke": "#000000",
                                  "strokeWidth": 1,
                                  "fill": "#ffffff"
                                },
                                {
                                  "type": "rect",
                                  "left": "${ position }",
                                  "top": 0,
                                  "angle": 0,
                                  "width": 228.53,
                                  "height": 228.53,
                                  "stroke": "#000000",
                                  "strokeWidth": 10,
                                  "fill": ""
                                },
                                {
                                  "type": "image",
                                  "left": -200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 251.5,
                                  "height": 251.5,
                                  "stroke": null,
                                  "strokeWidth": 0,
                                  "fill": "black",
                                  "src": "${ picture_left }"
                                },
                                {
                                  "type": "image",
                                  "left": 200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 251.5,
                                  "height": 251.5,
                                  "stroke": null,
                                  "strokeWidth": 0,
                                  "fill": "black",
                                  "src": "${ picture_right }"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": 175,
                                  "angle": 0,
                                  "width": 186.83,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "${ sentence }",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": 245,
                                  "angle": 0,
                                  "width": 279.33,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "${ color_points }",
                                  "text": "${ points_to_show }",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {
                                "0.47blue1yellowb=1w=100v=1.png": "embedded/bca01ebdf5bed5e5574066a2d7e64c0d7379f8d35ceca7f9c60d2586fc882de4.png"
                              },
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "before:prepare": function anonymous(
) {
if (this.state.ended_on === 'timeout'){
  this.state.responded = false;
  respuesta = 'timeout';
  this.data.response = "timeout";
  position = 0;
  no_position = 0;
}


losses_left = this.parameters['left_side']
gains_left = 0
neutral_left = 1-this.parameters['left_side']
losses_right = this.parameters['right_side']
gains_right = 0
neutral_right = 1-this.parameters['right_side']


if (respuesta === 'f'){
  choice_losses = losses_left
  choice_gains = gains_left
  choice_neutral = neutral_left
  not_choice_losses = losses_right
  not_choice_gains = gains_right
  not_choice_neutral = neutral_right
}
else if (respuesta === 'j') {
  choice_losses = losses_right
  choice_gains = gains_right
  choice_neutral = neutral_right
  not_choice_losses = losses_left
  not_choice_gains = gains_left
  not_choice_neutral = neutral_left
}

this.options.parameters['choice_losses'] = choice_losses;
this.options.parameters['choice_gains'] = choice_gains;
this.options.parameters['choice_neutral'] = choice_neutral;
this.options.parameters['not_choice_losses'] = not_choice_losses;
this.options.parameters['not_choice_gains'] = not_choice_gains;
this.options.parameters['not_choice_neutral'] = not_choice_neutral;


this.options.parameters['losses_left'] = losses_left
this.options.parameters['gains_left'] = gains_left
this.options.parameters['neutral_left'] = neutral_left
this.options.parameters['losses_right'] = losses_right
this.options.parameters['gains_right'] = gains_right
this.options.parameters['neutral_right'] = neutral_right

this.options.parameters['ev_choice'] = (choice_losses*-this.state.reward_points) + (choice_gains*this.state.reward_points)
this.options.parameters['ev_not_choice'] = (not_choice_losses*-this.state.reward_points) + (not_choice_gains*this.state.reward_points)


if (this.state.responded){
  this.options.parameters['random_value'] = this.random.random();
  reward = -this.state.reward_points
  if (this.parameters['random_value'] > this.parameters['choice_losses']){
    reward = 0
  }
  this.state.points = reward;
} 


pre_sentence = "The selected pixel is "
if (this.state.points < 0){
  sentence = pre_sentence.concat(String(this.state.loss_color))
  points_to_show = "You would have lost ".concat(-(this.state.points * 100), " pennies")
  color_points = this.state.loss_color
} else {
  sentence = pre_sentence.concat((String(this.state.neutral_color)))
  points_to_show = "You would not have won or lost"
  color_points = this.state.neutral_color
}

this.state.pointsPrcBlock = this.state.pointsPrcBlock + this.state.points;
this.state.totalPoints_practice = this.state.totalPoints_practice + this.state.points;
}
                              },
                              "title": "choice",
                              "timeout": "3000",
                              "tardy": true
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "ITI",
                              "timeout": "500"
                            }
                          ]
                        }
                      },
                      {
                        "type": "lab.canvas.Screen",
                        "content": [
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": 260,
                            "angle": 0,
                            "width": 160.09,
                            "height": 16.95,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "Press space to continue",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": "15",
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          },
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": -50,
                            "angle": 0,
                            "width": 850.34,
                            "height": 78.11,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "In the next block, both boxes have gain (${state.gain_color})\nand neutral (${state.neutral_color}) pixels",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": 32,
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          },
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": -250,
                            "angle": 0,
                            "width": 187.53,
                            "height": 36.16,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "Let's practice",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": 32,
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          }
                        ],
                        "viewport": [
                          800,
                          600
                        ],
                        "files": {},
                        "responses": {
                          "keypress(Space)": "space"
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "gain screen",
                        "tardy": true,
                        "skip": "${ this.parameters.domain != \"pract pure gain\"}"
                      },
                      {
                        "type": "lab.flow.Loop",
                        "templateParameters": [
                          {
                            "left_side": "0.51",
                            "right_side": "0.03",
                            "domain": "pract_pure_gain",
                            "above_below_05": "prc",
                            "optimal_side": "prc"
                          },
                          {
                            "left_side": "0.53",
                            "right_side": "0.7525",
                            "domain": "pract_pure_gain",
                            "above_below_05": "prc",
                            "optimal_side": "prc"
                          },
                          {
                            "left_side": "0.53",
                            "right_side": "0.485",
                            "domain": "pract_pure_gain",
                            "above_below_05": "prc",
                            "optimal_side": "prc"
                          }
                        ],
                        "sample": {
                          "mode": "draw",
                          "n": "${ trials_practice }"
                        },
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "pure gain block",
                        "skip": "${ this.parameters.domain != \"pract pure gain\"}",
                        "shuffleGroups": [],
                        "template": {
                          "type": "lab.flow.Sequence",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "trial",
                          "content": [
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "line",
                                  "left": "0",
                                  "top": 0,
                                  "angle": 0,
                                  "width": 50,
                                  "height": 0,
                                  "stroke": "black",
                                  "strokeWidth": 10,
                                  "fill": "rgb(0,0,0)"
                                },
                                {
                                  "type": "line",
                                  "left": 0,
                                  "top": 0,
                                  "angle": "90",
                                  "width": 50,
                                  "height": 0,
                                  "stroke": "black",
                                  "strokeWidth": 10,
                                  "fill": "rgb(0,0,0)"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "run": function anonymous(
) {
// In this pure gain domain, left and right parameters store actual percentage of gain color for each matrix.
actual_left = this.parameters['left_side']
actual_right = this.parameters['right_side']


version_left = this.random.range(1, 101);
version_right = this.random.range(1, 101);

source_pictures = "https://raw.githubusercontent.com/carero2/loss-perception/main/matrices/"


// As matrices are called by name and these names are constructed by the percentage of both colors, for obtaining some we have to rest. For example, for 0.455blue1orange matrix, if we have orange as gain color and want to present 0.455 prop of gains we have to search for 0.545blue1orange matrix (1-0.455)

if ((this.state.gain_color === "blue" && this.state.neutral_color === "orange") ||(this.state.gain_color === "orange" && this.state.neutral_color === "blue")){
   
   folder = "blue-orange/"
   link = "blue1orangeb%3D1w%3D100v%3D"


   if(this.state.gain_color === "orange" && this.state.neutral_color === "blue"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

if ((this.state.gain_color === "blue" && this.state.neutral_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.neutral_color === "blue")){

   folder = "blue-yellow/"
   link = "blue1yellowb%3D1w%3D100v%3D"

   if(this.state.gain_color === "yellow" && this.state.neutral_color === "blue"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

if ((this.state.gain_color === "orange" && this.state.neutral_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.neutral_color === "orange")){
   
   folder = "orange-yellow/"
   link = "orange1yellowb%3D1w%3D100v%3D"

   if(this.state.gain_color === "yellow" && this.state.neutral_color === "orange"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

source_pictures = source_pictures.concat(folder, "")

picture_left = source_pictures.concat(actual_left, link, version_left, ".png")
picture_right = source_pictures.concat(actual_right, link, version_right, ".png")

// Save variables to parameters to store in csv
this.options.parameters['left'] = actual_left;
this.options.parameters['right'] = actual_right;

this.options.parameters['picture_left'] = picture_left;
this.options.parameters['picture_right'] = picture_right;
}
                              },
                              "title": "fixation",
                              "timeout": "500",
                              "tardy": true
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "image",
                                  "left": -200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 251.5,
                                  "height": 251.5,
                                  "stroke": null,
                                  "strokeWidth": 0,
                                  "fill": "black",
                                  "src": "${ picture_left }"
                                },
                                {
                                  "type": "image",
                                  "left": 200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 251.5,
                                  "height": 251.5,
                                  "stroke": null,
                                  "strokeWidth": 0,
                                  "fill": "black",
                                  "src": "${ picture_right }"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": -190,
                                  "angle": 0,
                                  "width": 384.23,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "Which box do you choose?",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "keypress(f, F)": "f",
                                "keypress(j, J)": "j"
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "before:prepare": function anonymous(
) {
this.options.events['keypress'] = (e) => {
  if (e.key.toLowerCase() === 'f' || e.key.toLowerCase() === 'j') {
    this.state.responded = true;
    if (e.key.toLowerCase() === 'f'){
      position = -200;
      no_position = 200;
      respuesta = 'f';
      this.data.response = "f";
    } else if (e.key.toLowerCase() === 'j') {
      position = 200;
      no_position = -200;
      respuesta = 'j';
      this.data.response = "j";
    }
  }
}
}
                              },
                              "title": "stimulus",
                              "tardy": true
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "rect",
                                  "left": -200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 228.53,
                                  "height": 228.53,
                                  "stroke": "#000000",
                                  "strokeWidth": 1,
                                  "fill": "#ffffff"
                                },
                                {
                                  "type": "rect",
                                  "left": 200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 228.53,
                                  "height": 228.53,
                                  "stroke": "#000000",
                                  "strokeWidth": 1,
                                  "fill": "#ffffff"
                                },
                                {
                                  "type": "rect",
                                  "left": "${ position }",
                                  "top": 0,
                                  "angle": 0,
                                  "width": 228.53,
                                  "height": 228.53,
                                  "stroke": "#000000",
                                  "strokeWidth": 10,
                                  "fill": ""
                                },
                                {
                                  "type": "image",
                                  "left": -200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 251.5,
                                  "height": 251.5,
                                  "stroke": null,
                                  "strokeWidth": 0,
                                  "fill": "black",
                                  "src": "${ picture_left }"
                                },
                                {
                                  "type": "image",
                                  "left": 200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 251.5,
                                  "height": 251.5,
                                  "stroke": null,
                                  "strokeWidth": 0,
                                  "fill": "black",
                                  "src": "${ picture_right }"
                                },
                                {
                                  "type": "rect",
                                  "left": "0",
                                  "top": 245,
                                  "angle": 0,
                                  "width": 470,
                                  "height": 50,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "#dddddd"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": 175,
                                  "angle": 0,
                                  "width": 186.83,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "${ sentence }",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": 245,
                                  "angle": 0,
                                  "width": 279.33,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "${ color_points }",
                                  "text": "${ points_to_show }",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {
                                "0.47blue1yellowb=1w=100v=1.png": "embedded/bca01ebdf5bed5e5574066a2d7e64c0d7379f8d35ceca7f9c60d2586fc882de4.png"
                              },
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "before:prepare": function anonymous(
) {
if (this.state.ended_on === 'timeout'){
  this.state.responded = false;
  respuesta = 'timeout';
  this.data.response = "timeout";
  position = 0;
  no_position = 0;
}

gains_left = this.parameters['left_side']
losses_left = 0
neutral_left = 1-this.parameters['left_side']
gains_right = this.parameters['right_side']
losses_right = 0
neutral_right = 1-this.parameters['right_side']


if (respuesta === 'f'){
  choice_losses = losses_left
  choice_gains = gains_left
  choice_neutral = neutral_left
  not_choice_losses = losses_right
  not_choice_gains = gains_right
  not_choice_neutral = neutral_right
}
else if (respuesta === 'j') {
  choice_losses = losses_right
  choice_gains = gains_right
  choice_neutral = neutral_right
  not_choice_losses = losses_left
  not_choice_gains = gains_left
  not_choice_neutral = neutral_left
}

this.options.parameters['choice_losses'] = choice_losses;
this.options.parameters['choice_gains'] = choice_gains;
this.options.parameters['choice_neutral'] = choice_neutral;
this.options.parameters['not_choice_losses'] = not_choice_losses;
this.options.parameters['not_choice_gains'] = not_choice_gains;
this.options.parameters['not_choice_neutral'] = not_choice_neutral;

this.options.parameters['losses_left'] = losses_left
this.options.parameters['gains_left'] = gains_left
this.options.parameters['neutral_left'] = neutral_left
this.options.parameters['losses_right'] = losses_right
this.options.parameters['gains_right'] = gains_right
this.options.parameters['neutral_right'] = neutral_right

this.options.parameters['ev_choice'] = (choice_losses*-this.state.reward_points) + (choice_gains*this.state.reward_points)
this.options.parameters['ev_not_choice'] = (not_choice_losses*-this.state.reward_points) + (not_choice_gains*this.state.reward_points)


if (this.state.responded){
  this.options.parameters['random_value'] = this.random.random();
  reward = this.state.reward_points
  if (this.parameters['random_value'] > this.parameters['choice_gains']){
    reward = 0
  }
  this.state.points = reward;
} 


if (this.state.points > 0){
  sentence = pre_sentence.concat(String(this.state.gain_color))
  points_to_show = "You would have won ".concat(String(this.state.points * 100), " pennies")
  color_points = this.state.gain_color
} else {
  sentence = pre_sentence.concat(String(this.state.neutral_color))
  points_to_show = "You would not have won or lost"
  color_points = this.state.neutral_color
}

this.state.pointsPrcBlock = this.state.pointsPrcBlock + this.state.points;
this.state.totalPoints_practice = this.state.totalPoints_practice + this.state.points;
}
                              },
                              "title": "choice",
                              "timeout": "2000",
                              "tardy": true
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "ITI",
                              "timeout": "500"
                            }
                          ]
                        }
                      },
                      {
                        "type": "lab.canvas.Screen",
                        "content": [
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": 260,
                            "angle": 0,
                            "width": 160.09,
                            "height": 16.95,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "Press space to continue",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": "15",
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          },
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": -50,
                            "angle": 0,
                            "width": 843.16,
                            "height": 78.11,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "In the next block, both boxes have loss (${state.loss_color})\nand gain (${state.gain_color}) pixels",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": 32,
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          },
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": -250,
                            "angle": 0,
                            "width": 187.53,
                            "height": 36.16,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "Let's practice",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": 32,
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          }
                        ],
                        "viewport": [
                          800,
                          600
                        ],
                        "files": {},
                        "responses": {
                          "keypress(Space)": "space"
                        },
                        "parameters": {},
                        "messageHandlers": {
                          "before:prepare": function anonymous(
) {
this.options.parameters.true_domain = "mixed"
}
                        },
                        "title": "mixed screen",
                        "tardy": true,
                        "skip": "${ this.parameters.domain != \"pract pure mixed\"}"
                      },
                      {
                        "type": "lab.flow.Loop",
                        "templateParameters": [
                          {
                            "left_side": "0.51",
                            "right_side": "0.03",
                            "domain": "pract_pure_mixed",
                            "above_below_05": "prc",
                            "optimal_side": "prc"
                          },
                          {
                            "left_side": "0.53",
                            "right_side": "0.7525",
                            "domain": "pract_pure_mixed",
                            "above_below_05": "prc",
                            "optimal_side": "prc"
                          },
                          {
                            "left_side": "0.53",
                            "right_side": "0.485",
                            "domain": "pract_pure_mixed",
                            "above_below_05": "prc",
                            "optimal_side": "prc"
                          }
                        ],
                        "sample": {
                          "mode": "draw",
                          "n": "${ trials_practice }"
                        },
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "pure mixed block",
                        "skip": "${ this.parameters.domain != \"pract pure mixed\"}",
                        "shuffleGroups": [],
                        "template": {
                          "type": "lab.flow.Sequence",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "trial",
                          "content": [
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "line",
                                  "left": "0",
                                  "top": 0,
                                  "angle": 0,
                                  "width": 50,
                                  "height": 0,
                                  "stroke": "black",
                                  "strokeWidth": 10,
                                  "fill": "rgb(0,0,0)"
                                },
                                {
                                  "type": "line",
                                  "left": 0,
                                  "top": 0,
                                  "angle": "90",
                                  "width": 50,
                                  "height": 0,
                                  "stroke": "black",
                                  "strokeWidth": 10,
                                  "fill": "rgb(0,0,0)"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "run": function anonymous(
) {
// In this pure mixed domain, left and right parameters store actual percentage of gain color for each matrix.
actual_left = this.parameters['left_side']
actual_right = this.parameters['right_side']

version_left = this.random.range(1, 101);
version_right = this.random.range(1, 101);

source_pictures = "https://raw.githubusercontent.com/carero2/loss-perception/main/matrices/"


// As matrices are called by name and these names are constructed by the percentage of both colors, for obtaining some we have to rest. For example, for 0.455blue1orange matrix, if we have orange as gain color and want to present 0.455 prop of gains we have to search for 0.545blue1orange matrix (1-0.455)

if ((this.state.gain_color === "blue" && this.state.loss_color === "orange") ||(this.state.gain_color === "orange" && this.state.loss_color === "blue")){
   
   folder = "blue-orange/"
   link = "blue1orangeb%3D1w%3D100v%3D"


   if(this.state.gain_color === "orange" && this.state.loss_color === "blue"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

if ((this.state.gain_color === "blue" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "blue")){

   folder = "blue-yellow/"
   link = "blue1yellowb%3D1w%3D100v%3D"

   if(this.state.gain_color === "yellow" && this.state.loss_color === "blue"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

if ((this.state.gain_color === "orange" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "orange")){
   
   folder = "orange-yellow/"
   link = "orange1yellowb%3D1w%3D100v%3D"

   if(this.state.gain_color === "yellow" && this.state.loss_color === "orange"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

source_pictures = source_pictures.concat(folder, "")

picture_left = source_pictures.concat(actual_left, link, version_left, ".png")
picture_right = source_pictures.concat(actual_right, link, version_right, ".png")

// Save variables to parameters to store in csv
this.options.parameters['left'] = actual_left;
this.options.parameters['right'] = actual_right;

this.options.parameters['picture_left'] = picture_left;
this.options.parameters['picture_right'] = picture_right;

}
                              },
                              "title": "fixation",
                              "timeout": "500",
                              "tardy": true
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "image",
                                  "left": -200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 251.5,
                                  "height": 251.5,
                                  "stroke": null,
                                  "strokeWidth": 0,
                                  "fill": "black",
                                  "src": "${ picture_left }"
                                },
                                {
                                  "type": "image",
                                  "left": 200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 251.5,
                                  "height": 251.5,
                                  "stroke": null,
                                  "strokeWidth": 0,
                                  "fill": "black",
                                  "src": "${ picture_right }"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": -190,
                                  "angle": 0,
                                  "width": 384.23,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "Which box do you choose?",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "keypress(f, F)": "f",
                                "keypress(j, J)": "j"
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "before:prepare": function anonymous(
) {
this.options.events['keypress'] = (e) => {
  if (e.key.toLowerCase() === 'f' || e.key.toLowerCase() === 'j') {
    this.state.responded = true;
    if (e.key.toLowerCase() === 'f'){
      position = -200;
      no_position = 200;
      respuesta = 'f';
      this.data.response = "f";
    } else if (e.key.toLowerCase() === 'j') {
      position = 200;
      no_position = -200;
      respuesta = 'j';
      this.data.response = "j";
    }
  }
}
}
                              },
                              "title": "stimulus",
                              "tardy": true
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "rect",
                                  "left": -200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 228.53,
                                  "height": 228.53,
                                  "stroke": "#000000",
                                  "strokeWidth": 1,
                                  "fill": "#ffffff"
                                },
                                {
                                  "type": "rect",
                                  "left": 200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 228.53,
                                  "height": 228.53,
                                  "stroke": "#000000",
                                  "strokeWidth": 1,
                                  "fill": "#ffffff"
                                },
                                {
                                  "type": "rect",
                                  "left": "${ position }",
                                  "top": 0,
                                  "angle": 0,
                                  "width": 228.53,
                                  "height": 228.53,
                                  "stroke": "#000000",
                                  "strokeWidth": 10,
                                  "fill": ""
                                },
                                {
                                  "type": "image",
                                  "left": -200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 251.5,
                                  "height": 251.5,
                                  "stroke": null,
                                  "strokeWidth": 0,
                                  "fill": "black",
                                  "src": "${ picture_left }"
                                },
                                {
                                  "type": "rect",
                                  "left": "0",
                                  "top": "245",
                                  "angle": 0,
                                  "width": "470",
                                  "height": 50,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "#dddddd"
                                },
                                {
                                  "type": "image",
                                  "left": 200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 251.5,
                                  "height": 251.5,
                                  "stroke": null,
                                  "strokeWidth": 0,
                                  "fill": "black",
                                  "src": "${ picture_right }"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": 245,
                                  "angle": 0,
                                  "width": 279.33,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "${ color_points }",
                                  "text": "${ points_to_show }",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": 175,
                                  "angle": 0,
                                  "width": 186.83,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "${ sentence }",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {
                                "0.47blue1yellowb=1w=100v=1.png": "embedded/bca01ebdf5bed5e5574066a2d7e64c0d7379f8d35ceca7f9c60d2586fc882de4.png"
                              },
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "before:prepare": function anonymous(
) {
if (this.state.ended_on === 'timeout'){
  this.state.responded = false;
  respuesta = 'timeout';
  this.data.response = "timeout";
  position = 0;
  no_position = 0;
}

gains_left = this.parameters['left_side']
losses_left = 1-this.parameters['left_side']
neutral_left = 0
gains_right = this.parameters['right_side']
losses_right = 1-this.parameters['right_side']
neutral_right = 0

if (respuesta === 'f'){
  choice_losses = losses_left
  choice_gains = gains_left
  choice_neutral = neutral_left
  not_choice_losses = losses_right
  not_choice_gains = gains_right
  not_choice_neutral = neutral_right
}
else if (respuesta === 'j') {
  choice_losses = losses_right
  choice_gains = gains_right
  choice_neutral = neutral_right
  not_choice_losses = losses_left
  not_choice_gains = gains_left
  not_choice_neutral = neutral_right
}

this.options.parameters['choice_losses'] = choice_losses;
this.options.parameters['choice_gains'] = choice_gains;
this.options.parameters['choice_neutral'] = choice_neutral;
this.options.parameters['not_choice_losses'] = not_choice_losses;
this.options.parameters['not_choice_gains'] = not_choice_gains;
this.options.parameters['not_choice_neutral'] = not_choice_neutral;


this.options.parameters['losses_left'] = losses_left
this.options.parameters['gains_left'] = gains_left
this.options.parameters['neutral_left'] = neutral_left
this.options.parameters['losses_right'] = losses_right
this.options.parameters['gains_right'] = gains_right
this.options.parameters['neutral_right'] = neutral_right

this.options.parameters['ev_choice'] = (choice_losses*-this.state.reward_points) + (choice_gains*this.state.reward_points)
this.options.parameters['ev_not_choice'] = (not_choice_losses*-this.state.reward_points) + (not_choice_gains*this.state.reward_points)

if (this.state.responded){
  this.options.parameters['random_value'] = this.random.random();
  reward = this.state.reward_points
  if (this.parameters['random_value'] > this.parameters['choice_gains']){
    reward = -this.state.reward_points
  }
  this.state.points = reward;
} 



if (this.state.points > 0){
  sentence = pre_sentence.concat(String(this.state.gain_color))
  points_to_show = "You would have won ".concat(String(this.state.points * 100), " pennies")
  color_points = this.state.gain_color
} else {
  sentence = pre_sentence.concat(String(this.state.loss_color))
  points_to_show = "You would have lost ".concat(-(this.state.points * 100), " pennies")
  color_points = this.state.loss_color
}

this.state.pointsPrcBlock = this.state.pointsPrcBlock + this.state.points;
this.state.totalPoints_practice = this.state.totalPoints_practice + this.state.points;
}
                              },
                              "title": "choice",
                              "timeout": "2000",
                              "tardy": true
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "ITI",
                              "timeout": "500"
                            }
                          ]
                        }
                      },
                      {
                        "type": "lab.canvas.Screen",
                        "content": [
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": 260,
                            "angle": 0,
                            "width": 160.09,
                            "height": 16.95,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "Press space to continue",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": "15",
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          },
                          {
                            "type": "i-text",
                            "left": 10,
                            "top": -50,
                            "angle": 0,
                            "width": 948.16,
                            "height": 120.05,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "In the next block, one box has loss (${state.loss_color}) and\ngain (${state.gain_color}) pixels, and the other box has\ngain (${state.gain_color}) and neutral (${state.neutral_color}) pixels",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": 32,
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          },
                          {
                            "type": "i-text",
                            "left": 0,
                            "top": -250,
                            "angle": 0,
                            "width": 187.53,
                            "height": 36.16,
                            "stroke": null,
                            "strokeWidth": 1,
                            "fill": "black",
                            "text": "Let's practice",
                            "fontStyle": "normal",
                            "fontWeight": "normal",
                            "fontSize": 32,
                            "fontFamily": "sans-serif",
                            "lineHeight": 1.16,
                            "textAlign": "center"
                          }
                        ],
                        "viewport": [
                          800,
                          600
                        ],
                        "files": {},
                        "responses": {
                          "keypress(Space)": "space"
                        },
                        "parameters": {},
                        "messageHandlers": {
                          "before:prepare": function anonymous(
) {
this.options.parameters.true_domain = "mixed"
}
                        },
                        "title": "mixed gain screen",
                        "skip": "${ this.parameters.domain != \"pract mixed gain\"}"
                      },
                      {
                        "type": "lab.flow.Loop",
                        "templateParameters": [
                          {
                            "left_side": "0.51",
                            "right_side": "0.03",
                            "domain": "pract_mixed_gain",
                            "above_below_05": "prc",
                            "mixed_side": "left"
                          },
                          {
                            "left_side": "0.53",
                            "right_side": "0.7525",
                            "domain": "pract_mixed_gain",
                            "above_below_05": "prc",
                            "mixed_side": "left"
                          },
                          {
                            "left_side": "0.53",
                            "right_side": "0.485",
                            "domain": "pract_mixed_gain",
                            "above_below_05": "prc",
                            "mixed_side": "right"
                          }
                        ],
                        "sample": {
                          "mode": "draw",
                          "n": "${trials_mixed_prc}"
                        },
                        "files": {},
                        "responses": {
                          "": ""
                        },
                        "parameters": {},
                        "messageHandlers": {},
                        "title": "mixed gain block",
                        "tardy": true,
                        "skip": "${ this.parameters.domain != \"pract mixed gain\"}",
                        "shuffleGroups": [],
                        "template": {
                          "type": "lab.flow.Sequence",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "trial",
                          "content": [
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "line",
                                  "left": "0",
                                  "top": 0,
                                  "angle": 0,
                                  "width": 50,
                                  "height": 0,
                                  "stroke": "black",
                                  "strokeWidth": 10,
                                  "fill": "rgb(0,0,0)"
                                },
                                {
                                  "type": "line",
                                  "left": 0,
                                  "top": 0,
                                  "angle": "90",
                                  "width": 50,
                                  "height": 0,
                                  "stroke": "black",
                                  "strokeWidth": 10,
                                  "fill": "rgb(0,0,0)"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "run": function anonymous(
) {
// In this mixed gain domain, left and right parameters store actual percentage of gain color for each matrix.
actual_left = this.parameters['left_side']
actual_right = this.parameters['right_side']


left_version = this.random.range(1, 101);
right_version = this.random.range(1, 101);

source_pictures = "https://raw.githubusercontent.com/carero2/loss-perception/main/matrices/"


// As matrices are called by name and these names are constructed by the percentage of both colors, for obtaining some we have to rest. For example, for 0.455blue1orange matrix, if we have orange as loss color and want to present 0.455 prop of losses we have to search for 0.545blue1orange matrix (1-0.455)

if (this.parameters.mixed_side === "right"){

  // We create the mixed matrix in the right variable

  if ((this.state.gain_color === "blue" && this.state.loss_color === "orange") ||(this.state.gain_color === "orange" && this.state.loss_color === "blue")){
    right_folder = "blue-orange/"
    right_link = "blue1orangeb%3D1w%3D100v%3D"


    if(this.state.gain_color === "orange" && this.state.loss_color === "blue"){
      actual_right = get_rest_of_1(actual_right)
    }
  }

  if ((this.state.gain_color === "blue" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "blue")){

    right_folder = "blue-yellow/"
    right_link = "blue1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.loss_color === "blue"){
      actual_right = get_rest_of_1(actual_right)
    }
  }

  if ((this.state.gain_color === "orange" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "orange")){
    
    right_folder = "orange-yellow/"
    right_link = "orange1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.loss_color === "orange"){
      actual_right = get_rest_of_1(actual_right)
    }
  }

  // We create the gain matrix in the left position
  if ((this.state.gain_color === "blue" && this.state.neutral_color === "orange") ||(this.state.gain_color === "orange" && this.state.neutral_color === "blue")){
    
    left_folder = "blue-orange/"
    left_link = "blue1orangeb%3D1w%3D100v%3D"


    if(this.state.gain_color === "orange" && this.state.neutral_color === "blue"){
      actual_left = get_rest_of_1(actual_left)
    }
  }

  if ((this.state.gain_color === "blue" && this.state.neutral_color === "yellow") || (this.state.gain_color === "yellow" && this.state.neutral_color === "blue")){

    left_folder = "blue-yellow/"
    left_link = "blue1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.neutral_color === "blue"){
      actual_left = get_rest_of_1(actual_left)
    }
  }

  if ((this.state.gain_color === "orange" && this.state.neutral_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.neutral_color === "orange")){
    
    left_folder = "orange-yellow/"
    left_link = "orange1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.neutral_color === "orange"){
      actual_left = get_rest_of_1(actual_left)
    }
  }
}

if (this.parameters.mixed_side === "left"){
  // We create the left mixed matrix
  if ((this.state.gain_color === "blue" && this.state.loss_color === "orange") ||(this.state.gain_color === "orange" && this.state.loss_color === "blue")){
    left_folder = "blue-orange/"
    left_link = "blue1orangeb%3D1w%3D100v%3D"


    if(this.state.gain_color === "orange" && this.state.loss_color === "blue"){
      actual_left = get_rest_of_1(actual_left)
    }
  }

  if ((this.state.gain_color === "blue" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "blue")){

    left_folder = "blue-yellow/"
    left_link = "blue1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.loss_color === "blue"){
      actual_left = get_rest_of_1(actual_left)
    }
  }

  if ((this.state.gain_color === "orange" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "orange")){
    
    left_folder = "orange-yellow/"
    left_link = "orange1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.loss_color === "orange"){
      actual_left = get_rest_of_1(actual_left)
    }
  }

  // We create the right gain matrix
  if ((this.state.gain_color === "blue" && this.state.neutral_color === "orange") ||(this.state.gain_color === "orange" && this.state.neutral_color === "blue")){
    
    right_folder = "blue-orange/"
    right_link = "blue1orangeb%3D1w%3D100v%3D"


    if(this.state.gain_color === "orange" && this.state.neutral_color === "blue"){
      actual_right = get_rest_of_1(actual_right)
    }
  }

  if ((this.state.gain_color === "blue" && this.state.neutral_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.neutral_color === "blue")){

    right_folder = "blue-yellow/"
    right_link = "blue1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.neutral_color === "blue"){
      actual_right = get_rest_of_1(actual_right)
    }
  }

  if ((this.state.gain_color === "orange" && this.state.neutral_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.neutral_color === "orange")){
    
    right_folder = "orange-yellow/"
    right_link = "orange1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.neutral_color === "orange"){
      actual_right = get_rest_of_1(actual_right)
    }
  }
}



picture_left = source_pictures.concat(left_folder, String(actual_left), left_link, left_version, ".png")
picture_right = source_pictures.concat(right_folder, String(actual_right), right_link, right_version, ".png")


// Save variables to parameters to store in csv
this.options.parameters['left'] = actual_left;
this.options.parameters['right'] = actual_right;

this.options.parameters['picture_left'] = picture_left;
this.options.parameters['picture_right'] = picture_right;

}
                              },
                              "title": "fixation",
                              "timeout": "500",
                              "tardy": true
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "image",
                                  "left": -200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 251.5,
                                  "height": 251.5,
                                  "stroke": null,
                                  "strokeWidth": 0,
                                  "fill": "black",
                                  "src": "${ picture_left }"
                                },
                                {
                                  "type": "image",
                                  "left": 200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 251.5,
                                  "height": 251.5,
                                  "stroke": null,
                                  "strokeWidth": 0,
                                  "fill": "black",
                                  "src": "${ picture_right }"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": -190,
                                  "angle": 0,
                                  "width": 384.23,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "Which box do you choose?",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "keypress(f, F)": "f",
                                "keypress(j, J)": "j"
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "before:prepare": function anonymous(
) {
this.options.events['keypress'] = (e) => {
  if (e.key.toLowerCase() === 'f' || e.key.toLowerCase() === 'j') {
    this.state.responded = true;
    if (e.key.toLowerCase() === 'f'){
      position = -200;
      no_position = 200;
      respuesta = 'f';
      this.data.response = "f";
    } else if (e.key.toLowerCase() === 'j') {
      position = 200;
      no_position = -200;
      respuesta = 'j';
      this.data.response = "j";
    }
  }
}
}
                              },
                              "title": "stimulus",
                              "tardy": true
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "rect",
                                  "left": -200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 228.53,
                                  "height": 228.53,
                                  "stroke": "#000000",
                                  "strokeWidth": 1,
                                  "fill": "#ffffff"
                                },
                                {
                                  "type": "rect",
                                  "left": 200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 228.53,
                                  "height": 228.53,
                                  "stroke": "#000000",
                                  "strokeWidth": 1,
                                  "fill": "#ffffff"
                                },
                                {
                                  "type": "rect",
                                  "left": "${ position }",
                                  "top": 0,
                                  "angle": 0,
                                  "width": 228.53,
                                  "height": 228.53,
                                  "stroke": "#000000",
                                  "strokeWidth": 10,
                                  "fill": ""
                                },
                                {
                                  "type": "image",
                                  "left": -200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 251.5,
                                  "height": 251.5,
                                  "stroke": null,
                                  "strokeWidth": 0,
                                  "fill": "black",
                                  "src": "${ picture_left }"
                                },
                                {
                                  "type": "rect",
                                  "left": 0,
                                  "top": "245",
                                  "angle": 0,
                                  "width": "470",
                                  "height": 50,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "#dddddd"
                                },
                                {
                                  "type": "image",
                                  "left": 200,
                                  "top": 0,
                                  "angle": 0,
                                  "width": 251.5,
                                  "height": 251.5,
                                  "stroke": null,
                                  "strokeWidth": 0,
                                  "fill": "black",
                                  "src": "${ picture_right }"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": 175,
                                  "angle": 0,
                                  "width": 186.83,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "${ sentence }",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": 245,
                                  "angle": 0,
                                  "width": 279.33,
                                  "height": 36.16,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "${ color_points }",
                                  "text": "${ points_to_show }",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {
                                "0.47blue1yellowb=1w=100v=1.png": "embedded/bca01ebdf5bed5e5574066a2d7e64c0d7379f8d35ceca7f9c60d2586fc882de4.png"
                              },
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "before:prepare": function anonymous(
) {
if (this.state.ended_on === 'timeout'){
  this.state.responded = false;
  respuesta = 'timeout';
  this.data.response = "timeout";
  position = 0;
  no_position = 0;
}


if (this.parameters.mixed_side === "right"){
  gains_left = this.parameters['left_side']
  losses_left = 0
  neutral_left = 1-this.parameters['left_side']
  gains_right = this.parameters['right_side']
  losses_right = 1-this.parameters['right_side']
  neutral_right = 0
}
if (this.parameters.mixed_side === "left"){
  gains_left = this.parameters['left_side']
  losses_left = 1-this.parameters['left_side']
  neutral_left = 0
  gains_right = this.parameters['right_side']
  losses_right = 0
  neutral_right = 1-this.parameters['right_side']
}

mixed_selected = false

if (respuesta === 'f'){
  if (this.parameters.mixed_side === "left"){
    mixed_selected = true
  }
  choice_losses = losses_left
  choice_gains = gains_left
  choice_neutral = neutral_left
  not_choice_losses = losses_right
  not_choice_gains = gains_right
  not_choice_neutral = neutral_right
  }
else if (respuesta === 'j') {
  if (this.parameters.mixed_side === "right"){
    mixed_selected = true
  }
  choice_losses = losses_right
  choice_gains = gains_right
  choice_neutral = neutral_right
  not_choice_losses = losses_left
  not_choice_gains = gains_left
  not_choice_neutral = neutral_right
}

this.options.parameters['choice_losses'] = choice_losses;
this.options.parameters['choice_gains'] = choice_gains;
this.options.parameters['choice_neutral'] = choice_neutral;
this.options.parameters['not_choice_losses'] = not_choice_losses;
this.options.parameters['not_choice_gains'] = not_choice_gains;
this.options.parameters['not_choice_neutral'] = not_choice_neutral;


this.options.parameters['ev_choice'] = (choice_losses*-this.state.reward_points) + (choice_gains*this.state.reward_points)
this.options.parameters['ev_not_choice'] = (not_choice_losses*-this.state.reward_points) + (not_choice_gains*this.state.reward_points)


this.options.parameters['losses_left'] = losses_left
this.options.parameters['gains_left'] = gains_left
this.options.parameters['neutral_left'] = neutral_left
this.options.parameters['losses_right'] = losses_right
this.options.parameters['gains_right'] = gains_right
this.options.parameters['neutral_right'] = neutral_right



if (this.state.responded){
  this.options.parameters['random_value'] = this.random.random();

  if (mixed_selected){
    reward = this.state.reward_points
    if (this.parameters['random_value'] > this.parameters['choice_gains']){
      reward = -this.state.reward_points
      }
    }
  else if(!mixed_selected){
    reward = this.state.reward_points
    if (this.parameters['random_value'] > this.parameters['choice_gains']){
      reward = 0
      }
  }
  this.state.points = reward;
}




if (this.state.points > 0){
  sentence = pre_sentence.concat(String(this.state.gain_color))
  points_to_show = "You would have won ".concat(String(this.state.points * 100), " pennies")
  color_points = this.state.gain_color
} else if (this.state.points < 0) {
  sentence = pre_sentence.concat(String(this.state.loss_color))
  points_to_show = "You would have lost ".concat(-(this.state.points * 100), " pennies")
  color_points = this.state.loss_color
} else {
  sentence = pre_sentence.concat(String(this.state.neutral_color))
  points_to_show = "You would not have won or lost"
  color_points = this.state.neutral_color
}

this.state.pointsPrcBlock = this.state.pointsPrcBlock + this.state.points;
this.state.totalPoints_practice = this.state.totalPoints_practice + this.state.points;
}
                              },
                              "title": "choice",
                              "timeout": "1000",
                              "tardy": true
                            },
                            {
                              "type": "lab.canvas.Screen",
                              "content": [],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "ITI",
                              "timeout": "500"
                            }
                          ]
                        }
                      }
                    ]
                  }
                }
              ]
            },
            {
              "type": "lab.html.Form",
              "content": "<main class=\"content-vertical-space-around content-horizontal-center\">\n <div class=\"w-m text-justify\">\n\n<p>Great! You know your task now. Let's begin the main task.</p>\n<br>\n<br>\n\n<p>Before each block, we will tell you the box types for that block. Please respond fast.</p>\n<br>\n<br>\n<p><font size=\"+1\"><b>Remember, depending on your choices, your reimbursement will increase or decrease. You can gain or lose real money!</b></font></p>\n<br>\n<br>\n<br>\nClick continue to start with first block.\n    <hr>\n  </div>\n  <div class=\"w-m text-justify\">\n  </div>\n  <form>\n<footer class=\"content-horizontal-right\">\n  <button id=\"Continue\" type=\"submit\">Continue &rarr;</button>\n</footer>\n</form>\n</main>\n",
              "scrollTop": true,
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "instructions2"
            },
            {
              "type": "lab.flow.Loop",
              "templateParameters": [
                {
                  "block": "pure_block"
                },
                {
                  "block": "mixed_block"
                }
              ],
              "sample": {
                "mode": "draw-shuffle",
                "n": "2"
              },
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "randomize blocks",
              "shuffleGroups": [],
              "template": {
                "type": "lab.flow.Sequence",
                "files": {},
                "responses": {
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {
                  "commit": function anonymous(
) {
this.state.pointsBlock = 0;
}
                },
                "title": "domains",
                "content": [
                  {
                    "type": "lab.flow.Loop",
                    "templateParameters": [
                      {
                        "domain": "pure_loss"
                      },
                      {
                        "domain": "pure_gain"
                      },
                      {
                        "domain": "pure_mixed"
                      }
                    ],
                    "sample": {
                      "mode": "draw-shuffle",
                      "n": "6"
                    },
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "pure blocks",
                    "tardy": true,
                    "skip": "${ this.parameters.block != \"pure_block\"}",
                    "shuffleGroups": [],
                    "template": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "before:prepare": function anonymous(
) {
this.state.block_order = this.state.block_order + 1
block_order = this.state.block_order
}
                      },
                      "title": "pure blocks sequence",
                      "tardy": true,
                      "content": [
                        {
                          "type": "lab.flow.Sequence",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.state.pointsBlock = 0;
}
                          },
                          "title": "pure loss domain",
                          "tardy": true,
                          "skip": "${ this.parameters.domain != \"pure_loss\"}",
                          "content": [
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": 260,
                                  "angle": 0,
                                  "width": 160.09,
                                  "height": 16.95,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "Press space to continue",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "15",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": -50,
                                  "angle": 0,
                                  "width": 860.94,
                                  "height": 78.11,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "In the next block, both boxes have loss (${ state.loss_color })\nand neutral (${ state.neutral_color }) pixels",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "keypress(Space)": "space"
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "loss screen",
                              "tardy": true
                            },
                            {
                              "type": "lab.flow.Loop",
                              "templateParameters": [
                                {
                                  "left_side": "0.495",
                                  "right_side": "0.455",
                                  "domain": "pure_loss",
                                  "above_below_05": "below",
                                  "optimal_side": "right"
                                },
                                {
                                  "left_side": "0.455",
                                  "right_side": "0.495",
                                  "domain": "pure_loss",
                                  "above_below_05": "below",
                                  "optimal_side": "left"
                                },
                                {
                                  "left_side": "0.52",
                                  "right_side": "0.48",
                                  "domain": "pure_loss",
                                  "above_below_05": "mixed",
                                  "optimal_side": "right"
                                },
                                {
                                  "left_side": "0.48",
                                  "right_side": "0.52",
                                  "domain": "pure_loss",
                                  "above_below_05": "mixed",
                                  "optimal_side": "left"
                                },
                                {
                                  "left_side": "0.545",
                                  "right_side": "0.505",
                                  "domain": "pure_loss",
                                  "above_below_05": "above",
                                  "optimal_side": "right"
                                },
                                {
                                  "left_side": "0.505",
                                  "right_side": "0.545",
                                  "domain": "pure_loss",
                                  "above_below_05": "above",
                                  "optimal_side": "left"
                                }
                              ],
                              "sample": {
                                "mode": "draw",
                                "n": "${ this.state.n_trials }"
                              },
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "pure loss block",
                              "shuffleGroups": [],
                              "template": {
                                "type": "lab.flow.Sequence",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "trial",
                                "content": [
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "line",
                                        "left": "0",
                                        "top": 0,
                                        "angle": 0,
                                        "width": 50,
                                        "height": 0,
                                        "stroke": "black",
                                        "strokeWidth": 10,
                                        "fill": "rgb(0,0,0)"
                                      },
                                      {
                                        "type": "line",
                                        "left": 0,
                                        "top": 0,
                                        "angle": "90",
                                        "width": 50,
                                        "height": 0,
                                        "stroke": "black",
                                        "strokeWidth": 10,
                                        "fill": "rgb(0,0,0)"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "run": function anonymous(
) {
// In this pure loss domain, left and right parameters store actual percentage of loss color for each matrix.
actual_left = this.parameters['left_side']
actual_right = this.parameters['right_side']

version_left = this.random.range(1, 101);
version_right = this.random.range(1, 101);

source_pictures = "https://raw.githubusercontent.com/carero2/loss-perception/main/matrices/"


// As matrices are called by name and these names are constructed by the percentage of both colors, for obtaining some we have to rest. For example, for 0.455blue1orange matrix, if we have orange as loss color and want to present 0.455 prop of losses we have to search for 0.545blue1orange matrix (1-0.455)

if ((this.state.loss_color === "blue" && this.state.neutral_color === "orange") ||(this.state.loss_color === "orange" && this.state.neutral_color === "blue")){
   
   folder = "blue-orange/"
   link = "blue1orangeb%3D1w%3D100v%3D"


   if(this.state.loss_color === "orange" && this.state.neutral_color === "blue"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

if ((this.state.loss_color === "blue" && this.state.neutral_color === "yellow") ||(this.state.loss_color === "yellow" && this.state.neutral_color === "blue")){

   folder = "blue-yellow/"
   link = "blue1yellowb%3D1w%3D100v%3D"

   if(this.state.loss_color === "yellow" && this.state.neutral_color === "blue"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

if ((this.state.loss_color === "orange" && this.state.neutral_color === "yellow") ||(this.state.loss_color === "yellow" && this.state.neutral_color === "orange")){
   
   folder = "orange-yellow/"
   link = "orange1yellowb%3D1w%3D100v%3D"

   if(this.state.loss_color === "yellow" && this.state.neutral_color === "orange"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

//source_pictures = source_pictures.concat(folder, "")

picture_left = source_pictures.concat(folder, actual_left, link, version_left, ".png")
picture_right = source_pictures.concat(folder, actual_right, link, version_right, ".png")

// Save variables to parameters to store in csv
this.options.parameters['left'] = actual_left;
this.options.parameters['right'] = actual_right;

this.options.parameters['picture_left'] = picture_left;
this.options.parameters['picture_right'] = picture_right;
}
                                    },
                                    "title": "fixation",
                                    "timeout": "500",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "image",
                                        "left": -200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 251.5,
                                        "height": 251.5,
                                        "stroke": null,
                                        "strokeWidth": 0,
                                        "fill": "black",
                                        "src": "${ picture_left }"
                                      },
                                      {
                                        "type": "image",
                                        "left": 200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 251.5,
                                        "height": 251.5,
                                        "stroke": null,
                                        "strokeWidth": 0,
                                        "fill": "black",
                                        "src": "${ picture_right }"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -190,
                                        "angle": 0,
                                        "width": 384.23,
                                        "height": 36.16,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "black",
                                        "text": "Which box do you choose?",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": 32,
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {
                                      "keypress(f, F)": "f",
                                      "keypress(j, J)": "j"
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
this.options.events['keypress'] = (e) => {
  if (e.key.toLowerCase() === 'f' || e.key.toLowerCase() === 'j') {
    this.state.responded = true;
    if (e.key.toLowerCase() === 'f'){
      position = -200;
      no_position = 200;
      respuesta = 'f';
      this.data.response = "f";
    } else if (e.key.toLowerCase() === 'j') {
      position = 200;
      no_position = -200;
      respuesta = 'j';
      this.data.response = "j";
    }
  }
}
}
                                    },
                                    "title": "stimulus",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "rect",
                                        "left": -200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 228.53,
                                        "height": 228.53,
                                        "stroke": "#000000",
                                        "strokeWidth": 1,
                                        "fill": "#ffffff"
                                      },
                                      {
                                        "type": "rect",
                                        "left": 200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 228.53,
                                        "height": 228.53,
                                        "stroke": "#000000",
                                        "strokeWidth": 1,
                                        "fill": "#ffffff"
                                      },
                                      {
                                        "type": "rect",
                                        "left": "${ position }",
                                        "top": 0,
                                        "angle": 0,
                                        "width": 228.53,
                                        "height": 228.53,
                                        "stroke": "#000000",
                                        "strokeWidth": 10,
                                        "fill": ""
                                      },
                                      {
                                        "type": "image",
                                        "left": -200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 251.5,
                                        "height": 251.5,
                                        "stroke": null,
                                        "strokeWidth": 0,
                                        "fill": "black",
                                        "src": "${ picture_left }"
                                      },
                                      {
                                        "type": "image",
                                        "left": 200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 251.5,
                                        "height": 251.5,
                                        "stroke": null,
                                        "strokeWidth": 0,
                                        "fill": "black",
                                        "src": "${ picture_right }"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {
                                      "0.47blue1yellowb=1w=100v=1.png": "embedded/bca01ebdf5bed5e5574066a2d7e64c0d7379f8d35ceca7f9c60d2586fc882de4.png"
                                    },
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
if (this.state.ended_on === 'timeout'){
  this.state.responded = false;
  respuesta = 'timeout';
  this.data.response = "timeout";
  position = 0;
  no_position = 0;
}


losses_left = this.parameters['left_side']
gains_left = 0
neutral_left = 1-this.parameters['left_side']
losses_right = this.parameters['right_side']
gains_right = 0
neutral_right = 1-this.parameters['right_side']


if (respuesta === 'f'){
  choice_losses = losses_left
  choice_gains = gains_left
  choice_neutral = neutral_left
  not_choice_losses = losses_right
  not_choice_gains = gains_right
  not_choice_neutral = neutral_right
}
else if (respuesta === 'j') {
  choice_losses = losses_right
  choice_gains = gains_right
  choice_neutral = neutral_right
  not_choice_losses = losses_left
  not_choice_gains = gains_left
  not_choice_neutral = neutral_left
}

this.options.parameters['choice_losses'] = choice_losses;
this.options.parameters['choice_gains'] = choice_gains;
this.options.parameters['choice_neutral'] = choice_neutral;
this.options.parameters['not_choice_losses'] = not_choice_losses;
this.options.parameters['not_choice_gains'] = not_choice_gains;
this.options.parameters['not_choice_neutral'] = not_choice_neutral;


this.options.parameters['losses_left'] = losses_left
this.options.parameters['gains_left'] = gains_left
this.options.parameters['neutral_left'] = neutral_left
this.options.parameters['losses_right'] = losses_right
this.options.parameters['gains_right'] = gains_right
this.options.parameters['neutral_right'] = neutral_right

this.options.parameters['ev_choice'] = (choice_losses*-this.state.reward_points) + (choice_gains*this.state.reward_points)
this.options.parameters['ev_not_choice'] = (not_choice_losses*-this.state.reward_points) + (not_choice_gains*this.state.reward_points)


if (this.state.responded){
  this.options.parameters['random_value'] = this.random.random();
  reward = -this.state.reward_points
  if (this.parameters['random_value'] > this.parameters['choice_losses']){
    reward = 0
  }
  this.state.points = reward;
} 


this.state.totalPoints = this.state.totalPoints + this.state.points;

this.state.pointsBlock = this.state.pointsBlock + this.state.points;
}
                                    },
                                    "title": "choice",
                                    "timeout": "1000",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "ITI",
                                    "timeout": "500"
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "type": "lab.flow.Sequence",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.state.pointsBlock = 0;
}
                          },
                          "title": "pure gain domain",
                          "tardy": true,
                          "skip": "${ this.parameters.domain != \"pure_gain\"}",
                          "content": [
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": 260,
                                  "angle": 0,
                                  "width": 160.09,
                                  "height": 16.95,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "Press space to continue",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "15",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": -50,
                                  "angle": 0,
                                  "width": 850.34,
                                  "height": 78.11,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "In the next block, both boxes have gain (${state.gain_color})\nand neutral (${state.neutral_color}) pixels",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "keypress(Space)": "space"
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "gain screen",
                              "tardy": true
                            },
                            {
                              "type": "lab.flow.Loop",
                              "templateParameters": [
                                {
                                  "left_side": "0.495",
                                  "right_side": "0.455",
                                  "domain": "pure_gain",
                                  "above_below_05": "below",
                                  "optimal_side": "left"
                                },
                                {
                                  "left_side": "0.455",
                                  "right_side": "0.495",
                                  "domain": "pure_gain",
                                  "above_below_05": "below",
                                  "optimal_side": "right"
                                },
                                {
                                  "left_side": "0.52",
                                  "right_side": "0.48",
                                  "domain": "pure_gain",
                                  "above_below_05": "mixed",
                                  "optimal_side": "left"
                                },
                                {
                                  "left_side": "0.48",
                                  "right_side": "0.52",
                                  "domain": "pure_gain",
                                  "above_below_05": "mixed",
                                  "optimal_side": "right"
                                },
                                {
                                  "left_side": "0.545",
                                  "right_side": "0.505",
                                  "domain": "pure_gain",
                                  "above_below_05": "above",
                                  "optimal_side": "left"
                                },
                                {
                                  "left_side": "0.505",
                                  "right_side": "0.545",
                                  "domain": "pure_gain",
                                  "above_below_05": "above",
                                  "optimal_side": "right"
                                }
                              ],
                              "sample": {
                                "mode": "draw",
                                "n": "${ this.state.n_trials }"
                              },
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "pure gain block",
                              "shuffleGroups": [],
                              "template": {
                                "type": "lab.flow.Sequence",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "trial",
                                "content": [
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "line",
                                        "left": "0",
                                        "top": 0,
                                        "angle": 0,
                                        "width": 50,
                                        "height": 0,
                                        "stroke": "black",
                                        "strokeWidth": 10,
                                        "fill": "rgb(0,0,0)"
                                      },
                                      {
                                        "type": "line",
                                        "left": 0,
                                        "top": 0,
                                        "angle": "90",
                                        "width": 50,
                                        "height": 0,
                                        "stroke": "black",
                                        "strokeWidth": 10,
                                        "fill": "rgb(0,0,0)"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "run": function anonymous(
) {
// In this pure gain domain, left and right parameters store actual percentage of gain color for each matrix.
actual_left = this.parameters['left_side']
actual_right = this.parameters['right_side']


version_left = this.random.range(1, 101);
version_right = this.random.range(1, 101);

source_pictures = "https://raw.githubusercontent.com/carero2/loss-perception/main/matrices/"


// As matrices are called by name and these names are constructed by the percentage of both colors, for obtaining some we have to rest. For example, for 0.455blue1orange matrix, if we have orange as gain color and want to present 0.455 prop of gains we have to search for 0.545blue1orange matrix (1-0.455)

if ((this.state.gain_color === "blue" && this.state.neutral_color === "orange") ||(this.state.gain_color === "orange" && this.state.neutral_color === "blue")){
   
   folder = "blue-orange/"
   link = "blue1orangeb%3D1w%3D100v%3D"


   if(this.state.gain_color === "orange" && this.state.neutral_color === "blue"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

if ((this.state.gain_color === "blue" && this.state.neutral_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.neutral_color === "blue")){

   folder = "blue-yellow/"
   link = "blue1yellowb%3D1w%3D100v%3D"

   if(this.state.gain_color === "yellow" && this.state.neutral_color === "blue"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

if ((this.state.gain_color === "orange" && this.state.neutral_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.neutral_color === "orange")){
   
   folder = "orange-yellow/"
   link = "orange1yellowb%3D1w%3D100v%3D"

   if(this.state.gain_color === "yellow" && this.state.neutral_color === "orange"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

source_pictures = source_pictures.concat(folder, "")

picture_left = source_pictures.concat(actual_left, link, version_left, ".png")
picture_right = source_pictures.concat(actual_right, link, version_right, ".png")

// Save variables to parameters to store in csv
this.options.parameters['left'] = actual_left;
this.options.parameters['right'] = actual_right;

this.options.parameters['picture_left'] = picture_left;
this.options.parameters['picture_right'] = picture_right;

}
                                    },
                                    "title": "fixation",
                                    "timeout": "500",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "image",
                                        "left": -200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 251.5,
                                        "height": 251.5,
                                        "stroke": null,
                                        "strokeWidth": 0,
                                        "fill": "black",
                                        "src": "${ picture_left }"
                                      },
                                      {
                                        "type": "image",
                                        "left": 200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 251.5,
                                        "height": 251.5,
                                        "stroke": null,
                                        "strokeWidth": 0,
                                        "fill": "black",
                                        "src": "${ picture_right }"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -190,
                                        "angle": 0,
                                        "width": 384.23,
                                        "height": 36.16,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "black",
                                        "text": "Which box do you choose?",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": 32,
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {
                                      "keypress(f, F)": "f",
                                      "keypress(j, J)": "j"
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
this.options.events['keypress'] = (e) => {
  if (e.key.toLowerCase() === 'f' || e.key.toLowerCase() === 'j') {
    this.state.responded = true;
    if (e.key.toLowerCase() === 'f'){
      position = -200;
      no_position = 200;
      respuesta = 'f';
      this.data.response = "f";
    } else if (e.key.toLowerCase() === 'j') {
      position = 200;
      no_position = -200;
      respuesta = 'j';
      this.data.response = "j";
    }
  }
}
}
                                    },
                                    "title": "stimulus",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "rect",
                                        "left": -200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 228.53,
                                        "height": 228.53,
                                        "stroke": "#000000",
                                        "strokeWidth": 1,
                                        "fill": "#ffffff"
                                      },
                                      {
                                        "type": "rect",
                                        "left": 200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 228.53,
                                        "height": 228.53,
                                        "stroke": "#000000",
                                        "strokeWidth": 1,
                                        "fill": "#ffffff"
                                      },
                                      {
                                        "type": "rect",
                                        "left": "${ position }",
                                        "top": 0,
                                        "angle": 0,
                                        "width": 228.53,
                                        "height": 228.53,
                                        "stroke": "#000000",
                                        "strokeWidth": 10,
                                        "fill": ""
                                      },
                                      {
                                        "type": "image",
                                        "left": -200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 251.5,
                                        "height": 251.5,
                                        "stroke": null,
                                        "strokeWidth": 0,
                                        "fill": "black",
                                        "src": "${ picture_left }"
                                      },
                                      {
                                        "type": "image",
                                        "left": 200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 251.5,
                                        "height": 251.5,
                                        "stroke": null,
                                        "strokeWidth": 0,
                                        "fill": "black",
                                        "src": "${ picture_right }"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {
                                      "0.47blue1yellowb=1w=100v=1.png": "embedded/bca01ebdf5bed5e5574066a2d7e64c0d7379f8d35ceca7f9c60d2586fc882de4.png"
                                    },
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
if (this.state.ended_on === 'timeout'){
  this.state.responded = false;
  respuesta = 'timeout';
  this.data.response = "timeout";
  position = 0;
  no_position = 0;
}

gains_left = this.parameters['left_side']
losses_left = 0
neutral_left = 1-this.parameters['left_side']
gains_right = this.parameters['right_side']
losses_right = 0
neutral_right = 1-this.parameters['right_side']


if (respuesta === 'f'){
  choice_losses = losses_left
  choice_gains = gains_left
  choice_neutral = neutral_left
  not_choice_losses = losses_right
  not_choice_gains = gains_right
  not_choice_neutral = neutral_right
}
else if (respuesta === 'j') {
  choice_losses = losses_right
  choice_gains = gains_right
  choice_neutral = neutral_right
  not_choice_losses = losses_left
  not_choice_gains = gains_left
  not_choice_neutral = neutral_left
}

this.options.parameters['choice_losses'] = choice_losses;
this.options.parameters['choice_gains'] = choice_gains;
this.options.parameters['choice_neutral'] = choice_neutral;
this.options.parameters['not_choice_losses'] = not_choice_losses;
this.options.parameters['not_choice_gains'] = not_choice_gains;
this.options.parameters['not_choice_neutral'] = not_choice_neutral;

this.options.parameters['losses_left'] = losses_left
this.options.parameters['gains_left'] = gains_left
this.options.parameters['neutral_left'] = neutral_left
this.options.parameters['losses_right'] = losses_right
this.options.parameters['gains_right'] = gains_right
this.options.parameters['neutral_right'] = neutral_right

this.options.parameters['ev_choice'] = (choice_losses*-this.state.reward_points) + (choice_gains*this.state.reward_points)
this.options.parameters['ev_not_choice'] = (not_choice_losses*-this.state.reward_points) + (not_choice_gains*this.state.reward_points)


if (this.state.responded){
  this.options.parameters['random_value'] = this.random.random();
  reward = this.state.reward_points
  if (this.parameters['random_value'] > this.parameters['choice_gains']){
    reward = 0
  }
  this.state.points = reward;
}


this.state.totalPoints = this.state.totalPoints + this.state.points;

this.state.pointsBlock = this.state.pointsBlock + this.state.points;
}
                                    },
                                    "title": "choice",
                                    "timeout": "1000",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "ITI",
                                    "timeout": "500"
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "type": "lab.flow.Sequence",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "pure mixed domain",
                          "tardy": true,
                          "skip": "${ this.parameters.domain != \"pure_mixed\"}",
                          "content": [
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": 260,
                                  "angle": 0,
                                  "width": 160.09,
                                  "height": 16.95,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "Press space to continue",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "15",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": -50,
                                  "angle": 0,
                                  "width": 843.16,
                                  "height": 78.11,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "In the next block, both boxes have loss (${state.loss_color})\nand gain (${state.gain_color}) pixels",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "keypress(Space)": "space"
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "before:prepare": function anonymous(
) {
this.options.parameters.true_domain = "mixed"
}
                              },
                              "title": "mixed screen",
                              "tardy": true
                            },
                            {
                              "type": "lab.flow.Loop",
                              "templateParameters": [
                                {
                                  "left_side": "0.505",
                                  "right_side": "0.525",
                                  "domain": "pure_mixed",
                                  "above_below_05": "below",
                                  "optimal_side": "right"
                                },
                                {
                                  "left_side": "0.525",
                                  "right_side": "0.505",
                                  "domain": "pure_mixed",
                                  "above_below_05": "below",
                                  "optimal_side": "left"
                                },
                                {
                                  "left_side": "0.49",
                                  "right_side": "0.51",
                                  "domain": "pure_mixed",
                                  "above_below_05": "mixed",
                                  "optimal_side": "right"
                                },
                                {
                                  "left_side": "0.51",
                                  "right_side": "0.49",
                                  "domain": "pure_mixed",
                                  "above_below_05": "mixed",
                                  "optimal_side": "left"
                                },
                                {
                                  "left_side": "0.475",
                                  "right_side": "0.495",
                                  "domain": "pure_mixed",
                                  "above_below_05": "above",
                                  "optimal_side": "right"
                                },
                                {
                                  "left_side": "0.495",
                                  "right_side": "0.475",
                                  "domain": "pure_mixed",
                                  "above_below_05": "above",
                                  "optimal_side": "left"
                                }
                              ],
                              "sample": {
                                "mode": "draw",
                                "n": "${ this.state.n_trials }"
                              },
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "pure mixed block",
                              "shuffleGroups": [],
                              "template": {
                                "type": "lab.flow.Sequence",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "trial",
                                "content": [
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "line",
                                        "left": "0",
                                        "top": 0,
                                        "angle": 0,
                                        "width": 50,
                                        "height": 0,
                                        "stroke": "black",
                                        "strokeWidth": 10,
                                        "fill": "rgb(0,0,0)"
                                      },
                                      {
                                        "type": "line",
                                        "left": 0,
                                        "top": 0,
                                        "angle": "90",
                                        "width": 50,
                                        "height": 0,
                                        "stroke": "black",
                                        "strokeWidth": 10,
                                        "fill": "rgb(0,0,0)"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "run": function anonymous(
) {
// In this pure mixed domain, left and right parameters store actual percentage of gain color for each matrix.
actual_left = this.parameters['left_side']
actual_right = this.parameters['right_side']

version_left = this.random.range(1, 101);
version_right = this.random.range(1, 101);

source_pictures = "https://raw.githubusercontent.com/carero2/loss-perception/main/matrices/"


// As matrices are called by name and these names are constructed by the percentage of both colors, for obtaining some we have to rest. For example, for 0.455blue1orange matrix, if we have orange as gain color and want to present 0.455 prop of gains we have to search for 0.545blue1orange matrix (1-0.455)

if ((this.state.gain_color === "blue" && this.state.loss_color === "orange") ||(this.state.gain_color === "orange" && this.state.loss_color === "blue")){
   
   folder = "blue-orange/"
   link = "blue1orangeb%3D1w%3D100v%3D"


   if(this.state.gain_color === "orange" && this.state.loss_color === "blue"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

if ((this.state.gain_color === "blue" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "blue")){

   folder = "blue-yellow/"
   link = "blue1yellowb%3D1w%3D100v%3D"

   if(this.state.gain_color === "yellow" && this.state.loss_color === "blue"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

if ((this.state.gain_color === "orange" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "orange")){
   
   folder = "orange-yellow/"
   link = "orange1yellowb%3D1w%3D100v%3D"

   if(this.state.gain_color === "yellow" && this.state.loss_color === "orange"){
     actual_left = get_rest_of_1(actual_left)
     actual_right = get_rest_of_1(actual_right)
   }
}

source_pictures = source_pictures.concat(folder, "")

picture_left = source_pictures.concat(actual_left, link, version_left, ".png")
picture_right = source_pictures.concat(actual_right, link, version_right, ".png")

// Save variables to parameters to store in csv
this.options.parameters['left'] = actual_left;
this.options.parameters['right'] = actual_right;

this.options.parameters['picture_left'] = picture_left;
this.options.parameters['picture_right'] = picture_right;
}
                                    },
                                    "title": "fixation",
                                    "timeout": "500",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "image",
                                        "left": -200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 251.5,
                                        "height": 251.5,
                                        "stroke": null,
                                        "strokeWidth": 0,
                                        "fill": "black",
                                        "src": "${ picture_left }"
                                      },
                                      {
                                        "type": "image",
                                        "left": 200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 251.5,
                                        "height": 251.5,
                                        "stroke": null,
                                        "strokeWidth": 0,
                                        "fill": "black",
                                        "src": "${ picture_right }"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -190,
                                        "angle": 0,
                                        "width": 384.23,
                                        "height": 36.16,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "black",
                                        "text": "Which box do you choose?",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": 32,
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {
                                      "keypress(f, F)": "f",
                                      "keypress(j, J)": "j"
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
this.options.events['keypress'] = (e) => {
  if (e.key.toLowerCase() === 'f' || e.key.toLowerCase() === 'j') {
    this.state.responded = true;
    if (e.key.toLowerCase() === 'f'){
      position = -200;
      no_position = 200;
      respuesta = 'f';
      this.data.response = "f";
    } else if (e.key.toLowerCase() === 'j') {
      position = 200;
      no_position = -200;
      respuesta = 'j';
      this.data.response = "j";
    }
  }
}
}
                                    },
                                    "title": "stimulus",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "rect",
                                        "left": -200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 228.53,
                                        "height": 228.53,
                                        "stroke": "#000000",
                                        "strokeWidth": 1,
                                        "fill": "#ffffff"
                                      },
                                      {
                                        "type": "rect",
                                        "left": 200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 228.53,
                                        "height": 228.53,
                                        "stroke": "#000000",
                                        "strokeWidth": 1,
                                        "fill": "#ffffff"
                                      },
                                      {
                                        "type": "rect",
                                        "left": "${ position }",
                                        "top": 0,
                                        "angle": 0,
                                        "width": 228.53,
                                        "height": 228.53,
                                        "stroke": "#000000",
                                        "strokeWidth": 10,
                                        "fill": ""
                                      },
                                      {
                                        "type": "image",
                                        "left": -200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 251.5,
                                        "height": 251.5,
                                        "stroke": null,
                                        "strokeWidth": 0,
                                        "fill": "black",
                                        "src": "${ picture_left }"
                                      },
                                      {
                                        "type": "image",
                                        "left": 200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 251.5,
                                        "height": 251.5,
                                        "stroke": null,
                                        "strokeWidth": 0,
                                        "fill": "black",
                                        "src": "${ picture_right }"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {
                                      "0.47blue1yellowb=1w=100v=1.png": "embedded/bca01ebdf5bed5e5574066a2d7e64c0d7379f8d35ceca7f9c60d2586fc882de4.png"
                                    },
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
if (this.state.ended_on === 'timeout'){
  this.state.responded = false;
  respuesta = 'timeout';
  this.data.response = "timeout";
  position = 0;
  no_position = 0;
}

gains_left = this.parameters['left_side']
losses_left = 1-this.parameters['left_side']
neutral_left = 0
gains_right = this.parameters['right_side']
losses_right = 1-this.parameters['right_side']
neutral_right = 0

if (respuesta === 'f'){
  choice_losses = losses_left
  choice_gains = gains_left
  choice_neutral = neutral_left
  not_choice_losses = losses_right
  not_choice_gains = gains_right
  not_choice_neutral = neutral_right
}
else if (respuesta === 'j') {
  choice_losses = losses_right
  choice_gains = gains_right
  choice_neutral = neutral_right
  not_choice_losses = losses_left
  not_choice_gains = gains_left
  not_choice_neutral = neutral_right
}

this.options.parameters['choice_losses'] = choice_losses;
this.options.parameters['choice_gains'] = choice_gains;
this.options.parameters['choice_neutral'] = choice_neutral;
this.options.parameters['not_choice_losses'] = not_choice_losses;
this.options.parameters['not_choice_gains'] = not_choice_gains;
this.options.parameters['not_choice_neutral'] = not_choice_neutral;


this.options.parameters['losses_left'] = losses_left
this.options.parameters['gains_left'] = gains_left
this.options.parameters['neutral_left'] = neutral_left
this.options.parameters['losses_right'] = losses_right
this.options.parameters['gains_right'] = gains_right
this.options.parameters['neutral_right'] = neutral_right

this.options.parameters['ev_choice'] = (choice_losses*-this.state.reward_points) + (choice_gains*this.state.reward_points)
this.options.parameters['ev_not_choice'] = (not_choice_losses*-this.state.reward_points) + (not_choice_gains*this.state.reward_points)


if (this.state.responded){
  this.options.parameters['random_value'] = this.random.random();
  reward = this.state.reward_points
  if (this.parameters['random_value'] > this.parameters['choice_gains']){
    reward = -this.state.reward_points
  }
  this.state.points = reward;
}


this.state.totalPoints = this.state.totalPoints + this.state.points;

this.state.pointsBlock = this.state.pointsBlock + this.state.points;
}
                                    },
                                    "title": "choice",
                                    "timeout": "1000",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "ITI",
                                    "timeout": "500"
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.state.pointsBlock < 0){
  sentence_reward = "you would have lost ".concat(-this.state.pointsBlock, " GBP.")
} 
if (this.state.pointsBlock > 0){
  sentence_reward = "you would have gain ".concat(this.state.pointsBlock, " GBP.")
}
if (this.state.pointsBlock === 0){
  sentence_reward = "you would not have lost or gain anything."
}

if (block_order % 3 === 0){
  show_short_feedback = true
  show_long_feedback = false
} else {
  show_short_feedback = false
  show_long_feedback = true
}

}
                          },
                          "title": "blank screen",
                          "timeout": "200",
                          "tardy": true
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "responses": {
                            "click #Continue": "Continue"
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "show amount",
                          "tardy": true,
                          "content": "<main class=\"content-vertical-space-around content-horizontal-center\">\r\n\r\n  <div class=\"w-m text-justify\">\r\n    <p>\r\n      Good job! You finished this block.\r\n    </p>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <p>Click the button to continue with the experiment.</p>\r\n  </div>\r\n</main>\r\n\r\n<footer class=\"content-horizontal-right\">\r\n  <button id=\"Continue\">Continue &rarr;</button>\r\n</footer>",
                          "skip": "${ show_short_feedback }"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "responses": {
                            "click #Continue": "Continue"
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "show amount",
                          "tardy": true,
                          "content": "<main class=\"content-vertical-space-around content-horizontal-center\">\r\n\r\n  <div class=\"w-m text-justify\">\r\n    <p>\r\n      Well done!\r\n    </p>\r\n    <p><b><font size=\"+1\">\r\n     Remember, one decision will be randomly selected from this block that you have just completed (and previous completed blocks) and their result will be added to or subtracted from your 5 GBP. </font></b></p>\r\n     <br>\r\n    <p>Keep going with the experiment.</p>\r\n  </div>\r\n</main>\r\n\r\n<footer class=\"content-horizontal-right\">\r\n  <button id=\"Continue\">Continue &rarr;</button>\r\n</footer>",
                          "skip": "${ show_long_feedback }"
                        },
                        {
                          "type": "lab.html.Page",
                          "items": [
                            {
                              "type": "text",
                              "title": "Please answer",
                              "content": "Please answer this question about the experiment."
                            },
                            {
                              "required": true,
                              "type": "radio",
                              "label": "What did the matrices of the previous block contain?",
                              "options": [
                                {
                                  "label": "Both contained gains and losses",
                                  "coding": "pure_mixed"
                                },
                                {
                                  "label": "Both contained losses and neutral",
                                  "coding": "pure_loss"
                                },
                                {
                                  "label": "Both contained gains and neutral",
                                  "coding": "pure_gain"
                                },
                                {
                                  "label": "One contained gains and neutral and the other gains and losses",
                                  "coding": "mixed_gain"
                                },
                                {
                                  "label": "One contained losses and neutral and the other gains and losses",
                                  "coding": "mixed_loss"
                                }
                              ],
                              "shuffle": true,
                              "name": "attention_check"
                            }
                          ],
                          "scrollTop": true,
                          "submitButtonText": "Continue →",
                          "submitButtonPosition": "right",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "commit": function anonymous(
) {
if ((this.state.attention_check === this.parameters.domain) && (this.state.block_order == 3)){
  this.state.correct_attention2 = true
} if ((this.state.attention_check != this.parameters.domain) && (this.state.block_order == 3)){
  this.state.correct_attention2 = false
}
}
                          },
                          "title": "Attention check2",
                          "tardy": true,
                          "width": "m",
                          "skip": "${ this.state.block_order !== 3 }"
                        },
                        {
                          "type": "lab.html.Page",
                          "items": [
                            {
                              "type": "text",
                              "title": "Please answer",
                              "content": "Please answer these questions about the experiment."
                            },
                            {
                              "required": true,
                              "type": "radio",
                              "label": "Which color represents gains?",
                              "options": [
                                {
                                  "label": "Yellow",
                                  "coding": "yellow"
                                },
                                {
                                  "label": "Blue",
                                  "coding": "blue"
                                },
                                {
                                  "label": "Orange",
                                  "coding": "orange"
                                }
                              ],
                              "shuffle": false,
                              "name": "attention_gains2"
                            },
                            {
                              "required": true,
                              "type": "radio",
                              "label": "Which color represents neutral?",
                              "options": [
                                {
                                  "label": "Yellow",
                                  "coding": "yellow"
                                },
                                {
                                  "label": "Blue",
                                  "coding": "blue"
                                },
                                {
                                  "label": "Orange",
                                  "coding": "orange"
                                }
                              ],
                              "shuffle": false,
                              "name": "attention_neutral2"
                            },
                            {
                              "required": true,
                              "type": "radio",
                              "label": "Which color represents losses?",
                              "options": [
                                {
                                  "label": "Yellow",
                                  "coding": "yellow"
                                },
                                {
                                  "label": "Blue",
                                  "coding": "blue"
                                },
                                {
                                  "label": "Orange",
                                  "coding": "orange"
                                }
                              ],
                              "shuffle": false,
                              "name": "attention_losses2"
                            }
                          ],
                          "scrollTop": true,
                          "submitButtonText": "Continue →",
                          "submitButtonPosition": "right",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "commit": function anonymous(
) {
if ((this.state.attention_gains2 === this.state.gain_color) && (this.state.attention_losses2 === this.state.loss_color) && (this.state.attention_neutral2 === this.state.neutral_color) && (this.state.block_order == 6)){
  this.state.correct_attention3 = true
}
if ((this.state.attention_gains2 !== this.state.gain_color) || (this.state.attention_losses2 !== this.state.loss_color) || (this.state.attention_neutral2 !== this.state.neutral_color) && (this.state.block_order == 6)) {
  this.state.correct_attention3 = false
}
}
                          },
                          "title": "Attention check3",
                          "tardy": true,
                          "width": "m",
                          "skip": "${this.state.block_order !== 6 }"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {
                            "message": "Transferring data",
                            "subtitle": "Please wait a second…"
                          },
                          "responses": {
                            "": ""
                          },
                          "messageHandlers": {
                            "run": function anonymous(
) {
const transmitPlugins = this.parents[0].plugins.plugins
  .filter(p => p instanceof lab.plugins.Transmit)

if (transmitPlugins.length > 0) {
  // If a transmitPlugin is available,
  // pull out its options and transfer the data
  const ds = this.options.datastore
  const tp = transmitPlugins[0]
  ds.transmit(
    tp.url,
    { ...tp.metadata, payload: 'full' },
    { headers: tp.headers, encoding: tp.encoding },
  ).then(
    () => this.end('transmission successful')
  ).catch(
    () => this.end('transmission failed')
  )
} else if ('jatos' in window) {
  // If JATOS is available, send data there
  jatos.submitResultData(
    this.options.datastore.exportJson(),
    () => this.end('transmission successful'),
    () => this.end('transmission failed')
  )
} else {
  this.end('no compatible backend')
}
}
                          },
                          "title": "Data transmission (beta)",
                          "content": "<main class=\"content-horizontal-center content-vertical-center\">\n  <div>\n    <img src=\"lib/loading.svg\">\n    <p>\n      <span class=\"font-weight-bold\">\n        ${ this.parameters.message }\n      </span><br>\n      <span class=\"text-muted\">\n        ${ this.parameters.subtitle }\n      </span>\n    </p>\n  </div>\n</main>",
                          "notes": "This template transmits the study data to a compatible server-side backend. Currently, it supports the PHP, Open Lab and JATOS backends.\n\nIt will wait until the data is transferred, showing a waiting screen with the text defined below, and continue with the remainder of the study after the transmission is complete. Please note that this screen will be skipped if no compatible backend is available."
                        }
                      ]
                    }
                  },
                  {
                    "type": "lab.flow.Loop",
                    "templateParameters": [
                      {
                        "domain": "mixed_gain"
                      },
                      {
                        "domain": "mixed_loss"
                      }
                    ],
                    "sample": {
                      "mode": "draw-shuffle",
                      "n": "4"
                    },
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "mixed blocks",
                    "tardy": true,
                    "skip": "${ this.parameters.block != \"mixed_block\"}",
                    "shuffleGroups": [],
                    "template": {
                      "type": "lab.flow.Sequence",
                      "files": {},
                      "responses": {
                        "": ""
                      },
                      "parameters": {},
                      "messageHandlers": {
                        "before:prepare": function anonymous(
) {
this.state.block_order = this.state.block_order + 1
block_order = this.state.block_order
}
                      },
                      "title": "mixed blocks sequence",
                      "tardy": true,
                      "content": [
                        {
                          "type": "lab.flow.Sequence",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.state.pointsBlock = 0;
}
                          },
                          "title": "mixed gain domain",
                          "tardy": true,
                          "skip": "${ this.parameters.domain != \"mixed_gain\"}",
                          "content": [
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": 260,
                                  "angle": 0,
                                  "width": 160.09,
                                  "height": 16.95,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "Press space to continue",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "15",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 10,
                                  "top": -50,
                                  "angle": 0,
                                  "width": 948.16,
                                  "height": 120.05,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "In the next block, one box have loss (${state.loss_color}) and\ngain (${state.gain_color}) pixels and the other box have\ngain (${state.gain_color}) and neutral (${state.neutral_color}) pixels",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "keypress(Space)": "space"
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "before:prepare": function anonymous(
) {
this.options.parameters.true_domain = "mixed"
}
                              },
                              "title": "mixed gain screen"
                            },
                            {
                              "type": "lab.flow.Loop",
                              "templateParameters": [
                                {
                                  "left_side": "0.01",
                                  "right_side": "0.525",
                                  "domain": "mixed_gain",
                                  "above_below": "below",
                                  "optimal_side": "right",
                                  "mixed_side": "right"
                                },
                                {
                                  "left_side": "0.525",
                                  "right_side": "0.01",
                                  "domain": "mixed_gain",
                                  "above_below": "below",
                                  "optimal_side": "left",
                                  "mixed_side": "left"
                                },
                                {
                                  "left_side": "0.11",
                                  "right_side": "0.575",
                                  "domain": "mixed_gain",
                                  "above_below": "mixed",
                                  "optimal_side": "right",
                                  "mixed_side": "right"
                                },
                                {
                                  "left_side": "0.575",
                                  "right_side": "0.11",
                                  "domain": "mixed_gain",
                                  "above_below": "mixed",
                                  "optimal_side": "left",
                                  "mixed_side": "left"
                                },
                                {
                                  "left_side": "0.505",
                                  "right_side": "0.7725",
                                  "domain": "mixed_gain",
                                  "above_below": "above",
                                  "optimal_side": "right",
                                  "mixed_side": "right"
                                },
                                {
                                  "left_side": "0.7725",
                                  "right_side": "0.505",
                                  "domain": "mixed_gain",
                                  "above_below": "above",
                                  "optimal_side": "left",
                                  "mixed_side": "left"
                                },
                                {
                                  "left_side": "0.09",
                                  "right_side": "0.525",
                                  "domain": "mixed_gain",
                                  "above_below": "below",
                                  "optimal_side": "left",
                                  "mixed_side": "right"
                                },
                                {
                                  "left_side": "0.525",
                                  "right_side": "0.09",
                                  "domain": "mixed_gain",
                                  "above_below": "below",
                                  "optimal_side": "right",
                                  "mixed_side": "left"
                                },
                                {
                                  "left_side": "0.19",
                                  "right_side": "0.575",
                                  "domain": "mixed_gain",
                                  "above_below": "mixed",
                                  "optimal_side": "left",
                                  "mixed_side": "right"
                                },
                                {
                                  "left_side": "0.575",
                                  "right_side": "0.19",
                                  "domain": "mixed_gain",
                                  "above_below": "mixed",
                                  "optimal_side": "right",
                                  "mixed_side": "left"
                                },
                                {
                                  "left_side": "0.545",
                                  "right_side": "0.7525",
                                  "domain": "mixed_gain",
                                  "above_below": "above",
                                  "optimal_side": "left",
                                  "mixed_side": "right"
                                },
                                {
                                  "left_side": "0.7525",
                                  "right_side": "0.545",
                                  "domain": "mixed_gain",
                                  "above_below": "above",
                                  "optimal_side": "right",
                                  "mixed_side": "left"
                                }
                              ],
                              "sample": {
                                "mode": "draw",
                                "n": "${ this.state.n_trials }"
                              },
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "mixed gain block",
                              "shuffleGroups": [],
                              "template": {
                                "type": "lab.flow.Sequence",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "trial",
                                "content": [
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "line",
                                        "left": "0",
                                        "top": 0,
                                        "angle": 0,
                                        "width": 50,
                                        "height": 0,
                                        "stroke": "black",
                                        "strokeWidth": 10,
                                        "fill": "rgb(0,0,0)"
                                      },
                                      {
                                        "type": "line",
                                        "left": 0,
                                        "top": 0,
                                        "angle": "90",
                                        "width": 50,
                                        "height": 0,
                                        "stroke": "black",
                                        "strokeWidth": 10,
                                        "fill": "rgb(0,0,0)"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "run": function anonymous(
) {
// In this mixed gain domain, left and right parameters store actual percentage of gain color for each matrix.
actual_left = this.parameters['left_side']
actual_right = this.parameters['right_side']


left_version = this.random.range(1, 101);
right_version = this.random.range(1, 101);

source_pictures = "https://raw.githubusercontent.com/carero2/loss-perception/main/matrices/"


// As matrices are called by name and these names are constructed by the percentage of both colors, for obtaining some we have to rest. For example, for 0.455blue1orange matrix, if we have orange as loss color and want to present 0.455 prop of losses we have to search for 0.545blue1orange matrix (1-0.455)

if (this.parameters.mixed_side === "right"){

  // We create the mixed matrix in the right variable

  if ((this.state.gain_color === "blue" && this.state.loss_color === "orange") ||(this.state.gain_color === "orange" && this.state.loss_color === "blue")){
    right_folder = "blue-orange/"
    right_link = "blue1orangeb%3D1w%3D100v%3D"


    if(this.state.gain_color === "orange" && this.state.loss_color === "blue"){
      actual_right = get_rest_of_1(actual_right)
    }
  }

  if ((this.state.gain_color === "blue" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "blue")){

    right_folder = "blue-yellow/"
    right_link = "blue1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.loss_color === "blue"){
      actual_right = get_rest_of_1(actual_right)
    }
  }

  if ((this.state.gain_color === "orange" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "orange")){
    
    right_folder = "orange-yellow/"
    right_link = "orange1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.loss_color === "orange"){
      actual_right = get_rest_of_1(actual_right)
    }
  }

  // We create the gain matrix in the left position
  if ((this.state.gain_color === "blue" && this.state.neutral_color === "orange") ||(this.state.gain_color === "orange" && this.state.neutral_color === "blue")){
    
    left_folder = "blue-orange/"
    left_link = "blue1orangeb%3D1w%3D100v%3D"


    if(this.state.gain_color === "orange" && this.state.neutral_color === "blue"){
      actual_left = get_rest_of_1(actual_left)
    }
  }

  if ((this.state.gain_color === "blue" && this.state.neutral_color === "yellow") || (this.state.gain_color === "yellow" && this.state.neutral_color === "blue")){

    left_folder = "blue-yellow/"
    left_link = "blue1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.neutral_color === "blue"){
      actual_left = get_rest_of_1(actual_left)
    }
  }

  if ((this.state.gain_color === "orange" && this.state.neutral_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.neutral_color === "orange")){
    
    left_folder = "orange-yellow/"
    left_link = "orange1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.neutral_color === "orange"){
      actual_left = get_rest_of_1(actual_left)
    }
  }
}

if (this.parameters.mixed_side === "left"){
  // We create the left mixed matrix
  if ((this.state.gain_color === "blue" && this.state.loss_color === "orange") ||(this.state.gain_color === "orange" && this.state.loss_color === "blue")){
    left_folder = "blue-orange/"
    left_link = "blue1orangeb%3D1w%3D100v%3D"


    if(this.state.gain_color === "orange" && this.state.loss_color === "blue"){
      actual_left = get_rest_of_1(actual_left)
    }
  }

  if ((this.state.gain_color === "blue" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "blue")){

    left_folder = "blue-yellow/"
    left_link = "blue1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.loss_color === "blue"){
      actual_left = get_rest_of_1(actual_left)
    }
  }

  if ((this.state.gain_color === "orange" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "orange")){
    
    left_folder = "orange-yellow/"
    left_link = "orange1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.loss_color === "orange"){
      actual_left = get_rest_of_1(actual_left)
    }
  }

  // We create the right gain matrix
  if ((this.state.gain_color === "blue" && this.state.neutral_color === "orange") ||(this.state.gain_color === "orange" && this.state.neutral_color === "blue")){
    
    right_folder = "blue-orange/"
    right_link = "blue1orangeb%3D1w%3D100v%3D"


    if(this.state.gain_color === "orange" && this.state.neutral_color === "blue"){
      actual_right = get_rest_of_1(actual_right)
    }
  }

  if ((this.state.gain_color === "blue" && this.state.neutral_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.neutral_color === "blue")){

    right_folder = "blue-yellow/"
    right_link = "blue1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.neutral_color === "blue"){
      actual_right = get_rest_of_1(actual_right)
    }
  }

  if ((this.state.gain_color === "orange" && this.state.neutral_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.neutral_color === "orange")){
    
    right_folder = "orange-yellow/"
    right_link = "orange1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.neutral_color === "orange"){
      actual_right = get_rest_of_1(actual_right)
    }
  }
}



picture_left = source_pictures.concat(left_folder, String(actual_left), left_link, left_version, ".png")
picture_right = source_pictures.concat(right_folder, String(actual_right), right_link, right_version, ".png")


// Save variables to parameters to store in csv
this.options.parameters['left'] = actual_left;
this.options.parameters['right'] = actual_right;

this.options.parameters['picture_left'] = picture_left;
this.options.parameters['picture_right'] = picture_right;
}
                                    },
                                    "title": "fixation",
                                    "timeout": "500",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "image",
                                        "left": -200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 251.5,
                                        "height": 251.5,
                                        "stroke": null,
                                        "strokeWidth": 0,
                                        "fill": "black",
                                        "src": "${ picture_left }"
                                      },
                                      {
                                        "type": "image",
                                        "left": 200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 251.5,
                                        "height": 251.5,
                                        "stroke": null,
                                        "strokeWidth": 0,
                                        "fill": "black",
                                        "src": "${ picture_right }"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -190,
                                        "angle": 0,
                                        "width": 384.23,
                                        "height": 36.16,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "black",
                                        "text": "Which box do you choose?",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": 32,
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {
                                      "keypress(f, F)": "f",
                                      "keypress(j, J)": "j"
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
this.options.events['keypress'] = (e) => {
  if (e.key.toLowerCase() === 'f' || e.key.toLowerCase() === 'j') {
    this.state.responded = true;
    if (e.key.toLowerCase() === 'f'){
      position = -200;
      no_position = 200;
      respuesta = 'f';
      this.data.response = "f";
    } else if (e.key.toLowerCase() === 'j') {
      position = 200;
      no_position = -200;
      respuesta = 'j';
      this.data.response = "j";
    }
  }
}
}
                                    },
                                    "title": "stimulus",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "rect",
                                        "left": -200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 228.53,
                                        "height": 228.53,
                                        "stroke": "#000000",
                                        "strokeWidth": 1,
                                        "fill": "#ffffff"
                                      },
                                      {
                                        "type": "rect",
                                        "left": 200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 228.53,
                                        "height": 228.53,
                                        "stroke": "#000000",
                                        "strokeWidth": 1,
                                        "fill": "#ffffff"
                                      },
                                      {
                                        "type": "rect",
                                        "left": "${ position }",
                                        "top": 0,
                                        "angle": 0,
                                        "width": 228.53,
                                        "height": 228.53,
                                        "stroke": "#000000",
                                        "strokeWidth": 10,
                                        "fill": ""
                                      },
                                      {
                                        "type": "image",
                                        "left": -200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 251.5,
                                        "height": 251.5,
                                        "stroke": null,
                                        "strokeWidth": 0,
                                        "fill": "black",
                                        "src": "${ picture_left }"
                                      },
                                      {
                                        "type": "image",
                                        "left": 200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 251.5,
                                        "height": 251.5,
                                        "stroke": null,
                                        "strokeWidth": 0,
                                        "fill": "black",
                                        "src": "${ picture_right }"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {
                                      "0.47blue1yellowb=1w=100v=1.png": "embedded/bca01ebdf5bed5e5574066a2d7e64c0d7379f8d35ceca7f9c60d2586fc882de4.png"
                                    },
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
if (this.state.ended_on === 'timeout'){
  this.state.responded = false;
  respuesta = 'timeout';
  this.data.response = "timeout";
  position = 0;
  no_position = 0;
}

mixed_selected = false

if (respuesta === 'f'){
  choice_losses = 0;
  choice_gains = this.parameters['left_side'];
  choice_neutral = 1-this.parameters['left_side'];
  not_choice_losses = 0;
  not_choice_gains = this.parameters['right_side'];
  not_choice_neutral = 1-this.parameters['right_side'];
  if (this.parameters.mixed_side === "left"){
    mixed_selected = true
    choice_losses = 1-this.parameters['left_side'];
    choice_gains = this.parameters['left_side'];
    choice_neutral = 0;
    not_choice_losses = 1-this.parameters['right_side'];
    not_choice_gains = this.parameters['right_side'];
    not_choice_neutral = 0;
  }
  }
else if (respuesta === 'j') {
  choice_losses = 0;
  choice_gains = this.parameters['right_side'];
  choice_neutral = 1-this.parameters['right_side'];
  not_choice_losses = 0;
  not_choice_gains = this.parameters['left_side'];
  not_choice_neutral = 1-this.parameters['left_side'];
  if (this.parameters.mixed_side === "right"){
    mixed_selected = true
    choice_losses = 1-this.parameters['right_side'];
    choice_gains = this.parameters['right_side'];
    choice_neutral = 0;
    not_choice_losses = 1-this.parameters['left_side'];
    not_choice_gains = this.parameters['left_side'];
    not_choice_neutral = 0;
  }
}

this.options.parameters['choice_losses'] = choice_losses;
this.options.parameters['choice_gains'] = choice_gains;
this.options.parameters['choice_neutral'] = choice_neutral;
this.options.parameters['not_choice_losses'] = not_choice_losses;
this.options.parameters['not_choice_gains'] = not_choice_gains;
this.options.parameters['not_choice_neutral'] = not_choice_neutral;


if (this.parameters.mixed_side === "right"){
  gains_left = this.parameters['left_side']
  losses_left = 0
  neutral_left = 1-this.parameters['left_side']
  gains_right = this.parameters['right_side']
  losses_right = 1-this.parameters['right_side']
  neutral_right = 0
}
if (this.parameters.mixed_side === "left"){
  gains_left = this.parameters['left_side']
  losses_left = 1-this.parameters['left_side']
  neutral_left = 0
  gains_right = this.parameters['right_side']
  losses_right = 0
  neutral_right = 1-this.parameters['right_side']
}


this.options.parameters['losses_left'] = losses_left
this.options.parameters['gains_left'] = gains_left
this.options.parameters['neutral_left'] = neutral_left
this.options.parameters['losses_right'] = losses_right
this.options.parameters['gains_right'] = gains_right
this.options.parameters['neutral_right'] = neutral_right


this.options.parameters['ev_choice'] = (choice_losses*-this.state.reward_points) + (choice_gains*this.state.reward_points)
this.options.parameters['ev_not_choice'] = (not_choice_losses*-this.state.reward_points) + (not_choice_gains*this.state.reward_points)


if (this.state.responded){
  this.options.parameters['random_value'] = this.random.random();

  if (mixed_selected){
    reward = this.state.reward_points
    if (this.parameters['random_value'] > this.parameters['choice_gains']){
      reward = -this.state.reward_points
      }
    }
  else if(!mixed_selected){
    reward = this.state.reward_points
    if (this.parameters['random_value'] > this.parameters['choice_gains']){
      reward = 0
      }
  }
  this.state.points = reward;
}

if (this.state.ended_on === 'timeout'){
  this.state.responded = false;
  respuesta = 'timeout';
  this.data.response = "timeout";
  position = 0;
  no_position = 0;
}


if (this.parameters.mixed_side === "right"){
  gains_left = this.parameters['left_side']
  losses_left = 0
  neutral_left = 1-this.parameters['left_side']
  gains_right = this.parameters['right_side']
  losses_right = 1-this.parameters['right_side']
  neutral_right = 0
}
if (this.parameters.mixed_side === "left"){
  gains_left = this.parameters['left_side']
  losses_left = 1-this.parameters['left_side']
  neutral_left = 0
  gains_right = this.parameters['right_side']
  losses_right = 0
  neutral_right = 1-this.parameters['right_side']
}

mixed_selected = false

if (respuesta === 'f'){
  if (this.parameters.mixed_side === "left"){
    mixed_selected = true
  }
  choice_losses = losses_left
  choice_gains = gains_left
  choice_neutral = neutral_left
  not_choice_losses = losses_right
  not_choice_gains = gains_right
  not_choice_neutral = neutral_right
  }
else if (respuesta === 'j') {
  if (this.parameters.mixed_side === "right"){
    mixed_selected = true
  }
  choice_losses = losses_right
  choice_gains = gains_right
  choice_neutral = neutral_right
  not_choice_losses = losses_left
  not_choice_gains = gains_left
  not_choice_neutral = neutral_left
}

this.options.parameters['choice_losses'] = choice_losses;
this.options.parameters['choice_gains'] = choice_gains;
this.options.parameters['choice_neutral'] = choice_neutral;
this.options.parameters['not_choice_losses'] = not_choice_losses;
this.options.parameters['not_choice_gains'] = not_choice_gains;
this.options.parameters['not_choice_neutral'] = not_choice_neutral;


this.options.parameters['ev_choice'] = (choice_losses*-5) + (choice_gains*5)
this.options.parameters['ev_not_choice'] = (not_choice_losses*-5) + (not_choice_gains*5)


this.options.parameters['losses_left'] = losses_left
this.options.parameters['gains_left'] = gains_left
this.options.parameters['neutral_left'] = neutral_left
this.options.parameters['losses_right'] = losses_right
this.options.parameters['gains_right'] = gains_right
this.options.parameters['neutral_right'] = neutral_right



if (this.state.responded){
  this.options.parameters['random_value'] = this.random.random();

  if (mixed_selected){
    reward = this.state.reward_points
    if (this.parameters['random_value'] > this.parameters['choice_gains']){
      reward = -this.state.reward_points
      }
    }
  else if(!mixed_selected){
    reward = this.state.reward_points
    if (this.parameters['random_value'] > this.parameters['choice_gains']){
      reward = 0
      }
  }
  this.state.points = reward;
}


this.state.totalPoints = this.state.totalPoints + this.state.points;

this.state.pointsBlock = this.state.pointsBlock + this.state.points;
}
                                    },
                                    "title": "choice",
                                    "timeout": "1000",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "ITI",
                                    "timeout": "500"
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "type": "lab.flow.Sequence",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.state.pointsBlock = 0;
}
                          },
                          "title": "mixed loss domain",
                          "tardy": true,
                          "skip": "${ this.parameters.domain != \"mixed_loss\"}",
                          "content": [
                            {
                              "type": "lab.canvas.Screen",
                              "content": [
                                {
                                  "type": "i-text",
                                  "left": 0,
                                  "top": 260,
                                  "angle": 0,
                                  "width": 160.09,
                                  "height": 16.95,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "Press space to continue",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": "15",
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                },
                                {
                                  "type": "i-text",
                                  "left": 10,
                                  "top": -50,
                                  "angle": 0,
                                  "width": 940.97,
                                  "height": 120.05,
                                  "stroke": null,
                                  "strokeWidth": 1,
                                  "fill": "black",
                                  "text": "In the next block, one box have loss (${state.loss_color}) and\ngain (${state.gain_color}) pixels and the other box have\nloss (${state.loss_color}) and neutral (${state.neutral_color}) pixels",
                                  "fontStyle": "normal",
                                  "fontWeight": "normal",
                                  "fontSize": 32,
                                  "fontFamily": "sans-serif",
                                  "lineHeight": 1.16,
                                  "textAlign": "center"
                                }
                              ],
                              "viewport": [
                                800,
                                600
                              ],
                              "files": {},
                              "responses": {
                                "keypress(Space)": "space"
                              },
                              "parameters": {},
                              "messageHandlers": {
                                "before:prepare": function anonymous(
) {
this.options.parameters.true_domain = "mixed"
}
                              },
                              "title": "mixed loss screen"
                            },
                            {
                              "type": "lab.flow.Loop",
                              "templateParameters": [
                                {
                                  "left_side": "0.01",
                                  "right_side": "0.525",
                                  "domain": "mixed_loss",
                                  "above_below": "below",
                                  "optimal_side": "left",
                                  "mixed_side": "right"
                                },
                                {
                                  "left_side": "0.525",
                                  "right_side": "0.01",
                                  "domain": "mixed_loss",
                                  "above_below": "below",
                                  "optimal_side": "right",
                                  "mixed_side": "left"
                                },
                                {
                                  "left_side": "0.11",
                                  "right_side": "0.575",
                                  "domain": "mixed_loss",
                                  "above_below": "mixed",
                                  "optimal_side": "left",
                                  "mixed_side": "right"
                                },
                                {
                                  "left_side": "0.575",
                                  "right_side": "0.11",
                                  "domain": "mixed_loss",
                                  "above_below": "mixed",
                                  "optimal_side": "right",
                                  "mixed_side": "left"
                                },
                                {
                                  "left_side": "0.505",
                                  "right_side": "0.7725",
                                  "domain": "mixed_loss",
                                  "above_below": "above",
                                  "optimal_side": "left",
                                  "mixed_side": "right"
                                },
                                {
                                  "left_side": "0.7725",
                                  "right_side": "0.505",
                                  "domain": "mixed_loss",
                                  "above_below": "above",
                                  "optimal_side": "right",
                                  "mixed_side": "left"
                                },
                                {
                                  "left_side": "0.09",
                                  "right_side": "0.525",
                                  "domain": "mixed_loss",
                                  "above_below": "below",
                                  "optimal_side": "right",
                                  "mixed_side": "right"
                                },
                                {
                                  "left_side": "0.525",
                                  "right_side": "0.09",
                                  "domain": "mixed_loss",
                                  "above_below": "below",
                                  "optimal_side": "left",
                                  "mixed_side": "left"
                                },
                                {
                                  "left_side": "0.19",
                                  "right_side": "0.575",
                                  "domain": "mixed_loss",
                                  "above_below": "mixed",
                                  "optimal_side": "right",
                                  "mixed_side": "right"
                                },
                                {
                                  "left_side": "0.575",
                                  "right_side": "0.19",
                                  "domain": "mixed_loss",
                                  "above_below": "mixed",
                                  "optimal_side": "left",
                                  "mixed_side": "left"
                                },
                                {
                                  "left_side": "0.545",
                                  "right_side": "0.7525",
                                  "domain": "mixed_loss",
                                  "above_below": "above",
                                  "optimal_side": "right",
                                  "mixed_side": "right"
                                },
                                {
                                  "left_side": "0.7525",
                                  "right_side": "0.545",
                                  "domain": "mixed_loss",
                                  "above_below": "above",
                                  "optimal_side": "left",
                                  "mixed_side": "left"
                                }
                              ],
                              "sample": {
                                "mode": "draw",
                                "n": "${ this.state.n_trials }"
                              },
                              "files": {},
                              "responses": {
                                "": ""
                              },
                              "parameters": {},
                              "messageHandlers": {},
                              "title": "mixed loss block",
                              "shuffleGroups": [],
                              "template": {
                                "type": "lab.flow.Sequence",
                                "files": {},
                                "responses": {
                                  "": ""
                                },
                                "parameters": {},
                                "messageHandlers": {},
                                "title": "trial",
                                "content": [
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "line",
                                        "left": "0",
                                        "top": 0,
                                        "angle": 0,
                                        "width": 50,
                                        "height": 0,
                                        "stroke": "black",
                                        "strokeWidth": 10,
                                        "fill": "rgb(0,0,0)"
                                      },
                                      {
                                        "type": "line",
                                        "left": 0,
                                        "top": 0,
                                        "angle": "90",
                                        "width": 50,
                                        "height": 0,
                                        "stroke": "black",
                                        "strokeWidth": 10,
                                        "fill": "rgb(0,0,0)"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "run": function anonymous(
) {
// In this mixed loss domain, left and right parameters store actual percentage of loss color for each matrix.
actual_left = this.parameters['left_side']
actual_right = this.parameters['right_side']


left_version = this.random.range(1, 101);
right_version = this.random.range(1, 101);

source_pictures = "https://raw.githubusercontent.com/carero2/loss-perception/main/matrices/"


// As matrices are called by name and these names are constructed by the percentage of both colors, for obtaining some we have to rest. For example, for 0.455blue1orange matrix, if we have orange as loss color and want to present 0.455 prop of losses we have to search for 0.545blue1orange matrix (1-0.455)

if (this.parameters.mixed_side === "right"){

  // We create the mixed matrix in the right variable

  if ((this.state.gain_color === "blue" && this.state.loss_color === "orange") ||(this.state.gain_color === "orange" && this.state.loss_color === "blue")){
    right_folder = "blue-orange/"
    right_link = "blue1orangeb%3D1w%3D100v%3D"


    if(this.state.gain_color === "orange" && this.state.loss_color === "blue"){
      actual_right = get_rest_of_1(actual_right)
    }
  }

  if ((this.state.gain_color === "blue" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "blue")){

    right_folder = "blue-yellow/"
    right_link = "blue1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.loss_color === "blue"){
      actual_right = get_rest_of_1(actual_right)
    }
  }

  if ((this.state.gain_color === "orange" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "orange")){
    
    right_folder = "orange-yellow/"
    right_link = "orange1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.loss_color === "orange"){
      actual_right = get_rest_of_1(actual_right)
    }
  }

  // We create the gain matrix in the left position
  if ((this.state.loss_color === "blue" && this.state.neutral_color === "orange") ||(this.state.loss_color === "orange" && this.state.neutral_color === "blue")){
    
    left_folder = "blue-orange/"
    left_link = "blue1orangeb%3D1w%3D100v%3D"


    if(this.state.loss_color === "orange" && this.state.neutral_color === "blue"){
      actual_left = get_rest_of_1(actual_left)
    }
  }

  if ((this.state.loss_color === "blue" && this.state.neutral_color === "yellow") ||(this.state.loss_color === "yellow" && this.state.neutral_color === "blue")){

    left_folder = "blue-yellow/"
    left_link = "blue1yellowb%3D1w%3D100v%3D"

    if(this.state.loss_color === "yellow" && this.state.neutral_color === "blue"){
      actual_left = get_rest_of_1(actual_left)
    }
  }

  if ((this.state.loss_color === "orange" && this.state.neutral_color === "yellow") ||(this.state.loss_color === "yellow" && this.state.neutral_color === "orange")){
    
    left_folder = "orange-yellow/"
    left_link = "orange1yellowb%3D1w%3D100v%3D"

    if(this.state.loss_color === "yellow" && this.state.neutral_color === "orange"){
      actual_left = get_rest_of_1(actual_left)
    }
  }
}

if (this.parameters.mixed_side === "left"){
  // We create the left mixed matrix
  if ((this.state.gain_color === "blue" && this.state.loss_color === "orange") ||(this.state.gain_color === "orange" && this.state.loss_color === "blue")){
    left_folder = "blue-orange/"
    left_link = "blue1orangeb%3D1w%3D100v%3D"


    if(this.state.gain_color === "orange" && this.state.loss_color === "blue"){
      actual_left = get_rest_of_1(actual_left)
    }
  }

  if ((this.state.gain_color === "blue" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "blue")){

    left_folder = "blue-yellow/"
    left_link = "blue1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.loss_color === "blue"){
      actual_left = get_rest_of_1(actual_left)
    }
  }

  if ((this.state.gain_color === "orange" && this.state.loss_color === "yellow") ||(this.state.gain_color === "yellow" && this.state.loss_color === "orange")){
    
    left_folder = "orange-yellow/"
    left_link = "orange1yellowb%3D1w%3D100v%3D"

    if(this.state.gain_color === "yellow" && this.state.loss_color === "orange"){
      actual_left = get_rest_of_1(actual_left)
    }
  }

  // We create the right gain matrix
  if ((this.state.loss_color === "blue" && this.state.neutral_color === "orange") ||(this.state.loss_color === "orange" && this.state.neutral_color === "blue")){
    
    right_folder = "blue-orange/"
    right_link = "blue1orangeb%3D1w%3D100v%3D"


    if(this.state.loss_color === "orange" && this.state.neutral_color === "blue"){
      actual_right = get_rest_of_1(actual_right)
    }
  }

  if ((this.state.loss_color === "blue" && this.state.neutral_color === "yellow") ||(this.state.loss_color === "yellow" && this.state.neutral_color === "blue")){

    right_folder = "blue-yellow/"
    right_link = "blue1yellowb%3D1w%3D100v%3D"

    if(this.state.loss_color === "yellow" && this.state.neutral_color === "blue"){
      actual_right = get_rest_of_1(actual_right)
    }
  }

  if ((this.state.loss_color === "orange" && this.state.neutral_color === "yellow") ||(this.state.loss_color === "yellow" && this.state.neutral_color === "orange")){
    
    right_folder = "orange-yellow/"
    right_link = "orange1yellowb%3D1w%3D100v%3D"

    if(this.state.loss_color === "yellow" && this.state.neutral_color === "orange"){
      actual_right = get_rest_of_1(actual_right)
    }
  }
}



picture_left = source_pictures.concat(left_folder, actual_left, left_link, left_version, ".png")
picture_right = source_pictures.concat(right_folder, actual_right, right_link, right_version, ".png")


// Save variables to parameters to store in csv
this.options.parameters['left'] = actual_left;
this.options.parameters['right'] = actual_right;

this.options.parameters['picture_left'] = picture_left;
this.options.parameters['picture_right'] = picture_right;
}
                                    },
                                    "title": "fixation",
                                    "timeout": "500",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "image",
                                        "left": -200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 251.5,
                                        "height": 251.5,
                                        "stroke": null,
                                        "strokeWidth": 0,
                                        "fill": "black",
                                        "src": "${ picture_left }"
                                      },
                                      {
                                        "type": "image",
                                        "left": 200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 251.5,
                                        "height": 251.5,
                                        "stroke": null,
                                        "strokeWidth": 0,
                                        "fill": "black",
                                        "src": "${ picture_right }"
                                      },
                                      {
                                        "type": "i-text",
                                        "left": 0,
                                        "top": -190,
                                        "angle": 0,
                                        "width": 384.23,
                                        "height": 36.16,
                                        "stroke": null,
                                        "strokeWidth": 1,
                                        "fill": "black",
                                        "text": "Which box do you choose?",
                                        "fontStyle": "normal",
                                        "fontWeight": "normal",
                                        "fontSize": 32,
                                        "fontFamily": "sans-serif",
                                        "lineHeight": 1.16,
                                        "textAlign": "center"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {
                                      "keypress(f, F)": "f",
                                      "keypress(j, J)": "j"
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
this.options.events['keypress'] = (e) => {
  if (e.key.toLowerCase() === 'f' || e.key.toLowerCase() === 'j') {
    this.state.responded = true;
    if (e.key.toLowerCase() === 'f'){
      position = -200;
      no_position = 200;
      respuesta = 'f';
      this.data.response = "f";
    } else if (e.key.toLowerCase() === 'j') {
      position = 200;
      no_position = -200;
      respuesta = 'j';
      this.data.response = "j";
    }
  }
}
}
                                    },
                                    "title": "stimulus",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [
                                      {
                                        "type": "rect",
                                        "left": -200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 228.53,
                                        "height": 228.53,
                                        "stroke": "#000000",
                                        "strokeWidth": 1,
                                        "fill": "#ffffff"
                                      },
                                      {
                                        "type": "rect",
                                        "left": 200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 228.53,
                                        "height": 228.53,
                                        "stroke": "#000000",
                                        "strokeWidth": 1,
                                        "fill": "#ffffff"
                                      },
                                      {
                                        "type": "rect",
                                        "left": "${ position }",
                                        "top": 0,
                                        "angle": 0,
                                        "width": 228.53,
                                        "height": 228.53,
                                        "stroke": "#000000",
                                        "strokeWidth": 10,
                                        "fill": ""
                                      },
                                      {
                                        "type": "image",
                                        "left": -200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 251.5,
                                        "height": 251.5,
                                        "stroke": null,
                                        "strokeWidth": 0,
                                        "fill": "black",
                                        "src": "${ picture_left }"
                                      },
                                      {
                                        "type": "image",
                                        "left": 200,
                                        "top": 0,
                                        "angle": 0,
                                        "width": 251.5,
                                        "height": 251.5,
                                        "stroke": null,
                                        "strokeWidth": 0,
                                        "fill": "black",
                                        "src": "${ picture_right }"
                                      }
                                    ],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {
                                      "0.47blue1yellowb=1w=100v=1.png": "embedded/bca01ebdf5bed5e5574066a2d7e64c0d7379f8d35ceca7f9c60d2586fc882de4.png"
                                    },
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {
                                      "before:prepare": function anonymous(
) {
if (this.state.ended_on === 'timeout'){
  this.state.responded = false;
  respuesta = 'timeout';
  this.data.response = "timeout";
  position = 0;
  no_position = 0;
}

if (this.parameters.mixed_side === "right"){
  losses_left = this.parameters['left_side']
  gains_left = 0
  neutral_left = 1-this.parameters['left_side']
  losses_right = this.parameters['right_side']
  gains_right = 1-this.parameters['right_side']
  neutral_right = 0
}
if (this.parameters.mixed_side === "left"){
  losses_left = this.parameters['left_side']
  gains_left = 1-this.parameters['left_side']
  neutral_left = 0
  losses_right = this.parameters['right_side']
  gains_right = 0
  neutral_right = 1-this.parameters['right_side']
}

mixed_selected = false
if (respuesta === 'f'){
  if (this.parameters.mixed_side === "left"){
    mixed_selected = true
  }
  choice_losses = losses_left
  choice_gains = gains_left
  choice_neutral = neutral_left
  not_choice_losses = losses_right
  not_choice_gains = gains_right
  not_choice_neutral = neutral_right
}
else if (respuesta === 'j') {
  if (this.parameters.mixed_side === "right"){
    mixed_selected = true
  }
  choice_losses = losses_right
  choice_gains = gains_right
  choice_neutral = neutral_right
  not_choice_losses = losses_left
  not_choice_gains = gains_left
  not_choice_neutral = neutral_left
}

this.options.parameters['choice_losses'] = choice_losses;
this.options.parameters['choice_gains'] = choice_gains;
this.options.parameters['choice_neutral'] = choice_neutral;
this.options.parameters['not_choice_losses'] = not_choice_losses;
this.options.parameters['not_choice_gains'] = not_choice_gains;
this.options.parameters['not_choice_neutral'] = not_choice_neutral;


this.options.parameters['ev_choice'] = (choice_losses*-this.state.reward_points) + (choice_gains*this.state.reward_points)
this.options.parameters['ev_not_choice'] = (not_choice_losses*-this.state.reward_points) + (not_choice_gains*this.state.reward_points)


this.options.parameters['losses_left'] = losses_left
this.options.parameters['gains_left'] = gains_left
this.options.parameters['neutral_left'] = neutral_left
this.options.parameters['losses_right'] = losses_right
this.options.parameters['gains_right'] = gains_right
this.options.parameters['neutral_right'] = neutral_right


if (this.state.responded){
  this.options.parameters['random_value'] = this.random.random();
  if (mixed_selected){
    reward = -this.state.reward_points
    if (this.parameters['random_value'] > this.parameters['choice_losses']){
      reward = this.state.reward_points
      }
    }
  else if(!mixed_selected){
    reward = -this.state.reward_points
    if (this.parameters['random_value'] > this.parameters['choice_losses']){
      reward = 0
      }
  }
  this.state.points = reward;
}



this.state.totalPoints = this.state.totalPoints + this.state.points;

this.state.pointsBlock = this.state.pointsBlock + this.state.points;
}
                                    },
                                    "title": "choice",
                                    "timeout": "1000",
                                    "tardy": true
                                  },
                                  {
                                    "type": "lab.canvas.Screen",
                                    "content": [],
                                    "viewport": [
                                      800,
                                      600
                                    ],
                                    "files": {},
                                    "responses": {
                                      "": ""
                                    },
                                    "parameters": {},
                                    "messageHandlers": {},
                                    "title": "ITI",
                                    "timeout": "500"
                                  }
                                ]
                              }
                            }
                          ]
                        },
                        {
                          "type": "lab.canvas.Screen",
                          "content": [],
                          "viewport": [
                            800,
                            600
                          ],
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
if (this.state.pointsBlock < 0){
  sentence_reward = "you would have lost ".concat(-this.state.pointsBlock, " GBP.")
} 
if (this.state.pointsBlock > 0){
  sentence_reward = "you would have gain ".concat(this.state.pointsBlock, " GBP.")
}
if (this.state.pointsBlock === 0){
  sentence_reward = "you would not have lost or gain anything."
}

if (block_order % 3 === 0){
  show_short_feedback = true
  show_long_feedback = false
} else {
  show_short_feedback = false
  show_long_feedback = true
}
}
                          },
                          "title": "blank screen",
                          "timeout": "200",
                          "tardy": true
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "responses": {
                            "click #Continue": "Continue"
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "show amount",
                          "tardy": true,
                          "content": "<main class=\"content-vertical-space-around content-horizontal-center\">\r\n\r\n  <div class=\"w-m text-justify\">\r\n    <p>\r\n      Well done!\r\n    </p>\r\n    <p><b><font size=\"+1\">\r\n     Remember, one decision will be randomly selected from this block that you have just completed (and previous completed blocks) and their result will be added to or subtracted from your 5 GBP. </font></b></p>\r\n     <br>\r\n    <p>Keep going with the experiment.</p>\r\n  </div>\r\n</main>\r\n\r\n<footer class=\"content-horizontal-right\">\r\n  <button id=\"Continue\">Continue &rarr;</button>\r\n</footer>",
                          "skip": "${ show_long_feedback }"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "responses": {
                            "click #Continue": "Continue"
                          },
                          "parameters": {},
                          "messageHandlers": {},
                          "title": "show amount",
                          "tardy": true,
                          "content": "<main class=\"content-vertical-space-around content-horizontal-center\">\r\n\r\n  <div class=\"w-m text-justify\">\r\n    <p>\r\n      Good job! You finished this block.\r\n    </p>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <p>Click the button to continue with the experiment.</p>\r\n  </div>\r\n</main>\r\n\r\n<footer class=\"content-horizontal-right\">\r\n  <button id=\"Continue\">Continue &rarr;</button>\r\n</footer>",
                          "skip": "${ show_short_feedback }"
                        },
                        {
                          "type": "lab.html.Page",
                          "items": [
                            {
                              "type": "text",
                              "title": "Please answer",
                              "content": "Please answer this question about the experiment."
                            },
                            {
                              "required": true,
                              "type": "radio",
                              "label": "What did the matrices of the previous block contain?",
                              "options": [
                                {
                                  "label": "Both contained gains and losses",
                                  "coding": "pure_mixed"
                                },
                                {
                                  "label": "Both contained losses and neutral",
                                  "coding": "pure_loss"
                                },
                                {
                                  "label": "Both contained gains and neutral",
                                  "coding": "pure_gain"
                                },
                                {
                                  "label": "One contained gains and neutral and the other gains and losses",
                                  "coding": "mixed_gain"
                                },
                                {
                                  "label": "One contained losses and neutral and the other gains and losses",
                                  "coding": "mixed_loss"
                                }
                              ],
                              "shuffle": true,
                              "name": "attention_check"
                            }
                          ],
                          "scrollTop": true,
                          "submitButtonText": "Continue →",
                          "submitButtonPosition": "right",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "commit": function anonymous(
) {
if ((this.state.attention_check === this.parameters.domain) && (this.state.block_order == 3)){
  this.state.correct_attention2 = true
} if ((this.state.attention_check != this.parameters.domain) && (this.state.block_order == 3)){
  this.state.correct_attention2 = false
}
}
                          },
                          "title": "Attention check2",
                          "tardy": true,
                          "width": "m",
                          "skip": "${this.state.block_order !== 3 }"
                        },
                        {
                          "type": "lab.html.Page",
                          "items": [
                            {
                              "type": "text",
                              "title": "Please answer",
                              "content": "Please answer these questions about the experiment."
                            },
                            {
                              "required": true,
                              "type": "radio",
                              "label": "Which color represents gains?",
                              "options": [
                                {
                                  "label": "Yellow",
                                  "coding": "yellow"
                                },
                                {
                                  "label": "Blue",
                                  "coding": "blue"
                                },
                                {
                                  "label": "Orange",
                                  "coding": "orange"
                                }
                              ],
                              "shuffle": false,
                              "name": "attention_gains2"
                            },
                            {
                              "required": true,
                              "type": "radio",
                              "label": "Which color represents neutral?",
                              "options": [
                                {
                                  "label": "Yellow",
                                  "coding": "yellow"
                                },
                                {
                                  "label": "Blue",
                                  "coding": "blue"
                                },
                                {
                                  "label": "Orange",
                                  "coding": "orange"
                                }
                              ],
                              "shuffle": false,
                              "name": "attention_neutral2"
                            },
                            {
                              "required": true,
                              "type": "radio",
                              "label": "Which color represents losses?",
                              "options": [
                                {
                                  "label": "Yellow",
                                  "coding": "yellow"
                                },
                                {
                                  "label": "Blue",
                                  "coding": "blue"
                                },
                                {
                                  "label": "Orange",
                                  "coding": "orange"
                                }
                              ],
                              "shuffle": false,
                              "name": "attention_losses2"
                            }
                          ],
                          "scrollTop": true,
                          "submitButtonText": "Continue →",
                          "submitButtonPosition": "right",
                          "files": {},
                          "responses": {
                            "": ""
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "commit": function anonymous(
) {
if ((this.state.attention_gains2 === this.state.gain_color) && (this.state.attention_losses2 === this.state.loss_color) && (this.state.attention_neutral2 === this.state.neutral_color) && (this.state.block_order == 6)){
  this.state.correct_attention3 = true
}
if ((this.state.attention_gains2 !== this.state.gain_color) || (this.state.attention_losses2 !== this.state.loss_color) || (this.state.attention_neutral2 !== this.state.neutral_color) && (this.state.block_order == 6)) {
  this.state.correct_attention3 = false
}
}
                          },
                          "title": "Attention check3",
                          "tardy": true,
                          "width": "m",
                          "skip": "${ this.state.block_order !== 6 }"
                        },
                        {
                          "type": "lab.html.Screen",
                          "files": {},
                          "parameters": {
                            "message": "Transferring data",
                            "subtitle": "Please wait a second…"
                          },
                          "responses": {
                            "": ""
                          },
                          "messageHandlers": {
                            "run": function anonymous(
) {
const transmitPlugins = this.parents[0].plugins.plugins
  .filter(p => p instanceof lab.plugins.Transmit)

if (transmitPlugins.length > 0) {
  // If a transmitPlugin is available,
  // pull out its options and transfer the data
  const ds = this.options.datastore
  const tp = transmitPlugins[0]
  ds.transmit(
    tp.url,
    { ...tp.metadata, payload: 'full' },
    { headers: tp.headers, encoding: tp.encoding },
  ).then(
    () => this.end('transmission successful')
  ).catch(
    () => this.end('transmission failed')
  )
} else if ('jatos' in window) {
  // If JATOS is available, send data there
  jatos.submitResultData(
    this.options.datastore.exportJson(),
    () => this.end('transmission successful'),
    () => this.end('transmission failed')
  )
} else {
  this.end('no compatible backend')
}
}
                          },
                          "title": "Data transmission (beta)",
                          "content": "<main class=\"content-horizontal-center content-vertical-center\">\n  <div>\n    <img src=\"lib/loading.svg\">\n    <p>\n      <span class=\"font-weight-bold\">\n        ${ this.parameters.message }\n      </span><br>\n      <span class=\"text-muted\">\n        ${ this.parameters.subtitle }\n      </span>\n    </p>\n  </div>\n</main>",
                          "notes": "This template transmits the study data to a compatible server-side backend. Currently, it supports the PHP, Open Lab and JATOS backends.\n\nIt will wait until the data is transferred, showing a waiting screen with the text defined below, and continue with the remainder of the study after the transmission is complete. Please note that this screen will be skipped if no compatible backend is available."
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "lab.html.Form",
              "content": "<main class=\"content-vertical-space-around content-horizontal-center\">\n\n  <div class=\"w-m text-justify\">\n  <p>\n    Please answer the following questions:\n  </p>\n  </div>\n<body>\n  <form id=\"demographicsForm\">\n    <table>\n      <tr>\n        <th>\n          <label for=\"age\">Age</label><br>\n        </th>\n        <td>\n          <input type=\"number\" name=\"age\" id=\"age\" min=\"18\"\n          placeholder=\"Enter your age...\" required>\n        </td>\n      </tr>\n      <tr>\n        <th>\n          <label for=\"gender\">Gender</label><br>\n        </th>\n        <td>\n          <select name=\"gender\" id=\"gender\" required>\n            <option value=\"\" selected disabled hidden></option>\n            <option value=\"male\">Male</option>\n            <option value=\"female\">Female</option>\n            <option value=\"non-binary\">Non-binary</option>\n          </select>\n        </td>\n      </tr>\n      <tr>\n        <th>\n          <label for=\"role\">Which option best describes you?</label>\n        </th>\n          <td>\n            <!-- Dropdown options -->\n            <select name=\"role\" id=\"role\" required>\n                <option value=\"\" selected disabled hidden></option>\n                <option value=\"student\">Student</option>\n                <option value=\"intern\">Intern</option>\n                <option value=\"professional\">\n                    Professional\n                </option>\n                <option value=\"unemployed\">\n                    Unemployed\n                </option>\n                <option value=\"other\">Other</option>\n            </select>\n          </td>\n      </tr>\n      <tr>\n        <th>\n          <label for=\"subject\">Highest academic degree achieved</label>\n        </th>\n        <td>\n          <select name=\"subject\" id=\"subject\" required>\n            <option value=\"\" selected disabled hidden></option>\n            <option value=\"high school degree\">High school degree</option>\n            <option value=\"associate’s degree (2 years)\">Associate’s degree (2 years)</option>\n            <option value=\"bacherlor’s degree (4 years)\">Bacherlor’s degree (4 years)</option>\n            <option value=\"master’s degree (1-2 years)\">Master’s degree (1-2 years)</option>\n            <option value=\"doctoral degree (5-7 years)\">Doctoral degree (5-7 years)</option>\n          </select>\n        </td>\n      </tr>\n      <tr>\n        <th>\n          <label for=\"degree_domain\">Field of study</label>\n        </th>\n        <td>\n          <select name=\"degree_domain\" id=\"degree_domain\" required>\n            <option value=\"\" selected disabled hidden></option>\n            <option value=\"\" disabled>1. Humanities</option>\n            <option value=\"1.1 Performing arts\">1.1 Performing arts</option>\n            <option value=\"1.2 Visual arts\">1.2 Visual arts</option>\n            <option value=\"1.3 History\">1.3 History</option>\n            <option value=\"1.4 Languages and literature\">1.4 Languages and literature</option>\n            <option value=\"1.5 Law\">1.5 Law</option>\n            <option value=\"1.6 Philosophy\">1.6 Philosophy</option>\n            <option value=\"1.7 Theology\">1.7 Theology</option>\n\n            <option value=\"\" disabled>2. Social science</option>\n            <option value=\"2.1 Anthropology\">2.1 Anthropology</option>\n            <option value=\"2.2 Economics\">2.2 Economics</option>\n            <option value=\"2.3 Geography\">2.3 Geography</option>\n            <option value=\"2.4 Political science\">2.4 Political science</option>\n            <option value=\"2.5 Psychology\">2.5 Psychology</option>\n            <option value=\"2.6 Sociology\">2.6 Sociology</option>\n            <option value=\"2.7 Social work\">2.7 Social work</option>\n\n            <option value=\"\" disabled>3. Natural science</option>\n            <option value=\"3.1 Biology\">3.1 Biology</option>\n            <option value=\"3.2 Chemistry\">3.2 Chemistry</option>\n            <option value=\"3.3 Earth science\">3.3 Earth science</option>\n            <option value=\"3.4 Space science\">3.4 Space science</option>\n            <option value=\"3.5 Physics\">3.5 Physics</option>\n\n            <option value=\"\" disabled>4. Formal science</option>\n            <option value=\"4.1 Computer science\">4.1 Computer science</option>\n            <option value=\"4.2 Mathematics\">4.2 Mathematics</option>\n\n            <option value=\"\" disabled>5. Applied science</option>\n            <option value=\"5.1 Business\">5.1 Business</option>\n            <option value=\"5.2 Engineering and technology\">5.2 Engineering and technology</option>\n            <option value=\"5.3 Medicine and health\">5.3 Medicine and health</option>\n                \n            <option value=\"6. Other\">6. Other</option>\n\n          </select>\n        </td>\n      </tr>\n    </table>\n  </form>\n</body>\n</main>\n\n  <footer class=\"content-horizontal-right\">\n  <button type=\"submit\" form=\"demographicsForm\">Continue &rarr;</button>\n</footer>\n\n",
              "scrollTop": true,
              "files": {},
              "responses": {
                "undefined": ""
              },
              "parameters": {},
              "messageHandlers": {
                "commit": function anonymous(
) {
if ((this.state.attention_gains2 === this.state.gain_color) && (this.state.attention_losses2 === this.state.loss_color) && (this.state.attention_neutral2 === this.state.neutral_color)){
  this.state.correct_attention3 = true
} else {
  this.state.correct_attention3 = false
}
}
              },
              "title": "Demographicsform"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "coding": "gains",
                      "label": "How important was it for you to achieve gains of points in the previous decision task?"
                    },
                    {
                      "label": "How important was it for you to avoid losses of points in the previous decision task?",
                      "coding": "losses"
                    }
                  ],
                  "width": "7",
                  "anchors": [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7"
                  ],
                  "label": "Please answer",
                  "shuffle": true,
                  "help": "Please, respond to the following questions using the scales where <br> 1 = Not important, 4 = Medium important, and 7 = Very important:",
                  "name": "please-answer"
                }
              ],
              "scrollTop": true,
              "submitButtonText": "Continue →",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "questions"
            },
            {
              "type": "lab.html.Form",
              "content": "<header>\n  <h2>Questions and feedback</h2>\n</header>\n\n<main class=\"content-vertical-space-around content-horizontal-center\">\n  <div class=\"w-m text-justify\">\n  <p>\n    If you have any comment, question or suggestion, please provide it here.\n  </p>\n    <p>\n    We listen to you!\n  </p>\n  </div>\n<body>\n  <form id=\"feedback\">\n    <table>\n      <tr>\n        <td>\n        <textarea id=\"feedback\" name=\"feedback\"\n        rows=\"8\" cols=\"75\" placeholder=\"Enter your comments and suggestions\"></textarea>\n        </td>\n      </tr>\n    </table>\n  </form>\n</body>\n  </main>\n  <footer class=\"content-horizontal-right\">\n  <button type=\"submit\" form=\"feedback\">Continue &rarr;</button>\n</footer>",
              "scrollTop": true,
              "files": {},
              "responses": {
                "click #Continue": "Continue"
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "feedback",
              "plugins": []
            }
          ]
        }
      ]
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "responses": {
        "click button#end": "finish"
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "end",
      "content": "<main class=\"content-vertical-space-around content-horizontal-center\">\r\n\r\n  <div class=\"w-m center\">\r\n    <p>\r\n      This is the end of the experiment!\r\n    </p>\r\n    <p>\r\n      Thank you for your participation!\r\n    </p>\r\n  </div>\r\n    <div class=\"w-m center\">\r\n    <p>\r\n      <b>Please <a id=\"url\" href=\"https://app.prolific.co/submissions/complete?cc=CS5GR9RA\" target=\"_blank\">click here</a> to be redirected to Prolific to submit the completion code.</b>\r\n    </p>\r\n</div>\r\n</main>\r\n<footer>\r\n  <button id=\"end\" style=\"height:100px;width:200px\">End and close experiment</button>\r\n</footer>\r\n \r\n",
      "plugins": [],
      "timeout": "15000"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {
        "message": "Transferring data",
        "subtitle": "Please wait a second…"
      },
      "responses": {
        "": ""
      },
      "messageHandlers": {
        "run": function anonymous(
) {
const transmitPlugins = this.parents[0].plugins.plugins
  .filter(p => p instanceof lab.plugins.Transmit)

if (transmitPlugins.length > 0) {
  // If a transmitPlugin is available,
  // pull out its options and transfer the data
  const ds = this.options.datastore
  const tp = transmitPlugins[0]
  ds.transmit(
    tp.url,
    { ...tp.metadata, payload: 'full' },
    { headers: tp.headers, encoding: tp.encoding },
  ).then(
    () => this.end('transmission successful')
  ).catch(
    () => this.end('transmission failed')
  )
} else if ('jatos' in window) {
  // If JATOS is available, send data there
  jatos.submitResultData(
    this.options.datastore.exportJson(),
    () => this.end('transmission successful'),
    () => this.end('transmission failed')
  )
} else {
  this.end('no compatible backend')
}
}
      },
      "title": "Data transmission (beta)",
      "content": "<main class=\"content-horizontal-center content-vertical-center\">\n  <div>\n    <img src=\"lib/loading.svg\">\n    <p>\n      <span class=\"font-weight-bold\">\n        ${ this.parameters.message }\n      </span><br>\n      <span class=\"text-muted\">\n        ${ this.parameters.subtitle }\n      </span>\n    </p>\n  </div>\n</main>",
      "notes": "This template transmits the study data to a compatible server-side backend. Currently, it supports the PHP, Open Lab and JATOS backends.\n\nIt will wait until the data is transferred, showing a waiting screen with the text defined below, and continue with the remainder of the study after the transmission is complete. Please note that this screen will be skipped if no compatible backend is available."
    }
  ]
})

// Data handling (disabled unless configured in experiments/shared/datasink.js)
if (window.DataSink) window.DataSink.attach(study, { studyId: "loss-attention2" })

// Let's go!
study.run()

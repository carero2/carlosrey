// Generated from loss-perception.json by tools/labjs-export.mjs — do not edit by hand.
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
this.state.loss_color = this.random.choice(["blue", "yellow"]);


if (this.state.loss_color === "blue"){
  index = 1
} else {
  index = 0
}


this.state.gain_color = ["blue", "yellow"].splice(index, 1).pop();
}
          },
          "title": "welcome",
          "content": "<header>\r\n  <h2>Welcome!</h2>\r\n</header>\r\n\r\n<main class=\"content-vertical-space-around content-horizontal-center\">\r\n\r\n  <div class=\"w-m text-justify\">\r\n    <p>\r\n      Welcome to our experiment and thank you for participating! \r\n    </p>\r\n  </div>\r\n</main>\r\n<footer class=\"content-horizontal-right\">\r\n  <button id=\"Continue\">Continue &rarr;</button>\r\n</footer>\r\n",
          "plugins": []
        },
        {
          "type": "lab.html.Form",
          "content": "<header>\n\n  <div class=\"images\">\n      <img src= \"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/TU_Muenchen_Logo.svg/2560px-TU_Muenchen_Logo.svg.png\" alt=\"Muenchen\" style=\"margin:30px;width:25%\">\n      <img src= \"https://decision.uib.es/wp-content/uploads/2021/06/lgouib1_400.png\" alt=\"UIB\" style=\"margin:30px;width:25%\">\n      <img src= \"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Universit%C3%A4t_Z%C3%BCrich_logo.svg/2560px-Universit%C3%A4t_Z%C3%BCrich_logo.svg.png\" alt=\"Zurich\" style=\"margin:30px;width:25%\">\n  </div>\n\n  <h2 align=\"topleft\">\n      Study Information and Statement of Informed Consent\n  </h2>\n\n\n</header>\n\n<main class= \"text-left\">\n    <p class= \"text-left\">Thank you for your interest in participating in our study on decision making. Please take your time to read this text carefully. By checking the box at the bottom of this page and proceeding further, you indicate that you have read the information below and that you consent to participate in the study.</p><br>\n    <b>1. Aim of the study</b>\n    <p class= \"text-left\">In this study, we want to investigate how people make decisions between different options after learning about these options by inspecting samples of information.</p><br>\n    <b>2. Procedure and content of the study</b>\n    <p class= \"text-left\">You will make choices between stimuli.\nYou will first practice a few warm up trials. You will then have 6 blocks with 45 choice trials each. You can take brief breaks between blocks if you need.</p><br>\n    <b>3. Are there any risks involved?</b>\n    <p class= \"text-left\">There are no risks involved in participation.</p><br>\n    <b>4. What will happen to the information and data collected?</b>\n    <p class= \"text-left\">This study is a joint research project of the University of Balearic Islands, University of Zurich, and Max Planck Institute (MPI) for Human Development (carlos.rey@uib.es). The data collected will be used for research purposes only.</p>\n    <b>5. Participation is voluntary</b>\n    <p class= \"text-left\">Participation in this study is voluntary. You may withdraw from the study at any time without giving any reason and without any negative consequences. If you withdraw from the study before completing it, you will not receive the compensation or bonus payment.</p><br>\n    <b>6. Data</b>\n    <p class= \"text-left\"> This experiment is a research project. Collected data will be analyzed for research purposes only. Experiment data may be shared for collaborative analysis. In addition, they can be public accessible if article is published in a scientific journal. This allows the results to be reproduced by other researchers and promotes the quality of scientific practice. The data can also be used for new research questions that go beyond the goals of today's study. In any case, the experiment data is only transferred or published without personal contact data.\n\n\n      </p><br>\n    <b>7. Consent</b>\n    <p class= \"text-left\">This document has informed you about participation in the study on decision making. The study involves an experiment of approximately 20-25 minutes. If you complete the study, you will receive a baseline compensation of 2.50 GBP (ca. 3 USD) plus a performance-contingent bonus ranging from 0 to 2.5 GBP, meaning that your final compensation could range from 2.5 to 5 GBP. The bonus amount is dependent on your decisions in the study. <b>If you do not consent by clicking the box below, you will not be able to participate in the study and you will not receive compensation. In this case, please return your submission by closing experiment tab.</b></p>\n<form>\n <br>\n <div>\n   <table>\n     <tbody>\n       <tr>\n         <td style=\"border: none; background-color: #f2f2f2;\">\n           <input type=\"checkbox\" name=\"consent\" id=\"consent\" required>\n           <label for=\"consent\"><b>I have read and understood the conditions outlined above. I consent to participate in the study and agree to the collection, storage, and use of my data as described above.</b></label><br>\n          </td>\n        </tr>\n        \n      </tbody>\n    </table>\n  </div>\n  <br>\n  <br>\n\n<footer class=\"content-horizontal-right\">\n  <button id=\"Continue\" type=\"submit\">Continue &rarr;</button>\n</footer>\n</form>\n</main>\n",
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
          "content": "<header>\n  <h2>Prolific ID</h2>\n</header>\n\n\n<main class=\"content-vertical-space-around content-horizontal-center\">\n\n  <div class=\"w-m text-justify\">\n  <p>\n    Please type in (or copy-paste) your Prolific ID here:\n  </p>\n  </div>\n<body>\n  <form id=\"prolific_id\">\n    <table>\n      <tr>\n        <th>\n          <label for=\"prolific_id\">Prolific ID</label>\n        </th>\n        <td>\n           <input type=\"text\" name=\"prolific_id\"\n           placeholder=\"Enter Prolific ID...\" required/>\n          <input type=\"submit\">\n        </td>\n      </tr>\n    </table>\n  </form>\n</body>\n    <p>\n    If you exit full-screen mode to copy-paste, you must enable it again (by pressing F11 on Windows or comand + control + F on MAC).\n    </p>\n  </main>",
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
          "type": "lab.html.Form",
          "content": "<header>\n  <h2>Your task</h2>\n</header>\n\n\n<main class=\"content-vertical-space-around content-horizontal-center\">\n  <div class=\"w-m text-justify\">\n    <p>In the following experiment, you will see boxes composed of <b>${ state.loss_color } pixels</b> and <b>${ state.gain_color } pixels</b>, where ${ state.gain_color } represents gains and ${ state.loss_color } represents losses: </p>\n  </div>\n  <div class=\"w-l text-center\">\n    <img src=${ example } style=\"width: 50%\">\n  </div>\n\n <div class=\"w-m text-justify\">\n    <p style=\"background-color: #D3D3D3; text-align:center\"> <span style=\"color:${ state.loss_color }\"> ${ state.loss_color } pixels represent losses. <br></span>\n      <span style=\"color:${ state.gain_color }\">${ state.gain_color } pixels represent gains. </span> </p>\n\n    <p>Thus, when a box is composed of 54.5% gains and 45.5% losses (like the box above), it has a net value of 9 points (54.5% gains - 45.5% losses). </p> \n    <p>You will be presented with two boxes. Your task is to choose one of the two boxes. In practice block, after each choice you will get feedback about the net value of your chosen box. In main blocks, you will not get feedback about the net value of your chosen box.</p>\n    <p>You will start with an endowment of ${ state.totalPoints } points. </p> \n    <p><b>Important: The net value of a box can be positive (you gain points) or negative (you lose points).</b></p>\n    <p>The net value of your chosen box will then be added to or subtracted from these ${ state.totalPoints } points. At the end of each block you will see how many points you have available in total.</p>\n    <p>The points at the end of the study will influence your final payment! Based on your choices, it is possible to earn additional money! </p>\n\n    <p>When you see two boxes, you should press the <kbd>F-key</kbd> to choose the <b> left box </b> and press the <kbd>J-key</kbd> to choose the<b> right box. </b></p>\n    <p><b>Please respond as quickly as possible. </b></p>\n    <hr>\n  </div>\n  <div class=\"w-m text-justify\">\n  </div>\n  <form>\n<footer class=\"content-horizontal-right\">\n  <button id=\"Continue\" type=\"submit\">Continue &rarr;</button>\n</footer>\n</form>\n</main>\n",
          "scrollTop": true,
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
if(this.state.loss_color === "blue"){
  example = "https://raw.githubusercontent.com/carero2/loss-perception/main/png/0.455blue1yellowb%3D1w%3D100v%3D35.png"
} else {
  example = "https://raw.githubusercontent.com/carero2/loss-perception/main/png/0.545blue1yellowb%3D1w%3D100v%3D35.png"
}

// Initialize variables
this.state.totalPoints_practice = 100;
this.state.totalPoints = 100
}
          },
          "title": "instructions",
          "plugins": []
        },
        {
          "type": "lab.canvas.Screen",
          "content": [
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
            },
            {
              "type": "i-text",
              "left": 0,
              "top": 63,
              "angle": 0,
              "width": 404.21,
              "height": 90.04,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "Remember:\n${ state.gain_color } represents gains\n${ state.loss_color } represents losses",
              "fontStyle": "normal",
              "fontWeight": "normal",
              "fontSize": "24",
              "fontFamily": "sans-serif",
              "lineHeight": 1.16,
              "textAlign": "center"
            },
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
              "top": -112,
              "angle": 0,
              "width": 618.98,
              "height": 78.11,
              "stroke": null,
              "strokeWidth": 1,
              "fill": "black",
              "text": "As this is practice block, each box can have\nnegative net value OR positive net value",
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
          "title": "Practice"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "left_side": "0.515",
              "right_side": "0.485",
              "diff_net_value": "6"
            },
            {
              "left_side": "0.545",
              "right_side": "0.455",
              "diff_net_value": "18"
            },
            {
              "left_side": "0.53",
              "right_side": "0.47",
              "diff_net_value": "12"
            },
            {
              "left_side": "0.485",
              "right_side": "0.53",
              "diff_net_value": "9"
            },
            {
              "left_side": "0.485",
              "right_side": "0.455",
              "diff_net_value": "6"
            },
            {
              "left_side": "0.545",
              "right_side": "0.515",
              "diff_net_value": "6"
            }
          ],
          "sample": {
            "mode": "draw",
            "n": "24"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
this.state.pointsPrcBlock = 0
this.state.block_order = 0
}
          },
          "title": "practice",
          "plugins": [],
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
this.options.parameters['switch_sides'] = 
  this.random.choice([true, false]);
}
            },
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
                "messageHandlers": {},
                "title": "fixation",
                "timeout": "500"
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
                    "src": "${ this.parameters.picture_left }"
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
                    "src": "${ this.parameters.picture_right }"
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
                  "keypress(f)": "f",
                  "keypress(j)": "j"
                },
                "parameters": {},
                "messageHandlers": {
                  "before:prepare": function anonymous(
) {
this.options.parameters['left'] = this.parameters['left_side']
this.options.parameters['right'] = this.parameters['right_side']
if (this.aggregateParameters.switch_sides) {
   this.options.parameters['left'] = this.parameters['right_side']
   this.options.parameters['right'] = this.parameters['left_side']
}

version = this.random.range(1, 101);

source_pictures = "https://raw.githubusercontent.com/carero2/loss-perception/main/2colors/"

picture_left = source_pictures.concat(this.parameters['left'], "blue1yellowb%3D1w%3D100v%3D", version, ".png")
picture_right = source_pictures.concat(this.parameters['right'], "blue1yellowb%3D1w%3D100v%3D", version, ".png")


this.options.parameters['picture_left'] = picture_left;
this.options.parameters['picture_right'] = picture_right;

this.options.events['keypress'] = (e) => {
  if (e.key === 'f' || e.key === 'j') {
    this.state.responded = true;
    if (e.key === 'f'){
      position = -200;
      no_position = 200;
      respuesta = 'f';
      this.data.response = "f";
    } else if (e.key === 'j') {
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
                "timeout": "3000"
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
                    "type": "i-text",
                    "left": "${ position }",
                    "top": 0,
                    "angle": 0,
                    "width": 436.45,
                    "height": 56.5,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "${ color_points }",
                    "text": "${ points_to_show }",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "50",
                    "fontFamily": "sans-serif",
                    "lineHeight": 1.16,
                    "textAlign": "center"
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
                    "type": "i-text",
                    "left": "${ no_position }",
                    "top": 0,
                    "angle": 0,
                    "width": 519.87,
                    "height": 56.5,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "${ color_no_points }",
                    "text": "${ no_points_to_show }",
                    "fontStyle": "normal",
                    "fontWeight": "normal",
                    "fontSize": "50",
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

if (respuesta === 'f' & this.aggregateParameters.switch_sides){
    this.options.parameters['choice'] = this.parameters['right_side'];
    this.options.parameters['not_choice'] = this.parameters['left_side'];
  } else if (respuesta === 'j' & this.aggregateParameters.switch_sides) {
    this.options.parameters['choice'] = this.parameters['left_side'];
    this.options.parameters['not_choice'] = this.parameters['right_side'];
  } else if (respuesta === 'f' & !this.aggregateParameters.switch_sides) {
    this.options.parameters['choice'] = this.parameters['left_side'];
    this.options.parameters['not_choice'] = this.parameters['right_side'];
  } else if (respuesta === 'j' & !this.aggregateParameters.switch_sides) {
    this.options.parameters['choice'] = this.parameters['right_side'];
    this.options.parameters['not_choice'] = this.parameters['left_side'];
} else {
  this.options.parameters['choice'] = 0;
  this.options.parameters['not_choice'] = 0;
}


if (this.state.gain_color === 'blue' & this.state.responded){
  p = parseFloat(this.parameters['choice']);
  this.state.points = Math.round((p - (1 - p)) * 100);
  
  p2 = parseFloat(this.parameters['not_choice']);
  points_no_chosen = Math.round((p2 - (1 - p2)) * 100);
} else if (this.state.gain_color === 'yellow' & this.state.responded){
  p = parseFloat(this.parameters['choice']);
  this.state.points = Math.round(((1 - p) - p) * 100);

  p2 = parseFloat(this.parameters['not_choice']);
  points_no_chosen = Math.round(((1 - p2) - p2) * 100);

} else if (!this.state.responded){
  this.state.points = 0;
  points_no_chosen = 0;
}


if (this.state.points > 0){
  points_to_show = "+".concat(String(this.state.points))
  color_points = "green"
} else {
  points_to_show = String(this.state.points)
  color_points = "red"
}

if (points_no_chosen > 0){
  no_points_to_show = "+".concat(String(points_no_chosen))
  color_no_points = "green"
} else {
  no_points_to_show = String(points_no_chosen)
  color_no_points = "red"
}

this.state.pointsPrcBlock = this.state.pointsPrcBlock + this.state.points;
this.state.totalPoints_practice = this.state.totalPoints_practice + this.state.points;
}
                },
                "title": "choice",
                "timeout": "2000",
                "tardy": true,
                "skip": "${ this.state.ended_on !== 'response' }"
              },
              {
                "type": "lab.canvas.Screen",
                "content": [
                  {
                    "type": "i-text",
                    "left": 0,
                    "top": 0,
                    "angle": 0,
                    "width": 457.81,
                    "height": 36.16,
                    "stroke": null,
                    "strokeWidth": 1,
                    "fill": "black",
                    "text": "You have not responded in time!",
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
                  "": ""
                },
                "parameters": {},
                "messageHandlers": {},
                "title": "timeout",
                "timeout": "2000",
                "tardy": true,
                "skip": "${ this.state.ended_on !== 'skipped' }"
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
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "click #Continue": "Continue"
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "show amount",
          "tardy": true,
          "content": "<header>\r\n  <h2>Your results</h2>\r\n</header>\r\n\r\n<main class=\"content-vertical-space-around content-horizontal-center\">\r\n\r\n  <div class=\"w-m text-justify\">\r\n    <p>\r\n      Well done!\r\n    </p> \r\n    <p>\r\n      In the this practice block, you have collected ${ state.pointsPrcBlock } points.\r\n      Your present total score is ${ state.totalPoints_practice } points.\r\n    </p>\r\n\r\n    <p>\r\n      Lets restart points to ${ state.totalPoints } and start with main blocks.\r\n      At the beginning of each block we will specify what net values you will encounter in that block.\r\n    </p>\r\n\r\n    <p>\r\n    Remember to respond as quickly as possible.\r\n    </p>\r\n    \r\n    <p>\r\n    Press <kbd>continue</kbd> to start first block.\r\n    </p>\r\n  </div>\r\n</main>\r\n\r\n<footer class=\"content-horizontal-right\">\r\n  <button id=\"Continue\">Continue &rarr;</button>\r\n</footer>"
        },
        {
          "type": "lab.html.Form",
          "content": "<header>\n  <h2>Your task</h2>\n</header>\n\n<main class=\"content-vertical-space-around content-horizontal-center\">\n <div class=\"w-m text-justify\">\n   <p>In the following main task, you will make decisions across several blocks. You will encounter different types of blocks:</p>\n\n<p>In some blocks, you will encounter two boxes that both have positive net values (you will gain points)</p>\n<p>\nIn some blocks, you will encounter two boxes that both have negative net values (you will lose points)\n</p>\n<p>In some blocks, you will encounter one box with a negative net value and another box with a positive net value (you will lose or gain points)</p>\n<br>\n<br>\n\n<b><p>\nImportant: At the beginning of each block, we will tell you what net values you will encounter in that type of block.\n\nPlease respond as quickly as possible.</p></b>\n<br>\n<br>\n<br>\n<br>\nPress continue to start with first block.\n    <hr>\n  </div>\n  <div class=\"w-m text-justify\">\n  </div>\n  <form>\n<footer class=\"content-horizontal-right\">\n  <button id=\"Continue\" type=\"submit\">Continue &rarr;</button>\n</footer>\n</form>\n</main>\n",
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
              "domain": "gain"
            },
            {
              "domain": "loss"
            },
            {
              "domain": "mixed"
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
              "before:prepare": function anonymous(
) {
this.state.block_order = this.state.block_order + 1
}
            },
            "title": "all domains",
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
                "title": "loss domain",
                "tardy": true,
                "skip": "${ this.parameters.domain != \"loss\"}",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 100,
                        "angle": 0,
                        "width": 404.21,
                        "height": 90.04,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Remember:\n${ state.gain_color } represents gains\n${ state.loss_color } represents losses",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "24",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
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
                        "top": -75,
                        "angle": 0,
                        "width": 587.08,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "In the next block, the net value of both\nboxes will be ${ sign_net_value_domain }",
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
if (this.state.loss_color === "blue"){
  this.options.parameters.true_domain = "gain"
  sign_net_value_domain = "positive"
} else {
  this.options.parameters.true_domain = "loss"
  sign_net_value_domain = "negative"
}
}
                    },
                    "title": "loss screen",
                    "tardy": true
                  },
                  {
                    "type": "lab.flow.Loop",
                    "templateParameters": [
                      {
                        "left_side": "0.495",
                        "right_side": "0.485",
                        "diff_net_value": "2"
                      },
                      {
                        "left_side": "0.49",
                        "right_side": "0.47",
                        "diff_net_value": "4"
                      },
                      {
                        "left_side": "0.485",
                        "right_side": "0.455",
                        "diff_net_value": "6"
                      }
                    ],
                    "sample": {
                      "mode": "draw",
                      "n": "45"
                    },
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "loss block",
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
this.options.parameters['switch_sides'] = 
  this.random.choice([true, false]);
}
                      },
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
                          "messageHandlers": {},
                          "title": "fixation",
                          "timeout": "500"
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
                              "src": "${ this.parameters.picture_left }"
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
                              "src": "${ this.parameters.picture_right }"
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
                            "keypress(f)": "f",
                            "keypress(j)": "j"
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.parameters['left'] = this.parameters['left_side']
this.options.parameters['right'] = this.parameters['right_side']
if (this.aggregateParameters.switch_sides) {
   this.options.parameters['left'] = this.parameters['right_side']
   this.options.parameters['right'] = this.parameters['left_side']
}

version = this.random.range(1, 101);

source_pictures = "https://raw.githubusercontent.com/carero2/loss-perception/main/2colors/"

picture_left = source_pictures.concat(this.parameters['left'], "blue1yellowb%3D1w%3D100v%3D", version, ".png")
picture_right = source_pictures.concat(this.parameters['right'], "blue1yellowb%3D1w%3D100v%3D", version, ".png")


this.options.parameters['picture_left'] = picture_left;
this.options.parameters['picture_right'] = picture_right;

this.options.events['keypress'] = (e) => {
  if (e.key === 'f' || e.key === 'j') {
    this.state.responded = true;
    if (e.key === 'f'){
      position = -200;
      no_position = 200;
      respuesta = 'f';
      this.data.response = "f";
    } else if (e.key === 'j') {
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

if (respuesta === 'f' & this.aggregateParameters.switch_sides){
    this.options.parameters['choice'] = this.parameters['right_side'];
    this.options.parameters['not_choice'] = this.parameters['left_side'];
  } else if (respuesta === 'j' & this.aggregateParameters.switch_sides) {
    this.options.parameters['choice'] = this.parameters['left_side'];
    this.options.parameters['not_choice'] = this.parameters['right_side'];
  } else if (respuesta === 'f' & !this.aggregateParameters.switch_sides) {
    this.options.parameters['choice'] = this.parameters['left_side'];
    this.options.parameters['not_choice'] = this.parameters['right_side'];
  } else if (respuesta === 'j' & !this.aggregateParameters.switch_sides) {
    this.options.parameters['choice'] = this.parameters['right_side'];
    this.options.parameters['not_choice'] = this.parameters['left_side'];
} else {
  this.options.parameters['choice'] = 0;
  this.options.parameters['not_choice'] = 0;
}


if (this.state.gain_color === 'blue' & this.state.responded){
  p = parseFloat(this.parameters['choice']);
  this.state.points = Math.round((p - (1 - p)) * 100);
  
  p2 = parseFloat(this.parameters['not_choice']);
  points_no_chosen = Math.round((p2 - (1 - p2)) * 100);
} else if (this.state.gain_color === 'yellow' & this.state.responded){
  p = parseFloat(this.parameters['choice']);
  this.state.points = Math.round(((1 - p) - p) * 100);

  p2 = parseFloat(this.parameters['not_choice']);
  points_no_chosen = Math.round(((1 - p2) - p2) * 100);

} else if (!this.state.responded){
  this.state.points = 0;
  points_no_chosen = 0;
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
                    "content": "<header>\r\n  <h2>Your results</h2>\r\n</header>\r\n\r\n<main class=\"content-vertical-space-around content-horizontal-center\">\r\n\r\n  <div class=\"w-m text-justify\">\r\n    <p>\r\n      Well done!\r\n    </p>\r\n    <p><b> \r\n      Your present total score is ${ state.totalPoints } points.\r\n    </b></p>\r\n    <p><b>\r\n      In the previous block, you have collected ${ state.pointsBlock } points.\r\n    </b></p>\r\n  </div>\r\n</main>\r\n\r\n<footer class=\"content-horizontal-right\">\r\n  <button id=\"Continue\">Continue &rarr;</button>\r\n</footer>"
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
                "title": "gain domain",
                "tardy": true,
                "skip": "${ this.parameters.domain != \"gain\"}",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 75,
                        "angle": 0,
                        "width": 404.21,
                        "height": 90.04,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Remember:\n${ state.gain_color } represents gains\n${ state.loss_color } represents losses",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "24",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
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
                        "top": -75,
                        "angle": 0,
                        "width": 587.08,
                        "height": 78.11,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "In the next block, the net value of both\nboxes will be ${ sign_net_value_domain }",
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
if (this.state.loss_color === "blue"){
  this.options.parameters.true_domain = "loss"
  sign_net_value_domain = "negative"
} else {
  this.options.parameters.true_domain = "gain"
  sign_net_value_domain = "positive"
}
}
                    },
                    "title": "gain screen",
                    "tardy": true
                  },
                  {
                    "type": "lab.flow.Loop",
                    "templateParameters": [
                      {
                        "left_side": "0.515",
                        "right_side": "0.505",
                        "diff_net_value": "2"
                      },
                      {
                        "left_side": "0.53",
                        "right_side": "0.51",
                        "diff_net_value": "4"
                      },
                      {
                        "left_side": "0.545",
                        "right_side": "0.515",
                        "diff_net_value": "6"
                      }
                    ],
                    "sample": {
                      "mode": "draw",
                      "n": "45"
                    },
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "gain block",
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
this.options.parameters['switch_sides'] = 
  this.random.choice([true, false]);
}
                      },
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
                          "messageHandlers": {},
                          "title": "fixation",
                          "timeout": "500"
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
                              "src": "${ this.parameters.picture_left }"
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
                              "src": "${ this.parameters.picture_right }"
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
                            "keypress(f)": "f",
                            "keypress(j)": "j"
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.parameters['left'] = this.parameters['left_side']
this.options.parameters['right'] = this.parameters['right_side']
if (this.aggregateParameters.switch_sides) {
   this.options.parameters['left'] = this.parameters['right_side']
   this.options.parameters['right'] = this.parameters['left_side']
}

version = this.random.range(1, 101);

source_pictures = "https://raw.githubusercontent.com/carero2/loss-perception/main/2colors/"

picture_left = source_pictures.concat(this.parameters['left'], "blue1yellowb%3D1w%3D100v%3D", version, ".png")
picture_right = source_pictures.concat(this.parameters['right'], "blue1yellowb%3D1w%3D100v%3D", version, ".png")


this.options.parameters['picture_left'] = picture_left;
this.options.parameters['picture_right'] = picture_right;

this.options.events['keypress'] = (e) => {
  if (e.key === 'f' || e.key === 'j') {
    this.state.responded = true;
    if (e.key === 'f'){
      position = -200;
      no_position = 200;
      respuesta = 'f';
      this.data.response = "f";
    } else if (e.key === 'j') {
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

if (respuesta === 'f' & this.aggregateParameters.switch_sides){
    this.options.parameters['choice'] = this.parameters['right_side'];
    this.options.parameters['not_choice'] = this.parameters['left_side'];
  } else if (respuesta === 'j' & this.aggregateParameters.switch_sides) {
    this.options.parameters['choice'] = this.parameters['left_side'];
    this.options.parameters['not_choice'] = this.parameters['right_side'];
  } else if (respuesta === 'f' & !this.aggregateParameters.switch_sides) {
    this.options.parameters['choice'] = this.parameters['left_side'];
    this.options.parameters['not_choice'] = this.parameters['right_side'];
  } else if (respuesta === 'j' & !this.aggregateParameters.switch_sides) {
    this.options.parameters['choice'] = this.parameters['right_side'];
    this.options.parameters['not_choice'] = this.parameters['left_side'];
} else {
  this.options.parameters['choice'] = 0;
  this.options.parameters['not_choice'] = 0;
}


if (this.state.gain_color === 'blue' & this.state.responded){
  p = parseFloat(this.parameters['choice']);
  this.state.points = Math.round((p - (1 - p)) * 100);
  
  p2 = parseFloat(this.parameters['not_choice']);
  points_no_chosen = Math.round((p2 - (1 - p2)) * 100);
} else if (this.state.gain_color === 'yellow' & this.state.responded){
  p = parseFloat(this.parameters['choice']);
  this.state.points = Math.round(((1 - p) - p) * 100);

  p2 = parseFloat(this.parameters['not_choice']);
  points_no_chosen = Math.round(((1 - p2) - p2) * 100);

} else if (!this.state.responded){
  this.state.points = 0;
  points_no_chosen = 0;
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
                    "content": "<header>\r\n  <h2>Your results</h2>\r\n</header>\r\n\r\n<main class=\"content-vertical-space-around content-horizontal-center\">\r\n\r\n  <div class=\"w-m text-justify\">\r\n    <p>\r\n      Well done!\r\n    </p>\r\n    <p><b> \r\n      Your present total score is ${ state.totalPoints } points.\r\n    </b></p>\r\n    <p><b>\r\n      In the previous block, you have collected ${ this.state.pointsBlock } points.\r\n    </b></p>\r\n    <p>\r\n    Press <kbd>continue</kbd> to continue with the second block.\r\n    </p>\r\n  </div>\r\n</main>\r\n\r\n<footer class=\"content-horizontal-right\">\r\n  <button id=\"Continue\">Continue &rarr;</button>\r\n</footer>"
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
                "title": "mixed domain",
                "tardy": true,
                "skip": "${ this.parameters.domain != \"mixed\"}",
                "content": [
                  {
                    "type": "lab.canvas.Screen",
                    "content": [
                      {
                        "type": "i-text",
                        "left": 0,
                        "top": 100,
                        "angle": 0,
                        "width": 404.21,
                        "height": 90.04,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "Remember:\n${ state.gain_color } represents gains\n${ state.loss_color } represents losses",
                        "fontStyle": "normal",
                        "fontWeight": "normal",
                        "fontSize": "24",
                        "fontFamily": "sans-serif",
                        "lineHeight": 1.16,
                        "textAlign": "center"
                      },
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
                        "width": 531.88,
                        "height": 120.05,
                        "stroke": null,
                        "strokeWidth": 1,
                        "fill": "black",
                        "text": "In the next block, the net value will be\nnegative for one box and positive\nfor the other box",
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
                    "title": "mixed screen"
                  },
                  {
                    "type": "lab.flow.Loop",
                    "templateParameters": [
                      {
                        "left_side": "0.505",
                        "right_side": "0.495",
                        "diff_net_value": "2"
                      },
                      {
                        "left_side": "0.51",
                        "right_side": "0.49",
                        "diff_net_value": "4"
                      },
                      {
                        "left_side": "0.515",
                        "right_side": "0.485",
                        "diff_net_value": "6"
                      }
                    ],
                    "sample": {
                      "mode": "draw",
                      "n": "45"
                    },
                    "files": {},
                    "responses": {
                      "": ""
                    },
                    "parameters": {},
                    "messageHandlers": {},
                    "title": "mixed block",
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
this.options.parameters['switch_sides'] = 
  this.random.choice([true, false]);
}
                      },
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
                          "messageHandlers": {},
                          "title": "fixation",
                          "timeout": "500"
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
                              "src": "${ this.parameters.picture_left }"
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
                              "src": "${ this.parameters.picture_right }"
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
                            "keypress(f)": "f",
                            "keypress(j)": "j"
                          },
                          "parameters": {},
                          "messageHandlers": {
                            "before:prepare": function anonymous(
) {
this.options.parameters['left'] = this.parameters['left_side']
this.options.parameters['right'] = this.parameters['right_side']
if (this.aggregateParameters.switch_sides) {
   this.options.parameters['left'] = this.parameters['right_side']
   this.options.parameters['right'] = this.parameters['left_side']
}

version = this.random.range(1, 101);

source_pictures = "https://raw.githubusercontent.com/carero2/loss-perception/main/2colors/"

picture_left = source_pictures.concat(this.parameters['left'], "blue1yellowb%3D1w%3D100v%3D", version, ".png")
picture_right = source_pictures.concat(this.parameters['right'], "blue1yellowb%3D1w%3D100v%3D", version, ".png")


this.options.parameters['picture_left'] = picture_left;
this.options.parameters['picture_right'] = picture_right;

this.options.events['keypress'] = (e) => {
  if (e.key === 'f' || e.key === 'j') {
    this.state.responded = true;
    if (e.key === 'f'){
      position = -200;
      no_position = 200;
      respuesta = 'f';
      this.data.response = "f";
    } else if (e.key === 'j') {
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

if (respuesta === 'f' & this.aggregateParameters.switch_sides){
    this.options.parameters['choice'] = this.parameters['right_side'];
    this.options.parameters['not_choice'] = this.parameters['left_side'];
  } else if (respuesta === 'j' & this.aggregateParameters.switch_sides) {
    this.options.parameters['choice'] = this.parameters['left_side'];
    this.options.parameters['not_choice'] = this.parameters['right_side'];
  } else if (respuesta === 'f' & !this.aggregateParameters.switch_sides) {
    this.options.parameters['choice'] = this.parameters['left_side'];
    this.options.parameters['not_choice'] = this.parameters['right_side'];
  } else if (respuesta === 'j' & !this.aggregateParameters.switch_sides) {
    this.options.parameters['choice'] = this.parameters['right_side'];
    this.options.parameters['not_choice'] = this.parameters['left_side'];
} else {
  this.options.parameters['choice'] = 0;
  this.options.parameters['not_choice'] = 0;
}


if (this.state.gain_color === 'blue' & this.state.responded){
  p = parseFloat(this.parameters['choice']);
  this.state.points = Math.round((p - (1 - p)) * 100);
  
  p2 = parseFloat(this.parameters['not_choice']);
  points_no_chosen = Math.round((p2 - (1 - p2)) * 100);
} else if (this.state.gain_color === 'yellow' & this.state.responded){
  p = parseFloat(this.parameters['choice']);
  this.state.points = Math.round(((1 - p) - p) * 100);

  p2 = parseFloat(this.parameters['not_choice']);
  points_no_chosen = Math.round(((1 - p2) - p2) * 100);

} else if (!this.state.responded){
  this.state.points = 0;
  points_no_chosen = 0;
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
                    "content": "<header>\r\n  <h2>Your results</h2>\r\n</header>\r\n\r\n<main class=\"content-vertical-space-around content-horizontal-center\">\r\n\r\n  <div class=\"w-m text-justify\">\r\n    <p>\r\n      Well done!\r\n    </p>\r\n    <p><b> \r\n      Your present total score is ${ state.totalPoints } points.\r\n    </b></p>\r\n    <p><b>\r\n      In the previous block, you have collected ${ this.state.pointsBlock } points.\r\n    </b></p>\r\n\r\n  </div>\r\n</main>\r\n\r\n<footer class=\"content-horizontal-right\">\r\n  <button id=\"Continue\">Continue &rarr;</button>\r\n</footer>"
                  }
                ]
              }
            ]
          }
        },
        {
          "type": "lab.html.Form",
          "content": "<header>\n  <h2>Demographic data</h2>\n</header>\n\n\n<main class=\"content-vertical-space-around content-horizontal-center\">\n\n  <div class=\"w-m text-justify\">\n  <p>\n    Here you should provide some demographic data. This data will be completely anonymous and analyzed for research purposes only.\n  </p>\n  </div>\n<body>\n  <form id=\"demographicsForm\">\n    <table>\n      <tr>\n        <th>\n          <label for=\"age\">Age</label><br>\n        </th>\n        <td>\n          <input type=\"number\" name=\"age\" id=\"age\" min=\"18\"\n          placeholder=\"Enter your age...\" required>\n        </td>\n      </tr>\n      <tr>\n        <th>\n          <label for=\"gender\">Gender</label><br>\n        </th>\n        <td>\n          <select name=\"gender\" id=\"gender\" required>\n            <option value=\"\" selected disabled hidden></option>\n            <option value=\"male\">Male</option>\n            <option value=\"female\">Female</option>\n            <option value=\"non-binary\">Non-binary</option>\n          </select>\n        </td>\n      </tr>\n      <tr>\n        <th>\n          <label for=\"role\">Which option best describes you?</label>\n        </th>\n          <td>\n            <!-- Dropdown options -->\n            <select name=\"role\" id=\"role\" required>\n                <option value=\"\" selected disabled hidden></option>\n                <option value=\"student\">Student</option>\n                <option value=\"intern\">Intern</option>\n                <option value=\"professional\">\n                    Professional\n                </option>\n                <option value=\"unemployed\">\n                    Unemployed\n                </option>\n                <option value=\"other\">Other</option>\n            </select>\n          </td>\n      </tr>\n      <tr>\n        <th>\n          <label for=\"subject\">Highest academic degree achieved</label>\n        </th>\n        <td>\n          <select name=\"subject\" id=\"subject\" required>\n            <option value=\"\" selected disabled hidden></option>\n            <option value=\"high school degree\">High school degree</option>\n            <option value=\"associate’s degree (2 years)\">Associate’s degree (2 years)</option>\n            <option value=\"bacherlor’s degree (4 years)\">Bacherlor’s degree (4 years)</option>\n            <option value=\"master’s degree (1-2 years)\">Master’s degree (1-2 years)</option>\n            <option value=\"doctoral degree (5-7 years)\">Doctoral degree (5-7 years)</option>\n          </select>\n        </td>\n      </tr>\n      <tr>\n        <th>\n          <label for=\"degree_domain\">Domain of Education</label>\n        </th>\n        <td>\n          <select name=\"degree_domain\" id=\"degree_domain\" required>\n            <option value=\"\" selected disabled hidden></option>\n            <option value=\"\" disabled>1. Humanities</option>\n            <option value=\"1.1 Performing arts\">1.1 Performing arts</option>\n            <option value=\"1.2 Visual arts\">1.2 Visual arts</option>\n            <option value=\"1.3 History\">1.3 History</option>\n            <option value=\"1.4 Languages and literature\">1.4 Languages and literature</option>\n            <option value=\"1.5 Law\">1.5 Law</option>\n            <option value=\"1.6 Philosophy\">1.6 Philosophy</option>\n            <option value=\"1.7 Theology\">1.7 Theology</option>\n\n            <option value=\"\" disabled>2. Social science</option>\n            <option value=\"2.1 Anthropology\">2.1 Anthropology</option>\n            <option value=\"2.2 Economics\">2.2 Economics</option>\n            <option value=\"2.3 Geography\">2.3 Geography</option>\n            <option value=\"2.4 Political science\">2.4 Political science</option>\n            <option value=\"2.5 Psychology\">2.5 Psychology</option>\n            <option value=\"2.6 Sociology\">2.6 Sociology</option>\n            <option value=\"2.7 Social work\">2.7 Social work</option>\n\n            <option value=\"\" disabled>3. Natural science</option>\n            <option value=\"3.1 Biology\">3.1 Biology</option>\n            <option value=\"3.2 Chemistry\">3.2 Chemistry</option>\n            <option value=\"3.3 Earth science\">3.3 Earth science</option>\n            <option value=\"3.4 Space science\">3.4 Space science</option>\n            <option value=\"3.5 Physics\">3.5 Physics</option>\n\n            <option value=\"\" disabled>4. Formal science</option>\n            <option value=\"4.1 Computer science\">4.1 Computer science</option>\n            <option value=\"4.2 Mathematics\">4.2 Mathematics</option>\n\n            <option value=\"\" disabled>5. Applied science</option>\n            <option value=\"5.1 Business\">5.1 Business</option>\n            <option value=\"5.2 Engineering and technology\">5.2 Engineering and technology</option>\n            <option value=\"5.3 Medicine and health\">5.3 Medicine and health</option>\n                \n            <option value=\"6. Other\">6. Other</option>\n\n          </select>\n        </td>\n      </tr>\n    </table>\n  </form>\n</body>\n</main>\n\n  <footer class=\"content-horizontal-right\">\n  <button type=\"submit\" form=\"demographicsForm\">Continue &rarr;</button>\n</footer>\n\n",
          "scrollTop": true,
          "files": {},
          "responses": {
            "undefined": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Demographicsform"
        },
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
this.state.loss_color = this.random.choice(["blue", "yellow"]);


if (this.state.loss_color === "blue"){
  index = 1
} else {
  index = 0
}


this.state.gain_color = ["blue", "yellow"].splice(index, 1).pop();
}
          },
          "title": "end",
          "content": "<header>\r\n  <h2>Welcome!</h2>\r\n</header>\r\n\r\n<main class=\"content-vertical-space-around content-horizontal-center\">\r\n\r\n  <div class=\"w-m center\">\r\n    <p>\r\n      This is the end of the experiment!\r\n    </p>\r\n    <p>\r\n      Thank you for your participation!\r\n    </p>\r\n  </div>\r\n    <div class=\"w-m center\">\r\n    <p>\r\n      Please use the following completion code for Prolific:\r\n    </p>\r\n    <p>\r\n      89333836\r\n    </p>\r\n</div>\r\n</main>\r\n<footer class=\"content-horizontal-right\">\r\n  <button id=\"Continue\">Continue &rarr;</button>\r\n</footer>\r\n",
          "plugins": []
        }
      ]
    }
  ]
})

// Data handling (disabled unless configured in experiments/shared/datasink.js)
if (window.DataSink) window.DataSink.attach(study, { studyId: "loss-perception" })

// Let's go!
study.run()

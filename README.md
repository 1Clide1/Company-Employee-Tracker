# Company Employee Tracker
## Link-To-Video-Showcase

[Click Here To Watch :)](https://youtu.be/Z3ClRWI3U8s)

## Table Of Contents

* [Link To Video Showcase](#Link-To-Video-Showcase)
 
* [Description](#Description)
  
* [Author](#Author)
  
* [Installation](#Installation)
  
* [Usage](#Usage)
  
* [Credits](#Credits)
  
* [License](#License)
  
* [Technology](#Technology)
  
## Description
  
This program runs through the terminal, it allows you to view a company in the sense that you can view all of the employees, what role/job title they have, what department they are in, their salary, and who their managers are. You can also add a new role, new department, and new employees through this program among other things. The idea is to use this app to track the company and the employees.
  
## Technology
  
mysql2, node js, javascript, dotenv, inquierer
  
## Author
  
Name: Brandon Diaz
  
Contact email: brandonjustindiaz@yahoo.com
  
GitHub: [1clide1](https://github.com/1clide1) 

  
## Installation
  
To install this project that way it will run, you first need to clone the repo, open your favorite ide of choice (mine is vscode), second open the employee-tracker.js in your inegrated terminal and lastly type node employee-tracker.js to run the program. You can also bypass an ide and just run the program through git bash. You just need to go to the folder that contains the program.
  
## Usage
  
So I see now that my old install instructions were not good since it caused one of my previous graders to give me a 50 even though the issue was entirely on them, although I will admit that I also didn't give a step by step guide or provide a template to follow. Now, I do and there are two options that I have, the preferred method and the quick and easy method.

# Preferred Method Install
This is in my opinion better because it gives you the idea that you would want this type of info now and in the future to be protected and not easily seen by everyone. If anyone can see it you can always have a bad actor mess with your database or at least that is the idea. I am going to assume you read through the quick and easy install before this, as these instructions are going to be less wordy and more to the point. First you need to head over to to employee-tracker.js that way you can change the connection method. Uncomment the starred comment (is should look like env= require) and remove the stars. Then delete the uncommented connection method and uncomment the connection method right above (that method is one that instead of strings they are all variables). After that rename dotenvtemplate to .env and in between the "" replace the username and password, depending on how you connect to your mysql server you might need to cahnge the host aswell. Remember after each step to save the changes. Once that is done, create the database on your side, open the folder in an integrated terminal and type npm i. Lastly once that install is done type node employee-tracker.js and you are good to go!!

# Quick and Easy Install 

For the quick and easy install all you need to do is clone the repo, once the repo is cloned you then need to install the database. Through my fav ide (vscode) you can download an extenstion called Mysql by cweijan. With that extenstion you would just connect using your username/password for your mysql sever and then you would click the plus button to activate the connection. You then head over to the db and create the schema by clicking the new run button that is made specifically for sql. Once you clicked your way through the schema you would do the same for the seeds stopping at the select codes. Note if you do not want to install the extenstion to install the database you can always just use the terminal to manually run the code through your mysql server. both options are effectively the same. Then open the cloned folder in your intergrated terminal in your fav ide, type npm i to install the dependecies. After the dependencies are installed now it is time to change the main js file (employee-tracker.js). The only thing you need to change is (located where it says connection= mysql.createConnection and you should see the connection setup) the username (if you have a different username that is not just root) and the password to what you use for your mysql server. If you use a different port or host name than also change accordingly. Once that is all set and done type node employee-tracker.js and you are good to go!!
  
## Credits
  
This project was really hard in my opinion, I had a hard time with understanding sql but I feel like what I was able to accomplish was really amazing to me. I want to further learn sql because I feel like this language will really help me in the future. I used every online website I could to understand sql and I also tried my best to write down as many comments that I could that way I can reinforce what I have learned. I got a lot of help from previous stack overflow forums, w3schools, youtube, and whatever I could find that would help me understand sql. Thankfully I did find a lot and everything I found was super helpful. The only main issue I found was that I ran into an issue with my update function. I was able to trial and error my way through the other problematic functions until they were able to work. However, with the update function I was not able to have the same luck. I feel like there is probably a simple typo but at this current time I am not sure what I did wrong. Other than that everything else worked fine and I still feel like I accomplished a lot so I am still happy on what I was able to achieve.
  
## License
  
![License](https://img.shields.io/static/v1?label=license&message=MIT&color=yellow) 

  
This project is licensed under the MIT License: To get a better look at [License] visit (https://choosealicense.com/licenses/mit/).
  

      MIT License

      Copyright (c) [2021] []
      
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
   

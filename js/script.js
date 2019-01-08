/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.

let studentList = document.getElementsByClassName('student-list')[0].children;
let page = document.querySelector('.page');
let studentItem = document.querySelector('.student-item');
let studentDetails = document.querySelector('.student-details');


const showPage = (page) => {

   let start = 0;
   let finish = 10;
   for( let i = 0 ; i < page; i++){

      for (student in studentList){
         if(student > finish || student <= start)studentList[student].style.display = 'none';
      }

      start+=10;
      finish+=9;
   }
   
}

const appendPageLinks = () => {
   let numberOfPages = Math.ceil((studentList.length) / 10);
   let ul = document.createElement('ul');
   ul.classList.add('pagination');
   for (let i = 0; i < numberOfPages; i++) {
      let li = document.createElement('li');
      li.classList.add('pagination');
     
      let link = document.createElement('a');
      
      link.setAttribute('href', '#');
      let text = document.createTextNode(i + 1);
      
      link.appendChild(text);
      li.append(link);
      ul.appendChild(li);

   }
   page.appendChild(ul);

};

appendPageLinks();
console.log(document.getElementsByClassName('pagination'));

showPage(1);
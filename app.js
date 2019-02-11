/* Attaching Event listeners to different tags */

/* Get the element which we want to attach listener to.
   In this case the .delete class inside the li span
*/

//var btns = document.querySelectorAll('#movie-list .delete');

//btns.forEach(function(btn){
  // Each button is attached with the click event
  //btn.addEventListener('click', function(e){

    /* we want to remove the li associated with which delete button we click.
    e.target will get me the element which was triggered (in this case <span class='delete'>)
    */
    //const li = e.target.parentElement;

    /*
     This will remove the li which is the target in previous line.
     the target li has the parent ul. We fetch the parent and then delete the child
     by removeChild(li) method. li beong the taget li.
    */
    //li.parentNode.removeChild(li)
  //});
//});
// Drawback of this method is that it will be expensive task to attach each button with event listeners
// TO check the drawback add the following code from developer console in html and try deleting the new element.
/*
<li>
  <span class="name">New Movie</span>
  <span class="delete">delete</span>
</li>
*/


/*
  --> Event Bubbling and using it in deleting the movies
      We will assign event to the ul tag and when the delete button is clicked,
      event will bubble up to the ul and then we can delete the li associated to the event
  --> We are using the concept of Event Bubbling to attach the event to UI.
      Advantage: attaching the event to <ul> will help us delete any new <li> attached to movie-list
  --> Now this is good because if we have to add another movie to the list, we can delete it unlike the previous event listener.
*/
//delete functionality
var list = document.querySelector('#movie-list ul');

list.addEventListener('click', function (e) {
 if(e.target.className === 'delete'){          // We want to get where did the click happened, so className
     //console.log(e.target);
     const li = e.target.parentElement;         // this is the li which is the parent to the delete and we want to delete it.
     //console.log(li);
     li.parentNode.removeChild(li);
     //list.removeChild(li);
 }
 });
//add functionality
var form = document.querySelector('#add-movie');
form.addEventListener('submit',function(e){
    e.preventDefault();
    var val=document.getElementById('adding').value;
    var li=document.createElement('li');
    var moviename=document.createElement('span');
    var del=document.createElement('span');
    moviename.textContent=val;
    del.textContent='Delete';
    moviename.classList.add('name');
    del.classList.add('delete');
    li.appendChild(moviename);
    li.appendChild(del);
    list.appendChild(li);
});
//hiding the list
function showhidediv(hide)
{
var list = document.querySelector('#movie-list ul');
var form= document.querySelector('#add-movie');

    if (list.style.display === "none") {
    list.style.display = "block";
  } 
    else {
    list.style.display = "none";
  }
                      }
//search functionality
var search=document.forms['search-movies'].querySelector('input');
search.addEventListener('keyup',function(e){
  var filter=e.target.value.toLowerCase();
  var movie=list.getElementsByTagName('li');
  for(var i=0; i<movie.length;i++){
    var title=movie[i].firstElementChild.textContent;
    if(title.toLowerCase().indexOf(filter)!=-1){
      movie[i].style.display='block';
    }else{
      movie[i].style.display='none';
    }
  }
  });
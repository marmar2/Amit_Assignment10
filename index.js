let btn = document.querySelector('.btn')
 
let x = document.querySelector('.cont')
  
let inp = document.querySelector('.inp')
 
  let array 
 
 btn.addEventListener('click',function(){
	 
	let d = document.createElement('div')
	d.setAttribute('class','subcont')
	 // let bt1 = document.createElement('button')
	 // let bt2 = document.createElement('button')
	 // let par = document.createElement('p')
	 // par.setAttribute('class','par')
	
	 // bt1.setAttribute('class','edit')
	 // bt2.setAttribute('class','delete')
	 // bt1.textContent="Edit"
	 // bt2.textContent="delete"
      // par.innerText = inp.value;

    //OR

     d.innerHTML = `
        <p class="par">${inp.value}</P>
		<button class="edit">Edit</button>
        <button class="delete">Delete</button>
	  `	
	
	// array.push(d);
	// d.append(par)
	// d.append(bt1)
	// d.append(bt2)
	x.append(d)
	
    
 })
  
 
 
 document.addEventListener('click',function(e){
	 
	  if(e.target.getAttribute('class') == "delete"){
		  
	  console.log(e.target.getAttribute('class'));
	  
	  e.target.parentElement.remove();
	  }
	 
 });
 
 document.addEventListener('click',function(e){
	 
	  if(e.target.getAttribute('class') == "edit"){
	  
	  // var child = e.target.parentNode.firstChild;
	   var editable = e.target.previousElementSibling;
	   console.log(editable);
	  editable.setAttribute('contenteditable','true');
	  editable.classList.add('edited');
	  editable.classList.remove('par');
	  
	  // );
	  }
	 
 });
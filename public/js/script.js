//function tht control Carsouel
function startCarousel(){
    let activeImage = 0
    const images = document.querySelectorAll('#carousel img')//return an arr 
    function cycleImages(){
        if(!images[activeImage]){//if there's nothing in images that have the active image tag, just exit the function and kill the function
            clearInterval(intervalId)
            return;
        }
        images[activeImage].classList.remove('active')
        activeImage = (activeImage + 1) % images.length
        images[activeImage].classList.add('active')
    }
    let intervalId = setInterval(cycleImages, 3000)
}

//Handle Edit Requests
function editItem(id, name, description){
    document.getElementById('updateId').value = id
    document.getElementById('updateName').value = name 
    document.getElementById('updateDescription').value = description
    document.getElementById('updateForm').action = `/item/update/${id}`
}

//Handle Erros from server if unable to write data (optional)
function checkForError() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('error')) {
      alert("Validation failed. Name and description are required.");
    }
  }

  window.onload = function(){
    startCarousel();
    checkForError()
  }




  //add db
//   const addItem = document.querySelector('#add')

//   addItem.addEventListener('click', addObject)
//   async function addObject(){
//     try{
//         const response = await fetch('addobj', {
//             method: 'post',
//             headers: {'Content-Type': 'application/json'},
//           })
//         const data = await response.json()
//         console.log(data)
//         location.reload()

//     }catch(err){
//         console.log(err)
//     }
// }
// const time = document.getElementById('time');
// time.innerHTML += new Date().toLocaleTimeString();

// const userMsc = new Audio('ring.mp3')
// function actionDial() {
//     userMsc.play()
//     const phoneUser = document.getElementById('phoneUser')
//     phoneUser.innerHTML = ''
//     phoneUser.innerHTML = `<div style='display: none;'></div>`
//     const userPhone = document.getElementById('userPhone')
//     userPhone.innerHTML = `<div class="d-flex flex-column ps-3 pe-3 pb-3 border border-black border-5 m-4" style="border-radius: 20px; background: linear-gradient(180deg, black, rgb(245, 151, 166)); width: 25vw;">
        
//     <div class="d-flex align-items-center p-2 justify-content-around" style="border-radius: 20px 20px 0px 0px;">
//     <div class="d-flex align-items-center">
    
//     <p>
//     <p id="tim" class="text-light">
//     <img src="ic--round-phone.svg" alt="">
//     </p>
// </div>
// <img src="material-symbols--camera-outline-rounded.svg" alt="">
// <div class="d-flex align-items-center">
// <p class="text-light">
// <img src="logos--google-maps.svg" alt="">
// <img src="uil--signal.svg" alt="">
// 62% <img src="ic--baseline-battery-50.svg" alt=""></p>
// </div>
//     </div>
//     <small class="text-light text-center mt-3">Calling...</small>
//     <h1 class="text-center text-light">Emergency Line</h1>
//     <small class="text-light text-center mt-3" style="margin-bottom: 200px;">Mobile &nbsp; 911</small>
//     <button onclick="cutCall()" style="margin-left: 120px;" class="rounded-circle btn btn-danger btn-sm w-25"><img src="ic--round-phone.svg" alt=""></button>
//     </div>`;
//     const tim = document.getElementById('tim');
//     tim.innerHTML = new Date().toLocaleTimeString();

//         document.getElementById('idleScreen').style.display = 'none';
//         document.getElementById('activeAlert').style.display = 'block';
//         document.getElementById('ambulanceCard').classList.add('border-warning', 'border-4');
    
// }
// function decide(choice) {
//      const time = new Date().toLocaleTimeString();
//      const table = document.getElementById('historyTable');
//       let choiceColor;
//      if(choice === 'accepted') {
//         choiceColor = 'bg-success'
//      } else {
//         choiceColor = 'bg-danger'
//      }
     
// }


// function cutCall() {

//     userMsc.pause();

//     userMsc.currentTime = 0;



//     const userPhone = document.getElementById('userPhone');

//     userPhone.innerHTML = `

//         <div class="">

//         <div id="phoneUser" class="shadow d-flex flex-column ps-3 pe-3 pb-3 border border-black border-5 m-4" style="border-radius: 20px; background: linear-gradient(180deg, black, rgb(245, 151, 166)); width: 25vw;">

           

//             <div class="d-flex align-items-center p-2 justify-content-around" style="border-radius: 20px 20px 0px 0px;">

//                 <div class="d-flex align-items-center">

                   

//                     <p>

//                         <p id="time" class="text-light">

//                             <img src="ic--round-phone.svg" alt="">

//                         </p>

//                     </div>

//                     <img src="material-symbols--camera-outline-rounded.svg" alt="">

//                     <div class="d-flex align-items-center">

//                         <p class="text-light">

//                             <img src="logos--google-maps.svg" alt="">

//                             <img src="uil--signal.svg" alt="">

//                             62% <img src="ic--baseline-battery-50.svg" alt=""></p>

//                         </div>

//                     </div>

//                     <small class="alert text-light text-center">In an Emergency call 911</small>

//                     <input type="text" value="911" class="text-light text-center" style="margin-bottom: 200px; background: transparent; outline: none; border: none;">

//                     <button onclick="actionDial()" style="margin-left: 120px;" class="rounded-circle btn btn-success btn-sm w-25"><img src="ic--round-phone.svg" alt=""></button>

                   

//                 </div>

               

//             </div>`;



   

//     document.getElementById('idleScreen').style.display = 'block';

//     document.getElementById('activeAlert').style.display = 'none';

//     document.getElementById('ambulanceCard').classList.remove('border-warning', 'border-4');

// }


// const time = document.getElementById('time');
// if (time) {
//     time.innerHTML = new Date().toLocaleTimeString();
// }

let callCount = 0; 
let savedName = "";      // Global variable to hold name
let savedLocation = "";  // Global variable to hold address
const userMsc = new Audio('ring.mp3');

function actionDial() {
    
    const nameInput = document.getElementById('userName');
    const locInput = document.getElementById('userLocation');
    
    savedName = nameInput ? nameInput.value || "Anonymous" : "Anonymous";
    savedLocation = locInput ? locInput.value || "Unknown Location" : "Unknown Location";

    userMsc.play();
    
    
    const userPhone = document.getElementById('userPhone');
    userPhone.innerHTML = `
    <div class="d-flex flex-column ps-3 pe-3 pb-3 border border-black border-5 m-4" style="border-radius: 20px; background: linear-gradient(180deg, black, rgb(245, 151, 166)); width: 25vw;">
        <div class="d-flex align-items-center p-2 justify-content-around">
            <div class="d-flex align-items-center"><p id="tim" class="text-light"></p></div>
            <div class="text-light">62% <img src="ic--baseline-battery-50.svg" alt=""></div>
        </div>
        <div class="text-center text-light mt-4">
            <small class="d-block mb-1">Calling Emergency...</small>
            <h4 class="mb-0">${savedName}</h4>
            <small class="opacity-75">${savedLocation}</small>
            <h1 class="display-4 mt-4">911</h1>
        </div>
        <div class="text-center" style="margin-top: 100px; margin-bottom: 50px;">
             <button onclick="cutCall()" class="rounded-circle btn btn-danger p-3 shadow-lg">
                <img src="ic--round-phone.svg" style="transform: rotate(135deg)" alt="End">
             </button>
        </div>
    </div>`;

    // document.getElementById('tim').innerHTML = new Date().toLocaleTimeString();

    
    const activeAlert = document.getElementById('activeAlert');
    activeAlert.querySelector('h5').innerText = `Location: ${savedLocation}`;
    activeAlert.querySelector('small').innerText = `Caller ID: ${savedName}`;

    document.getElementById('idleScreen').style.display = 'none';
    activeAlert.style.display = 'block';
    document.getElementById('ambulanceCard').classList.add('border-warning', 'border-4');
}

function decide(choice) {
    const table = document.getElementById('historyTable');
    callCount++; 

    let choiceColor = (choice === 'Accepted') ? 'bg-success' : 'bg-danger';

    
    let newRow = `
    <tr>
        <td>${callCount}</td>
        <td>${savedName}</td>
        <td>${savedLocation}</td>
        <td><span class="badge ${choiceColor}">${choice}</span></td>
    </tr>`;

    table.insertAdjacentHTML('beforeend', newRow);
    cutCall();
}

function cutCall() {
    userMsc.pause();
    userMsc.currentTime = 0;

    const userPhone = document.getElementById('userPhone');
    userPhone.innerHTML = `
        <div id="phoneUser" class="shadow d-flex flex-column ps-3 pe-3 pb-3 border border-black border-5 m-4" style="border-radius: 20px; background: linear-gradient(180deg, black, rgb(245, 151, 166)); width: 25vw;">
            <div class="d-flex align-items-center p-2 justify-content-around">
                <div class="d-flex align-items-center">
                    <p id="time" class="text-light">
                        <img src="ic--round-phone.svg" alt=""> ${new Date().toLocaleTimeString()}
                    </p>
                </div>
                <div class="text-light">62% <img src="ic--baseline-battery-50.svg" alt=""></div>
            </div>
            <small class="alert text-light text-center py-1">In an Emergency call 911</small>
            
            <div class="mt-2 mb-3">
                <input type="text" id="userName" class="form-control form-control-sm mb-2" placeholder="Your Name">
                <input type="text" id="userLocation" class="form-control form-control-sm mb-2" placeholder="Your Address">
            </div>

            <input type="text" value="911" class="text-light text-center fs-2 fw-bold" style="background: transparent; outline: none; border: none;" readonly>
            
            <button onclick="actionDial()" style="margin-left: 100px;" class="rounded-circle btn btn-success btn-sm w-25 mt-4">
                <img src="ic--round-phone.svg" alt="Dial">
            </button>
        </div>`;

    document.getElementById('idleScreen').style.display = 'block';
    document.getElementById('activeAlert').style.display = 'none';
    document.getElementById('ambulanceCard').classList.remove('border-warning', 'border-4');
}

function startClock() {
    setInterval(() => {
        const now = new Date().toLocaleTimeString();
        
        
        const dialerTime = document.getElementById('time');
        if (dialerTime) {
            dialerTime.innerHTML = `<img src="ic--round-phone.svg" alt=""> ` + now;
        }

        const callingTime = document.getElementById('tim');
        if (callingTime) {
            callingTime.innerHTML = `<img src="ic--round-phone.svg" alt=""> ` + now;
        }
    }, 1000);
}


startClock();
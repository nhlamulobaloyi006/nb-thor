const fill1 = document.getElementById('fill1');
const fill2 = document.getElementById('fill2');
const fill3 = document.getElementById('fill3');
const fill4 = document.getElementById('fill4');
const fill5 = document.getElementById('fill5');
const fill6 = document.getElementById('fill6');

const intelligence = document.getElementById('intelligence');
const strength = document.getElementById('strength');
const speed = document.getElementById('speed');
const durability = document.getElementById('durability');
const power = document.getElementById('power');
const combat = document.getElementById('combat');

const intelligenceInput = document.getElementById('intelligenceInput');
const strengthInput = document.getElementById('strengthInput');
const speedInput = document.getElementById('speedInput');
const durabilityInput = document.getElementById('durabilityInput');
const powerInput = document.getElementById('powerInput');
const combatInput = document.getElementById('combatInput');
 
const container = document.querySelector('.container');
const showFormContainer = document.querySelector('.edit-form-container');
const submitForm = document.getElementById('submitForm');

let newValues = []
let editIndex = null;

function showSidebar() {
    event.preventDefault()
    navigator.vibrate(70)
    const sideBar = document.querySelector('.sideBar')
    sideBar.style.display = 'flex'
    }
    
function hideSidebar() {
    event.preventDefault()
    navigator.vibrate(70)
    const sideBar = document.querySelector('.sideBar')
    sideBar.style.display = 'none'  
    }

 function submitBtn() {
      navigator.vibrate(70)
    }

function fillValue() {
    intelligence.textContent = `Intelligence: ${fill1.style.width}`;
    strength.textContent = `Strength: ${fill2.style.width}`;
    speed.textContent = `Speed: ${fill3.style.width}`;
    durability.textContent = `Durability: ${fill4.style.width}`;
    power.textContent = `Power: ${fill5.style.width}`;
    combat.textContent = `Combat: ${fill6.style.width}`;

}

fillValue()

function showForm() {
    navigator.vibrate(70);
    container.classList.add("opacity");
    showFormContainer.classList.add("show-form-container");
}

function closeForm() {
    navigator.vibrate(70);
    container.classList.remove("opacity");
    showFormContainer.classList.remove("show-form-container");
}

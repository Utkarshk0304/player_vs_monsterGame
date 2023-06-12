const maxLife=100;
let playerLife=maxLife;
let monsterLife=maxLife;
const playerAttack=10;
const monsterAttack=14;
const strongAttack=17;
const healValue=20;
let bonusLife=true;

adjustHealthBars(maxLife);
const userInput=prompt("decide th health of monster and player to be");
maxLife=parseInt(userInput);
if (isNaN(maxLife)|| maxLife<=0 ) {
    alert("not a valid input hence health is set to be 100");
    maxLife=100;
}
function attackButtons(mode){
    const damage=dealMonsterDamage(mode);
    monsterLife-=damage;
    endRound();
}

function reset(){
     playerLife=maxLife;
     monsterLife=maxLife;
     resetGame(maxLife);
}

function endRound(){
    const initialPlayerHealth=playerLife;
    const monsterDamage=dealPlayerDamage(monsterAttack);
    playerLife-=monsterDamage;
    if (playerLife<=0 && bonusLife) {
        bonusLife=false;
        removeBonusLife();
        playerLife=initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('u would be dead but bonus life saved you');
    }


    if (playerLife>0 && monsterLife<=0) {
        alert('you won');
    }    
    else if(playerLife<=0 && monsterLife>0){
        alert('Monster won!')
    }
    else if(playerLife<=0 && monsterLife<=0){
        alert('A draw');
    }
    if (playerLife<=0 || monsterLife<=0) {
        reset();
    }
}

function onAttack(){
    attackButtons(playerAttack)
}
function onStrongAttack(){
    attackButtons(strongAttack);
}
function onHealbtn(){
   
    let healing;

    if (playerLife >= maxLife-healValue) {
        healing=maxLife-playerLife;
        alert("You can't heal to more than your max initial health.");
    }
    else  {
        healing=healValue;
    }
    increasePlayerHealth(healing);
    playerLife += healing;
    endRound();

}


attackBtn.addEventListener('click',onAttack);
strongAttackBtn.addEventListener('click',onStrongAttack)
healBtn.addEventListener('click',onHealbtn);

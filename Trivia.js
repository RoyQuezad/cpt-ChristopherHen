var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
   if(yy==="C"){
        document.getElementById("question").value="You are right"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===3){ 
	y = document.getElementById("qans").value
   if(yy==="C"){
        document.getElementById("question").value="You are right"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===4){ 
	y = document.getElementById("qans").value
   if(yy==="D"){
        document.getElementById("question").value="You are right"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===5){ 
	y = document.getElementById("qans").value
   if(yy==="A"){
        document.getElementById("question").value="You are right"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===6){ 
	y = document.getElementById("qans").value
   if(yy==="A"){
        document.getElementById("question").value="You are right"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===7){ 
	y = document.getElementById("qans").value
   if(yy==="C"){
        document.getElementById("question").value="You are right"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===8){ 
	y = document.getElementById("qans").value
   if(yy==="C"){
        document.getElementById("question").value="You are right"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===9){ 
	y = document.getElementById("qans").value
   if(yy==="B"){
        document.getElementById("question").value="You are right"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
    else if (ans===10){ 
	y = document.getElementById("qans").value
   if(yy==="C"){
        document.getElementById("question").value="You are right"
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
	ans++; 
}
        

function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="Who is the fastest character in overwatch \na)Genji \nb)Reinhardt \nc)Tracer \nd)Mei";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which overwatch character has more health \na)Moira \nb)Winston \nc)Dva \nd)Tracer";
    document.view.qans.value=""
}
    else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the most popular game in the wrold currently \na)Minecraft \nb)H1Z1 \nc)Fortnite \nd)Dokkan battle";
    document.view.qans.value=""
}
     else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the strongest weapon in skyrim \na)Steel Sword \nb)Dragon bone \nc)Frost daderic \nd)Chillrend";
    document.view.qans.value=""
}
    else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the best character in mario kart \na)Toad \nb)Wario \nc)Mario \nd)Bowser";
    document.view.qans.value=""
}
     else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Whats the first video game made? \na)Pong \nb)Pacman \nc) Tetris \nd) Mario";
    document.view.qans.value=""
}
     else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What's the best game developing gaming company \na) Raven \nb) Daybreak \nc) Bethesda \nd) Ubisoft";
    document.view.qans.value=""
}
     else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is E3? \na) Popular Game \nb) Strong lead character \nc) Game reveal event \nd) Developer";
    document.view.qans.value=""
}
     else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the most expensive skin in csgo? \na) Bayonet fade \nb) Karambit crimson web fn \nc) Dragon lore \nd) Clock Ironwork";
    document.view.qans.value=""
}
     else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the highest town hall in clash of clans \na)9 \nb)11 \nc)12 \nd)10";
    document.view.qans.value=""
}
	i++; 
}

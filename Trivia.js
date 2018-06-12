var score = 0
var i = 1
var ans = 1
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        Score++
        
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
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
else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=scoreelse if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=scoreelse if (ans===1){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=scoreelse if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=scoreelse if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=scoreelse if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=scoreelse if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=scoreelse if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        
    }
    document.view.qscore.value=score

	ans++; 
}
        

function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="Who is the fastest character in overwatch? \na)Genji \nb)Reinhardt \nc)Tracer \nd)mei";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="which overwatch character has the most health? \na)Moira \nb)Winston \nc)D.va \nd)Tracer";
    document.view.qans.value=""
}

	i++; 
}

if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="What is the most populer game in the world? \na)H1Z1 \nb)Minecraft \nc)Fortnite \nd)Dokkan battle";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the strongest weapon in skyrim? \na)steel sword \nb)dragon bone \nc)Frost daderic sword \nd)chillrend";
    document.view.qans.value=""
}

	i++; 

if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="who is the best character in mario cart? \na)toad \nb)wario \nc)mario \nd)bowser";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="what is the first video game made? \na)tetrus \nb)pong \nc)pacman \nd)mario";
    document.view.qans.value=""
}

	i++; 

if (i===1){ 
	document.view.qnum.value=i;
   	document.view.question.value ="Who is the best game developing company? \na)raven \nb)daybreak \nc)bethesda \nd)ubisoft";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is E3? \na)A popular game \nb)strong league of legends character \nc)game reveal event \nd)developer";
    document.view.qans.value=""
}

	i++; 


if (i===1){ 
	document.view.qnum.value=i;
    document.view.question.value ="what is the most expensive CS:GO skin? \na)bayonette fade \nb)karambit chrimson web FN \nc)Dragon lore \nd)glock iron work";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the highest town hall level in COC? \na)9 \nb)11 \nc)12 \nd)10";
    document.view.qans.value=""
}

	i++; 
}
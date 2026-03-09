let sessions=[];

function loadProgram(){

fetch("program_detailed.json")
.then(r=>r.json())
.then(data=>{
sessions=data;
render("ALL");
});

}

function filterDay(day){
render(day);
}

function render(day){

let container=document.getElementById("program");
container.innerHTML="";

sessions
.filter(s=>day==="ALL" || s.day===day)
.forEach(session=>{

let div=document.createElement("div");
div.className="session";

div.innerHTML=`

<h3>${session.session_title}</h3>

<div class="meta">
${session.day} | ${session.slot} | ${session.room} | ${session.language}
<br>
Chair: ${session.chair}
</div>

`;

session.papers.forEach(p=>{

let paper=document.createElement("div");
paper.className="paper";

paper.innerHTML=`

<div class="title">
<a href="${p.pdf_link}" target="_blank">${p.paper_title}</a>
</div>

<div class="meta">
${p.presenter} (${p.affiliation})
<br>
Discussant: ${p.discussant}
</div>

`;

div.appendChild(paper);

});

container.appendChild(div);

});
}
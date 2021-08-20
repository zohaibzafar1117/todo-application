
var list = document.getElementById("list")
function addd(){
    var input = document.getElementById("ins")
    var lit = document.createElement("tr")
    var td = document.createElement("td")
    var litxt = document.createTextNode(input.value)
    td.appendChild(litxt)
    lit.appendChild(td)
    list.appendChild(lit)
    input.value = ""

    var delbtn = document.createElement("button")
    var btntxt = document.createTextNode("Delete")
    var td1 = document.createElement("td")
    delbtn.appendChild(btntxt)
    delbtn.setAttribute("onClick" , "delit(this)")
    td1.appendChild(delbtn)
    lit.appendChild(td1)
    console.log(lit)
    
    
    var edbtn = document.createElement("button")
    var edtxt = document.createTextNode("Edit")
    var td2 = document.createElement("td")
    edbtn.appendChild(edtxt)
    edbtn.setAttribute("onClick" , "edite(this)")
    td2.appendChild(edbtn)
    lit.appendChild(td2)
    console.log(lit)

}

function delit(t) {
    var a = t.parentNode
    a.parentNode.remove()

}
function edite(e){
    var ed = prompt("enter your text here")
    var a = e.parentNode
   var c = a.parentNode.firstChild
c.firstChild.nodeValue = ed


}
function delall(){
 document.getElementById("list").innerHTML = ""

}
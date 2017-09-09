;(function () {



var tmpObj = {};
var modal = document.getElementById("form1");
var btn = document.getElementById("add");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block"
};

span.onclick = function () {
    modal.style.display = "none"
};


var countOfFields = 1;
var curFieldNameId = 1;
var maxFieldLimit = 5;

function deleteField(a) {
    var contDiv = a.parentNode;
    contDiv.parentNode.removeChild(contDiv);
    countOfFields--;
    return false;
}
function addField() {
    if (countOfFields >= maxFieldLimit) {
        alert("The number of fields reached its maximum");
        return false;
    }
    countOfFields++;
    curFieldNameId++;
    var div = document.createElement("div");
    div.innerHTML = "<input name=\"name_" + curFieldNameId + "\" type=\"text\" /> <a onclick=\"return deleteField(this)\" href=\"#\">[X]</a>";
    // Добавляем новый узел в конец списка полей
    document.getElementById("parentId").appendChild(div);

    return false;
}
  


})();
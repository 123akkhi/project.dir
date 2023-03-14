var items = document.getElementsByClassName(list-group-item);
console.log(items);
console.log(items[2]);
items[2].textContent = "hello 2";
items[2].getElementsByClassName.fontweight = "bold";
items[2].getElementsByClassName.backgroundColor = "green";

for(var i=0; i<items.length; i++)
{
    items[i].getElementsByClassName.backgroundColor = 'green';
}
// update logo text color 
document.getElementById('logo-name').addEventListener('click',function(){
    this.style.color = "green";
});

// update our pacakges background color 
document.getElementById('our-package-bd').style.backgroundColor = "rgba(255, 39, 11, 0.1)";

// create list item by clicking button 

document.getElementById('create-item-btn').addEventListener('click',function(){
    function createListItem(liItem) {
        let li = document.createElement('li');
        li.textContent = liItem;
        return li;
    }
    // get the ul#liArea
    const liItem = document.querySelector('#liArea');
    // add list item
    liItem.appendChild(createListItem('List Item-($)'));
});

// increasing number in input field 
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
};

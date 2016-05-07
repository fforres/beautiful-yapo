var table = document.getElementById("listing_container");
var topPublicity = document.getElementById('adserver-top');

var tr = table.getElementsByTagName('tr');
var td = tr[0].getElementsByTagName('td');

var newTd = document.createElement('td');
newTd.setAttribute("id", "newTopPublicity");
tr[0].insertBefore(newTd, td[0]);

var newTopPublicity = document.getElementById('newTopPublicity');
newTopPublicity.appendChild(topPublicity.cloneNode(true));

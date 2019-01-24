var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();


var xhrr = new XMLHttpRequest();
xhrr.onreadystatechange = function () {
  if(xhrr.readyState === 4 && xhrr.status === 200) {
    var rooms = JSON.parse(xhrr.responseText);
    var statusroomHTML = '<ul class="rooms">';
    for (var i=0; i<rooms.length; i += 1) {
      if (rooms[i].available === true) {
        statusroomHTML += '<li class="empty">';
      } else {
        statusroomHTML += '<li class="full">';
      }
      statusroomHTML += rooms[i].room;
      statusroomHTML += '</li>';
    }
    statusroomHTML += '</ul>';
    document.getElementById('roomList').innerHTML = statusroomHTML;
  }
};
xhrr.open('GET', '../data/rooms.json');
xhrr.send();
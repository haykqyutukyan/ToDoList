setInterval(function() {
   const searchValue = searchInput.value;
   const day = document.getElementById("days").value;
   const start = document.getElementById("startTime").value;
   const end = document.getElementById("endTime").value;

   if (!searchValue && day == 'Day' && start == 'From' && end == 'To') {
       location.reload();
   }
}, 600000);

const searchInput = document.getElementById("input");
searchInput.addEventListener("keyup", search);

function cleanSearchResults() {
   const container = document.getElementById("searchResults");
   container.style.display = "none";
}

function reset() {
   cleanSearchResults();
   document.getElementById("input").value = "";
   document.getElementById("days").value = "Day";
   document.getElementById("startTime").value = "From";
   document.getElementById("endTime").value = "To";
}


function search() {
   const searchValue = document.getElementById("input").value;
   const day = document.getElementById('days').value;
   const start = document.getElementById('startTime').value;
   const end = document.getElementById('endTime').value;

   if (!searchValue && day == 'Day' && start == 'From' && end == 'To') {
       cleanSearchResults();
       return;
   }

   let query = searchValue + " ";
   if (day != 'Day') {
       query +=  day + "day ";
   }
   if (start != 'From') {
       query += "from " + start;
   }
   if (end != 'To') {
       query += " to " + end;
   }
   console.log(query)
}

function findAvailability() {
   const day = document.getElementById('days').value;
   const start = document.getElementById('startTime').value;
   const end = document.getElementById('endTime').value;

   const container = document.getElementById("searchResults");
   container.style.display = "block";

   clearTable("tableId");

   let query = "";
   if (day != 'Day') {
       query += day + "day ";
   }
   if (start != 'From') {
       query += "from " + start;
   }
   if (end != 'To') {
       query += " to " + end;
   }

   console.log(query)

}

function clearTable(name) {
   var table = document.getElementById(name).getElementsByTagName('tbody')[0];
   while (table.rows.length > 0) {
       table.deleteRow(0);
   }
}
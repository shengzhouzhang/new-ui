/**
 * Created by zhang on 18/01/2014.
 */

var data = [
  {
    "ID": "001",
    "Status": "New",
    "Title": "Change Password",
    "Price": "$30",
    "Number": "1",
    "Date": "2014-01-17"
  },
  {
    "ID": "002",
    "Status": "Processing",
    "Title": "Update Banner Image",
    "Price": "$60",
    "Number": "$60",
    "Date": "2014-01-14"
  },
  {
    "ID": "003",
    "Status": "Completed",
    "Title": "Setup New Employee Machine",
    "Price": "$0",
    "Number": "1",
    "Date": "2014-01-16"
  },
  {
    "ID": "001",
    "Status": "",
    "Title": "",
    "Price": "",
    "Number": "",
    "Date": ""
  },
  {
    "ID": "001",
    "Status": "",
    "Title": "",
    "Price": "",
    "Number": "",
    "Date": ""
  }
];

$("#grid tbody tr").click(function() {

  window.location.href = "/details.html";
});

$('ul.nav-tabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

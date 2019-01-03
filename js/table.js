$(document).ready(function () {
    //USER ID
    var userid;

    //REFERENCE TO FIREBASE DATABASE
    var rootRef = firebase.database().ref();

    //TABLE BODY
    var table = document.getElementById("table-body");

    //MONTHS ARRAY
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    //TAKES USER ID FROM FIREBASE AUTHENTICATION
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            userid = user.uid;
        }
    });

    //BUILD TABLE
    rootRef.once("value").then(function (snapshot) {
        /* change when nodes are built" */
        if (snapshot.child("users/" + userid).hasChild("tasks")) {
            
            var query = firebase.database().ref("users/" + userid + "/tasks");


            query.once("value").then(function (snapshot) {

                snapshot.forEach(function (childSnapshot) {

                    var task = childSnapshot.child("task").val();
                    var dueDate = childSnapshot.child("date").val();

                    var date = new Date(dueDate);
                    var month = months[date.getMonth()];

                    var day = date.getDay();
                    dueDate = month + " " + day;

                    var type = childSnapshot.child("type").val();
                    var status = childSnapshot.child("status").val();

                    
                    if (status == false) {
                        appendRow(task, dueDate, type);
                    }

                });

            });
        }
    });

    function appendRow(val1, val2, val3) {
        let task = val1;
        let date = val2;
        let type = val3;

        /* TABLE ROW */
        let tr = $("<tr></tr>");
        $("tbody").append(tr);

        /* TABLE DATA 1 */
        let td1 = $("<td></td>");
        td1.text(task);

        /* TABLE DATA 2 */
        let td2 = $("<td></td>");
        td2.text(date);

        /* TABLE DATA 3 */
        let td3 = $("<td></td>");

        let img = $("<img></img>");
        td3.append(img);

        var iconPath;

        if (type == 1) {
            iconPath = "../icons/Education.svg";
        } else if (type == 2) {
            iconPath = "../icons/Fitness.svg";
        } else if (type == 3) {
            iconPath = "../icons/Mental.svg";
        }
        img.attr("src", iconPath);

        tr.append(td1, td2, td3);
    }
});
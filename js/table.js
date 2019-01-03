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
                    var trkey = childSnapshot.key;

                    var task = childSnapshot.child("task").val();
                    var dueDate = childSnapshot.child("date").val();

                    var date = new Date(dueDate);
                    var month = months[date.getMonth()];
                    var day = date.getDate();

                    var day = date.getDate() + 1;
                    dueDate = month + " " + day;

                    var type = childSnapshot.child("type").val();
                    var status = childSnapshot.child("status").val();


                    if (status == false) {
                        appendRow(task, dueDate, type, trkey);
                    }

                });

            });
        }
    });

    function appendRow(val1, val2, val3, val4) {
        let task = val1;
        let date = val2;
        let type = val3;
        let trkey = val4;

        /* TABLE ROW */
        let tr = $("<tr id='" + trkey + "'></tr>");
        $("#table-body").append(tr);

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
            iconPath = "../icons/book.png";
        } else if (type == 2) {
            iconPath = "../icons/fitness.png";
        } else if (type == 3) {
            iconPath = "../icons/health.png";
        }
        img.attr("src", iconPath);

        tr.append(td1, td2, td3);
    }

    var taskWindow = false;
  
    $("tbody").on('click', 'tr', function() {
        var trID = $(this).attr('id');

        taskWindow = true;        
      
        if (taskWindow) {
          $('.completeTask').css("display", "block");
        };

        $("#complete-button").click(function () {
            var userId = firebase.auth().currentUser.uid;
            var taskRef = firebase.database().ref("users/" + userId + "/tasks/" + trID);
            var eduRef = firebase.database().ref("users/" + userId + "/eduPoints");
            var fitRef = firebase.database().ref("users/" + userId + "/fitPoints");
            var healthRef = firebase.database().ref("users/" + userId + "/healthPoints");
            var userRef = firebase.database().ref("users/" + userId);

            taskRef.update({
                "status": true,
            })
            $('.completeTask').css("display", "none");

            taskRef.once("value").then(function (snapshot) {
                var typePoints = parseInt(snapshot.child("type").val());
                console.log(typePoints);
                if (typePoints == 1) {
                    eduRef.once('value').then(function(snap) {
                        var ePoints = parseInt(snap.val());
                        console.log(ePoints);
                        ePoints++;
                        console.log(ePoints);
                        userRef.update({
                            "eduPoints": ePoints
                        })
                    })
                } else if (typePoints == 2) {
                    fitRef.once('value').then(function(snap) {
                        var fPoints = parseInt(snap.val());
                        fPoints++;
                        userRef.update({
                            "fitPoints": fPoints
                        })
                    })
                } else if (typePoints == 3) {
                    healthRef.once('value').then(function(snap) {
                        var hPoints = parseInt(snap.val());
                        hPoints++;
                        userRef.update({
                            "healthPoints": hPoints
                        })
                    })
                }
            })

            setTimeout(function(){location.reload()}, 900);

        })
      
        $("#remove-button").click(function() {
          $('.completeTask').css("display", "none");
        });

        $("#remove-button").click(function() {
            var userId = firebase.auth().currentUser.uid;
            var taskRef = firebase.database().ref("users/" + userId + "/tasks/" + trID);
            taskRef.update({
                "status": true,
            })
            $('.completeTask').css("display", "none");

            taskRef.once("value").then(function (snapshot) {
                var typePoints = snapshot.child("type").val();
            })

            location.reload();
        })

    });




});

$(document).ready(function(){
    function checkItems() {
        if (!document.getElementById("table-body").hasChildNodes()) {
            console.log("hello");
            $("#noItems").css("display", "block");
        } else if (document.getElementById("table-body").hasChildNodes()) {
            console.log("good");
            $("#noItems").css("display", "none");
        }
    }
    checkItems();
});

$(document).mouseup(function(event) {
    var container = $("#completeTask");

    if (!container.is(event.target)) {
        container.css("display", "none");
    }
});
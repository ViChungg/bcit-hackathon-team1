$(document).ready(function () {
    //USER ID
    var userid;

    //REFERENCE TO FIREBASE DATABASE
    var rootRef = firebase.database().ref();

    //TAKES USER ID FROM FIREBASE AUTHENTICATION
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            userid = user.uid;
        }
    });

    //BUILD TABLE
    rootRef.once("value").then(function (snapshot) {
        /* change when nodes are built" */
        if (snapshot.child("users/" + userid).hasChild("______****")) {

            var query = firebase.database().ref("users/" + userid + "_____****").orderByKey();

            query.once("value").then(function (snapshot) {

                snapshot.forEach(function (childSnapshot) {
                    var task = childSnapshot.child("").val();
                    var dueDate = childSnapshot.child("").val();
                    
                    appendRow(task, dueDate);
                });

            });
        }
    });
});
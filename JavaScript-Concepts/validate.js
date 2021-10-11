<!DOCTYPE html>    
<html>    
<head>    
    <title>Reg Form</title>    
    <style type="text/css">    
        body{    
            font-family: Calibri;    
        }    
        input[type="text"] {    
            width: 250px;    
        }    
        input[type="submit"], input[type="reset"] {    
            width: 77px;    
            height: 27px;    
            position: relative;left: 180px;    
        }    
        form{    
            text-align: center;    
            font-family: Calibri;    
            font-size: 20px;    
            border: 3px solid black;    
            width: 600px;    
            margin: 20px auto;    
        }    
        td {    
            padding: 10px;    
        }    
        td:first-child {    
            text-align: right;    
            font-weight: bold;    
        }    
        td:last-child {    
            text-align: left;    
    
    </style>    
    <script>    
        function validate() {    
            var fname = document.reg_form.fname;    
            var lname = document.reg_form.lname;    
            var address = document.reg_form.address;    
            var gender = document.reg_form.gender;    
            var email = document.reg_form.email;    
            var mobile = document.reg_form.mobile;    
            var course = document.reg_form.course;    
    
            if (fname.value.length <= 0) {    
                alert("Name is required");    
                fname.focus();    
                return false;    
            }    
            if (lname.value.length <= 0) {    
                alert("Last Name is required");    
                lname.focus();    
                return false;    
            }    
            if (address.value.length <= 0) {    
                alert("Address is required");    
                address.focus();    
                return false;    
            }    
            if (gender.value.length <= 0) {    
                alert("Gender is required");    
                gender.focus();    
                return false;    
            }    
            if (email.value.length <= 0) {    
                alert("Email Id is required");    
                email.focus();    
                return false;    
            }    
            if (mobile.value.length <= 0) {    
                alert("Mobile number is required");    
                mobile.focus();    
                return false;    
            }    
            if (course.value == "select course") {    
                alert("Course is required");    
                course.focus();    
                return false;    
            }    
            return false;    
        }    
    </script>    
</head>    
<body>    
    <center><h1>Form Validation using HTML,CSS,JavaScript</h1></center>    
    <hr>    
    <form method="" action="" name="reg_form" onsubmit="return validate()">    
        <h2>Registration Form</h2>    
        <table>    
            <tr>    
                <td><label>First Name: </label></td>    
                <td>    
                    <input type="text" name="fname" placeholder="First Name">    
                </td>    
            </tr>    
            <tr>    
                <td><label>Last Name: </label></td>    
                <td>    
                    <input type="text" name="lname" placeholder="Last Name">    
                </td>    
            </tr>    
            <tr>    
                <td><label>Address: </label></td>    
                <td>    
                    <input type="textarea" size="50" name="address" placeholder="Address">    
                </td>    
            </tr>    
            <tr>    
                <td><label>Gender: </label></td>    
                <td>    
                    <input type="radio" name="gender" value="male">Male    
                    <input type="radio" name="gender" value="femele">Female    
                </td>    
            </tr>    
            <tr>    
                <td><label>Email Id: </label></td>    
                <td>    
                    <input type="text" name="email" placeholder="example@gmail.com">    
                </td>    
            </tr>    
            <tr>    
                <td><label>Mobile: </label></td>    
                <td>    
                    <input type="number" name="mobile">    
                </td>    
            </tr>    
            <tr>    
            <td><label>Course: </label></td>    
                <td>    
                    <select name="course">    
                        <option value="select course">select course</option>    
                        <option value="HTML">HTML</option>    
                        <option value="CSS">CSS</option>    
                        <option value="JavaScript">JAVASCRIPT</option>    
                        <option value="Java">JAVA</option>    
                    </select>    
                </td>    
            </tr>    
            <tr>    
                <td>    
                    <input type="submit" name="submit" value="Submit">    
                    <input type="reset" name="reset" value="Reset">    
                </td>    
            </tr>             
        </table>    
    </form>    
</body>    
</html>     

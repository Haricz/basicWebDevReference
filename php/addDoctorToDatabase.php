<?php
$serverName = "localhost";
$dbusername = "root";
$dbpassword = "root";
$dbname 	= "db_docdirect";

//Doctor's Personal Information
$fname = $_POST['fname'];
$mname = $_POST['mname'];
$lname = $_POST['lname'];
$longname = "Dr. " . $fname . $lname;
$docBday  = $_POST['dob'];
$gender = $_POST['gender'];


$docStatus 		= 2;
$bookingStatus 	= 0;

//Doctor's Professional Information
$prc = $_POST['prc'];
$main_spec = $_POST['main_spec'];
$other_specialties = $_POST['other_specialties'];
//otherspecialties


//Create Connection
$conn = new mysqli($serverName, $dbusername, $dbpassword, $dbname);

//Check Connection
if($conn->connect_error)
	die("Connection failed -- " . $conn->connect_error);

$sql="SELECT spec_name FROM tbl_specialization_list";
	foreach ($conn->query($sql) as $row)
	echo "$row";

	
											

//Error trapping here
/*
if(empty($fname)){
	echo "what in the world is happening";
	die();
}
*/

/*//PERSONAL INFORMATION
$sql_personal_info = "INSERT INTO tbl_doctor(doc_gender, doc_status, doc_fname, doc_mname, doc_lname,
											 doc_longname, doc_bday, doc_prc_num, doc_has_booking)
  						VALUES('$gender', '$docStatus', '$fname', '$mname', '$lname', 
  								'$longname', '$docBday', '$prc', '$bookingStatus')";

if ($conn->query($sql_personal_info) === TRUE)
	echo "success";
else 
	echo "Error: " . $sql_personal_info . " -- " . $conn->error;

$last_id = $conn->insert_id;
echo $last_id;


//PROFESSIONAL INFORMATION
$conn->query("SET FOREIGN_KEY_CHECKS=0");
$sql_professional_info = "INSERT INTO tbl_specialization(spec_doc_id, spec_name, spec_description) 
   							VALUES('$last_id','$main_spec','tba')";

if ($conn->query($sql_professional_info) === TRUE)
	echo "success";
else 
	echo "Error: " . $sql_professional_info . " -- " . $conn->error;


if(empty($other_specialties) == FALSE){
	
	foreach ($other_specialties as $key) {
		
		$conn->query("INSERT INTO tbl_specialization(spec_doc_id, spec_name, spec_description) 
   						VALUES('$last_id','$key','tba')");
	}
}
$conn->query("SET FOREIGN_KEY_CHECKS=1");*/

echo "hello hi";


//













// $conn->close();



?>
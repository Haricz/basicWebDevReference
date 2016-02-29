var org_content_num = 1;
var course_content_num = 1;
var work_content_num = 1;
var hospital_content_num = 1;


function disableEndYear(id){

	var temp = "EndYear" + id.charAt(id.length-1);
	var present_year = new Date().getFullYear();

	if(document.getElementById(id).checked){
		document.getElementById(temp).value = present_year;	
		document.getElementById(temp).setAttribute('readOnly','readOnly');
	}	

	else if(document.getElementById(id).checked == false){
		document.getElementById(temp).value = "";
		document.getElementById(temp).removeAttribute('readOnly');
	}
}


$(document).ready(function(){

	var fieldNum = 2;

	//init timpicker
	$('#testing').timepicker();
	
  	//ADD ORGANIZATION
    $("#add_organization").click(function(){	    
		var position = document.getElementById('doc_position').value;
		var organization = document.getElementById('doc_organization').value;

		var position_id = "doc_pos" + org_content_num;
		var organization_id = "doc_org" + org_content_num;
		var div_id = "orgdiv" + org_content_num;
		var org_update = "orgupdate" + org_content_num;
		var org_delete = "orgdelete" + org_content_num;

		var org_content = "<div id='"+div_id+"'>"
						+	"<label style='margin-left:100px;'>Position&nbsp;&nbsp;</label>"		
						+	"<input type='text' id='"+position_id+"' name='doc_pos[]' class='form-control' style='display:inline;width:240px;' readonly required>"	
						+	"&nbsp;"
						+	"<label style='margin-left:60px;'>Organization&nbsp;&nbsp;</label>"		
						+	"<input type='text' id='"+organization_id+"' name='doc_org[]' class='form-control' style='display:inline;width:240px;' readonly required>"						
						+	"<a href='javascript:;' class='organization_update' id='"+org_update+"' style='display:inline;margin-left:50px;'>Update</a>"	
						+	"<a href='javascript:;' class='organization_delete' id='"+org_delete+"' style='display:inline;margin-left:30px;'>Delete</a>"
						+	"<hr>"							
						+	"</div>"; 
						//organization content variable
      
      	$(org_content).appendTo('#organization');
      	document.getElementById(position_id).value = position;
		document.getElementById(organization_id).value = organization;

		document.getElementById('doc_position').value = "";
		document.getElementById('doc_organization').value = "";

      	org_content_num++;
    });
	//DELETE ORGANIZATION
	$('#organization').on('click', '.organization_delete', function() {
	   var temp = event.target.id;
	   var id = temp.replace ( /[^\d.]/g, '' );

	   var div_id = "orgdiv" + id;
	   $('#'+div_id).remove();	   
	});
	//UPDATE ORGANIZATION
	$('#organization').on('click', '.organization_update', function() {
	   var temp = this.id;
	   var id = temp.replace ( /[^\d.]/g, '' );

	   var position_id = "doc_pos" + id;
	   var organization_id = "doc_org" + id;

	   var save_link = "<a href='javascript:;' class='organization_save' id='orgsave"+id+"' style='display:inline;margin-left:50px;'>Save</a>"	
	   $('#orgupdate'+id).replaceWith(save_link);
	   document.getElementById(position_id).removeAttribute('readOnly');	
	   document.getElementById(organization_id).removeAttribute('readOnly');		   
	});
	//SAVE UPDATED
	$('#organization').on('click', '.organization_save', function() {
	   var temp = this.id;
	   var id = temp.replace ( /[^\d.]/g, '' );

	   var position_id = "doc_pos" + id;
	   var organization_id = "doc_org" + id;

	   var update_link = "<a href='javascript:;' class='organization_update' id='orgupdate"+id+"' style='display:inline;margin-left:50px;'>Update</a>"
	   $('#orgsave'+id).replaceWith(update_link);	   
	   document.getElementById(position_id).setAttribute('readOnly','readOnly');
	   document.getElementById(organization_id).setAttribute('readOnly','readOnly');
	});

//----------------------------------------------------------------------------------------//

	//ADD EDUCATION
    $("#add_education").click(function(){	    
		var course = document.getElementById('doc_course').value;
		var ed_institution = document.getElementById('doc_ed_institution').value;

		var course_id = "doc_course" + course_content_num;
		var ed_institution_id = "doc_ed_institution" + course_content_num;
		var div_id = "coursediv" + course_content_num;
		var course_update = "courseupdate" + course_content_num;
		var course_delete = "coursedelete" + course_content_num;

		var course_content = "<div id='"+div_id+"'>"
						+	"<label style='margin-left:50px;'>Course/Degree&nbsp;&nbsp;</label>"		
						+	"<input type='text' id='"+course_id+"' name='doc_course[]' class='form-control' style='display:inline;width:240px;' readonly required>"	
						+	"&nbsp;"
						+	"<label style='margin-left:70px;'>Institution&nbsp;&nbsp;</label>"		
						+	"<input type='text' id='"+ed_institution_id+"' name='doc_med_ed_institution[]' class='form-control' style='display:inline;width:240px;margin-left:10px;' readonly required>"						
						+	"<a href='javascript:;' class='course_update' id='"+course_update+"' style='display:inline;margin-left:50px;'>Update</a>"	
						+	"<a href='javascript:;' class='course_delete' id='"+course_delete+"' style='display:inline;margin-left:30px;'>Delete</a>"
						+	"<hr>"							
						+	"</div>"; 
						//organization content variable
      
      	$(course_content).appendTo('#education');
      	document.getElementById(course_id).value = course;
		document.getElementById(ed_institution_id).value = ed_institution;

		document.getElementById('doc_course').value = "";
		document.getElementById('doc_ed_institution').value = "";

      	course_content_num++;
    });
    //DELETE ORGANIZATION
	$('#education').on('click', '.course_delete', function() {
	   var temp = this.id;
	   var id = temp.replace ( /[^\d.]/g, '' );

	   var div_id = "coursediv" + id;
	   $('#'+div_id).remove();	   
	});
	//UPDATE ORGANIZATION
	$('#education').on('click', '.course_update', function() {
	   var temp = this.id;
	   var id = temp.replace ( /[^\d.]/g, '' );

	   var course_id = "doc_course" + id;
	   var ed_institution_id = "doc_ed_institution" + id;

	   var save_link = "<a href='javascript:;' class='course_save' id='coursesave"+id+"' style='display:inline;margin-left:50px;'>Save</a>"	
	   $('#courseupdate'+id).replaceWith(save_link);
	   document.getElementById(course_id).removeAttribute('readOnly');	
	   document.getElementById(ed_institution_id).removeAttribute('readOnly');		   
	});
	//SAVE UPDATED
	$('#education').on('click', '.course_save', function() {
	   var temp = this.id;
	   var id = temp.replace ( /[^\d.]/g, '' );

	   var course_id = "doc_course" + id;
	   var ed_institution = "doc_ed_institution" + id;

	   var update_link = "<a href='javascript:;' class='course_update' id='courseupdate"+id+"' style='display:inline;margin-left:50px;'>Update</a>"	
	   $('#coursesave'+id).replaceWith(update_link);	   
	   document.getElementById(course_id).setAttribute('readOnly','readOnly');
	   document.getElementById(ed_institution).setAttribute('readOnly','readOnly');
	});

//----------------------------------------------------------------------------------------//

	//ADD EXPERIENCE
    $("#add_experience").click(function(){	    
		var work = document.getElementById('doc_work').value;
		var ex_institution = document.getElementById('doc_ex_institution').value;
		var ex_start = document.getElementById('doc_ex_start').value;
		var ex_end = document.getElementById('doc_ex_end').value;

		var work_id = "doc_work" + work_content_num;
		var ex_institution_id = "doc_ex_institution" + work_content_num;
		var ex_start_id = "doc_ex_start" + work_content_num;
		var ex_end_id = "doc_ex_end" + work_content_num;

		var div_id = "workdiv" + work_content_num;
		var work_update = "workupdate" + work_content_num;
		var work_delete = "workdelete" + work_content_num;

		var work_content = "<div id='"+div_id+"'>"
						+	"<label style='margin-left:65px;'>Work&nbsp;&nbsp;</label>"		
						+	"<input type='text' id='"+work_id+"' name='doc_work[]' class='form-control' style='display:inline;width:180px;' readonly required>"	
						+	"&nbsp;"
						+	"<label style='margin-left:20px;'>Institution&nbsp;&nbsp;</label>"		
						+	"<input type='text' id='"+ex_institution_id+"' name='doc_med_ex_institution[]' class='form-control' style='display:inline;width:180px;' readonly required>"						
						+	"&nbsp;" 
						+	"<label style='margin-left:26px;'>Start</label>"	
						+	"<input type='text' id='"+ex_start_id+"' name='doc_start_date[]' class='form-control' style='display:inline;width:65px;text-align:center;margin-left:5px;' readonly required>"
						+	"&nbsp;" 
						+	"<label>End</label>"	
						+	"<input type='text' id='"+ex_end_id+"' name='doc_end_date[]' class='form-control' style='display:inline;width:65px;text-align:center;margin-left:10px;' readonly required>"
						+	"<a href='javascript:;' class='work_update' id='"+work_update+"' style='display:inline;margin-left:50px;'>Update</a>"	
						+	"<a href='javascript:;' class='work_delete' id='"+work_delete+"' style='display:inline;margin-left:30px;'>Delete</a>"
						+	"<hr>"							
						+	"</div>"; 
						//organization content variable
      
      	$(work_content).appendTo('#experience');
      	document.getElementById(work_id).value = work;
		document.getElementById(ex_institution_id).value = ex_institution;
		document.getElementById(ex_start_id).value = ex_start;
		document.getElementById(ex_end_id).value = ex_end;

		document.getElementById('doc_work').value = "";
		document.getElementById('doc_ex_institution').value = "";
		document.getElementById('doc_ex_start').value = "1900";

      	work_content_num++;
    });
	//DELETE ORGANIZATION
	$('#experience').on('click', '.work_delete', function() {
	   var temp = this.id;
	   var id = temp.replace ( /[^\d.]/g, '' );

	   var div_id = "workdiv" + id;
	   $('#'+div_id).remove();	   
	});
	//UPDATE ORGANIZATION
	$('#experience').on('click', '.work_update', function() {
	   var temp = this.id;
	   var id = temp.replace ( /[^\d.]/g, '' );

	   var work_id = "doc_work" + id;
	   var ex_institution_id = "doc_ex_institution" + id;
	   var ex_start_id = "doc_ex_start" + id;
	   var ex_end_id = "doc_ex_end" + id;


	   var save_link = "<a href='javascript:;' class='work_save' id='worksave"+id+"' style='display:inline;margin-left:50px;'>Save</a>"	
	   $('#workupdate'+id).replaceWith(save_link);
	   document.getElementById(work_id).removeAttribute('readOnly');	
	   document.getElementById(ex_institution_id).removeAttribute('readOnly');	
	   document.getElementById(ex_start_id).removeAttribute('readOnly');	
	   document.getElementById(ex_end_id).removeAttribute('readOnly');		   
	});
	//SAVE ORGANIZATION
	$('#experience').on('click', '.work_save', function() {
	   var temp = this.id;
	   var id = temp.replace ( /[^\d.]/g, '' );

	   var work_id = "doc_work" + id;
	   var ex_institution_id = "doc_ex_institution" + id;
	   var ex_start_id = "doc_ex_start" + id;
	   var ex_end_id = "doc_ex_end" + id;

	   var update_link = "<a href='javascript:;' class='work_update' id='workupdate"+id+"' style='display:inline;margin-left:50px;'>Update</a>"	
	   $('#worksave'+id).replaceWith(update_link);	   
	   document.getElementById(work_id).setAttribute('readOnly','readOnly');
	   document.getElementById(ex_institution_id).setAttribute('readOnly','readOnly');
	   document.getElementById(ex_start_id).setAttribute('readOnly','readOnly');
	   document.getElementById(ex_end_id).setAttribute('readOnly','readOnly');
	});

//----------------------------------------------------------------------------------------//

	//ADD HOSPITAL
	$('#add_hospital').click(function(){

		var temp = document.getElementById('doc_hospital');

		var hospital = temp.options[temp.selectedIndex].text;
		var hospital_value = document.getElementById('doc_hospital').value;
		var room = document.getElementById('doc_room').value;
		var contact_num = document.getElementById('doc_contact_num').value;

		var hospital_id_id = "doc_id_id" + hospital_content_num;
		var hospital_id = "doc_hospital" + hospital_content_num;
		var room_id = "room_id" + hospital_content_num;
		var contact_num_id = "contact_num" + hospital_content_num;

		var div_id = "hospitaldiv" + hospital_content_num;
		var hospital_update = "hospitalupdate" + hospital_content_num;
		var hospital_delete = "hospitaldelete" + hospital_content_num;

		

		var hospital_content = "<div id='"+div_id+"'>"
							+ 	"<input type='text' id='"+hospital_id_id+"'name='doc_hospital_id_id[]' style='display:none;' readonly>"
							+	"<label style='margin-left:65px;'>Hospital&nbsp;&nbsp;</label>"												
							+	"<input type='text' id='"+hospital_id+"' name='doc_hospital[]' class='form-control' style='display:inline-block;width:250px;' readonly required>"	
							+	"<label style='margin-left:65px;'>Room&nbsp;&nbsp;</label>"	
							+	"<input type='text' id='"+room_id+"' name='doc_room[]' class='form-control' placeholder='ex. 213-B'  style='text-align:center;width:100px;display:inline;' readonly required>"
							+	"<label style='margin-left:65px;'>Contact Number&nbsp;&nbsp;</label>"	
							+	"<input type='text' id='"+contact_num_id+"' name='doc_number[]' class='form-control' placeholder='ex. 4167213' style='text-align:center;width:150px;display:inline;' readonly required>"	
							+	"<br><br>"
							+	"<div style='margin-left:40px;'>"
							+	"<p style='margin-left:3px;font-weight:bold;font-style:italic;font-size:11px;'>Please fill up the schedule below (check the checkbox beside the day to set it to closed)</p>"	
							+	"<label><b>Monday</b></label>&nbsp;<input class='closedcheck' id=monday'"+hospital_content_num+"' type='checkbox'>"
							+	"<label style='margin-left:135px;'><b>Tuesday</b>&nbsp;</label><input class='closedcheck' id=tuesday'"+hospital_content_num+"' type='checkbox'>"
							+	"<label style='margin-left:135px;'><b>Wednesday</b></label>&nbsp;<input class='closedcheck' id=wednesday'"+hospital_content_num+"' type='checkbox'>"
							+	"<label style='margin-left:110px;'><b>Thursday</b></label>&nbsp;<input class='closedcheck' id=thursday'"+hospital_content_num+"' type='checkbox'>"
							+	"<br>"
							+	"<input type='text' id='monday_start"+hospital_content_num+"' name='monday_start[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;'> to&nbsp;"
							+	"<input type='text' id='monday_end"+hospital_content_num+"' name='monday_end[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;'>"
							+	"<input type='text' id='tuesday_start"+hospital_content_num+"' name='tuesday_start[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;margin-left:20px;'> to&nbsp;" 
							+	"<input type='text' id='tuesday_end"+hospital_content_num+"' name='tuesday_end[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;'>"
							+	"<input type='text' id='wednesday_start"+hospital_content_num+"' name='wednesday_start[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;margin-left:20px;'> to&nbsp;"
							+	"<input type='text' id='wednesday_end"+hospital_content_num+"' name='wednesday_end[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;'>"
							+	"<input type='text' id='thursday_start"+hospital_content_num+"'  name='thursday_start[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;margin-left:20px;'> to&nbsp;" 
							+	"<input type='text' id='thursday_end"+hospital_content_num+"' name='thursday_end[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;'>"
							+	"<br>"
							+	"<label style='font-size:12px;'>break from</label>"
							+	"<label style='font-size:12px;margin-left:146px;'>break from</label>"
							+	"<label style='font-size:12px;margin-left:147px;'>break from</label>"
							+	"<label style='font-size:12px;margin-left:147px;'>break from</label>"
							+	"<br>"
							+	"<input type='text' id='monday_break_start"+hospital_content_num+"'  name='monday_break_start[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;'> to&nbsp;" 
							+	"<input type='text' id='monday_break_end"+hospital_content_num+"' name='monday_break_end[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;'>"
							+	"<input type='text' id='tuesday_break_start"+hospital_content_num+"' name='tuesday_break_start[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;margin-left:20px;'> to&nbsp;" 
							+	"<input type='text' id='tuesday_break_end"+hospital_content_num+"' name='tuesday_break_end[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;'>"
							+	"<input type='text' id='wednesday_break_start"+hospital_content_num+"' name='wednesday_break_start[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;margin-left:20px;'> to&nbsp;" 
							+	"<input type='text' id='wednesday_break_end"+hospital_content_num+"' name='wednesday_break_end[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;'>"
							+	"<input type='text' id='thursday_break_start"+hospital_content_num+"' name='thursday_break_start[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;margin-left:20px;'> to&nbsp;" 
							+	"<input type='text' id='thursday_break_end"+hospital_content_num+"' name='thursday_break_end[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;'>"
							+	"<br><br>"
							+	"<label><b>Friday</b></label>&nbsp;<input class='closedcheck' id=friday'"+hospital_content_num+"' type='checkbox'>"
							+	"<label style='margin-left:150px;'><b>Saturday</b></label>&nbsp;<input class='closedcheck' id=saturday'"+hospital_content_num+"' type='checkbox'>"
							+	"<label style='margin-left:130px;'><b>Sunday</b></label>&nbsp;<input class='closedcheck' id=sunday'"+hospital_content_num+"' type='checkbox'>"
							+	"<br>"
							+	"<input type='text' id='friday_start"+hospital_content_num+"' name='friday_start[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;'> to&nbsp;" 
							+	"<input type='text' id='friday_end"+hospital_content_num+"' name='friday_end[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;'>"
							+	"<input type='text' id='saturday_start"+hospital_content_num+"' name='saturday_start[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;margin-left:20px;'> to&nbsp;"
							+	"<input type='text' id='saturday_end"+hospital_content_num+"' name='saturday_end[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;'>"
							+	"<input type='text' id='sunday_start"+hospital_content_num+"' name='sunday_start[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;margin-left:20px;'> to&nbsp;" 
							+	"<input type='text' id='sunday_end"+hospital_content_num+"' name='sunday_end[]' class='time_picker' style='display:inline-block;width:85px;text-align:center;font-size:13px;'>"																					
							+	"<br>"
							+	"<label style='font-size:12px;'>break from</label>"
							+	"<label style='font-size:12px;margin-left:147px;'>break from</label>"
							+	"<label style='font-size:12px;margin-left:147px;'>break from</label>"
							+	"<br>"
							+	"<input type='text' id='friday_break_start"+hospital_content_num+"' name='friday_break_start[ class='time_picker' 3 style='display:inline-block;width:85px;text-align:center;font-size:13px;'> to&nbsp;"
							+	"<input type='text' id='friday_break_end"+hospital_content_num+"' name='friday_break_end[]' class='time_picker' 3 style='display:inline-block;width:85px;text-align:center;font-size:13px;'>"
							+	"<input type='text' id='saturday_break_start"+hospital_content_num+"' name='saturday_break_start[] class='time_picker' 3 style='display:inline-block;width:85px;text-align:center;font-size:13px;margin-left:20px;'> to&nbsp;" 
							+	"<input type='text' id='saturday_break_end"+hospital_content_num+"' name='saturday_break_end[]' class='time_picker' 3 style='display:inline-block;width:85px;text-align:center;font-size:13px;'>"
							+	"<input type='text' id='sunday_break_start"+hospital_content_num+"' name='sunday_break_start[ class='time_picker' 3 style='display:inline-block;width:85px;text-align:center;font-size:13px;margin-left:20px;'> to&nbsp;" 
							+	"<input type='text' id='sunday_break_end"+hospital_content_num+"' name='sunday_break_end[]' class='time_picker' 3 style='display:inline-block;width:85px;text-align:center;font-size:13px;'>"
							+	"<a href='javascript:;' class='hospital_update' id='"+hospital_update+"' style='display:inline;margin-left:50px;'>Update</a>"	
							+	"<a href='javascript:;' class='hospital_delete' id='"+hospital_delete+"' style='display:inline;margin-left:30px;'>Delete</a>"
							+	"<br>"
							+	"</div>"	
							+	"</div>"
							+	"<br><hr><br>";

		$(hospital_content).appendTo("#hospital");
		$('.time_picker').timepicker();

		document.getElementById(hospital_id).value = hospital;
		document.getElementById(room_id).value = room;
		document.getElementById(contact_num_id).value = contact_num;
		document.getElementById(hospital_id_id).value = hospital_value;

		document.getElementById('doc_hospital').value = "";
		document.getElementById('doc_room').value = "";
		document.getElementById('doc_contact_num').value = "";


		hospital_content_num++;

	});

	//UPDATE HOSPITAL
	$('#hospital').on('click', '.hospital_update', function(){
	   var temp = this.id;
	   var id = temp.replace ( /[^\d.]/g, '' );

	   var hospital_id = "doc_hospital" + id;
	   var room_id = "room_id" + id;
	   var contact_num_id = "contact_num" + id;

	   var save_link = "<a href='javascript:;' class='hospital_save' id='hospitalsave"+id+"' style='display:inline;margin-left:50px;'>Save</a>"	
	   $('#hospitalupdate'+id).replaceWith(save_link);
	   document.getElementById(room_id).removeAttribute('readOnly');	
	   document.getElementById(contact_num_id).removeAttribute('readOnly');	
	
	});

	//UPDATE HOSPITAL
	$('#hospital').on('click', '.hospital_save', function(){
	   var temp = this.id;
	   var id = temp.replace ( /[^\d.]/g, '' );

	   var hospital_id = "doc_hospital" + id;
	   var room_id = "room_id" + id;
	   var contact_num_id = "contact_num" + id;

	   var update_link = "<a href='javascript:;' class='hospital_update' id='hospitalupdate"+id+"' style='display:inline;margin-left:50px;'>Update</a>"	
	   $('#hospitalsave'+id).replaceWith(update_link);
	   document.getElementById(room_id).setAttribute('readOnly', 'readOnly');	
	   document.getElementById(contact_num_id).setAttribute('readOnly', 'readOnly');
	
	});

	$('#hospital').on('click', '.closedcheck', function(){
		var temp = this.id;
	    var id = temp.replace ( /[^\d.]/g, '' );
	    var day = temp.replace(/[^a-zA-Z]+/g, '');

	    var day_start = day+"_start"+id;
	    var day_end = day+"_end"+id;
	    var day_start_break = day+"_break_start"+id;
	    var day_end_break = day+"_break_end"+id;

	    if($(this).is(':checked')){
	    	document.getElementById(day_start).value = "closed";
	    	document.getElementById(day_start).setAttribute('disabled', true);
	    	document.getElementById(day_end).value = "closed";
	    	document.getElementById(day_end).setAttribute('disabled', true);
	    	document.getElementById(day_start_break).value = "closed";
	    	document.getElementById(day_start_break).setAttribute('disabled', true);
	    	document.getElementById(day_end_break).value = "closed";
	    	document.getElementById(day_end_break).setAttribute('disabled', true);
	    }

	});


	//yearpicker start
	var start = 1900;
	var end = new Date().getFullYear();
	var options = "";
	for(var year = start ; year <=end; year++){
	 options += "<option>"+ year +"</option>";
	}
	document.getElementById('doc_ex_start').innerHTML = options;
	document.getElementById('doc_ex_end').innerHTML = options;

	//yearpicker end
	$('#doc_ex_start').change(function(){
	var start = document.getElementById('doc_ex_start').value;
	var options = ""
	for(var year = start ; year <=end; year++){
	 options += "<option>"+ year +"</option>";
	}
	document.getElementById('doc_ex_end').innerHTML = options;

	});

/*	//daypicker
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	options = "";
	for(var i = 0; i<days.length; i++){
		options += "<option>"+days[i]+"</option>";
	}
	document.getElementById('day_selector_start').innerHTML = options;
	
	$('#day_selector_start').change(function(){
		var start = document.getElementById('day_selector_start').value;
		start_day = days.indexOf(start);	
	
		var options = ""
		for(var i = start_day; i<days.length; i++){
		 options += "<option>"+days[i]+"</option>";
		}
		document.getElementById('day_selector_end').innerHTML = options;
	});*/

});



		
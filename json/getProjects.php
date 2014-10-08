<?php
include ("../classes/Database.php");
$db = new Database();

$json = array();
$index = 0;

if (isset($_GET['id'])){
	$project_info = $db->getProjects(NULL, $_GET['id']);
	$json[0]['project_id'] = $project_info['project_id'];
	$json[0]['project_name'] = $project_info['project_name'];
	$json[0]['project_thumb'] = $project_info['project_thumb'];
	$json[0]['project_pic'] = $project_info['project_pic'];
	$json[0]['project_date'] = $project_info['project_date'];
	$json[0]['project_brief'] = nl2br($project_info['project_brief']);
}else{
	if (isset($_GET['art'])){
		$projects = $db->getProjects(1);
	}else{
		$projects = $db->getProjects(0);
	}
	
	foreach ($projects as $project){
		$json[$index]['project_id'] = $project['project_id'];
		$json[$index]['project_name'] = $project['project_name'];
		$json[$index]['project_thumb'] = $project['project_thumb'];
		$json[$index]['project_date'] = $project['project_date'];
		$json[$index]['art_flag'] = $project['art_flag'];
		$index++;
	}
}

echo json_encode($json);
?>
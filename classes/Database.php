<?php
class Database{
	public function __construct(){
		session_start();
		mysql_connect("localhost","root","");
		mysql_select_db("portfolio");
	}

	public function getProjects($art = 0, $id = NULL){
		$art_flag = mysql_real_escape_string($art);

		if ($id){
			$le_id = mysql_real_escape_string($id);
			$query = mysql_query("SELECT * FROM projects WHERE project_id = '$le_id'");
			return mysql_fetch_array($query);
		}else{
			if ($art_flag == 0){
				$query = mysql_query("SELECT * FROM projects WHERE art_flag = 0");
			}else{
				$query = mysql_query("SELECT * FROM projects WHERE art_flag = 1");
			}
			
				while ($row = mysql_fetch_assoc($query)){
					$results[] = $row;
				}
				return $results;
		}
	}
}
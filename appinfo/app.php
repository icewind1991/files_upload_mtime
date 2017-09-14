<?php
$eventDispatcher = \OC::$server->getEventDispatcher();
$eventDispatcher->addListener(
	'OCA\Files::loadAdditionalScripts',
	function () {
		//load the required files
		OCP\Util::addscript('files_upload_mtime', 'upload_mtime');
	});

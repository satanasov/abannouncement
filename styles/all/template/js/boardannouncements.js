// Add an AJAX callback function
phpbb.addAjaxCallback('close_announcement', function(res) {
	if (res.success) {
		phpbb.toggleDisplay('phpbb_announcement_' + res.id, -1);
	}
});

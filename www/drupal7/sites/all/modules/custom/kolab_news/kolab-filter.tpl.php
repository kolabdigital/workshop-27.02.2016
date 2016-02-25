<?php
	/**
	* $date - czas wygenerowany podczas zapytania do serwera
	*/

?>
<div id="month-filter">
	<a href="#" class="filter" data-shift="prev">Prev</a>
	<div class="main-date" data-date="<?php echo $date; ?>">
		<span><?php echo format_date(time(), 'custom', t('M', array(), array('context' => 'php date format'))); ?></span>
		<?php echo format_date(time(), 'custom', t('Y', array(), array('context' => 'php date format'))); ?></div>
	<a href="#" class="filter" data-shift="next">Next</a>
</div>
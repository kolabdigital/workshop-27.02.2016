<?php
/**
* $nodes - wyrenderowane nody
**/
?>
<div id="news-list-main" class="news-list">
	<div class="grid-sizer"></div>
  	<div class="gutter-sizer"></div> 
  	<?php if($nodes): ?>
	  	<?php echo $nodes; ?>
	<?php endif; ?>
</div>
<div id="load-more" data-pagination="<?php echo $kolab_num_nodes; ?>" style="<?php if($data_left == 0) echo "display:none"; ?>"><span><?php echo t("Więcej"); ?></span></div>
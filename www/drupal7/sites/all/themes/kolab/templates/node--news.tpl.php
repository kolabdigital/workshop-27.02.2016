<?php
	// $field_body = field_get_items('node', $node, 'body');
	// if($field_body) ${'field_body_' . $view_mode} = field_view_value('node', $node, 'body', $field_body[0], $view_mode);
  $field_image = field_get_items("node", $node, "field_image");
  $body = field_get_items("node", $node, "body");
?>

<article class="node-<?php print $node->nid; ?> node-<?php print $view_mode; ?> <?php print $classes; ?> clearfix <?php if($teaser) echo "isotope-item"; ?>"<?php print $attributes; ?>>
<?php if($teaser) : ?>
  <h2><?php echo $title; ?></h2>

    <div class="description">
    <?php
      $body_teaser = field_view_value('node', $node, 'body', $body[0], array(
        'type' => 'smart_trim_format',
        'settings' => array(
          'trim_length' => 500,
          'trim_type' => 'chars',
          'trim_suffix' => '...',
          'more_link' => true,
          'more_text' => 'Read more',
          'summary_handler' => 'full',
          'trim_preserve_tags' => FALSE,
          'trim_options' => array(
            'text' => TRUE,
          ),
        ),
      ));
    ?>
    <?php echo render($body_teaser); ?>
  </div>
<?php elseif($page): ?>
  <?php echo $body[0]["value"]; ?>
<?php endif; ?>
</article>
<?php
/**
 * @file
 * prettydate.strongarm.inc
 */

/**
 * Implementation of hook_strongarm().
 */
function prettydate_strongarm() {
  $export = array();

  $strongarm = new stdClass;
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'date_format_iso';
  $strongarm->value = 'c';
  $export['date_format_iso'] = $strongarm;

  $strongarm = new stdClass;
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'date_format_pretty_date';
  $strongarm->value = '<\\a \\t\\i\\t\\l\\e="Y-m-d\\TH:i:s\\Z" \\c\\l\\a\\s\\s="p\\r\\e\\t\\t\\y\\d\\a\\t\\e">M j | g:ia</\\a>';
  $export['date_format_pretty_date'] = $strongarm;

  return $export;
}

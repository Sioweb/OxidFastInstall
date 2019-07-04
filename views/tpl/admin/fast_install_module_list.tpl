[{include file="module_list.tpl"}]

<script src="[{ $oViewConf->getModuleUrl('SiowebFastInstall','out/src/js') }]/jquery.js"></script>
<script src="[{ $oViewConf->getModuleUrl('SiowebFastInstall','out/src/js') }]/jquery.fastinstall.js"></script>
<script>

(function($) {
    $('[id^="row."]').each(function() {
        if($(this).find('td:first-child a').length) {
            $(this).find('td:first-child a').fastinstall();
        }
    });
})(jQuery);
</script>
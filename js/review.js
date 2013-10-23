jQuery(document).ready(function(){
	jQuery(".ya-review-item .ya-arrow-icon").click(function(){
		if(jQuery(this).attr("data-icon") == "E")
		{
			jQuery(this).attr("data-icon","C");
			jQuery(this).parent().parent().find(".ya-review-item-txt").slideDown();
		}
		else
		{
			jQuery(this).attr("data-icon","E");
			jQuery(this).parent().parent().find(".ya-review-item-txt").slideUp();
		}
	});
});

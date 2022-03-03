$(document).ready(function ()
{
	$("#mycarousel").carousel({interval: 2000});
	$("#carousel-pause").click(function ()
	{
		$("#mycarousel").carousel('pause');
	});
	$("#carousel-play").click(function ()
	{
		$("#mycarousel").carousel('cycle');
	});
});

$('#tableresModal').on('shown.bs.modal', function ()
{
	$('#tableres').trigger('focus');
})